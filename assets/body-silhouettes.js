/** Shared anatomical silhouette helpers for Treino+ */
window.BodySilhouette = (function () {
  const BASE = '#AEAEB2';
  const ACCENT = '#007AFF';

  function front(highlight) {
    const h = (id) => (highlight === id || highlight === 'full' ? ACCENT : BASE);
    const o = (id) => (highlight === id || highlight === 'full' ? 0.35 : 0.18);
    return `
<svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- head -->
  <ellipse cx="40" cy="14" rx="9" ry="11" fill="${BASE}" opacity="0.22"/>
  <!-- neck -->
  <rect x="36.5" y="24" width="7" height="8" rx="2" fill="${BASE}" opacity="0.18"/>
  <!-- shoulders -->
  <path d="M18 36c0-4 6-8 22-8s22 4 22 8c0 3-3 5-8 6H26c-5-1-8-3-8-6z" fill="${h('ombros')}" opacity="${o('ombros')}"/>
  <!-- chest -->
  <path d="M26 40c2 10 4 16 14 16s12-6 14-16c-3 1-8 2-14 2s-11-1-14-2z" fill="${h('peito')}" opacity="${o('peito')}"/>
  <!-- core -->
  <path d="M30 56h20c1 10 1 18-2 26H32c-3-8-3-16-2-26z" fill="${h('core')}" opacity="${o('core')}"/>
  <!-- L arm / biceps -->
  <path d="M18 42c-4 2-7 8-8 16-1 6 0 12 2 16l6-2c-1-4-2-9-1-14 1-5 3-10 5-12z" fill="${h('biceps')}" opacity="${o('biceps')}"/>
  <!-- R arm / biceps -->
  <path d="M62 42c4 2 7 8 8 16 1 6 0 12-2 16l-6-2c1-4 2-9 1-14-1-5-3-10-5-12z" fill="${h('biceps')}" opacity="${o('biceps')}"/>
  <!-- forearms -->
  <path d="M12 74c-1 8 0 14 2 18l5-1c-1-4-2-9-1-15z" fill="${BASE}" opacity="0.14"/>
  <path d="M68 74c1 8 0 14-2 18l-5-1c1-4 2-9 1-15z" fill="${BASE}" opacity="0.14"/>
  <!-- hips -->
  <path d="M30 80h20c2 4 2 8 0 10H30c-2-2-2-6 0-10z" fill="${BASE}" opacity="0.16"/>
  <!-- L leg -->
  <path d="M30 90c-1 14-2 28-1 42h10c0-14 1-28 2-42z" fill="${h('pernas')}" opacity="${o('pernas')}"/>
  <!-- R leg -->
  <path d="M50 90c1 14 2 28 1 42H41c0-14-1-28-2-42z" fill="${h('pernas')}" opacity="${o('pernas')}"/>
  <!-- outline -->
  <path d="M40 3c6 0 11 5 11 11v8c12 2 21 8 21 16l-1 10c0 4-2 8-5 10v6c3 2 6 8 7 16 1 7 0 14-2 20l-5 2c1-6 2-12 1-18-1-5-3-10-6-12v8c3 8 3 18 2 28l-1 18H48c1-14 2-28 1-42h-2c-1 14 0 28 1 42H29c-1-14-2-28-1-42v-8c-3 2-5 7-6 12-1 6 0 12 1 18l-5-2c-2-6-3-13-2-20 1-8 4-14 7-16v-6c-3-2-5-6-5-10l-1-10c0-8 9-14 21-16v-8c0-6 5-11 11-11z"
        fill="none" stroke="${BASE}" stroke-width="1.2" opacity="0.55" stroke-linejoin="round"/>
</svg>`;
  }

  function back(highlight) {
    const h = (id) => (highlight === id || highlight === 'full' ? ACCENT : BASE);
    const o = (id) => (highlight === id || highlight === 'full' ? 0.35 : 0.18);
    return `
<svg viewBox="0 0 80 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="40" cy="14" rx="9" ry="11" fill="${BASE}" opacity="0.22"/>
  <rect x="36.5" y="24" width="7" height="8" rx="2" fill="${BASE}" opacity="0.18"/>
  <!-- shoulders back -->
  <path d="M18 36c0-4 6-8 22-8s22 4 22 8c0 3-3 5-8 6H26c-5-1-8-3-8-6z" fill="${h('ombros')}" opacity="${o('ombros')}"/>
  <!-- costas / upper+mid back -->
  <path d="M26 40c1 14 2 24 4 34h20c2-10 3-20 4-34-4 2-10 3-14 3s-10-1-14-3z" fill="${h('costas')}" opacity="${o('costas')}"/>
  <!-- triceps L/R -->
  <path d="M18 42c-4 2-7 8-8 16-1 6 0 12 2 16l6-2c-1-4-2-9-1-14 1-5 3-10 5-12z" fill="${h('triceps')}" opacity="${o('triceps')}"/>
  <path d="M62 42c4 2 7 8 8 16 1 6 0 12-2 16l-6-2c1-4 2-9 1-14-1-5-3-10-5-12z" fill="${h('triceps')}" opacity="${o('triceps')}"/>
  <path d="M12 74c-1 8 0 14 2 18l5-1c-1-4-2-9-1-15z" fill="${BASE}" opacity="0.14"/>
  <path d="M68 74c1 8 0 14-2 18l-5-1c1-4 2-9 1-15z" fill="${BASE}" opacity="0.14"/>
  <!-- gluteo -->
  <path d="M28 72c2 6 4 12 12 12s10-6 12-12c-4 2-8 3-12 3s-8-1-12-3z" fill="${h('gluteo')}" opacity="${o('gluteo')}"/>
  <!-- legs -->
  <path d="M30 90c-1 14-2 28-1 42h10c0-14 1-28 2-42z" fill="${h('pernas')}" opacity="${o('pernas')}"/>
  <path d="M50 90c1 14 2 28 1 42H41c0-14-1-28-2-42z" fill="${h('pernas')}" opacity="${o('pernas')}"/>
  <path d="M40 3c6 0 11 5 11 11v8c12 2 21 8 21 16l-1 10c0 4-2 8-5 10v6c3 2 6 8 7 16 1 7 0 14-2 20l-5 2c1-6 2-12 1-18-1-5-3-10-6-12v8c3 8 3 18 2 28l-1 18H48c1-14 2-28 1-42h-2c-1 14 0 28 1 42H29c-1-14-2-28-1-42v-8c-3 2-5 7-6 12-1 6 0 12 1 18l-5-2c-2-6-3-13-2-20 1-8 4-14 7-16v-6c-3-2-5-6-5-10l-1-10c0-8 9-14 21-16v-8c0-6 5-11 11-11z"
        fill="none" stroke="${BASE}" stroke-width="1.2" opacity="0.55" stroke-linejoin="round"/>
</svg>`;
  }

  const META = {
    peito:   { label: 'Peito',   view: 'front', highlight: 'peito',  tone: 'a' },
    costas:  { label: 'Costas',  view: 'back',  highlight: 'costas', tone: 'b' },
    biceps:  { label: 'Bíceps',  view: 'front', highlight: 'biceps', tone: 'c' },
    triceps: { label: 'Tríceps', view: 'back',  highlight: 'triceps',tone: 'd' },
    ombros:  { label: 'Ombros',  view: 'front', highlight: 'ombros', tone: 'e' },
    gluteo:  { label: 'Glúteo',  view: 'back',  highlight: 'gluteo', tone: 'f' },
    pernas:  { label: 'Pernas',  view: 'front', highlight: 'pernas', tone: 'g' },
    full:    { label: 'Full body', view: 'front', highlight: 'full', tone: 'h' },
    core:    { label: 'Core',    view: 'front', highlight: 'core',   tone: 'i' }
  };

  function render(partId) {
    const m = META[partId] || META.full;
    const svg = m.view === 'back' ? back(m.highlight) : front(m.highlight);
    return { meta: m, svg };
  }

  return { front, back, render, META };
})();
