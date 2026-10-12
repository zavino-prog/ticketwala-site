# Validation

Checked on 12 October 2026.

- Browser preview verified at 1280px desktop, 768px tablet, 390px mobile, and 320px narrow mobile.
- Narrow navigation wrapping issue found and fixed; 320px retest passed.
- No horizontal document overflow at the tested viewport sizes.
- Mobile menu opens, closes on navigation, and supports Escape.
- Desktop and mobile destination selection updates content, link, and aria-expanded state.
- Travel-tip next control changes content and counter.
- Native FAQ disclosure opens and displays its answer.
- All rendered images loaded successfully after visiting their sections.
- No warning/error console entries were observed during browser QA.
- GSAP and ScrollTrigger loaded; the process section rendered correctly.
- JavaScript syntax check passed.
- Static audit passed: all local assets exist, all internal anchor targets exist, IDs are unique, exactly one H1, 17 external CTAs point only to the company WhatsApp or supplied Facebook page.
- Every WhatsApp URL uses the client-confirmed +8801867043635.

## Size checks

Production directory: 626,191 bytes, including both responsive hero sizes and motion libraries.
Mobile essential assets (HTML, CSS, app JS, logo, font, 800px hero): 160,444 bytes before transfer compression. This is an asset budget, not a measured network waterfall; browsers may preload nearby lazy images and load deferred motion after page load.
HTML + CSS + app JS: 12,991 bytes when gzip compressed. The selected production host must enable HTTP compression to realize this transfer size.

No Lighthouse or field Core Web Vitals score is claimed. Reduced-motion support was verified in source; OS-level emulation was not performed. No messages were sent and no payment or booking transaction was executed.
