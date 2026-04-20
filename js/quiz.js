/* ═══════════════════════════════════════════
   QUIZ.JS — Quiz engine
   CircuitLab Junior
═══════════════════════════════════════════ */

const Quiz = (() => {
  let questions = [];
  let qIdx = 0;
  let score = 0;
  let answered = false;

  function reset() { questions = []; qIdx = 0; score = 0; answered = false; }

  function start(qs) {
    questions = qs;
    qIdx = 0;
    score = 0;
    answered = false;
    render();
  }

  function render() {
    const area = document.getElementById('quiz-area');
    if (!area || !questions.length) return;
    answered = false;
    const q = questions[qIdx];
    const optsHtml = q.opts.map((o, i) =>
      `<button class="qopt" onclick="Quiz.pick(${i})" aria-label="Option ${i + 1}: ${o}">${o}</button>`
    ).join('');

    const progressPct = Math.round((qIdx / questions.length) * 100);

    area.innerHTML = `
      <div class="progress-wrap" aria-label="Quiz progress">
        <div class="progress-fill" style="width:${progressPct}%"></div>
      </div>
      <div class="quiz-card">
        <div class="quiz-meta">Question ${qIdx + 1} of ${questions.length} &nbsp;·&nbsp; Score: ${score}</div>
        <div class="quiz-q" id="quiz-question">${q.q}</div>
        <div class="quiz-opts" role="group" aria-label="Answer options">${optsHtml}</div>
        <div class="quiz-feedback" id="quiz-fb" role="alert"></div>
      </div>`;

    /* keyboard on options */
    area.querySelectorAll('.qopt').forEach((btn, i) => {
      btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') Quiz.pick(i); });
    });
  }

  function pick(i) {
    if (answered) return;
    answered = true;
    const q = questions[qIdx];
    const btns = document.querySelectorAll('.qopt');
    btns.forEach(b => b.disabled = true);
    const correct = i === q.ans;

    btns[i].classList.add(correct ? 'correct' : 'wrong');
    if (!correct) btns[q.ans].classList.add('correct');

    if (correct) score++;

    const fb = document.getElementById('quiz-fb');
    if (fb) {
      fb.className = 'quiz-feedback show ' + (correct ? 'ok' : 'no');
      fb.textContent = correct ? q.ok : q.no;
    }

    /* Auto-advance after delay, or show next button */
    const area = document.getElementById('quiz-area');
    const navDiv = document.createElement('div');
    navDiv.className = 'lesson-nav';
    navDiv.style.marginTop = '14px';
    const isLast = qIdx >= questions.length - 1;
    navDiv.innerHTML = `
      <div></div>
      <div class="nav-prog">${correct ? 'Great job!' : 'Keep going!'}</div>
      <button class="btn-dark" onclick="Quiz.next()" aria-label="${isLast ? 'See results' : 'Next question'}">
        ${isLast ? 'See results ✓' : 'Next question →'}
      </button>`;
    area.appendChild(navDiv);
  }

  function next() {
    qIdx++;
    if (qIdx >= questions.length) {
      LessonEngine.showSummary(score, questions.length);
    } else {
      render();
    }
  }

  return { reset, start, pick, next };
})();
