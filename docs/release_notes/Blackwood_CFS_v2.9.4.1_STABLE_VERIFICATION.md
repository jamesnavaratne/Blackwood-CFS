# Blackwood CFS v2.9.4.1 Stable — Verification

Verified: 2026-09-27

- The UBD viewer has one explicit `mapViewerScrim` backdrop target.
- Only the viewer close button and viewer backdrop invoke `closeMapViewer` directly.
- No document-level UBD capture listener remains.
- Street modal controls are outside the viewer backdrop and are not intercepted.
- The Hydrants pill retains its normal link and Directions workspace-persistence handler.
- Full-screen UBD backdrop closing remains available.
- Split-panel mode continues to hide the backdrop and pass pointer interaction to the street modal above it.
- JavaScript syntax, generated inventory, Directions/Hydrants data, offline assets and ZIP integrity were revalidated.

