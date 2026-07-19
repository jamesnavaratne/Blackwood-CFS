# Blackwood CFS v2.2 Opening Transition Sandbox

Base: `Blackwood_CFS_v2.1_STABLE_DIRECTIONS_SOURCE_UPDATE.zip`

Purpose:
- Smooth the app launch/opening transition.
- Mask the repeated CFS icon/logo flash during startup.
- Use a no-image launch overlay so the icon is not shown repeatedly.
- Fade into the existing System Home.
- Keep existing app logic, Directions data, source tracking, gestures, and themes unchanged.

Changed:
- `index.html` only

Design:
- Fast text/glow launch overlay.
- Theme-aware via existing `--accent`.
- Reduced-motion friendly.
- Safety fallback removes the overlay on page load even if later app JS has an issue.
