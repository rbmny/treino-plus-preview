/** Shared SVG illustration helpers for Treino+ content cards */
window.Illustrations = (function () {
  function route(color) {
    const c = color || '#007AFF';
    return `<svg viewBox="0 0 160 90" fill="none" aria-hidden="true">
      <path d="M8 70 C30 20, 50 80, 70 40 S110 10, 150 55" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
      <path d="M8 70 C30 20, 50 80, 70 40 S110 10, 150 55" stroke="${c}" stroke-width="10" stroke-linecap="round" opacity="0.12"/>
      <circle cx="8" cy="70" r="5" fill="${c}"/>
      <circle cx="150" cy="55" r="5" fill="${c}"/>
    </svg>`;
  }

  function routeLong(color) {
    const c = color || '#5856D6';
    return `<svg viewBox="0 0 160 90" fill="none" aria-hidden="true">
      <path d="M6 75 C25 30, 45 20, 60 50 S95 85, 120 35 S145 15, 154 40" stroke="${c}" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
      <path d="M6 75 C25 30, 45 20, 60 50 S95 85, 120 35 S145 15, 154 40" stroke="${c}" stroke-width="10" stroke-linecap="round" opacity="0.12"/>
      <circle cx="6" cy="75" r="5" fill="${c}"/>
      <circle cx="154" cy="40" r="5" fill="${c}"/>
    </svg>`;
  }

  function timerRing(mins) {
    const m = mins || 15;
    return `<svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="8"/>
      <circle cx="60" cy="60" r="52" fill="none" stroke="#007AFF" stroke-width="8"
        stroke-dasharray="245" stroke-dashoffset="72" stroke-linecap="round" transform="rotate(-90 60 60)"/>
      <text x="60" y="56" text-anchor="middle" fill="#fff" font-size="28" font-weight="700" font-family="-apple-system,BlinkMacSystemFont,sans-serif">${m}</text>
      <text x="60" y="78" text-anchor="middle" fill="rgba(255,255,255,0.65)" font-size="12" font-weight="600" font-family="-apple-system,BlinkMacSystemFont,sans-serif">min</text>
    </svg>`;
  }

  function bookMark() {
    return `<svg viewBox="0 0 64 80" fill="none" aria-hidden="true">
      <rect x="8" y="6" width="48" height="68" rx="4" fill="#fff" opacity="0.15"/>
      <rect x="12" y="10" width="40" height="60" rx="2" fill="#fff" opacity="0.25"/>
      <path d="M18 22h28M18 30h22M18 38h26" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </svg>`;
  }

  /** Condition illustrations — simple medical/fitness glyphs */
  function adaptLipedema() {
    return `<svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="28" rx="10" ry="12" fill="#5AC8FA" opacity="0.35"/>
      <path d="M28 42c2 8 4 18 4 26h16c0-8 2-18 4-26" fill="#5AC8FA" opacity="0.28"/>
      <path d="M30 48c4 4 8 6 10 6s6-2 10-6" stroke="#0071A4" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
      <circle cx="34" cy="56" r="3" fill="#0071A4" opacity="0.35"/>
      <circle cx="46" cy="58" r="2.5" fill="#0071A4" opacity="0.3"/>
      <path d="M26 40h28" stroke="#0071A4" stroke-width="1.5" opacity="0.4" stroke-linecap="round"/>
    </svg>`;
  }

  function adaptGravida() {
    return `<svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="16" rx="7" ry="8" fill="#FF2D55" opacity="0.3"/>
      <path d="M40 24c-8 2-14 10-14 20 0 6 2 12 6 18h16c4-6 6-12 6-18 0-10-6-18-14-20z" fill="#FF2D55" opacity="0.22"/>
      <ellipse cx="40" cy="42" rx="12" ry="10" fill="#FF2D55" opacity="0.35"/>
      <path d="M28 62c2 4 6 8 12 8s10-4 12-8" stroke="#D70015" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  }

  function adaptJoelho() {
    return `<svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M36 10c-2 12-2 22 0 32" stroke="#FF9500" stroke-width="8" stroke-linecap="round" opacity="0.25"/>
      <path d="M44 10c2 12 2 22 0 32" stroke="#FF9500" stroke-width="8" stroke-linecap="round" opacity="0.25"/>
      <circle cx="40" cy="44" r="12" fill="#FF9500" opacity="0.28"/>
      <circle cx="40" cy="44" r="5" fill="#C93400" opacity="0.45"/>
      <path d="M34 56c2 8 4 14 6 18M46 56c-2 8-4 14-6 18" stroke="#FF9500" stroke-width="6" stroke-linecap="round" opacity="0.22"/>
      <path d="M28 44h-6M58 44h-6M40 32v-5" stroke="#C93400" stroke-width="1.6" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  }

  function adaptColuna() {
    return `<svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <ellipse cx="40" cy="12" rx="6" ry="7" fill="#5856D6" opacity="0.28"/>
      <rect x="36" y="20" width="8" height="7" rx="2" fill="#5856D6" opacity="0.4"/>
      <rect x="34" y="28" width="12" height="7" rx="2" fill="#5856D6" opacity="0.35"/>
      <rect x="35" y="36" width="10" height="7" rx="2" fill="#5856D6" opacity="0.45"/>
      <rect x="34" y="44" width="12" height="7" rx="2" fill="#5856D6" opacity="0.35"/>
      <rect x="36" y="52" width="8" height="7" rx="2" fill="#5856D6" opacity="0.4"/>
      <path d="M28 30c-4 2-8 8-8 14M52 30c4 2 8 8 8 14" stroke="#3634A3" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
      <path d="M40 60v10" stroke="#5856D6" stroke-width="3" stroke-linecap="round" opacity="0.3"/>
    </svg>`;
  }

  function shopDumbbell() {
    return `<svg viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <rect x="18" y="16" width="28" height="8" rx="3" fill="#007AFF" opacity="0.55"/>
      <rect x="4" y="10" width="14" height="20" rx="3" fill="#1C1C1E" opacity="0.55"/>
      <rect x="46" y="10" width="14" height="20" rx="3" fill="#1C1C1E" opacity="0.55"/>
      <rect x="8" y="14" width="6" height="12" rx="2" fill="#007AFF" opacity="0.35"/>
      <rect x="50" y="14" width="6" height="12" rx="2" fill="#007AFF" opacity="0.35"/>
    </svg>`;
  }

  function shopBands() {
    return `<svg viewBox="0 0 64 48" fill="none" aria-hidden="true">
      <ellipse cx="32" cy="24" rx="22" ry="10" stroke="#FF2D55" stroke-width="4" opacity="0.55"/>
      <ellipse cx="32" cy="24" rx="14" ry="16" stroke="#FF9500" stroke-width="4" opacity="0.45"/>
      <ellipse cx="32" cy="24" rx="8" ry="20" stroke="#34C759" stroke-width="3.5" opacity="0.4"/>
    </svg>`;
  }

  function shopLock() {
    return `<svg viewBox="0 0 48 56" fill="none" aria-hidden="true">
      <rect x="8" y="24" width="32" height="26" rx="4" fill="#5856D6" opacity="0.45"/>
      <path d="M16 24v-8a8 8 0 0 1 16 0v8" stroke="#3634A3" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
      <circle cx="24" cy="38" r="4" fill="#fff" opacity="0.7"/>
      <rect x="22.5" y="38" width="3" height="7" rx="1" fill="#fff" opacity="0.7"/>
    </svg>`;
  }

  function collage(parts) {
    const ids = parts || ['peito', 'costas', 'pernas'];
    const B = window.BodySilhouette;
    if (!B) return '';
    return `<div class="sil-collage">${ids.map(id =>
      `<div class="sil-collage-item">${B.render(id).svg}</div>`
    ).join('')}</div>`;
  }

  const ADAPT = {
    lipedema: { label: 'Lipedema', sub: 'Baixo impacto e circulação', tone: 'tone-run5', svg: adaptLipedema, color: '#0071A4' },
    gravida:  { label: 'Grávidas', sub: 'Por trimestre · core', tone: 'tone-f', svg: adaptGravida, color: '#D70015' },
    joelho:   { label: 'Joelho', sub: 'Estabilidade sem impacto', tone: 'tone-i', svg: adaptJoelho, color: '#C93400' },
    coluna:   { label: 'Coluna', sub: 'Mobilidade e postura', tone: 'tone-d', svg: adaptColuna, color: '#3634A3' }
  };

  return {
    route, routeLong, timerRing, bookMark,
    adaptLipedema, adaptGravida, adaptJoelho, adaptColuna,
    shopDumbbell, shopBands, shopLock, collage, ADAPT
  };
})();
