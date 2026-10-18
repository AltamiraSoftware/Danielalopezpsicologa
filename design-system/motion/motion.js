/* Daniela López — motion.js. Sin dependencias. Ver MOTION.md. */
(function () {
  const root = document.documentElement;
  root.classList.add('js-motion');
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = mq.matches;

  function splitLines(el) {
    if (el.dataset.split === 'done') return;
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
        const w = document.createElement('span');
        w.className = 'dl-w';
        w.setAttribute('aria-hidden', 'true');
        const inner = document.createElement('span');
        inner.textContent = part;
        w.appendChild(inner);
        frag.appendChild(w);
      });
      node.parentNode.replaceChild(frag, node);
    });
    el.dataset.split = 'done';
    indexLines(el);
  }

  function indexLines(el) {
    let line = -1, lastTop = null;
    el.querySelectorAll('.dl-w').forEach((w) => {
      const top = Math.round(w.offsetTop);
      if (lastTop === null || Math.abs(top - lastTop) > 4) { line++; lastTop = top; }
      w.style.setProperty('--line', line);
    });
  }

  function prepare(el) {
    const d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--delay', d + 'ms');
    if (el.getAttribute('data-reveal') === 'lines' && !reduced) splitLines(el);
  }

  function reveal(el) {
    el.style.willChange = 'opacity, translate, clip-path';
    el.classList.add('is-in');
    const clear = () => { el.style.willChange = ''; el.removeEventListener('transitionend', clear); };
    el.addEventListener('transitionend', clear);
    setTimeout(clear, 2000);
  }

  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 })
    : null;

  function refresh(scope) {
    const base = scope || document;
    base.querySelectorAll('[data-reveal-group]').forEach((g) => {
      g.querySelectorAll(':scope > [data-reveal]').forEach((c, i) => c.style.setProperty('--i', Math.min(i, 6)));
    });
    base.querySelectorAll('[data-reveal]:not(.is-in), .logo[data-intro]:not(.is-in)').forEach((el) => {
      prepare(el);
      if (reduced || !io) { el.classList.add('is-in'); return; }
      io.observe(el);
    });
  }

  function header() {
    const h = document.querySelector('[data-header]');
    if (!h) return;
    let ticking = false;
    const update = () => { h.dataset.scrolled = window.scrollY > 8 ? 'true' : 'false'; ticking = false; };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  let rt;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => document.querySelectorAll('[data-split="done"]').forEach(indexLines), 150);
  });

  mq.addEventListener?.('change', (e) => { reduced = e.matches; if (reduced) document.querySelectorAll('[data-reveal], .logo[data-intro]').forEach((el) => el.classList.add('is-in')); });

  function init() {
    refresh();
    header();
  }
  const start = () => { const t = new Promise((r) => setTimeout(r, 500)); Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), t]).then(init); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

  window.DLMotion = { refresh, get reduced() { return reduced; } };
})();
