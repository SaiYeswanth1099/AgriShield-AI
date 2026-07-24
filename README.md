# AgriShield AI

Expo React Native foundation for the AgriShield AI smart-farming mobile app.

## Run it

1. Install [Node.js LTS](https://nodejs.org/).
2. In this folder, run `npm install`.
3. Run `npx expo start` and open the QR code in Expo Go, or use an Android/iOS simulator.

## Included now

- Animated splash screen
- Role-aware mobile/OTP login flow (demo mode)
- Farmer dashboard with weather, soil, crop, water and AI cards
- Home, Scan, Analytics, Assistant and Profile navigation
- Reusable card, button, screen, metric, and navigation components
- Service contracts and mock farm data, ready to be replaced with real APIs

## Next modules

Disease scanning, smart irrigation control, live sensor feeds, maps, reports, marketplace, and role-specific portals should be added to `src/features` without changing the app shell.

> The demo authentication and data are intentionally local-only. Before release, connect `src/services` to a secure backend and Firebase/Auth provider; never treat the demo OTP as a production authentication system.
