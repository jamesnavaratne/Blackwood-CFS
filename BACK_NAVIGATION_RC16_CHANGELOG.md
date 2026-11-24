# RC16 — Back navigation (25 November 2026)
Built directly from the supplied 25 Nov 26 RC14/15 archive. Version v2.9.4.42.

- Adds a shared same-document history guard for Inventory, Directions and the Hydrants street picker. Back invokes the existing close control for the highest-priority visible layer, then re-arms if another layer remains.
- Inventory: expanded photo, issue, quiz, guide, item, global search and drawer/options are handled; appliance workspace returns to System Home. Individual locker/appliance switches are not stored as separate history entries.
- Directions: issue form, enlarged UBD, UBD list and street card close in sequence. Hydrants: closes the street picker before normal history navigation.
- Maps and Live Incidents retain normal browser history. Native select menus and keyboard handling remain browser-managed. No change to RC14/15 photo code, data or offline content version. New script is cached in the application shell.
- Existing RC12–15 and media readiness tests pass; RC16 simulated history regression and inline JavaScript syntax checks pass. Static release audit passes (92 offline paths).
- Actual Android installed-PWA Back behaviour, browser gesture/history interventions, rapid Back presses, cross-tab restored modals, and visual smoothness require device testing. Do not promote to stable until tested.
