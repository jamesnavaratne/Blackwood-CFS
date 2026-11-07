# Hydrants official-feature fallback test (6 November 2026)

This package is based on the Admin v0.2 BROOM_CHANGE_TEST package. All existing inventory and Admin changes are retained.

Only `hydrants/index.html` and the main `service-worker.js` have been modified. The PWA cache key was advanced so existing devices can discover this test update via the standard refresh workflow.

The original Location SA MapServer image overlay is still attempted first. If the image fails, the app now requests GeoJSON points directly from the *same official Location SA MapServer layer 334* and draws them as red outlined circles. The fallback needs live network access and browser CORS permission. It is NOT a cached or independently sourced hydrant database.

If both official image and feature requests fail, a clear error remains and the existing Location SA viewer link is the authoritative fallback. In this case use the Location SA viewer rather than relying on a blank in-app hydrant map.

This is an unverified network-dependent test build. The official service could not be fully tested from the build environment. Before operational adoption, verify several known hydrants and map pans/zooms on a real device, and confirm failures always result in a visible warning.
