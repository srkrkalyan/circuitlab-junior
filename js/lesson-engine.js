/* ═══════════════════════════════════════════
   LESSON-ENGINE.JS — Renders lesson sections
   CircuitLab Junior
═══════════════════════════════════════════ */

const LessonEngine = (() => {
  let data = null;
  let currentSec = 0;

  /* ── Load a lesson by id ── */
  function load(id) {
    if (id === 'u1l1') data = LESSON_U1L1;
    else { data = null; return; }

    currentSec = 0;
    Quiz.reset();
    SortGame.reset();
    AtomCanvas.reset();

    const container = document.getElementById('lesson-container');
    container.innerHTML = buildShell();

    buildStepper();
    bindSections();
    activateSection(0);
    AtomCanvas.init('atom-canvas', data.atoms);
  }

  /* ── Build the lesson HTML shell ── */
  function buildShell() {
    const titleHtml = data.title;
    const chipsHtml = data.chips.map(c => `<div class="lh-chip">${c}</div>`).join('');

    const sec0 = buildWonderSection();
    const sec1 = buildAtomSection();
    const sec2 = buildChargeSection();
    const sec3 = buildGameSection();
    const sec4 = buildQuizSection();
    const sec5 = buildSummarySection();

    return `
      <div class="lesson-wrap">
        <div class="lesson-header">
          <div class="lh-tag">${data.tag}</div>
          <div class="lh-title">${titleHtml}</div>
          <div class="lh-desc">${data.desc}</div>
          <div class="lh-chips">${chipsHtml}</div>
        </div>

        <div class="stepper" id="lesson-stepper" role="tablist" aria-label="Lesson progress"></div>

        <div id="lesson-section-0" class="lesson-section">${sec0}</div>
        <div id="lesson-section-1" class="lesson-section">${sec1}</div>
        <div id="lesson-section-2" class="lesson-section">${sec2}</div>
        <div id="lesson-section-3" class="lesson-section">${sec3}</div>
        <div id="lesson-section-4" class="lesson-section">${sec4}</div>
        <div id="lesson-section-5" class="lesson-section">${sec5}</div>
      </div>`;
  }

  /* ── Sections ── */
  function buildWonderSection() {
    return `
      <div class="wonder-box">
        <div class="wonder-label">Wonder moment</div>
        <div class="wonder-text">Why can a metal spoon carry electricity and shock you, but a plastic ruler just sits there doing nothing? The answer lives inside every single atom in the universe — including you.</div>
      </div>
      <div class="card">
        <div class="card-title"><div class="card-icon" style="background:#EAF3DE;">🔬</div> Everything is made of atoms</div>
        <div class="card-body">
          Look around you — the table, the air, your hand. Everything is made of incredibly tiny particles called <strong>atoms</strong>. They are so small that a single strand of hair is about <strong>one million atoms wide</strong>.<br><br>
          Atoms are the building blocks of all matter in the universe. Every object — solid, liquid, or gas — is made of atoms bonded together in different ways. Understanding atoms is the very first step to understanding electricity.
        </div>
      </div>
      <div class="fact-row">
        <div class="fact-item"><div class="fact-num">10⁻¹⁰</div><div class="fact-lbl">Size of one atom in meters</div></div>
        <div class="fact-item"><div class="fact-num">118</div><div class="fact-lbl">Types of atoms (elements) in nature</div></div>
        <div class="fact-item"><div class="fact-num">7×10²⁷</div><div class="fact-lbl">Atoms in the human body</div></div>
      </div>
      ${navRow(null, 1, 'Section 1 of 5', 'Next: Inside an atom →')}`;
  }

  function buildAtomSection() {
    const btnHtml = data.atoms.map((a, i) =>
      `<button class="atom-btn${i === 2 ? ' active' : ''}" data-atom="${i}" aria-pressed="${i === 2}"
         onclick="AtomCanvas.select(${i})">${a.sym} — ${a.name}</button>`
    ).join('');
    return `
      <div class="card">
        <div class="card-title"><div class="card-icon" style="background:#E6F1FB;">⚛</div> Inside an atom</div>
        <div class="card-body">
          Every atom has three types of particles: <strong>protons</strong> (positive charge, in the nucleus), <strong>neutrons</strong> (no charge, in the nucleus), and <strong>electrons</strong> (negative charge, orbiting the nucleus).<br><br>
          The nucleus sits at the center — tiny but heavy. Electrons zoom around it in shells. Normally, an atom has equal numbers of protons and electrons, making it <strong>electrically neutral</strong>.
        </div>
      </div>
      <div class="atom-section" role="region" aria-label="Interactive atom explorer">
        <div class="atom-controls" role="group" aria-label="Select element">${btnHtml}</div>
        <div class="atom-canvas-container">
          <canvas id="atom-canvas" width="360" height="220" aria-label="Animated atom diagram"></canvas>
        </div>
        <div class="atom-info-row" id="atom-info-row">
          <div class="atom-info-cell"><div class="aic-num" style="color:#F09595;" id="aic-p">29</div><div class="aic-lbl">Protons</div></div>
          <div class="atom-info-cell"><div class="aic-num" style="color:#B4B2A9;" id="aic-n">35</div><div class="aic-lbl">Neutrons</div></div>
          <div class="atom-info-cell"><div class="aic-num" style="color:#378ADD;" id="aic-e">29</div><div class="aic-lbl">Electrons</div></div>
        </div>
        <div class="atom-footer" id="atom-footer">Tap an element above to explore its atom</div>
      </div>
      <div class="card" style="margin-top:14px;">
        <div class="card-title"><div class="card-icon" style="background:#FAEEDA;">💡</div> The key insight: valence electrons</div>
        <div class="card-body">
          The outermost shell of an atom is called the <strong>valence shell</strong>. Electrons in it are called <strong>valence electrons</strong>. These are the electrons that can break free and move to another atom — and that movement IS <strong>electricity</strong>.<br><br>
          Atoms with 1–3 valence electrons (copper, silver, gold) let electrons roam freely. Atoms with 5–8 valence electrons (rubber, plastic) hold them tightly. That's why some materials conduct electricity and others don't!
        </div>
      </div>
      ${navRow(0, 2, 'Section 2 of 5', 'Next: Electric charge →')}`;
  }

  function buildChargeSection() {
    return `
      <div class="card">
        <div class="card-title"><div class="card-icon" style="background:#FCE4EC;">⚡</div> What is electric charge?</div>
        <div class="card-body">
          Electric charge is a property of particles — there are only two types: <strong>positive (+)</strong> and <strong>negative (−)</strong>.<br><br>
          <strong>Protons</strong> carry positive charge. <strong>Electrons</strong> carry negative charge. <strong>Neutrons</strong> carry no charge at all.<br><br>
          The golden rule: <strong>opposite charges attract, like charges repel.</strong> That's what keeps electrons orbiting the nucleus!
        </div>
      </div>
      <div class="particle-grid">
        <div class="particle-card">
          <div class="particle-dot pd-pos">+</div>
          <div class="particle-name">Proton</div>
          <div class="particle-meta">Positive charge<br>In nucleus<br>Relatively heavy</div>
        </div>
        <div class="particle-card">
          <div class="particle-dot pd-neu">0</div>
          <div class="particle-name">Neutron</div>
          <div class="particle-meta">No charge<br>In nucleus<br>Relatively heavy</div>
        </div>
        <div class="particle-card">
          <div class="particle-dot pd-neg">−</div>
          <div class="particle-name">Electron</div>
          <div class="particle-meta">Negative charge<br>Orbits nucleus<br>Very light</div>
        </div>
      </div>
      <div class="card">
        <div class="card-title"><div class="card-icon" style="background:#EDE7F6;">🧲</div> Charge attraction — tap to see!</div>
        <div class="card-body" style="margin-bottom:10px;">Tap each pair to discover how they interact:</div>
        <div class="charge-demo">
          <div class="charge-pair" onclick="SortGame.chargeTap(this,'attract','⬅ ATTRACT ➡ Opposite charges pull together!')" role="button" tabindex="0" aria-label="Positive and negative charge interaction">
            <div class="cp-dot pd-pos">+</div>
            <span style="color:var(--txt-muted);font-size:14px;">and</span>
            <div class="cp-dot pd-neg">−</div>
            <div class="cp-result" aria-live="polite"></div>
          </div>
          <div class="charge-pair" onclick="SortGame.chargeTap(this,'repel','↔ REPEL — two positives push apart!')" role="button" tabindex="0" aria-label="Two positive charges interaction">
            <div class="cp-dot pd-pos">+</div>
            <span style="color:var(--txt-muted);font-size:14px;">and</span>
            <div class="cp-dot pd-pos">+</div>
            <div class="cp-result" aria-live="polite"></div>
          </div>
          <div class="charge-pair" onclick="SortGame.chargeTap(this,'repel','↔ REPEL — two negatives push apart!')" role="button" tabindex="0" aria-label="Two negative charges interaction">
            <div class="cp-dot pd-neg">−</div>
            <span style="color:var(--txt-muted);font-size:14px;">and</span>
            <div class="cp-dot pd-neg">−</div>
            <div class="cp-result" aria-live="polite"></div>
          </div>
        </div>
      </div>
      ${navRow(1, 3, 'Section 3 of 5', 'Next: Materials game →')}`;
  }

  function buildGameSection() {
    const matHtml = data.materials.map((m, i) => `
      <div class="mat-tile" id="mat-${i}" onclick="SortGame.pick(${i})" role="button" tabindex="0"
           aria-label="Material: ${m.name}">
        <div class="mat-emoji">${m.emoji}</div>
        <div class="mat-name">${m.name}</div>
        <div class="mat-tag ${m.type}" id="mat-tag-${i}"></div>
      </div>`).join('');
    return `
      <div class="card">
        <div class="card-title"><div class="card-icon" style="background:#EAF3DE;">🔌</div> Conductors, insulators &amp; semiconductors</div>
        <div class="card-body">
          <strong>Conductors</strong> let electrons flow freely — metals like copper are perfect. <strong>Insulators</strong> block all current — rubber and plastic are great examples. <strong>Semiconductors</strong> are in between — they conduct under certain conditions, making them the heart of all electronics (think silicon chips in your phone!).
        </div>
      </div>
      <div class="card" style="background:var(--bg-card-alt);">
        <div class="card-title"><div class="card-icon" style="background:#E6F1FB;">🎮</div> Sort the materials!</div>
        <div class="card-body" style="margin-bottom:12px;">Choose a category, then tap materials to classify them. See how many you can get right!</div>
        <div class="sort-controls" role="group" aria-label="Material category selector">
          <button class="sort-btn conductor" onclick="SortGame.setCategory('c')" id="sbtn-c" aria-pressed="false">Conductor</button>
          <button class="sort-btn insulator" onclick="SortGame.setCategory('i')" id="sbtn-i" aria-pressed="false">Insulator</button>
          <button class="sort-btn semi"      onclick="SortGame.setCategory('s')" id="sbtn-s" aria-pressed="false">Semiconductor</button>
        </div>
        <div class="materials-grid">${matHtml}</div>
        <div class="game-score-bar" id="game-score-bar" aria-live="polite">Select a category above, then tap materials to classify them.</div>
      </div>
      <div class="insight-box">
        <div class="insight-label">Why it matters</div>
        <div class="insight-item">Conductors are used for wires and circuit paths — copper is cheap and excellent.</div>
        <div class="insight-item">Insulators coat wires to keep electricity from leaking dangerously.</div>
        <div class="insight-item">Semiconductors are the heart of every transistor and chip — switchable between conducting and insulating.</div>
      </div>
      ${navRow(2, 4, 'Section 4 of 5', 'Take the quiz →')}`;
  }

  function buildQuizSection() {
    return `<div id="quiz-area" aria-live="polite"></div>`;
  }

  function buildSummarySection() {
    const kpHtml = data.keyPoints.map(kp =>
      `<div class="kp-item">${kp}</div>`).join('');
    return `
      <div class="summary-wrap">
        <div class="sum-trophy" aria-hidden="true">🎉</div>
        <div class="sum-title">Lesson complete!</div>
        <div class="sum-sub">You've finished Lesson 1.1 — What is Matter Made of?</div>
        <div class="sum-score" id="sum-score" aria-label="Quiz score">0 / 6</div>
        <div class="sum-slabel">Quiz score</div>
        <div class="key-points">
          <div class="kp-head">What you learned today</div>
          ${kpHtml}
        </div>
        <div class="sum-btns">
          <button class="btn-ghost" onclick="LessonEngine.retry()">Retry lesson</button>
          <button class="btn-primary" onclick="App.showCurriculum()">Back to curriculum →</button>
        </div>
      </div>`;
  }

  /* ── Nav row builder ── */
  function navRow(prevSec, nextSec, label, nextLabel) {
    const prevBtn = prevSec !== null
      ? `<button class="btn-ghost" onclick="LessonEngine.goTo(${prevSec})">← Back</button>`
      : `<div></div>`;
    return `
      <div class="lesson-nav">
        ${prevBtn}
        <div class="nav-prog">${label}</div>
        <button class="btn-dark" onclick="LessonEngine.goTo(${nextSec})">${nextLabel}</button>
      </div>`;
  }

  /* ── Stepper ── */
  function buildStepper() {
    const el = document.getElementById('lesson-stepper');
    if (!el) return;
    el.innerHTML = data.sections.map((lbl, i) => {
      const isDone = i < currentSec;
      const isActive = i === currentSec;
      return `
        <div class="step-item" onclick="LessonEngine.goTo(${i})" role="tab"
             aria-selected="${isActive}" aria-label="Step ${i + 1}: ${lbl}" tabindex="${isActive ? 0 : -1}">
          <div class="step-dot ${isActive ? 'active' : isDone ? 'done' : ''}" aria-hidden="true">${isDone ? '✓' : i + 1}</div>
          <div class="step-lbl ${isActive ? 'active' : ''}">${lbl}</div>
        </div>
        ${i < data.sections.length - 1 ? '<div class="step-line" aria-hidden="true"></div>' : ''}`;
    }).join('');
  }

  /* ── Section activation ── */
  function bindSections() {
    /* keyboard on charge pairs */
    document.querySelectorAll('.charge-pair').forEach(pair => {
      pair.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') pair.click(); });
    });
    /* keyboard on mat-tiles */
    document.querySelectorAll('.mat-tile[tabindex]').forEach(tile => {
      tile.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') tile.click(); });
    });
  }

  function activateSection(n) {
    document.querySelectorAll('.lesson-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById(`lesson-section-${n}`);
    if (sec) {
      sec.classList.add('active');
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    currentSec = n;
    buildStepper();

    /* Init quiz on section 4 */
    if (n === 4) Quiz.start(data.questions);
  }

  function goTo(n) { activateSection(n); }

  function showSummary(score, total) {
    App.saveCompleted('u1l1', score, total);
    const el = document.getElementById('sum-score');
    if (el) el.textContent = score + ' / ' + total;
    activateSection(5);
  }

  function retry() {
    currentSec = 0;
    Quiz.reset();
    SortGame.reset();
    AtomCanvas.reset();
    activateSection(0);
    AtomCanvas.init('atom-canvas', data.atoms);
  }

  return { load, goTo, showSummary, retry };
})();
