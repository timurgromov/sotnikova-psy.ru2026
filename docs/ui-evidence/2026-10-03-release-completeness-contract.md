# UI change contract — release completeness

- Change ID: `2026-10-03-release-completeness`
- Requested visible change: every consultation format has a direct booking CTA; online and in-person formats are visually separated; all 24 supplied certificate cards load their actual images; CTA text remains readable.
- Surface: `/` on `https://sotnikova-psy.ru` after GitHub Pages deployment.
- User state / fixture: public, unauthenticated landing page.
- Exact target: the pricing section cards, booking overlay and certificates carousel.
- Action to reveal target: scroll to pricing and click the 5,500 ₽ and 7,500 ₽ CTAs; scroll to certificates and observe the first cards.
- Reported CSS viewport: `390x844` and `1366x768` (Playwright `window.innerWidth/innerHeight`).
- Affected breakpoints: `639/640/641`, `767/768/769`, `1023/1024/1025`, `1279/1280/1281`.
- Baseline visible signature: 5,500 ₽ and 7,500 ₽ cards had no CTA; certificate cards referenced `/assets/undefined`; primary CTA background was `#92b0a2` with white text at 2.35:1 contrast.
- Expected visible signature: all five price cards show a "Записаться" CTA, the overlay names the selected normal online or in-person format, all 24 certificate card `img` elements use emitted `/assets/<hash>.*` URLs with natural width above zero, and CTA background has at least 4.5:1 contrast with white text.
- Must remain unchanged: all approved prices, durations, Moscow location, hero copy, contacts and free/diagnostic booking paths.
- Required viewports: `390x844`, `1366x768`, `1440x900` plus the responsive matrix probes.
- Attempt number for this exact target: `1`.
- Owner reference/selected variant after attempt 2: not applicable.
