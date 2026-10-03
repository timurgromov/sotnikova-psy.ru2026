# UI change contract

- Change ID: `2026-10-03-certificates`
- Requested visible change: two new certificates appear in the public certificates gallery.
- Surface: `/` — public landing page.
- User state / fixture: unauthenticated visitor; certificates gallery is shown below the pricing section.
- Exact target: `CertificatesSection`, the final two cards in the `certificates` list.
- Action to reveal target: open one of the new cards in the lightbox, then use the next/previous control to view the other.
- Reported CSS viewport: desktop `1280 x 720`; mobile `390 x 844`.
- Affected breakpoints: mobile default, `sm`, `md`, `lg`, `xl` card-width modes.
- Baseline visible signature: gallery heading says `20 подтверждающих документов`; neither new conference title is present.
- Expected visible signature: gallery heading says `22 подтверждающих документа`; both new conference cards have distinct titles, WebP source files, and open in the lightbox.
- Must remain unchanged: existing certificate cards, gallery navigation, lightbox controls, and the page's primary CTA.
- Required viewports: `390x844`, `1280x720`.
- Attempt number for this exact target: `1`.
- Owner reference/selected variant after attempt 2: not applicable.

Acceptance: the newly served candidate visibly presents both supplied certificates as gallery cards, and each opens in the existing lightbox without breaking the prior carousel controls.
