#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path
from datetime import datetime, timezone

ROOT = Path(__file__).resolve().parents[1]
HYD = ROOT / 'directions' / 'hydrants'
COLLECTOR = HYD / 'official-collector-results.json'
GEOCODES = HYD / 'geocodes.json'
DIRECTIONS = ROOT / 'directions' / 'index.html'
OUTPUT = HYD / 'reviewed-resolutions.json'


def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def normalise(value):
    return re.sub(r'[^A-Z0-9]+', ' ', str(value or '').upper()).strip()


def valid_coords(record):
    try:
        x = float(record.get('longitude'))
        y = float(record.get('latitude'))
    except (TypeError, ValueError):
        return False
    return 138.45 <= x <= 138.85 and -35.25 <= y <= -34.80


def candidate_street(candidate):
    attrs = candidate.get('attributes') or {}
    return normalise(f"{attrs.get('StreetName', '')} {attrs.get('StreetType', '')}")


def candidate_locality(candidate):
    return normalise((candidate.get('attributes') or {}).get('Locality', ''))


def house_number(candidate):
    attrs = candidate.get('attributes') or {}
    text = str(attrs.get('HouseNumber') or candidate.get('address') or '')
    match = re.search(r'\d+', text)
    return int(match.group()) if match else 10**9


def flatten_candidates(record, *, valid_only=False):
    output = []
    seen = set()
    for attempt_index, attempt in enumerate(record.get('attempts') or []):
        for candidate_index, candidate in enumerate(attempt.get('candidates') or []):
            if valid_only and not (candidate.get('collectorValidation') or {}).get('valid'):
                continue
            location = candidate.get('location') or {}
            try:
                longitude = float(location.get('x'))
                latitude = float(location.get('y'))
            except (TypeError, ValueError):
                continue
            if not (138.45 <= longitude <= 138.85 and -35.25 <= latitude <= -34.80):
                continue
            key = (
                normalise(candidate.get('address', '')),
                round(longitude, 9), round(latitude, 9),
            )
            if key in seen:
                continue
            seen.add(key)
            output.append({
                'candidate': candidate,
                'attempt': attempt,
                'attemptIndex': attempt_index,
                'candidateIndex': candidate_index,
                'longitude': longitude,
                'latitude': latitude,
            })
    return output


def choose(candidates, *, preferred_street=None, preferred_locality=None, address_contains=None):
    preferred_street = normalise(preferred_street) if preferred_street else ''
    preferred_locality = normalise(preferred_locality) if preferred_locality else ''
    address_contains = normalise(address_contains) if address_contains else ''
    filtered = []
    for row in candidates:
        candidate = row['candidate']
        if preferred_street and candidate_street(candidate) != preferred_street:
            continue
        if preferred_locality and candidate_locality(candidate) != preferred_locality:
            continue
        if address_contains and address_contains not in normalise(candidate.get('address', '')):
            continue
        filtered.append(row)
    if not filtered:
        return None

    def rank(row):
        address = normalise(row['candidate'].get('address', ''))
        is_unit = address.startswith('UNIT ')
        is_lot = address.startswith('LOT ')
        score = float(row['candidate'].get('score') or 0)
        return (
            house_number(row['candidate']),
            is_unit,
            is_lot,
            -score,
            row['attemptIndex'], row['candidateIndex'],
        )

    return sorted(filtered, key=rank)[0]


def resolution_from_candidate(lookup_key, original_record, selected, *, category, confidence, reason, secondary_evidence=None):
    candidate = selected['candidate']
    attempt = selected['attempt']
    return {
        'key': lookup_key,
        'street': original_record.get('street', ''),
        'suburb': original_record.get('suburb', ''),
        'longitude': selected['longitude'],
        'latitude': selected['latitude'],
        'matchedAddress': candidate.get('address', ''),
        'score': candidate.get('score'),
        'method': f"Reviewed {attempt.get('method', 'official candidate')}",
        'query': attempt.get('query', original_record.get('query', '')),
        'status': 'Reviewed resolution',
        'source': 'Location SA SAGAF_PLUS',
        'officialEndpoint': original_record.get('officialEndpoint', ''),
        'outSR': 4326,
        'resolutionCategory': category,
        'resolutionConfidence': confidence,
        'resolutionReason': reason,
        'secondaryEvidence': secondary_evidence or [],
        'originalCollectorStatus': original_record.get('status', ''),
        'originalCollectorReason': original_record.get('reason', ''),
    }


def copy_anchor(anchor, *, target_key='', entry_id='', category='Reviewed vicinity anchor', confidence='Moderate', reason='', secondary_evidence=None):
    value = {
        'longitude': float(anchor['longitude']),
        'latitude': float(anchor['latitude']),
        'matchedAddress': anchor.get('matchedAddress', ''),
        'score': anchor.get('score'),
        'method': 'Reviewed Directions route vicinity anchor',
        'query': anchor.get('query', ''),
        'status': 'Reviewed resolution',
        'source': anchor.get('source', 'Location SA SAGAF_PLUS'),
        'officialEndpoint': anchor.get('officialEndpoint', ''),
        'outSR': 4326,
        'resolutionCategory': category,
        'resolutionConfidence': confidence,
        'resolutionReason': reason,
        'anchorKey': anchor.get('key', ''),
        'approximate': True,
        'secondaryEvidence': secondary_evidence or [],
    }
    if target_key:
        value['key'] = target_key
    if entry_id:
        value['entryId'] = entry_id
    return value


def main():
    collector = load(COLLECTOR)
    geocodes = load(GEOCODES)
    html = DIRECTIONS.read_text(encoding='utf-8')
    match = re.search(r'const DIRECTIONS = (\[.*?\]);\n', html, re.S)
    entries = json.loads(match.group(1))
    entries_by_id = {e['id']: e for e in entries}
    collector_records = collector['records']
    stored_records = geocodes['records']
    records = {}
    entry_resolutions = {}

    # Stage 1: every conservative ambiguous record already has exact official
    # street/locality candidates. Select the lowest valid numbered address.
    for key, record in collector_records.items():
        if record.get('status') != 'Ambiguous':
            continue
        selected = choose(flatten_candidates(record, valid_only=True))
        if not selected:
            continue
        records[key] = resolution_from_candidate(
            key, record, selected,
            category='Official candidate salvage',
            confidence='High',
            reason='Lowest valid numbered address returned by the official SAGAF_PLUS street-only search; exact street and locality were already validated by the collector.',
        )

    # Stage 2: failed records with a clear spelling, street-type, locality alias,
    # or nearby official locality correction. The final stored coordinate remains
    # an official SAGAF_PLUS candidate.
    direct_preferences = {
        'AYLIFFES ROAD|PASADENA': ('AYLIFFES ROAD', 'ST MARYS', None),
        'BANKSIA CRESCENT|BLACKWOOD': ('BANKSIA CRESCENT', 'BELAIR', None),
        'BEN LOMMAN ROAD|COROMANDEL VALLEY EAST': ('BEN LOMAN ROAD', 'COROMANDEL EAST', None),
        'BLACKTHORNE AVENUE|HAWTHORNDENE': ('BLACKTHORN AVENUE', 'HAWTHORNDENE', None),
        'BLUE BELL COURT|CRAIGBURN FARM': ('BLUEBELL COURT', 'CRAIGBURN FARM', None),
        'CRANE AVENUE|CORMANDEL VALLEY': ('CRANE AVENUE', 'COROMANDEL VALLEY', None),
        'CROWS NEST COURT|CORMANDEL VALLEY': ('CROWSNEST COURT', 'COROMANDEL VALLEY', None),
        'CULLEY ROAD|BELAIR': ('CULLEY AVENUE', 'BELAIR', None),
        'CULLIN GROVE|FLAGSTAFF HILL': ('CUILLIN GROVE', 'FLAGSTAFF HILL', None),
        'CURRAWONG CRESCENT|CORMANDEL VALLEY': ('CURRAWONG CRESCENT', 'COROMANDEL VALLEY', None),
        'DAINA COURT|CORMANDEL VALLEY': ('DAINA COURT', 'COROMANDEL VALLEY', None),
        'DAIRY COURT|CRAIGBURN PARK': ('DAIRY COURT', 'CRAIGBURN FARM', None),
        'DAVID STREET|CORMANDEL VALLEY': ('DAVID STREET', 'COROMANDEL VALLEY', None),
        'DAWBINEY AVENUE|CRAIGBURN PARK': ('DAWBINEY AVENUE', 'CRAIGBURN FARM', None),
        'DEPINDO ROAD|EDEN HILLS': ('DEPINDO AVENUE', 'EDEN HILLS', None),
        'DEVON DRIVE|CORMANDEL VALLEY': ('DEVON DRIVE', 'COROMANDEL VALLEY', None),
        'DIANELLA COURT|PASADENA': ('DIANNELLA COURT', 'PASADENA', None),
        'DIOSMA DRIVE|CORMANDEL VALLEY': ('DIOSMA DRIVE', 'COROMANDEL VALLEY', None),
        'DRISCOLL ROAD|CORMANDEL VALLEY EAST': ('DRISCOLL ROAD', 'COROMANDEL VALLEY', None),
        'EWERS AVENUE|CORMANDEL VALLEY': ('EWERS AVENUE', 'COROMANDEL VALLEY', None),
        'FOOTS HILL ROAD|HAWTHORNDENE': ('FOOTTS HILL ROAD', 'HAWTHORNDENE', None),
        'GARTRELL LANE|CRAIGBURN FARM': ('GARTRELL BOULEVARD', 'CRAIGBURN FARM', None),
        'GRASSMERE CLOSE|COROMANDLE VALLEY': ('GRASSMERE CLOSE', 'COROMANDEL VALLEY', None),
        'HEWITT AVENUE|HAWTHORNDENE': ('HEWETT AVENUE', 'HAWTHORNDENE', None),
        'HILLTOP DRIVE|HAWTHORNDENE': ('HILLTOP DRIVE', 'UPPER STURT', None),
        'HOLLYHOCK COURT|CRAIGBURN FARM': ('HOLLY HOCK COURT', 'CRAIGBURN FARM', None),
        'KROWALLE COURT|HAWTHORNDENE': ('KROWALLE CRESCENT', 'HAWTHORNDENE', None),
        'LAFFERTY ROAD|CHERRY GARDENS': ('LAFFERTY ROAD', 'CHANDLERS HILL', None),
        'NICOLE AVENUE|HAWTHORNDENE': ('NICOLLE AVENUE', 'HAWTHORNDENE', None),
        'PENNO PARADE NORTH|BELAIR': ('PENNO PARADE', 'BELAIR', 'NORTH'),
        'PENNO PARADE SOUTH|BLACKWOOD': ('PENNO PARADE', 'BLACKWOOD', 'SOUTH'),
        'QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE', 'BELAIR', None),
        'RIVER GLEN PLACE|COROMANDEL VALLEY': ('RIVER GLEN PLACE', 'FLAGSTAFF HILL', None),
        'SADDLE HILL ROAD|BELAIR NATIONAL PARK': ('SADDLE HILL ROAD', 'BELAIR', None),
        'SHEPHERDS COURT|COROMANDEL VALLEY': ('SHEPHERD COURT', 'COROMANDEL VALLEY', None),
        'SIR EDWIN AVENUE|BELAIR NATIONAL PARK': ('SIR EDWIN AVENUE', 'BELAIR', None),
        'SPRINGWOOD COURT|EDEN HILLS': ('SPRINGWOOD CLOSE', 'EDEN HILLS', None),
        'SUNVALLEY DRIVE|GLENALTA': ('SUN VALLEY DRIVE', 'GLENALTA', None),
        'THOMAS COURT|COROMANDEL VALLEY': ('THOMAS COURT', 'CHANDLERS HILL', None),
        'VERDELHO AVENUE|CRAIGBURN FARM': ('VERDELHO STREET', 'CRAIGBURN FARM', None),
        'WATAHAUNA AVENUE|HAWTHORNDENE': ('WATAHUNA AVENUE', 'HAWTHORNDENE', None),
        'WEYMOUTH ROAD|CORO EAST': ('WEYMOUTH ROAD', 'COROMANDEL EAST', None),
        'WILDHEATH ROAD|CORO EAST': ('WILDHEATH RISE', 'COROMANDEL EAST', None),
        'WILPENA COURT|EDEN HILLS': ('WILPENA CLOSE', 'EDEN HILLS', None),
        'WINDARA COURT|BELAIR': ('WINDARRA COURT', 'BELAIR', None),
        'WOODCUTTERS ROAD|CORO EAST': ('WOODCUTTERS ROAD', 'COROMANDEL EAST', None),
    }
    for key, (street, locality, address_contains) in direct_preferences.items():
        record = collector_records[key]
        selected = choose(
            flatten_candidates(record),
            preferred_street=street,
            preferred_locality=locality,
            address_contains=address_contains,
        )
        if not selected:
            raise RuntimeError(f'No preferred official candidate found for {key}: {street} / {locality}')
        records[key] = resolution_from_candidate(
            key, record, selected,
            category='Secondary-assisted official correction',
            confidence='High',
            reason=f'Reviewed spelling, street type or adjoining official locality; selected the lowest numbered matching official SAGAF_PLUS candidate for {street}, {locality}.',
        )

    # Helper resolves anchors from original accepted records or reviewed records.
    def anchor_for(key):
        if key in records and valid_coords(records[key]):
            return records[key]
        record = stored_records.get(key)
        if record and valid_coords(record):
            value = dict(record)
            value.setdefault('key', key)
            return value
        raise RuntimeError(f'Anchor is not available: {key}')

    fallback = dict(geocodes['fallbackStation'])
    fallback.setdefault('key', 'BLACKWOOD CFS|16A GORSE AVENUE HAWTHORNDENE')

    failed_anchor_map = {
        'AMBROSE STREET|BELAIR': ('LINDSAY TERRACE|BELAIR', 'Ambrose Street is a small lane off the Upper Sturt Road/Lindsay Terrace area; use the reviewed official Lindsay Terrace approach point.', ['https://www.homely.com.au/ambrose-street-belair-mitcham-adelaide-greater-south-australia', 'https://www.realestate.com.au/sold/property-house-sa-belair-143686908']),
        'BALY COURT|BELAIR': ('ADAMSON AVENUE|BELAIR', 'The Directions route places the former/unmatched court as the third right from Adamson Avenue.', []),
        'CHERRY PLANTATION ROAD|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Internal park road; use the nearest reviewed official Belair National Park road candidate as a safe live-map starting point.', ['https://www.walkingsa.org.au/walk/find-a-place-to-walk/rsl-walk-belair-national-park/']),
        'CREEK ROAD|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Internal park road reached from The Valley Road; use the reviewed official park-road starting point.', ['https://friendsofbelairnationalpark.com/wp-content/uploads/2023/06/2020novwalkbrochure.pdf']),
        'EDEN ROAD|EDEN HILLS': ('MOUNTAIN ROAD|EDEN HILLS', 'Directions place Eden Road as the second right from Mountain Road.', []),
        'FLAMINGO CRESCENT|CORMANDEL VALLEY': ('CRANE AVENUE|CORMANDEL VALLEY', 'Directions place Flamingo Crescent as the third right from Crane Avenue.', []),
        'GOOCH ROAD|BELAIR NATIONAL PARK': ('UPPER STURT ROAD|BELAIR', 'Directions identify Gooch Road as the Belair National Park entrance from Upper Sturt Road.', []),
        'GRASKE GROVE|EDEN HILLS': ('PASADENA CRESCENT|PASADENA', 'Directions place Graske Grove directly from Pasadena Crescent.', []),
        'GUM ROAD|HAWTHORNDENE': ('__FALLBACK__', 'This Directions entry is the Blackwood CFS station itself; the official 16A Gorse Avenue station coordinate is the correct operational starting point.', ['https://www.homely.com.au/find-street-by-suburb/hawthorndene-mitcham-adelaide-greater-south-australia']),
        'JUBILEE DRIVE|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Directions and park naming indicate the reviewed Queens Jubilee Drive official candidate is the best live-map starting point.', []),
        'LALOR COURT|BELAIR': ('HORSELL ROAD|BELAIR', 'Directions place Lalor Court as the first left from Horsell Road.', []),
        'LITTLE JOHN STREET|GLENALTA': ('HUNTINGDON DRIVE|GLENALTA', 'Directions place Little John Street as the first right from Huntingdon Drive.', []),
        'MELIA GROVE|PASADENA': ('PRITCHARD GROVE|PASADENA', 'Directions place Melia Grove immediately from Pritchard Grove.', []),
        'MELVILLE GULLY ROAD|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Internal park road from the Long Gully area; use the reviewed official park-road starting point.', []),
        'NARDU CRESCENT|BELAIR': ('ADAMSON AVENUE|BELAIR', 'Directions place Nardu Crescent as the second right from Adamson Avenue.', []),
        'NERLI STREET|EDEN HILLS': ('EURILPA STREET|EDEN HILLS', 'Directions place Nerli Street as the second left from Eurilpa Street.', []),
        'NORTHCOTE STREET|EDEN HILLS': ('SHAFTSBURY STREET|EDEN HILLS', 'The old/unmatched Northcote Street route is in the Shaftsbury Street area off Shepherds Hill Road.', []),
        'PENDELBURY WAY|BELLEVUE HEIGHTS': ('FLINDERS ROAD|BELLEVUE HEIGHTS', 'Directions place Pendelbury Way as the first right from Flinders Road.', []),
        'PINES OVAL ROAD|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Internal park road beyond Playford Lake; use the reviewed official park-road starting point.', []),
        'PITT STREET|EDEN HILLS': ('SHAFTSBURY STREET|EDEN HILLS', 'Directions place Pitt Street as the first right from Shaftsbury Street.', []),
        'PLYMOUTH AVENUE|BLACKWOOD CORO VALLEY': ('BORONIA AVENUE|COROMANDEL VALLEY', 'Directions place Plymouth Avenue off Coromandel Parade in the Boronia Avenue/Coromandel Valley section.', []),
        'RING ROAD|BEDFORD PARK': ('UNIVERSITY WAY|BELLEVUE HEIGHTS', 'Ring Road is an internal Bedford Park/Flinders access road; use the official University Way approach point.', []),
        'STIRLING AVENUE|COROMANDEL VALLEY': ('LOTUS DRIVE|ABERFOYLE PARK', 'Directions place Stirling Avenue as the first right from Lotus Drive.', []),
        'STURT CLOSE|IRON BANK': ('ACKLAND HILL ROAD|COROMANDEL VALLEY', 'Directions place Sturt Close as the fourth left from Ackland Hill Road before the golf course.', []),
        'THE RIVIERA|PASADENA': ('GULFVIEW ROAD|BLACKWOOD', 'Directions reach The Riviera from the Gulfview/Grevillea/Gloucester extension; use the official Gulfview Road approach point.', []),
        'THE VALLEY ROAD|BELAIR NATIONAL PARK': ('QUEENS JUBILEE DRIVE|BELAIR NATIONAL PARK', 'Internal park road leading toward Long Gully; use the reviewed official park-road starting point.', []),
        'UPPER STURT ROAD|HAWTHORNDENE': ('RANKEYS HILL ROAD|HAWTHORNDENE', 'The explicit 192 Upper Sturt Road lookup did not return an exact official candidate; Rankeys Hill Road is the final confirmed approach in the Directions entry and is close to the requested section.', []),
        'VINE STREET|HAWTHORNDENE': ('HAWTHORNDENE DRIVE|HAWTHORNDENE', 'Directions place Vine Street as the second right from Hawthorndene Drive.', []),
        'WONNA STREET|EDEN HILLS': ('WILPENA STREET|EDEN HILLS', 'Directions place Wonna Street directly from Wilpena Street after Kooringa Street.', []),
        'MATTHEWS ROAD|DORSET VALE': ('CHERRY GARDENS ROAD|CHERRY GARDENS', 'Directions reach Matthews Road via Cherry Gardens Road and Dorset Vale Road; use the reviewed official Cherry Gardens Road approach area.', []),
    }
    # Government Road is intentionally retained as grey: it is described as an
    # unnumbered track at the end of Delamere Avenue and no reliable official or
    # reviewed coordinate was available.
    intentionally_unresolved = {
        'GOVERNMENT ROAD|SPRINGFIELD': 'Unnumbered track at the end of Delamere Avenue; no sufficiently reliable exact or nearby official coordinate was available.',
    }

    for key, (anchor_key, reason, evidence) in failed_anchor_map.items():
        anchor = fallback if anchor_key == '__FALLBACK__' else anchor_for(anchor_key)
        records[key] = copy_anchor(
            anchor, target_key=key,
            category='Reviewed vicinity anchor', confidence='Moderate',
            reason=reason, secondary_evidence=evidence,
        )

    # Stage 3: multi-locality Directions entries. These are deliberately stored as
    # entry-specific reviewed vicinity anchors so identical road names in other
    # entries/localities remain separate.
    multi_anchor_map = {
        'CORO EAST & CHERRY-1': 'ACKLAND HILL ROAD|COROMANDEL VALLEY',
        'BLACKWOOD MAIN-44': 'UPPER STURT ROAD|BELAIR',
        'CORO STREETS-12': 'GLENDALE AVENUE|FLAGSTAFF HILL',
        'BLACKWOOD MAIN-67': 'JAMES ROAD|BELAIR',
        'BLACKWOOD MAIN-79': 'UPPER STURT ROAD|BELAIR',
        'BLACKWOOD MAIN-99': 'BORONIA AVENUE|COROMANDEL VALLEY',
        'CORO STREETS-20': 'BORONIA AVENUE|COROMANDEL VALLEY',
        'CORO EAST & CHERRY-8': 'CHERRY GARDENS ROAD|CHERRY GARDENS',
        'BLACKWOOD MAIN-127': 'JAMES ROAD|BELAIR',
        'BLACKWOOD MAIN-132': 'HEWITT AVENUE|HAWTHORNDENE',
        'BLACKWOOD MAIN-139': 'UPPER STURT ROAD|BELAIR',
        'BLACKWOOD MAIN-175': 'UPPER STURT ROAD|BELAIR',
        'BLACKWOOD MAIN-185': 'CEDAR AVENUE|BLACKWOOD',
        'BLACKWOOD MAIN-189': 'GULFVIEW ROAD|BLACKWOOD',
        'BLACKWOOD MAIN-192': 'GULFVIEW ROAD|BLACKWOOD',
        'BLACKWOOD MAIN-241': 'UPPER STURT ROAD|BELAIR',
        'BLACKWOOD MAIN-259': 'HEWITT AVENUE|HAWTHORNDENE',
        'CORO EAST & CHERRY-18': 'ACKLAND HILL ROAD|COROMANDEL VALLEY',
        'CORO STREETS-59': 'ACKLAND HILL ROAD|COROMANDEL VALLEY',
        'BLACKWOOD MAIN-285': 'JAMES ROAD|BELAIR',
        'CORO STREETS-69': 'GLENDALE AVENUE|FLAGSTAFF HILL',
        'BLACKWOOD MAIN-308': 'RANKEYS HILL ROAD|HAWTHORNDENE',
        'BLACKWOOD MAIN-309': 'SHEOAK ROAD|BELAIR',
        'BLACKWOOD MAIN-338': 'RANKEYS HILL ROAD|HAWTHORNDENE',
        'CORO STREETS-78': 'WILDHEATH ROAD|CORO EAST',
        'CORO EAST & CHERRY-23': 'CHERRY GARDENS ROAD|CHERRY GARDENS',
        'CORO EAST & CHERRY-24': 'ACKLAND HILL ROAD|COROMANDEL VALLEY',
        'BLACKWOOD MAIN-385': 'GULFVIEW ROAD|BLACKWOOD',
        'CORO EAST & CHERRY-26': 'ACKLAND HILL ROAD|COROMANDEL VALLEY',
        'BLACKWOOD MAIN-421': 'JAMES ROAD|BELAIR',
        'CORO EAST & CHERRY-29': 'CHERRY GARDENS ROAD|CHERRY GARDENS',
        'CORO STREETS-105': 'WILDHEATH ROAD|CORO EAST',
    }
    for entry_id, anchor_key in multi_anchor_map.items():
        entry = entries_by_id[entry_id]
        anchor = anchor_for(anchor_key)
        entry_resolutions[entry_id] = copy_anchor(
            anchor, entry_id=entry_id,
            category='Reviewed multi-locality vicinity anchor', confidence='Moderate',
            reason=f"The Directions entry spans multiple locality fields. A reviewed official approach point ({anchor_key}) was selected without merging it with other same-name street records.",
        )

    output = {
        'schemaVersion': 1,
        'generatedAtUtc': datetime.now(timezone.utc).isoformat(),
        'purpose': 'Reviewed second-pass Live Hydrants resolutions. Manual coordinate overrides remain higher priority.',
        'sourceHierarchy': [
            'Future manual coordinate override',
            'Reviewed second-pass official candidate or vicinity anchor',
            'Original accepted Location SA collector result',
            'Grey Blackwood CFS fallback',
        ],
        'records': records,
        'entries': entry_resolutions,
        'intentionallyUnresolvedRecords': intentionally_unresolved,
        'counts': {
            'reviewedRecordResolutions': len(records),
            'reviewedEntryResolutions': len(entry_resolutions),
            'intentionallyUnresolvedRecords': len(intentionally_unresolved),
        },
    }
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(output['counts'], indent=2))


if __name__ == '__main__':
    main()
