# Blackwood CFS Directions new source update — HTML test manifest

Generated UTC: `2026-07-16T09:34:30+00:00`

Base app: `Blackwood_CFS_v2.0_STABLE_UBD_BACKDROP_CLOSE_FIX.zip`

This test rebuilds the Directions Book data from the three newly uploaded source files and retains BLACKWOOD MAIN from the current stable baseline.

| Source label | File used | Role | Entries | Last-saved/file metadata | SHA-256 |
|---|---|---|---:|---|---|
| BLACKWOOD MAIN | `BLACKWOOD CORO EDEN HILLS ETC STREETS 122016.docx` | retained current stable source | 476 | /mnt/data/directions_new_sources_html_build/directions/source/BLACKWOOD CORO EDEN HILLS ETC STREETS 122016.docx: Microsoft Word 2007+ | `52aa072a2346df45…` |
| CORO STREETS | `CORO STREETS.doc` | new uploaded replacement source | 107 | /mnt/data/CORO STREETS.doc: Composite Document File V2 Document, Little Endian, Os: Windows, Version 10.0, Code page: 1252, Title: ACACIA ROAD, Author: Blackwood Station, Template: Normal.dotm, Last Saved By: Brodie,Scott, Revision Number: 34, Name of Creating Application: Microsoft Office Word, Total Editing Time: 15:36:00, Create Time/Date: Wed Jul 21 07:45:00 2004, Last Saved Time/Date: Mon Jul  5 23:01:00 2021, Number of Pages: 24, Number of Words: 4706, Number of Characters: 26830, Security: 0 | `f970789c991126a2…` |
| BLACKWOOD PARK | `BLACKWOOD PARK STREETS1.doc` | new uploaded replacement source | 62 | /mnt/data/BLACKWOOD PARK STREETS1.doc: Composite Document File V2 Document, Little Endian, Os: Windows, Version 6.1, Code page: 1252, Title: ACACIA ROAD, Author: Blackwood Station, Template: Normal.dotm, Last Saved By: Brodie,Scott, Revision Number: 32, Name of Creating Application: Microsoft Office Word, Total Editing Time: 09:25:00, Create Time/Date: Wed Aug  4 07:31:00 2004, Last Saved Time/Date: Mon Jun 28 01:48:00 2021, Number of Pages: 17, Number of Words: 3455, Number of Characters: 19699, Security: 0 | `aed31608e4703ce8…` |
| CORO EAST & CHERRY | `CORO EAST & CHERRY STREETS.doc` | new uploaded replacement source | 33 | /mnt/data/CORO EAST & CHERRY STREETS.doc: Composite Document File V2 Document, Little Endian, Os: Windows, Version 6.1, Code page: 1252, Title: ACACIA ROAD, Author: Blackwood Station, Template: Normal.dotm, Last Saved By: Brodie,Scott, Revision Number: 15, Name of Creating Application: Microsoft Office Word, Total Editing Time: 04:17:00, Create Time/Date: Wed Aug  4 06:23:00 2004, Last Saved Time/Date: Thu Jul  1 05:31:00 2021, Number of Pages: 7, Number of Words: 1490, Number of Characters: 8495, Security: 0 | `d4c7c76af1790641…` |

## Data counts

- Current stable entries: 641
- New HTML test entries: 678
- BLACKWOOD MAIN: 476 → 476
- CORO STREETS: 101 → 107
- BLACKWOOD PARK: 36 → 62
- CORO EAST & CHERRY: 28 → 33

## Test note

New replacement-source entries currently use safe generated bolding. If this test is accepted, rerun exact Word bold-run fidelity before final stable release.
