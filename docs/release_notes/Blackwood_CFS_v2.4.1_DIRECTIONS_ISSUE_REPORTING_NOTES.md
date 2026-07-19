# Blackwood CFS v2.4.1 Directions Issue Reporting Test

Base: `Blackwood_CFS_v2.4_SAFER_INVENTORY_WORKFLOW_TEST.zip`

Purpose:
- Add a Directions Book issue-reporting workflow.
- Allow suggested updates to be emailed with exact entry/source details.
- Match the Directions Book colour/design language.

Changed:
- `directions/index.html`
- `docs/directions/HOW_TO_REPORT_DIRECTIONS_ISSUE.md`
- `START_HERE.md`
- service-worker cache name only

Feature:
- Each street modal now has a small bottom `Report issue` pill.
- The report modal includes issue type, free text, email preview, and Send Email.
- Email includes street, source/book, source file, entry ID, map/code, current wording, and notes.

Unchanged:
- Directions entries/data/fidelity
- Inventory data
- Photos
- UBD map files
- Inventory rebuild tools
