# ⚡ CircuitLab Junior

> An interactive electronics curriculum for ages 10–15. Free, no login required.

**Live Demo:** TBD

---

## What is this?

CircuitLab Junior is a browser-based educational app covering the fundamentals of electronics — atoms, charge, voltage, current, components, circuits, semiconductors and more. It's built for students aged 10–15 and is designed to prepare them for science competitions like NSEJS, NTSE, Science Olympiad, and IPhO Junior.

### Features

- ⚡ **8 units, 42 lessons** across the full electronics curriculum
- 🔬 **Interactive atom explorer** — animated, selectable elements
- 🎮 **Sorting game** — classify conductors, insulators & semiconductors
- 📝 **6-question quiz** per lesson with instant detailed feedback
- 📊 **Score tracking** persisted in localStorage
- 🌓 **Dark mode** — automatic, follows system preference
- 📱 **Fully responsive** — works perfectly on mobile, tablet, and desktop
- ♿ **Accessible** — ARIA labels, keyboard navigation, focus indicators, reduced motion

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| HTML | Semantic HTML5, no framework |
| CSS | Vanilla CSS with custom properties (variables) |
| JavaScript | Vanilla ES6+, modular IIFE pattern, no build step |
| Fonts | Google Fonts (Nunito + Space Mono) |
| Graphics | HTML5 Canvas API + inline SVG |
| Persistence | localStorage |
| Hosting | GitHub Pages (static) |

**Zero dependencies. Zero build tools. Zero server.**

---

## Project Structure

```
circuitlab-junior/
├── index.html              # App shell & entry point
├── css/
│   ├── base.css            # Design tokens, reset, typography
│   ├── components.css      # All UI components
│   └── responsive.css      # Mobile-first breakpoints
├── js/
│   ├── data.js             # All curriculum & lesson content
│   ├── app.js              # Screen router, state, scoring
│   ├── lesson-engine.js    # Renders lesson sections & stepper
│   ├── atom-canvas.js      # Animated atom diagram (Canvas)
│   ├── quiz.js             # Quiz engine
│   └── game.js             # Sorting game & interactions
└── README.md
```

---

## Deploying to GitHub Pages

### Option 1 — Automatic (recommended)

1. Fork or upload this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)` folder
4. Click **Save**
5. Your app will be live at `https://yourusername.github.io/circuitlab-junior` within 1–2 minutes

### Option 2 — GitHub CLI

```bash
# Clone and push
git clone https://github.com/yourusername/circuitlab-junior.git
cd circuitlab-junior

# Enable GitHub Pages via CLI
gh repo create circuitlab-junior --public --source=. --push
gh api repos/:owner/:repo/pages -X POST -f source.branch=main -f source.path=/
```

### Option 3 — Local development

No build step needed — just open `index.html` in any browser:

```bash
# With Python (any modern system)
python3 -m http.server 8080
# Open http://localhost:8080

# With Node.js npx
npx serve .
# Open http://localhost:3000

# Or just double-click index.html
# Note: Canvas & localStorage work best with a local server
```

---

## Adding New Lessons

1. **Add lesson data** to `js/data.js` — follow the `LESSON_U1L1` object structure
2. **Create a render module** in `js/` (or extend `lesson-engine.js`)
3. **Set `unlocked: true`** and `type: 'interactive'` in the CURRICULUM array for the lesson
4. **Register the data** in `LessonEngine.load()` with an `if (id === 'u1l2')` branch

Each lesson needs:
- `tag`, `title`, `desc`, `chips`
- `sections[]` — array of step names
- `keyPoints[]` — summary bullet points
- `questions[]` — array of `{ q, opts, ans, ok, no }`
- Custom content data (atoms, materials, etc.)

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| Mobile S | < 480px | Single column, stepper labels hidden |
| Mobile M | 480–639px | 2-column quiz options hidden, labels hidden |
| Tablet | 640–1023px | 3-column curriculum preview |
| Desktop | 1024px+ | Full layout, labels visible |
| Wide | 1280px+ | Max width 800px centred |

All touch targets are at least 44×44px (Apple HIG / WCAG 2.5.5).

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome / Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari (iOS 15+) | ✅ Full |
| Samsung Internet | ✅ Full |
| IE 11 | ❌ Not supported |

---

## License

MIT — free to use, fork, and extend for educational purposes.

---

## Curriculum Overview

| Unit | Topic | Lessons |
|------|-------|---------|
| 1 | The Nature of Electricity | 5 |
| 2 | Voltage, Current & Power | 6 |
| 3 | Electronic Components | 6 |
| 4 | Circuit Analysis | 6 |
| 5 | Magnetism & Electromagnetism | 5 |
| 6 | Semiconductors & Transistors | 5 |
| 7 | AC Circuits & Signal Theory | 5 |
| 8 | Capstone Projects | 4 |

**Total: 42 lessons · ~24 hours of learning**

---

*Built with ❤️ for young engineers everywhere.*
