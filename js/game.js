/* ═══════════════════════════════════════════
   GAME.JS — Sorting game + charge demo
   CircuitLab Junior
═══════════════════════════════════════════ */

const SortGame = (() => {
  let category = null;
  let picks = {};
  let correct = 0;

  const typeLabel = { c: 'Conductor', i: 'Insulator', s: 'Semiconductor' };
  const correctClass = { c: 'correct-c', i: 'correct-i', s: 'correct-s' };
  const typeEmoji = { c: '✓ Conductor', i: '✓ Insulator', s: '✓ Semiconductor' };

  function reset() {
    category = null;
    picks = {};
    correct = 0;
  }

  function setCategory(cat) {
    category = cat;
    ['c', 'i', 's'].forEach(c => {
      const btn = document.getElementById('sbtn-' + c);
      if (btn) {
        btn.classList.toggle('active', c === cat);
        btn.setAttribute('aria-pressed', c === cat ? 'true' : 'false');
      }
    });
    const score = document.getElementById('game-score-bar');
    if (score) score.textContent = `Selected: ${typeLabel[cat]} — now tap materials to classify them.`;
  }

  function pick(idx) {
    if (!category) {
      App.toast('Pick a category first — Conductor, Insulator, or Semiconductor!');
      return;
    }
    if (picks[idx] !== undefined) return; /* already classified */

    const tile = document.getElementById('mat-' + idx);
    const tag  = document.getElementById('mat-tag-' + idx);
    const mat  = LESSON_U1L1.materials[idx];
    const isCorrect = category === mat.type;

    picks[idx] = isCorrect;
    if (isCorrect) correct++;

    tile.classList.add('classified');

    if (isCorrect) {
      tile.classList.add(correctClass[mat.type]);
      if (tag) { tag.textContent = typeEmoji[mat.type]; tag.style.display = 'block'; }
    } else {
      tile.classList.add('wrong-ans');
      if (tag) {
        tag.textContent = `✗ It's a ${typeLabel[mat.type]}`;
        tag.style.color = '#D85A30';
        tag.style.display = 'block';
      }
      setTimeout(() => tile.classList.remove('wrong-ans'), 400);
    }

    const done = Object.keys(picks).length;
    const total = LESSON_U1L1.materials.length;
    const score = document.getElementById('game-score-bar');
    if (score) {
      score.textContent = done < total
        ? `Score: ${correct} / ${done} sorted correctly — ${total - done} to go!`
        : `All done! Final score: ${correct} / ${total} correct. Great work!`;
    }

    /* keyboard: update tabindex */
    if (tile) tile.setAttribute('tabindex', '-1');
  }

  /* ── Charge pair tap ── */
  let chargeTimers = new WeakMap();

  function chargeTap(el, type, msg) {
    const result = el.querySelector('.cp-result');
    if (!result) return;

    el.classList.add('result-show');
    result.textContent = msg;
    result.style.color = type === 'attract' ? '#3B6D11' : '#8b0000';

    /* Clear previous timer for this element */
    if (chargeTimers.has(el)) clearTimeout(chargeTimers.get(el));
    const t = setTimeout(() => {
      el.classList.remove('result-show');
      result.textContent = '';
    }, 2600);
    chargeTimers.set(el, t);
  }

  return { reset, setCategory, pick, chargeTap };
})();
