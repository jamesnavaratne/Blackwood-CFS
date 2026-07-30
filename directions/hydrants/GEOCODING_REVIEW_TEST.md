# Hydrants Geocoding Review — Initial Test Set

Official source: `https://location.sa.gov.au/arcgis/rest/services/Locators/SAGAF_PLUS/GeocodeServer/findAddressCandidates`  
Output spatial reference: `EPSG:4326 (WGS84)`  
Acceptance threshold: `95`  

The ordered workflow was applied as No. 1 → No. 2 → street-only. The collector gathered all attempts for review, but the first acceptable result in that order was selected.

| Directions entry | Query attempted | Matched official address | Method used | Score | Latitude | Longitude | Status |
|---|---|---|---|---:|---:|---:|---|
| Gorse Avenue — Hawthorndene | 2 Gorse Avenue, Hawthorndene SA | 2 GORSE AVENUE, HAWTHORNDENE, SOUTH AUSTRALIA, 5051 | No. 2 | 100 | -35.023253936 | 138.626799887 | Accepted |
| Rosella Avenue — Glenalta | 1 Rosella Avenue, Glenalta SA | 1 ROSELLA AVENUE, GLENALTA, SOUTH AUSTRALIA, 5052 | No. 1 | 100 | -35.011429624 | 138.624148662 | Accepted |
| Hannaford Road — Blackwood | 1 Hannaford Road, Blackwood SA | 1 HANNAFORD ROAD, BLACKWOOD, SOUTH AUSTRALIA, 5051 | No. 1 | 100 | -35.015041793 | 138.609335318 | Accepted |
| Keith Road — Blackwood | 1 Keith Road, Blackwood SA | 1 KEITH ROAD, BLACKWOOD, SOUTH AUSTRALIA, 5051 | No. 1 | 100 | -35.025840410 | 138.619550289 | Accepted |
| Nama Drive — Hawthorndene | 1 Nama Drive, Hawthorndene SA | 1 NAMA DRIVE, HAWTHORNDENE, SOUTH AUSTRALIA, 5051 | No. 1 | 100 | -35.024721680 | 138.635953407 | Accepted |

## Generated Location SA test links

- **Gorse Avenue — Hawthorndene**: `https://location.sa.gov.au/viewer/?map=roads&x=138.626799886921&y=-35.0232539359106&z=18&uids=334&pinx=&piny=&pinTitle=&pinText=`
- **Rosella Avenue — Glenalta**: `https://location.sa.gov.au/viewer/?map=roads&x=138.624148662323&y=-35.0114296236327&z=18&uids=334&pinx=&piny=&pinTitle=&pinText=`
- **Hannaford Road — Blackwood**: `https://location.sa.gov.au/viewer/?map=roads&x=138.60933531845&y=-35.0150417926254&z=18&uids=334&pinx=&piny=&pinTitle=&pinText=`
- **Keith Road — Blackwood**: `https://location.sa.gov.au/viewer/?map=roads&x=138.619550289012&y=-35.025840409719&z=18&uids=334&pinx=&piny=&pinTitle=&pinText=`
- **Nama Drive — Hawthorndene**: `https://location.sa.gov.au/viewer/?map=roads&x=138.635953407055&y=-35.0247216797478&z=18&uids=334&pinx=&piny=&pinTitle=&pinText=`

## Test-build scope

Only these five accepted street/suburb combinations have an active Hydrants pill in this test build. All other Directions entries remain unchanged and do not show an active Hydrants pill.

The links use the Roads basemap, zoom 18, hydrant layer UID 334, longitude as x, latitude as y, and no pin.