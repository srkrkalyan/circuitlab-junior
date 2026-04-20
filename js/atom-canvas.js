/* ═══════════════════════════════════════════
   ATOM-CANVAS.JS — Animated atom diagram
   CircuitLab Junior
═══════════════════════════════════════════ */

const AtomCanvas = (() => {
  let canvas = null;
  let ctx = null;
  let atoms = [];
  let selIdx = 2;
  let angle = 0;
  let raf = null;
  let W = 360, H = 220;

  function reset() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    canvas = null; ctx = null; atoms = []; selIdx = 2; angle = 0;
  }

  function init(canvasId, atomData) {
    atoms = atomData;
    canvas = document.getElementById(canvasId);
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    loop();
    updateInfo();
    updateButtons();
  }

  function resize() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    const maxW = Math.min(parent.clientWidth, 400);
    const ratio = maxW / 360;
    W = maxW;
    H = Math.round(220 * ratio);
    canvas.width = W;
    canvas.height = H;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
  }

  function loop() {
    draw();
    angle += 0.012;
    raf = requestAnimationFrame(loop);
  }

  function draw() {
    if (!ctx) return;
    const cx = W / 2, cy = H / 2;
    const scl = Math.min(W / 360, H / 220);

    ctx.clearRect(0, 0, W, H);

    /* Background */
    ctx.fillStyle = '#0d1b2a';
    ctx.fillRect(0, 0, W, H);

    const a = atoms[selIdx];
    const shells = a.shells;
    const baseR = [0, 42, 70, 94, 114];
    const radii = baseR.map(r => r * scl);

    /* Shells */
    shells.forEach((eCount, si) => {
      const r = radii[si + 1];
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      const speed = 1.4 - si * 0.28;
      for (let e = 0; e < eCount; e++) {
        const ea = angle * speed + (2 * Math.PI * e / eCount);
        const ex = cx + r * Math.cos(ea);
        const ey = cy + r * Math.sin(ea);
        const isValence = si === shells.length - 1;
        const eR = isValence ? 5 * scl : 4 * scl;

        /* Glow-ish ring for valence */
        if (isValence) {
          ctx.beginPath();
          ctx.arc(ex, ey, eR + 2.5 * scl, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(55,138,221,0.18)';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(ex, ey, eR, 0, Math.PI * 2);
        ctx.fillStyle = isValence ? '#378ADD' : '#85B7EB';
        ctx.fill();
      }
    });

    /* Nucleus */
    const nucR = (shells.length > 2 ? 22 : 18) * scl;
    ctx.beginPath();
    ctx.arc(cx, cy, nucR, 0, Math.PI * 2);
    ctx.fillStyle = a.color + '28';
    ctx.fill();
    ctx.strokeStyle = a.color;
    ctx.lineWidth = 2 * scl;
    ctx.stroke();

    /* Symbol */
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${Math.round(14 * scl)}px Nunito,sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(a.sym, cx, cy - 3 * scl);

    /* Name */
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = `${Math.round(9.5 * scl)}px Nunito,sans-serif`;
    ctx.fillText(a.name, cx, cy + 10 * scl);

    /* Legend */
    ctx.beginPath();
    ctx.arc(W - 14 * scl, H - 16 * scl, 4 * scl, 0, Math.PI * 2);
    ctx.fillStyle = '#378ADD';
    ctx.fill();
    ctx.fillStyle = 'rgba(55,138,221,0.55)';
    ctx.font = `${Math.round(9 * scl)}px Nunito,sans-serif`;
    ctx.textAlign = 'right';
    ctx.fillText('electrons', W - 20 * scl, H - 14 * scl);
  }

  function select(idx) {
    selIdx = idx;
    updateInfo();
    updateButtons();
  }

  function updateInfo() {
    const a = atoms[selIdx];
    const p = document.getElementById('aic-p');
    const n = document.getElementById('aic-n');
    const e = document.getElementById('aic-e');
    const f = document.getElementById('atom-footer');
    if (p) p.textContent = a.p;
    if (n) n.textContent = a.n;
    if (e) e.textContent = a.e;
    if (f) f.textContent = a.note || '';
  }

  function updateButtons() {
    document.querySelectorAll('.atom-btn').forEach((btn, i) => {
      const active = i === selIdx;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  return { init, select, reset };
})();
