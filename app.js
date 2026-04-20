/* ═══════════════════════════════════════════
   APP.JS — Main App Controller
   CircuitLab Junior
═══════════════════════════════════════════ */

const App = (() => {
  /* ── State ── */
  const state = {
    totalScore: 0,
    completed: JSON.parse(localStorage.getItem('clj_completed') || '{}'),
    currentLesson: null,
  };

  /* ── Score ── */
  function addScore(pts) {
    state.totalScore += pts;
    document.querySelectorAll('#global-score, #lesson-score-badge').forEach(el => {
      el.textContent = state.totalScore + ' pts';
    });
  }

  function saveCompleted(lessonId, score, total) {
    state.completed[lessonId] = { score, total, date: Date.now() };
    localStorage.setItem('clj_completed', JSON.stringify(state.completed));
    addScore(score);
    refreshCurriculum();
  }

  /* ── Toast ── */
  let toastTimer;
  function toast(msg) {
    let el = document.getElementById('app-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'app-toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  }

  /* ── Screen routing ── */
  function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showHome() {
    show('home');
    renderCurriculumPreview();
  }

  function showCurriculum() {
    show('curriculum');
    renderCurriculumList();
  }

  function showLesson(lessonId) {
    const lesson = findLesson(lessonId);
    if (!lesson) return;
    if (!lesson.unlocked && !state.completed[lessonId]) {
      toast('Complete earlier lessons first to unlock this one.');
      return;
    }
    if (lesson.type === 'coming-soon') {
      toast('🚧 This lesson is coming soon! Check back next time.');
      return;
    }
    state.currentLesson = lessonId;
    document.getElementById('lesson-topbar-title').textContent = lesson.num + ' — ' + lesson.title;
    LessonEngine.load(lessonId);
    show('lesson');
  }

  /* ── Helpers ── */
  function findLesson(id) {
    for (const unit of CURRICULUM) {
      for (const lesson of unit.lessons) {
        if (lesson.id === id) return lesson;
      }
    }
    return null;
  }

  function getLessonProgress(unit) {
    const done = unit.lessons.filter(l => state.completed[l.id]).length;
    return { done, total: unit.lessons.length, pct: Math.round((done / unit.lessons.length) * 100) };
  }

  /* ── Curriculum Preview (home) ── */
  function renderCurriculumPreview() {
    const el = document.getElementById('curriculum-preview');
    if (!el) return;
    el.innerHTML = CURRICULUM.map(unit => {
      const prog = getLessonProgress(unit);
      return `
        <div class="unit-preview-card" onclick="App.showCurriculum()" role="button" tabindex="0" aria-label="Unit ${unit.id}: ${unit.name}">
          <div class="upc-emoji">${unit.emoji}</div>
          <div class="upc-num">Unit ${CURRICULUM.indexOf(unit) + 1}</div>
          <div class="upc-name">${unit.name}</div>
          <div class="upc-count">${unit.lessons.length} lessons</div>
          <div class="upc-status"><div class="upc-status-fill" style="width:${prog.pct}%"></div></div>
        </div>`;
    }).join('');
    /* keyboard accessibility */
    el.querySelectorAll('[role=button]').forEach(card => {
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') showCurriculum(); });
    });
  }

  /* ── Curriculum List ── */
  function renderCurriculumList() {
    const el = document.getElementById('curriculum-list');
    if (!el) return;
    el.innerHTML = CURRICULUM.map((unit, ui) => {
      const prog = getLessonProgress(unit);
      const lessons = unit.lessons.map(lesson => {
        const done = !!state.completed[lesson.id];
        const isActive = lesson.unlocked && lesson.type !== 'coming-soon';
        const cls = done ? 'done' : isActive ? 'active' : 'locked';
        const badgeLabel = done ? '✓ Done' : isActive ? 'Start' : lesson.type === 'coming-soon' ? 'Soon' : 'Locked';
        const badgeCls = done ? 'badge-done' : isActive ? 'badge-active' : 'badge-locked';
        return `
          <div class="lesson-row ${!isActive && !done ? 'locked' : ''}"
               onclick="App.showLesson('${lesson.id}')"
               role="button" tabindex="${isActive || done ? '0' : '-1'}"
               aria-label="Lesson ${lesson.num}: ${lesson.title}${done ? ' — completed' : ''}">
            <div class="lr-num">${lesson.num}</div>
            <div class="lr-info">
              <div class="lr-title">${lesson.title}</div>
              <div class="lr-sub">${lesson.subtitle}</div>
            </div>
            <div class="lr-badge ${badgeCls}">${badgeLabel}</div>
          </div>`;
      }).join('');
      return `
        <div class="unit-group${ui === 0 ? ' open' : ''}" id="ug-${unit.id}">
          <div class="unit-group-header" onclick="toggleUnit('${unit.id}')" role="button" tabindex="0"
               aria-expanded="${ui === 0 ? 'true' : 'false'}" aria-label="${unit.name}">
            <div class="ugh-num" style="background:${unit.numColor};color:${unit.numText};">${ui + 1}</div>
            <div style="font-size:18px;flex-shrink:0;">${unit.emoji}</div>
            <div class="ugh-info">
              <div class="ugh-name">${unit.name}</div>
              <div class="ugh-meta">${unit.lessons.length} lessons · ${prog.done}/${unit.lessons.length} complete</div>
            </div>
            <div class="ugh-chevron">▼</div>
          </div>
          <div class="unit-lessons">${lessons}</div>
        </div>`;
    }).join('');

    /* keyboard for lesson rows */
    el.querySelectorAll('.lesson-row[tabindex="0"]').forEach(row => {
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') row.click();
      });
    });
  }

  function refreshCurriculum() {
    renderCurriculumPreview();
    if (document.getElementById('screen-curriculum').classList.contains('active')) {
      renderCurriculumList();
    }
  }

  /* ── Global toggle ── */
  window.toggleUnit = function(id) {
    const el = document.getElementById('ug-' + id);
    el.classList.toggle('open');
    const hdr = el.querySelector('.unit-group-header');
    hdr.setAttribute('aria-expanded', el.classList.contains('open') ? 'true' : 'false');
  };

  /* ── Init ── */
  function init() {
    /* Restore score from completed lessons */
    let pts = 0;
    for (const key of Object.keys(state.completed)) {
      pts += (state.completed[key].score || 0);
    }
    state.totalScore = pts;
    document.querySelectorAll('#global-score, #lesson-score-badge').forEach(el => {
      el.textContent = pts + ' pts';
    });
    renderCurriculumPreview();
  }

  document.addEventListener('DOMContentLoaded', init);

  return { showHome, showCurriculum, showLesson, saveCompleted, toast, addScore };
})();
