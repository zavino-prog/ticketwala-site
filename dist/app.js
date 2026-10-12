(() => {
  const menu = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open menu'); mobileNav.hidden = true; }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menu.focus(); } });
  const cards = [...document.querySelectorAll('.destination')];
  function selectDestination(card) {
    cards.forEach(item => {
      const selected = item === card;
      item.classList.toggle('active', selected);
      item.querySelector('button').setAttribute('aria-expanded', String(selected));
      item.querySelector('.destination-detail').hidden = !selected;
    });
  }
  cards.forEach(card => {
    card.querySelector('button').addEventListener('click', () => selectDestination(card));
    card.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 801px)').matches) selectDestination(card); });
  });
  const tips = [
    ['Good plans leave<br>room for <span class="blue">possibility.</span>', 'If your dates are flexible, tell us. A little wiggle room can open up different flights and stays.'],
    ['Your kind of trip.<br>Your kind of <span class="blue">budget.</span>', 'Share what matters most: the view, the flight time, or a little extra comfort. It helps us discuss the right options.'],
    ['Small details.<br>A smoother <span class="blue">departure.</span>', 'Before you confirm, ask about baggage, booking conditions, and what is included. Keep the important details in one place.']
  ];
  let tipIndex = 0;
  function changeTip(direction) {
    tipIndex = (tipIndex + direction + tips.length) % tips.length;
    document.querySelector('#travel-tip h2').innerHTML = tips[tipIndex][0];
    document.querySelector('#travel-tip p').textContent = tips[tipIndex][1];
    document.querySelector('.tip-count').textContent = `0${tipIndex + 1} / 03`;
  }
  document.querySelector('.tip-prev').addEventListener('click', () => changeTip(-1));
  document.querySelector('.tip-next').addEventListener('click', () => changeTip(1));
  document.querySelector('#year').textContent = new Date().getFullYear();

  // Optional motion loads after the essential page and never gates content or links.
  function loadScript(src) {
    return new Promise((resolve, reject) => { const script = document.createElement('script'); script.src = src; script.onload = resolve; script.onerror = reject; document.head.append(script); });
  }
  async function enableMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData) return;
    try {
      await loadScript('/assets/vendor/gsap.min.js');
      await loadScript('/assets/vendor/ScrollTrigger.min.js');
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const copy = document.querySelector('.reveal-copy');
        const original = copy.innerHTML;
        copy.innerHTML = original.split(/(<br\s*\/?\s*>|\s+)/).map(word => /^<br|^\s*$/.test(word) ? word : `<span>${word}</span>`).join('');
        gsap.fromTo(copy.querySelectorAll('span'), { opacity: .15 }, { opacity: 1, stagger: .14, ease: 'none', scrollTrigger: { trigger: copy, start: 'top 87%', end: 'top 52%', scrub: .6 } });
        return () => { copy.innerHTML = original; };
      });
      mm.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
        const steps = gsap.utils.toArray('.step');
        steps.slice(0, -1).forEach((step, i) => {
          ScrollTrigger.create({ trigger: step, start: `top ${120 + i * 22}px`, endTrigger: '.steps', end: 'bottom 410px', pin: true, pinSpacing: false });
          gsap.to(step, { scale: .96 + i * .015, ease: 'none', scrollTrigger: { trigger: steps[i + 1], start: 'top 70%', end: 'top 200px', scrub: true } });
        });
      });
      ScrollTrigger.refresh();
    } catch { /* The static experience stays complete when motion is unavailable. */ }
  }
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) requestIdleCallback(enableMotion, { timeout: 2000 });
    else setTimeout(enableMotion, 300);
  }, { once: true });
})();
