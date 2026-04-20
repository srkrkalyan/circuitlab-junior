/* ═══════════════════════════════════════════
   DATA.JS — Curriculum Data
   CircuitLab Junior
═══════════════════════════════════════════ */

const CURRICULUM = [
  {
    id: 'u1',
    emoji: '⚡',
    name: 'The Nature of Electricity',
    tagline: 'Atoms, charge & conductors',
    color: '#639922',
    numColor: '#EAF3DE',
    numText: '#27500A',
    lessons: [
      {
        id: 'u1l1',
        num: '1.1',
        title: 'What is Matter Made Of?',
        subtitle: 'Atoms, protons, electrons & conductors',
        type: 'interactive',
        unlocked: true,
        points: 60,
        duration: '30 min',
        chips: ['5 sections', 'Interactive', 'Beginner'],
      },
      { id:'u1l2', num:'1.2', title:'Electric Charge', subtitle:'Positive, negative & attraction rules', type:'coming-soon', unlocked:false, points:60, duration:'25 min', chips:[] },
      { id:'u1l3', num:'1.3', title:'Static Electricity', subtitle:'Friction, induction & lightning', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u1l4', num:'1.4', title:'Electric Fields', subtitle:'Invisible forces around charges', type:'coming-soon', unlocked:false, points:60, duration:'25 min', chips:[] },
      { id:'u1l5', num:'1.5', title:'Conductors, Insulators & Semiconductors', subtitle:'Why materials behave differently', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
    ]
  },
  {
    id: 'u2',
    emoji: '🔋',
    name: 'Voltage, Current & Power',
    tagline: 'The three pillars of every circuit',
    color: '#E65100',
    numColor: '#FFF8E1',
    numText: '#BF360C',
    lessons: [
      { id:'u2l1', num:'2.1', title:'Electric Potential & Voltage', subtitle:'What makes electrons move?', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u2l2', num:'2.2', title:'Electric Current', subtitle:'Flow of charge — DC vs AC', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u2l3', num:'2.3', title:'Resistance', subtitle:'What opposes current flow?', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u2l4', num:'2.4', title:"Ohm's Law — Deep Dive", subtitle:'V = IR mastery', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u2l5', num:'2.5', title:'Electric Power', subtitle:'Watts, energy and your electricity bill', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u2l6', num:'2.6', title:'Energy Sources — Batteries & Cells', subtitle:'EMF, internal resistance & cell types', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
    ]
  },
  {
    id: 'u3',
    emoji: '🧩',
    name: 'Electronic Components',
    tagline: 'Every building block explained',
    color: '#2E7D32',
    numColor: '#E8F5E9',
    numText: '#1B5E20',
    lessons: [
      { id:'u3l1', num:'3.1', title:'Resistors — Types & Color Codes', subtitle:'Reading the color bands', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u3l2', num:'3.2', title:'Capacitors', subtitle:'Storing electric charge', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u3l3', num:'3.3', title:'Inductors & Magnetism', subtitle:"Electricity's magnetic twin", type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u3l4', num:'3.4', title:'Diodes', subtitle:'The one-way street of electronics', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u3l5', num:'3.5', title:'LED, Zener & Special Diodes', subtitle:'Light, regulation & switching', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u3l6', num:'3.6', title:'Switches, Relays & Fuses', subtitle:'Control and protection components', type:'coming-soon', unlocked:false, points:60, duration:'25 min', chips:[] },
    ]
  },
  {
    id: 'u4',
    emoji: '🔗',
    name: 'Circuit Analysis',
    tagline: "Series, parallel & Kirchhoff's Laws",
    color: '#AD1457',
    numColor: '#FCE4EC',
    numText: '#880E4F',
    lessons: [
      { id:'u4l1', num:'4.1', title:'Series Circuits — Complete Mastery', subtitle:'One loop, same current everywhere', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u4l2', num:'4.2', title:'Parallel Circuits', subtitle:'Same voltage, current divides', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u4l3', num:'4.3', title:'Mixed / Combination Circuits', subtitle:'Systematic simplification', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u4l4', num:'4.4', title:"Kirchhoff's Current Law (KCL)", subtitle:'Sum of currents at a node = 0', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u4l5', num:'4.5', title:"Kirchhoff's Voltage Law (KVL)", subtitle:'Sum of voltages in a loop = 0', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u4l6', num:'4.6', title:'The Wheatstone Bridge', subtitle:'Precision measurement circuit', type:'coming-soon', unlocked:false, points:90, duration:'40 min', chips:[] },
    ]
  },
  {
    id: 'u5',
    emoji: '🧲',
    name: 'Magnetism & Electromagnetism',
    tagline: 'Motors, generators & Faraday',
    color: '#4527A0',
    numColor: '#EDE7F6',
    numText: '#311B92',
    lessons: [
      { id:'u5l1', num:'5.1', title:'Magnetic Fields & Poles', subtitle:'Field lines and domain theory', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u5l2', num:'5.2', title:"Oersted's Discovery", subtitle:'Current creates magnetism', type:'coming-soon', unlocked:false, points:60, duration:'30 min', chips:[] },
      { id:'u5l3', num:'5.3', title:"Electromagnetic Induction — Faraday's Law", subtitle:'Changing flux induces EMF', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u5l4', num:'5.4', title:'Transformers', subtitle:'Step-up, step-down & turns ratio', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u5l5', num:'5.5', title:'Motors & Generators', subtitle:"Fleming's rules and DC motors", type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
    ]
  },
  {
    id: 'u6',
    emoji: '📡',
    name: 'Semiconductors & Transistors',
    tagline: 'The tech behind every smartphone',
    color: '#00695C',
    numColor: '#E0F7FA',
    numText: '#004D40',
    lessons: [
      { id:'u6l1', num:'6.1', title:'Semiconductors Revisited', subtitle:'Silicon, germanium & doping', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u6l2', num:'6.2', title:'The P-N Junction in Depth', subtitle:'Depletion layer & forward bias', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u6l3', num:'6.3', title:'The Bipolar Junction Transistor', subtitle:'NPN vs PNP, gain & amplification', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u6l4', num:'6.4', title:'Transistor as Switch & Logic Gates', subtitle:'NOT, AND, OR gates from transistors', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u6l5', num:'6.5', title:'Introduction to Integrated Circuits', subtitle:'555 timer, op-amps & Moore\'s Law', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
    ]
  },
  {
    id: 'u7',
    emoji: '🌊',
    name: 'AC Circuits & Signal Theory',
    tagline: 'Waves, filters & radio signals',
    color: '#BF360C',
    numColor: '#FFF3E0',
    numText: '#BF360C',
    lessons: [
      { id:'u7l1', num:'7.1', title:'Alternating Current — Waveforms', subtitle:'Peak, RMS, frequency & period', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u7l2', num:'7.2', title:'Capacitors in AC Circuits', subtitle:'Reactance and phase relationships', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u7l3', num:'7.3', title:'Inductors in AC Circuits', subtitle:'Inductive reactance & choke coils', type:'coming-soon', unlocked:false, points:70, duration:'35 min', chips:[] },
      { id:'u7l4', num:'7.4', title:'Resonance & LC Circuits', subtitle:'Resonant frequency and radio tuning', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
      { id:'u7l5', num:'7.5', title:'Filters — Low Pass, High Pass, Band Pass', subtitle:'Cutoff frequency & audio systems', type:'coming-soon', unlocked:false, points:80, duration:'40 min', chips:[] },
    ]
  },
  {
    id: 'u8',
    emoji: '🏗',
    name: 'Capstone Projects',
    tagline: 'Design, build, present & compete',
    color: '#6A1B9A',
    numColor: '#F3E5F5',
    numText: '#4A148C',
    lessons: [
      { id:'u8l1', num:'8.1', title:'Project Alpha — Smart Night Light', subtitle:'LDR-controlled auto LED circuit', type:'coming-soon', unlocked:false, points:100, duration:'90 min', chips:[] },
      { id:'u8l2', num:'8.2', title:'Project Beta — AM Radio Receiver', subtitle:'Crystal radio from scratch', type:'coming-soon', unlocked:false, points:100, duration:'90 min', chips:[] },
      { id:'u8l3', num:'8.3', title:'Project Gamma — Electronic Dice', subtitle:'555 timer + decade counter display', type:'coming-soon', unlocked:false, points:100, duration:'90 min', chips:[] },
      { id:'u8l4', num:'8.4', title:'Competition Simulation Day', subtitle:'Full mock exam + circuit challenge', type:'coming-soon', unlocked:false, points:120, duration:'60 min', chips:[] },
    ]
  }
];

/* ── Lesson 1.1 full content ── */
const LESSON_U1L1 = {
  id: 'u1l1',
  tag: 'Unit 1 · Lesson 1 of 5',
  title: 'What is matter <span>made of?</span>',
  desc: 'Discover atoms, electric charge, and why some things carry electricity and others don\'t.',
  chips: ['30 min', '5 sections', 'Interactive', 'Beginner'],
  points: 60,
  sections: ['Wonder', 'Atom explorer', 'Charge', 'Materials game', 'Quiz'],
  keyPoints: [
    'All matter is made of tiny atoms — with a nucleus of protons and neutrons, orbited by electrons.',
    'Protons are positive (+), electrons are negative (−), neutrons have no charge. Opposite charges attract; like charges repel.',
    'A neutral atom has equal numbers of protons and electrons — the charges cancel out.',
    'Valence electrons in the outermost shell determine whether a material conducts electricity.',
    'Conductors (copper) let electrons flow freely. Insulators (rubber) block them. Semiconductors (silicon) are in between.',
  ],
  atoms: [
    { name:'Hydrogen',  sym:'H',  p:1,  n:0,  e:1,  shells:[1],       color:'#F09595', type:'nonmetal',    note:'1 valence electron — lightest element, forms water!' },
    { name:'Carbon',    sym:'C',  p:6,  n:6,  e:6,  shells:[2,4],     color:'#B4B2A9', type:'nonmetal',    note:'4 valence electrons — the basis of all life on Earth.' },
    { name:'Copper',    sym:'Cu', p:29, n:35, e:29, shells:[2,8,18,1], color:'#EF9F27', type:'conductor',   note:'1 valence electron — roams freely, excellent conductor!' },
    { name:'Silicon',   sym:'Si', p:14, n:14, e:14, shells:[2,8,4],   color:'#AFA9EC', type:'semiconductor',note:'4 valence electrons — the heart of every computer chip.' },
    { name:'Neon',      sym:'Ne', p:10, n:10, e:10, shells:[2,8],     color:'#9FE1CB', type:'noble gas',   note:'8 valence electrons — full shell, won\'t react with anything.' },
  ],
  materials: [
    { name:'Copper wire',    emoji:'🔶', type:'c' },
    { name:'Rubber glove',   emoji:'🟤', type:'i' },
    { name:'Silicon chip',   emoji:'💜', type:'s' },
    { name:'Glass rod',      emoji:'🔷', type:'i' },
    { name:'Silver spoon',   emoji:'⚪', type:'c' },
    { name:'Plastic ruler',  emoji:'🟡', type:'i' },
    { name:'Germanium',      emoji:'🔮', type:'s' },
    { name:'Aluminium foil', emoji:'⬜', type:'c' },
    { name:'Wood block',     emoji:'🟫', type:'i' },
    { name:'Gold wire',      emoji:'🟠', type:'c' },
    { name:'Diamond',        emoji:'💎', type:'i' },
    { name:'Graphene',       emoji:'⬛', type:'c' },
  ],
  questions: [
    {
      q: 'What are the three particles that make up every atom?',
      opts: ['Protons, electrons, neutrons', 'Electrons, photons, neutrons', 'Quarks, bosons, leptons', 'Protons, neurons, ions'],
      ans: 0,
      ok: '✅ Correct! Protons (positive), neutrons (neutral) and electrons (negative) are the three particles inside every atom.',
      no: '❌ The three particles are protons (positive charge), neutrons (no charge), and electrons (negative charge).',
    },
    {
      q: 'A neutral atom has 8 protons. How many electrons does it have?',
      opts: ['16', '4', '8', '0'],
      ans: 2,
      ok: '✅ Exactly right! A neutral atom has equal numbers of protons and electrons — 8 protons = 8 electrons.',
      no: '❌ A neutral atom has EQUAL protons and electrons. So 8 protons means 8 electrons — the charges cancel perfectly.',
    },
    {
      q: 'Two electrons are placed near each other. What happens?',
      opts: ['They attract strongly', 'They do nothing', 'They repel each other', 'They merge into one'],
      ans: 2,
      ok: '✅ Yes! Like charges always repel. Both electrons carry negative charge, so they push each other away.',
      no: '❌ Like charges repel! Both electrons are negative (−), so they push each other away — they never attract.',
    },
    {
      q: 'Which of these materials is the BEST conductor of electricity?',
      opts: ['Rubber band', 'Dry wood', 'Plastic cup', 'Copper wire'],
      ans: 3,
      ok: '✅ Spot on! Copper has just 1 valence electron, which can move freely — making it one of the best conductors.',
      no: '❌ Copper wire is the conductor. Rubber, wood, and plastic are insulators — their electrons are tightly held.',
    },
    {
      q: 'Valence electrons are in an atom\'s outermost shell. Why do they matter for electricity?',
      opts: ['They create heat', 'They can break free and flow, creating electric current', 'They hold the nucleus together', 'They make the atom heavier'],
      ans: 1,
      ok: '✅ Perfect! Valence electrons can break free and drift between atoms — and that drift IS electric current.',
      no: '❌ Valence electrons can break free and flow between atoms. That movement of electrons IS electric current!',
    },
    {
      q: 'Silicon is used in almost all computer chips. What type of material is it?',
      opts: ['A conductor', 'An insulator', 'A semiconductor', 'A superconductor'],
      ans: 2,
      ok: '✅ Excellent! Silicon is a semiconductor — its controllable conductivity makes it perfect for chips.',
      no: '❌ Silicon is a semiconductor. This in-between property — controllable conductivity — is what makes it so useful.',
    },
  ],
};
