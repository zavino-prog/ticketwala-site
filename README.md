# Ticket Wala landing page

A static, responsive travel enquiry landing page for `ticketwalabd.com`.

## Run locally

From this directory: `python3 -m http.server 4173 --directory dist --bind 127.0.0.1`

Open http://127.0.0.1:4173. No installation or build step is required. All production assets are in `dist/`.

## Contact configuration

- WhatsApp: +880 1867-043635, confirmed by the client in this chat.
- Facebook: https://www.facebook.com/profile.php?id=61554364170993
- Email displayed: ticketwala84@gmail.com
- Address: House 73, Road 2, Block C, Bashundhara R/A, Dhaka 1229.

The enquiry buttons link directly to WhatsApp or the Facebook page. WhatsApp messages are prefilled drafts, never sent automatically. There is no checkout, booking engine, contact form, analytics tracker, or database.

## Hosting

Upload the contents of `dist/` to the root of the domain on any static host. Set `ticketwalabd.com` and `www.ticketwalabd.com` in the chosen host, configure the DNS records supplied by that host, enable HTTPS, and redirect www to the canonical non-www domain. DNS has not been changed by this project.

`.openai/hosting.json` identifies the private Sites publication separately. Publishing to Sites does not connect the custom domain. Canonical metadata, Open Graph URLs, robots.txt, and sitemap.xml are prepared for the intended custom domain. `_headers` is understood by compatible static hosts; configure equivalent headers manually elsewhere. Assets use a one-week cache policy and must be invalidated or renamed when replaced.

## Design and performance

- Original client logo, with navy, blue, and orange brand colours.
- Locally hosted Satoshi variable font with `font-display: swap`.
- Responsive WebP hero (800px and 1600px), explicit image dimensions, deferred lower-page images.
- Semantic HTML renders the complete primary page without JS. Navigation anchors, FAQ disclosures, and primary enquiry links work without JS. Destination selection and travel tips are enhancements.
- Small vanilla JS for mobile navigation, destination accordion, and travel tips.
- GSAP and ScrollTrigger load locally after load/idle, skipped for reduced motion and supported data-saver settings. Stacking is desktop-only.
- Reduced motion removes transitions and scroll reveals. Keyboard focus, accessible labels, native FAQ disclosures, and a skip link are included.

See `AUDIT.md` for the source review and `ASSETS.md` for asset provenance.
