## v2.9.4.40 — Inventory Startup RC13 (24 November 2026)
- Coalesced repeated global Inventory locker-caption cleanup work after bursts of clicks; retains the 80 ms trailing delay and the unchanged startup sweeps.
- Coalesced redundant 34P heading corrections after rapid appliance switching; retains the 120 ms delay and unchanged selector/heading rules.
- Added focused Node regression tests for both timer-coalescing paths, including final-state changes after bursts, and preserved RC12 photo-fade tests.
- Existing navigation, photographs, map data, live feed, offline strategy and content-version identifier are unchanged.
- Updated release metadata and application-shell cache name. No new operational resources.
- Static/simulated tests do not replace phone/tablet regression testing.
