# Menu & Directions RC3 — 15 November 2026

Based on Menu & Maps RC2; original 15 November stable remains unchanged.

- Hamburger appliance buttons: retain active state, show only appliance name and the existing Rescue-gold / 34P-green / CAFS-purple left accent rails.
- Training quiz shortcut uses **Q**.
- Offline action retains simple down-arrow download icon. Upon service-worker confirmation of complete and current offline content, it shows **Offline Content Ready** and a checkmark. Stale/incomplete/unavailable copies revert to Prepare for Offline Use. The button remains clickable for refresh.
- Directions Back to Top: imported the tested HTML preview's 0.8s fade-in / 0.75s fade-out, smooth scroll and tactile tap animation; background translucency changed to 80%, arrow and ring stay opaque; accessibility respects reduced motion.
- Synchronized version metadata, embedded metadata and service-worker cache identifier.

Validation: static checks only. Device tests required for scrolling, offline download/ready transitions, and installed-PWA refresh. This is a release candidate, not yet the new stable.
