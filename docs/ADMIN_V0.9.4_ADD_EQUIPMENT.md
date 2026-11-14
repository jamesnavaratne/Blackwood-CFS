# Blackwood CFS Admin v0.9.4 — Add equipment

- Restores a prominent green **Add new equipment** button above the equipment inventory list, including when the inventory is compact.
- Existing `NEW-` draft workflow and publishing gateway remain unchanged.
- New equipment must have a name and a locker configured for its appliance before saving/submission.
- The trusted GitHub reconciliation processor assigns the permanent item ID and writes the Excel master; rebuild generates data/inventory.json, index.html, content metadata and offline assets.
- No master workbook, generated application files, photos, workflow code or backend code are included in this update.

Installation: extract ZIP over existing GitHub repository, commit and push.

Validation: see testing notes in chat; test a real new item in a draft PR before calling Admin stable.
