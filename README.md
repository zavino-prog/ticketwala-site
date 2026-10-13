# Ticket Wala landing page

A static, responsive travel enquiry landing page for `ticketwalabd.com`.

## Run locally

From this directory: `python3 -m http.server 4173 --directory dist --bind 127.0.0.1`

Open http://127.0.0.1:4173. No installation or build step is required. All production assets are in `dist/`.

## Contact configuration

- WhatsApp: +880 1867-043635, confirmed by the client in this chat.
- Facebook: https://www.facebook.com/profile.php?id=61554364170993
- Email displayed: ticketwala84@gmail.com
- Address: House 76, Road 5, Block D, Bashundhara R/A, Dhaka 1229, supplied by the client on 13 October 2026.

The enquiry buttons link directly to WhatsApp or the Facebook page. WhatsApp messages are prefilled drafts, never sent automatically. There is no checkout, booking engine, contact form, analytics tracker, or database.

## Cloudflare hosting

This site is deployed as a Cloudflare Worker with Static Assets on Thezavino@gmail.com's account (`8656609e75eaae00525a5709b8f58dc0`). The local Wrangler configuration is `wrangler.jsonc`. Static files remain in `dist/`; there is no build step.

- Install: `npm ci`
- Validate package: `npm run check:cloudflare`
- Deploy: `npm run deploy:cloudflare`
- Worker: `ticketwala-bd`
- Public Worker URL: https://ticketwala-bd.thezavino.workers.dev/
- Configured custom domains: `ticketwalabd.com` and `www.ticketwalabd.com`.

The domain is registered at Namecheap. Its authoritative nameservers are `chase.ns.cloudflare.com` and `paityn.ns.cloudflare.com`, matching the active zone on the same Cloudflare account. Both custom domains returned HTTP 200 over HTTPS on 12 October 2026. Canonical metadata, Open Graph URLs, robots.txt, and sitemap.xml target the apex domain. `_headers` is applied by Workers Static Assets; the logo's cache header was verified on the custom domain.

The prior private OpenAI Sites publication has a separate identity in `.openai/hosting.json`. The Cloudflare Worker is the intended public host.

## Design and performance

- Original client logo, with navy, blue, and orange brand colours.
- Locally hosted Satoshi variable font with `font-display: swap`.
- Responsive WebP hero (800px and 1600px), explicit image dimensions, deferred lower-page images.
- Semantic HTML renders the complete primary page without JS. Navigation anchors, FAQ disclosures, and primary enquiry links work without JS. Destination selection and travel tips are enhancements.
- Small vanilla JS for mobile navigation, destination accordion, and travel tips.
- GSAP and ScrollTrigger load locally after load/idle, skipped for reduced motion and supported data-saver settings. Stacking is desktop-only.
- Reduced motion removes transitions and scroll reveals. Keyboard focus, accessible labels, native FAQ disclosures, and a skip link are included.

See `AUDIT.md` for the source review and `ASSETS.md` for asset provenance.
