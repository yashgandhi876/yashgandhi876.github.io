import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

/* ─── Data ──────────────────────────────────────────── */
const EXPERIENCE = [
  {
    role: 'Full Stack Java Developer',
    company: 'Mthree – Mastercard Client',
    period: 'May 2025 – Present',
    location: 'Pune, India',
    badge: 'Present',
    points: [
      'Engineering high-scale features on the Mastercard Payment Gateway — one of the world\'s largest payment processing platforms handling billions of transactions.',
      'Building and maintaining robust Java/Spring Boot microservices powering real-time payment authorization, routing, and settlement flows.',
      'Collaborating with global Mastercard engineering teams to deliver zero-downtime deployments on mission-critical financial infrastructure.',
    ],
  },
  {
    role: 'Full-Stack Java Developer',
    company: 'Credit Suisse | A UBS Group Company',
    period: 'Oct 2021 – May 2025',
    location: 'Pune, India',
    badge: '3.5 yrs',
    points: [
      'Enhanced UI performance via lazy loading, React Hooks and component-level rendering — faster load times, better UX.',
      'Built reusable AgGrid components, reducing code duplication by 20%.',
      'Replaced manual email-based campaign tracking with a streamlined web application.',
      'Delivered a critical end-to-end module ahead of schedule, cutting manual RM/ARM effort by 90%.',
      'Designed a real-time collateral monitoring application for asset (stock) tracking and risk management.',
      'Automated AVRO .avsc schema generation via IDL — eliminated manual processes, saved 80% dev time.',
      'Implemented Cypress E2E testing and CI/CD pipeline in GitLab — 40% fewer deployment errors.',
      'Automated Excel reports with Apache POI — reduced manual workload by 90%.',
      'Engineered OpenShift pod restart solution — lowered operational costs by 15%.',
    ],
  },
  {
    role: 'Intern – UI Developer',
    company: 'Cuelogic, An LTIMindtree Company',
    period: 'Apr 2021 – Sep 2021',
    location: 'Pune, India',
    badge: 'Intern',
    points: ['Created UI for internal tools using HTML, CSS, and vanilla JavaScript.'],
  },
];

const SKILLS = [
  {
    house: 'Gryffindor',
    category: 'Frontend',
    colors: { primary: '#740001', secondary: '#f0a500', bg: 'rgba(116,0,1,0.12)' },
    animal: 'Lion',
    animalEmoji: '🦁',
    motto: 'Courage to build beautiful things',
    items: ['React', 'Redux', 'TypeScript', 'JavaScript', 'RxJS', 'Jest', 'React Testing Library', 'HTML', 'CSS'],
  },
  {
    house: 'Slytherin',
    category: 'Backend',
    colors: { primary: '#1a472a', secondary: '#aaaaaa', bg: 'rgba(26,71,42,0.15)' },
    animal: 'Serpent',
    animalEmoji: '🐍',
    motto: 'Cunning solutions, scalable systems',
    items: ['Java', 'Kotlin', 'Spring Boot', 'Spring Security', 'Microservices', 'JPA / Hibernate', 'REST APIs', 'Oracle SQL', 'PostgreSQL'],
  },
  {
    house: 'Ravenclaw',
    category: 'DevOps & Tools',
    colors: { primary: '#0e1a40', secondary: '#946b2d', bg: 'rgba(14,26,64,0.2)' },
    animal: 'Eagle',
    animalEmoji: '🦅',
    motto: 'Wisdom in automation & deployment',
    items: ['Git', 'GitLab CI/CD', 'Docker', 'OpenShift', 'Apache Kafka', 'Cypress', 'Apache POI', 'JUnit 5', 'Mockito'],
  },
];

const PROJECTS = [
  {
    name: 'Portfolio in React',
    number: 'I',
    icon: '⚡',
    rarity: 'Legendary',
    desc: 'A personal portfolio to showcase skills and projects — built with React, JavaScript, Bootstrap, HTML & CSS.',
    link: 'https://yashgandhi876.github.io/',
    tags: ['React', 'JS', 'CSS'],
  },
  {
    name: 'MESCOE Alumni Portal',
    number: 'II',
    icon: '🏰',
    rarity: 'Rare',
    desc: 'Designed and developed the alumni portal for MES College of Engineering, Pune. Vanilla JS, HTML & Bootstrap.',
    link: 'http://mescoepune.org/alumni/',
    tags: ['JS', 'HTML', 'Bootstrap'],
  },
  {
    name: 'Tic-Tac-Toe Game',
    number: 'III',
    icon: '✦',
    rarity: 'Common',
    desc: 'Classic Tic-Tac-Toe implemented with HTML, CSS and JavaScript — playable in the browser.',
    link: 'https://yashgandhi876.github.io/tictactoe/',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'Calculator (React)',
    number: 'IV',
    icon: '🔮',
    rarity: 'Common',
    desc: 'A clean, functional calculator built with React and JavaScript.',
    link: 'https://yashgandhi876.github.io/Calculator/',
    tags: ['React', 'JS'],
  },
  {
    name: 'Antakshari Bot',
    number: 'V',
    icon: '🧙',
    rarity: 'Rare',
    desc: 'Python Antakshari game with an unbeatable bot — human memory cannot keep up.',
    link: 'https://github.com/yashgandhi876/Antakshri_Game_With_Bot',
    tags: ['Python', 'CLI'],
  },
  {
    name: 'Snake & Ladder',
    number: 'VI',
    icon: '🐍',
    rarity: 'Common',
    desc: 'Classic Snake and Ladder implemented in both C and Python — playable on the terminal.',
    link: 'https://github.com/yashgandhi876/Snake-Ladder-Game',
    tags: ['C', 'Python'],
  },
];

const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Airbus Aerothon 3.0', desc: 'Winner of the global Airbus hackathon for innovative software solution.' },
  { icon: '💻', title: '340+ LeetCode Problems', desc: 'Consistently solved algorithmic challenges on LeetCode.' },
  { icon: '🌍', title: 'Credit Suisse Global Challenge', desc: 'Secured 616th rank worldwide out of 18,000 participants (2020).' },
];

/* ─── Starfield ─────────────────────────────────────── */
const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${(Math.random() * 6).toFixed(2)}s`,
  dur: `${(2 + Math.random() * 4).toFixed(2)}s`,
  size: Math.random() > 0.88 ? '3px' : Math.random() > 0.6 ? '2px' : '1.5px',
  opacity: (0.15 + Math.random() * 0.5).toFixed(2),
}));

/* ─── HP SVG Icons ──────────────────────────────────── */
const DeathlyHallows = ({ size = 80, className = '', style = {} }) => (
  <svg viewBox="0 0 100 115" width={size} height={size} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 8 L92 98 L8 98 Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"/>
    <circle cx="50" cy="72" r="18" fill="none" stroke="currentColor" strokeWidth="3.5"/>
    <line x1="50" y1="8" x2="50" y2="98" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);

const GoldenSnitch = ({ size = 60, className = '', style = {} }) => (
  <svg viewBox="0 0 120 80" width={size} height={size} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="40" rx="28" ry="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85"/>
    <ellipse cx="22" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <ellipse cx="92" cy="40" rx="28" ry="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85"/>
    <ellipse cx="98" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="60" cy="40" r="14" fill="currentColor" opacity="0.9"/>
    <circle cx="55" cy="35" r="4" fill="white" opacity="0.3"/>
    <path d="M48 36 Q60 26 72 36" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
    <path d="M48 44 Q60 54 72 44" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"/>
  </svg>
);

const Broomstick = ({ size = 110, className = '', style = {} }) => (
  <svg viewBox="0 0 200 60" width={size} height={size * 0.3} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="26" width="148" height="8" rx="4" fill="url(#broomGrad2)"/>
    <path d="M148 14 L200 20 L200 40 L148 46 Z" fill="currentColor" opacity="0.7"/>
    <rect x="144" y="18" width="10" height="24" rx="2" fill="#8B4513" opacity="0.8"/>
    <path d="M148 34 Q160 48 170 55" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <path d="M148 34 Q165 50 180 52" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <defs>
      <linearGradient id="broomGrad2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8B6914"/>
        <stop offset="50%" stopColor="#c9a227"/>
        <stop offset="100%" stopColor="#8B4513"/>
      </linearGradient>
    </defs>
  </svg>
);

const ElderWand = ({ size = 90, className = '', style = {} }) => (
  <svg viewBox="0 0 20 180" width={size / 4} height={size} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="0" width="6" height="150" rx="3" fill="url(#elderGrad2)"/>
    <circle cx="10" cy="12" r="5" fill="#3d2b1f"/>
    <circle cx="10" cy="28" r="3.5" fill="#3d2b1f"/>
    <circle cx="10" cy="42" r="2.5" fill="#3d2b1f"/>
    <circle cx="10" cy="4" r="3" fill="var(--hp-gold)" opacity="0.95"/>
    <circle cx="10" cy="4" r="5" fill="var(--hp-gold)" opacity="0.2"/>
    <path d="M7 150 L10 180 L13 150" fill="#2a1a0a"/>
    <defs>
      <linearGradient id="elderGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c9a227"/>
        <stop offset="30%" stopColor="#5a3a1a"/>
        <stop offset="100%" stopColor="#2a1a0a"/>
      </linearGradient>
    </defs>
  </svg>
);

const PhilosophersStone = ({ size = 48, className = '', style = {} }) => (
  <svg viewBox="0 0 80 90" width={size} height={size} className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <polygon points="40,5 75,30 65,80 15,80 5,30" fill="url(#stoneGrad2)" stroke="currentColor" strokeWidth="2"/>
    <polygon points="40,5 75,30 40,40" fill="rgba(255,255,255,0.15)"/>
    <polygon points="40,5 5,30 40,40" fill="rgba(255,255,255,0.05)"/>
    <ellipse cx="40" cy="35" rx="10" ry="8" fill="rgba(255,100,100,0.4)"/>
    <defs>
      <radialGradient id="stoneGrad2" cx="40%" cy="30%">
        <stop offset="0%" stopColor="#ff6b6b"/>
        <stop offset="40%" stopColor="#c0392b"/>
        <stop offset="100%" stopColor="#7b0e0e"/>
      </radialGradient>
    </defs>
  </svg>
);

/* Hogwarts Crest SVG */
const HogwartsCrest = ({ size = 100 }) => (
  <svg viewBox="0 0 200 240" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
    {/* Shield outer */}
    <path d="M100 10 L190 10 L190 170 Q190 220 100 235 Q10 220 10 170 L10 10 Z"
      fill="url(#crestBg)" stroke="#c9a227" strokeWidth="3"/>
    {/* Dividers */}
    <line x1="100" y1="10" x2="100" y2="235" stroke="#c9a227" strokeWidth="2" opacity="0.8"/>
    <line x1="10" y1="120" x2="190" y2="120" stroke="#c9a227" strokeWidth="2" opacity="0.8"/>
    {/* Quadrant backgrounds */}
    <path d="M10 10 L100 10 L100 120 L10 120 Z" fill="rgba(116,0,1,0.7)"/>
    <path d="M100 10 L190 10 L190 120 L100 120 Z" fill="rgba(14,26,64,0.7)"/>
    <path d="M10 120 L100 120 L100 210 Q55 225 10 210 Z" fill="rgba(26,71,42,0.7)"/>
    <path d="M100 120 L190 120 L190 210 Q145 225 100 210 Z" fill="rgba(50,30,0,0.7)"/>
    {/* Quadrant symbols */}
    <text x="55" y="78" textAnchor="middle" fontSize="36" fill="#f0a500">🦁</text>
    <text x="145" y="78" textAnchor="middle" fontSize="36" fill="#c9d8e8">🦅</text>
    <text x="55" y="175" textAnchor="middle" fontSize="36" fill="#aaaaaa">🐍</text>
    <text x="145" y="175" textAnchor="middle" fontSize="36" fill="#f5deb3">🦡</text>
    {/* H in center */}
    <circle cx="100" cy="120" r="22" fill="#0d0a1a" stroke="#c9a227" strokeWidth="2"/>
    <text x="100" y="128" textAnchor="middle" fontSize="26" fontFamily="serif" fontWeight="bold" fill="#c9a227">H</text>
    {/* Banner */}
    <path d="M30 205 L170 205 L170 220 L100 230 L30 220 Z" fill="#c9a227" opacity="0.9"/>
    <text x="100" y="217" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#0d0a1a" fontWeight="bold" letterSpacing="1">DRACO DORMIENS</text>
    <defs>
      <linearGradient id="crestBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a0a2e"/>
        <stop offset="100%" stopColor="#0d0a1a"/>
      </linearGradient>
    </defs>
  </svg>
);

/* House Shield SVG */
const HouseShield = ({ color1, color2, emoji, size = 56 }) => (
  <svg viewBox="0 0 100 120" width={size} height={size * 1.2} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 L95 5 L95 80 Q95 112 50 118 Q5 112 5 80 L5 5 Z"
      fill={`${color1}cc`} stroke="#c9a227" strokeWidth="2.5"/>
    <text x="50" y="72" textAnchor="middle" fontSize="38">{emoji}</text>
  </svg>
);

/* ─── Sub-components ────────────────────────────────── */
function SectionHeader({ chapter, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 52 }}>
      <span className="chapter-label">{chapter}</span>
      <h2 className="section-heading">{title}</h2>
      {subtitle && (
        <p style={{ color: 'var(--hp-muted)', fontFamily: 'var(--font-body)', fontSize: '1rem', marginTop: 8, fontStyle: 'italic' }}>
          {subtitle}
        </p>
      )}
      <div className="ornament" style={{ marginTop: 16 }}>✦</div>
    </div>
  );
}

/* Chocolate Frog Card (3D flip) */
function FrogCard({ proj }) {
  const rarityColor = { Legendary: '#f0d060', Rare: '#c9a227', Common: 'rgba(201,162,39,0.5)' };
  return (
    <div className="frog-card">
      <div className="frog-card__inner">
        {/* Front */}
        <div className="frog-card__front">
          <div className="frog-card__frame">
            <div className="frog-card__top">
              <span className="frog-card__num">No. {proj.number}</span>
              <span className="frog-card__rarity" style={{ color: rarityColor[proj.rarity] }}>{proj.rarity}</span>
            </div>
            <div className="frog-card__icon">{proj.icon}</div>
            <div className="frog-card__title">{proj.name}</div>
            <div className="frog-card__tags">
              {proj.tags.map(t => <span key={t} className="frog-card__tag">{t}</span>)}
            </div>
            <div className="frog-card__hint">hover to reveal ✦</div>
          </div>
        </div>
        {/* Back */}
        <div className="frog-card__back">
          <div className="frog-card__frame frog-card__frame--back">
            <div className="frog-card__back-title">{proj.name}</div>
            <p className="frog-card__desc">{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="frog-card__link">
              Cast Accio →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────── */
class Home extends Component {
  state = { letterProgress: 0 };

  componentDidMount() {
    // Scroll reveal for section cards
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Scroll-lock letter animation
    this._letterEl = document.getElementById('hogwarts-letter');
    if (this._letterEl) {
      this._locked     = false;
      this._totalDelta = 1200;
      this._wheelAccum = 0;

      this._onWheel = (e) => {
        if (!this._letterEl) return;
        const rect = this._letterEl.getBoundingClientRect();
        const vh   = window.innerHeight;

        // Engage going DOWN: letter entering from bottom, not yet open
        const engageDown = !this._locked && e.deltaY > 0
          && rect.top <= vh * 0.6 && rect.top > -100
          && this.state.letterProgress < 1;

        // Engage going UP: letter coming back into view, partially/fully open
        const engageUp = !this._locked && e.deltaY < 0
          && rect.top >= -this._letterEl.offsetHeight * 0.5 && rect.top < vh * 0.7
          && this.state.letterProgress > 0;

        if (engageDown || engageUp) {
          this._locked     = true;
          this._wheelAccum = this.state.letterProgress * this._totalDelta;
        }

        if (this._locked) {
          e.preventDefault();
          this._wheelAccum = Math.max(0, Math.min(this._totalDelta, this._wheelAccum + e.deltaY));
          const p = this._wheelAccum / this._totalDelta;
          this.setState({ letterProgress: p });

          if (p >= 1 && e.deltaY > 0) this._locked = false; // fully open → resume scroll down
          if (p <= 0 && e.deltaY < 0) this._locked = false; // fully closed → resume scroll up
        }
      };

      window.addEventListener('wheel', this._onWheel, { passive: false });
    }
  }

  componentWillUnmount() {
    if (this._onWheel) window.removeEventListener('wheel', this._onWheel);
  }

  render() {
    const { letterProgress: lp } = this.state;

    // ── Scroll-driven letter animation ──────────────────
    // Phase 1 (0 → 0.3):  wax seal fades out
    const sealOpacity      = Math.max(0, 1 - lp * 3.33);
    const sealScale        = 0.8 + sealOpacity * 0.2;
    // Phase 2 (0.05 → 0.55): flap opens (0 → 170 deg)
    const flapDeg          = Math.min(170, Math.max(0, (lp - 0.05) / 0.5) * 170);
    // Phase 3 (0 → 0.4): sealed face fades out (no height collapse)
    const sealedOpacity    = Math.max(0, 1 - lp * 2.5);
    // Phase 4 (0.35 → 1): inner content fades + rises
    const contentOpacity   = Math.min(1, Math.max(0, (lp - 0.35) / 0.65));
    const contentTranslate = Math.round((1 - contentOpacity) * 16);
    return (
      <div className="hp-home">

        {/* Starfield */}
        <div className="starfield" aria-hidden="true">
          {STARS.map(s => (
            <span key={s.id} className="star-dot" style={{
              top: s.top, left: s.left, width: s.size, height: s.size,
              animationDelay: s.delay, animationDuration: s.dur, opacity: s.opacity,
            }} />
          ))}
        </div>

        {/* ════ CHAPTER I — Hero ════ */}
        <section id="hero" className="hp-hero">
          <DeathlyHallows size={120} className="hp-float-deco deco-hallows"
            style={{ position:'absolute', top:'12%', right:'6%', color:'rgba(201,162,39,0.18)' }}/>
          <GoldenSnitch size={70} className="hp-float-deco deco-snitch"
            style={{ position:'absolute', top:'20%', left:'5%', color:'#c9a227' }}/>
          <Broomstick size={150} className="hp-float-deco deco-broom"
            style={{ position:'absolute', bottom:'22%', right:'3%', color:'#a07830', transform:'rotate(-22deg)' }}/>
          <PhilosophersStone size={44} className="hp-float-deco deco-stone"
            style={{ position:'absolute', bottom:'28%', left:'6%' }}/>
          <div className="spark-container" aria-hidden="true">
            {Array.from({length:14}).map((_,i) => (
              <div key={i} className="spark" style={{ left:`${5 + i * 7}%`, animationDelay:`${i * 0.35}s`, animationDuration:`${3 + (i % 3)}s` }}/>
            ))}
          </div>
          <div className="hp-container">
            <div className="hp-hero__inner">
              <div className="hp-hero__wand" aria-hidden="true"><ElderWand size={80}/></div>
              <span className="chapter-label" style={{ fontSize: '0.7rem', letterSpacing: '0.4em' }}>
                Chapter I · The Chosen Developer
              </span>
              <h1 className="hp-hero__name gold-shimmer">Yash Gandhi</h1>
              <div className="hp-hero__typewriter">
                <span style={{ color: 'var(--hp-muted)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>A Wizard of&nbsp;</span>
                <Typewriter options={{
                  strings: ['Full Stack Java Development','React & Frontend Sorcery','Spring Boot & Microservices','Mastercard Payment Gateway','CI/CD & DevOps Magic','Clean Code & Craftsmanship'],
                  autoStart: true, loop: true,
                  wrapperClassName: 'typewriter-text', cursorClassName: 'typewriter-cursor',
                }}/>
              </div>
              <p className="hp-hero__bio">
                4.5+ years conjuring high-scale payment systems & web applications at Mastercard & Credit Suisse.
                Airbus Aerothon 3.0 winner. Based in Pune, India. 🧙‍♂️
              </p>
              <div className="hp-hero__cta">
                <button className="hp-btn hp-btn-solid" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                  Send an Owl ✉
                </button>
                <button className="hp-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  View Artifacts ↓
                </button>
              </div>
              <div className="hp-hero__badges">
                {ACHIEVEMENTS.map((a, i) => (
                  <div key={i} className="hp-hero__badge reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                    <span style={{ fontSize: '1.2rem' }}>{a.icon}</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', color: 'var(--hp-cream)' }}>{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hp-hero__scroll-hint">
            <span>scroll</span>
            <div className="scroll-arrow"/>
          </div>
        </section>

        {/* ════ CHAPTER II — About (Hogwarts Letter) ════ */}
        <section id="about" className="hp-section" style={{ position:'relative', overflow:'hidden' }}>
          <DeathlyHallows size={340} style={{ position:'absolute', right:'-60px', top:'50%', transform:'translateY(-50%)', color:'rgba(201,162,39,0.04)', pointerEvents:'none' }}/>
          <div className="hp-container">
            <SectionHeader
              chapter="Chapter II · The Acceptance Letter"
              title="About Me"
              subtitle={'"We are pleased to inform you that you have been accepted."'}
            />

            {/* Hogwarts Letter — scroll-driven opening */}
            <div className="letter-envelope reveal" id="hogwarts-letter">

              {/* ── 3-D envelope flap ── */}
              <div className="letter-flap-wrap">
                <div className="letter-flap" style={{ transform: `rotateX(${flapDeg}deg)` }}>
                  <div className="letter-flap__face letter-flap__face--front" />
                  <div className="letter-flap__face letter-flap__face--back" />
                </div>
              </div>

              {/* ── Sealed face (fades out as you scroll, absolute overlay) ── */}
              <div
                className="letter-sealed"
                style={{ opacity: sealedOpacity, pointerEvents: sealedOpacity > 0.05 ? 'auto' : 'none' }}
              >
                <div className="letter-fold-line letter-fold-line--h"/>
                <div className="letter-fold-line letter-fold-line--v"/>
                <HogwartsCrest size={60}/>
                <p className="letter-sealed__school">HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</p>
                <p className="letter-sealed__to">Mr. Yash Gandhi · Pune, India</p>
                <div
                  className="letter-wax-seal"
                  style={{ opacity: sealOpacity, transform: `scale(${sealScale})` }}
                >
                  <div className="letter-wax-seal__ring"/>
                  <span className="letter-wax-seal__h">H</span>
                </div>
                <p className="letter-sealed__hint">scroll to open ↓</p>
              </div>

              {/* ── Inner content (fades in after flap opens) ── */}
              <div
                className="letter-inner"
                style={{
                  opacity: contentOpacity,
                  transform: `translateY(${contentTranslate}px)`,
                  pointerEvents: contentOpacity > 0.4 ? 'auto' : 'none',
                }}
              >
                <div className="letter-inner__header">
                  <HogwartsCrest size={48}/>
                  <div>
                    <div className="letter-school">HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</div>
                    <div className="letter-headmaster">Headmaster: Albus P. W. B. Dumbledore</div>
                    <div className="letter-headmaster" style={{ fontSize:'0.65rem', opacity:0.5 }}>
                      (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump)
                    </div>
                  </div>
                </div>
                <div className="letter-divider"/>

                <div className="letter-cols">
                  {/* Left: letter text */}
                  <div className="letter-col-left">
                    <p className="letter-salutation">Dear Mr. Yash Gandhi,</p>
                    <p className="letter-para">
                      We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft
                      and Wizardry. The Sorting Hat has placed you in the order of{' '}
                      <strong style={{ color:'var(--hp-gold)' }}>Full Stack Engineers</strong> — masters of
                      both the ancient arts of <em>Frontend</em> and the dark depths of <em>Backend</em>.
                    </p>
                    <p className="letter-para">
                      With <strong>4.5+ years</strong> of spellcasting, you engineered high-scale features on the{' '}
                      <strong style={{ color:'var(--hp-gold)' }}>Mastercard Payment Gateway</strong> and
                      spent 3.5 years at <strong>Credit Suisse (UBS)</strong> conjuring Wealth Management systems.
                      You also won the <strong>Airbus Aerothon 3.0</strong> 🏆 hackathon and hold a
                      B.E. in Computer Engineering (CGPA 8.33) from MES Wadia College, Pune.
                    </p>
                    <div className="letter-closing">
                      <p>We await your owl by no later than 31 July.</p>
                      <p style={{ marginTop: 6 }}>Yours sincerely,</p>
                      <p className="letter-signature">Minerva McGonagall</p>
                      <p style={{ fontSize:'0.72rem', color:'rgba(46,24,0,0.55)', fontStyle:'italic' }}>Deputy Headmistress</p>
                    </div>
                  </div>

                  {/* Right: details + seal */}
                  <div className="letter-col-right">
                    {[
                      { label: 'House',      value: 'Full Stack Engineers' },
                      { label: 'Location',   value: 'Pune, India 🇮🇳' },
                      { label: 'Experience', value: '4.5+ Years' },
                      { label: 'Education',  value: 'B.E. CSE · MESCOE 2021' },
                      { label: 'Email',      value: 'yashgandhi2020@gmail.com', href: 'mailto:yashgandhi2020@gmail.com' },
                      { label: 'LinkedIn',   value: 'yashgandhi876', href: 'https://linkedin.com/in/yashgandhi876' },
                    ].map(d => (
                      <div key={d.label} className="letter-detail-item">
                        <span className="letter-detail-label">{d.label}</span>
                        {d.href
                          ? <a href={d.href} target="_blank" rel="noopener noreferrer" className="hp-link letter-detail-value">{d.value}</a>
                          : <span className="letter-detail-value">{d.value}</span>
                        }
                      </div>
                    ))}
                    <div className="letter-col-right__seal">
                      <div className="letter-wax-seal letter-wax-seal--lg">
                        <div className="letter-wax-seal__ring"/>
                        <span className="letter-wax-seal__h">H</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════ CHAPTER III — Experience ════ */}
        <section id="experience" className="hp-section" style={{ background: 'rgba(26,10,46,0.4)', position:'relative', overflow:'hidden' }}>
          <Broomstick size={320} style={{ position:'absolute', left:'-40px', bottom:'-20px', color:'rgba(201,162,39,0.04)', transform:'rotate(5deg)', pointerEvents:'none' }}/>
          <div className="hp-container">
            <SectionHeader
              chapter="Chapter III · The Marauder's Journey"
              title="Experience"
              subtitle='"Mischief Managed — and then some."'
            />
            <div className="timeline reveal">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <div className="parchment-card" style={{ padding: '24px 28px' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:8, marginBottom:12 }}>
                      <div>
                        <h3 style={{ fontFamily:'var(--font-title)', color:'var(--hp-gold)', fontSize:'1rem', marginBottom:4 }}>{exp.role}</h3>
                        <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.85rem', color:'var(--hp-cream)', fontWeight:600, marginBottom:2 }}>{exp.company}</p>
                        <p style={{ fontFamily:'var(--font-sans)', fontSize:'0.72rem', color:'var(--hp-muted)', letterSpacing:'0.05em' }}>{exp.period} · {exp.location}</p>
                      </div>
                      <span className="exp-badge">{exp.badge}</span>
                    </div>
                    <ul style={{ paddingLeft: 16 }}>
                      {exp.points.map((pt, j) => (
                        <li key={j} style={{ fontFamily:'var(--font-body)', fontSize:'0.9rem', color:'rgba(245,230,200,0.8)', marginBottom:6, lineHeight:1.6 }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════ CHAPTER IV — Skills (Houses) ════ */}
        <section id="skills" className="hp-section" style={{ position:'relative', overflow:'hidden' }}>
          <PhilosophersStone size={220} style={{ position:'absolute', right:'-30px', top:'10%', opacity:0.04, pointerEvents:'none' }}/>
          <div className="hp-container">
            <SectionHeader
              chapter="Chapter IV · The Four Houses"
              title="Technical Skills"
              subtitle='"Your skills will sort you into your house. Where do you belong?"'
            />

            <div className="hp-houses reveal">
              {SKILLS.map((group, i) => (
                <div key={i} className="house-card" style={{ '--house-color': group.colors.primary, '--house-accent': group.colors.secondary, '--house-bg': group.colors.bg }}>
                  <div className="house-card__header">
                    <HouseShield color1={group.colors.primary} color2={group.colors.secondary} emoji={group.animalEmoji} size={60}/>
                    <div className="house-card__meta">
                      <div className="house-card__name">{group.house}</div>
                      <div className="house-card__category">{group.category}</div>
                      <div className="house-card__motto">{group.motto}</div>
                    </div>
                  </div>
                  <div className="house-card__divider"/>
                  <div className="house-card__spells">
                    {group.items.map((skill, j) => (
                      <span key={j} className="house-spell">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="hp-achievements reveal" style={{ marginTop: 56 }}>
              <div className="ornament" style={{ marginBottom: 32 }}>✦ Achievements ✦</div>
              <div className="hp-achievements__grid">
                {ACHIEVEMENTS.map((a, i) => (
                  <div key={i} className="parchment-card hp-achievement-card">
                    <span style={{ fontSize: '2rem', display: 'block', marginBottom: 10 }}>{a.icon}</span>
                    <h4 style={{ fontFamily:'var(--font-title)', color:'var(--hp-gold)', fontSize:'0.85rem', marginBottom:8 }}>{a.title}</h4>
                    <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'rgba(245,230,200,0.75)', lineHeight:1.55 }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════ CHAPTER V — Projects (Chocolate Frog Cards) ════ */}
        <section id="projects" className="hp-section" style={{ background: 'rgba(26,10,46,0.4)', position:'relative', overflow:'hidden' }}>
          <GoldenSnitch size={200} style={{ position:'absolute', left:'50%', top:'-30px', transform:'translateX(-50%)', color:'rgba(201,162,39,0.05)', pointerEvents:'none' }}/>
          <div className="hp-container">
            <SectionHeader
              chapter="Chapter V · Chocolate Frog Cards"
              title="Magical Artifacts"
              subtitle='"Every wizard needs a collection. These are mine."'
            />
            <div className="frog-cards-grid reveal">
              {PROJECTS.map((proj, i) => <FrogCard key={i} proj={proj}/>)}
            </div>
          </div>
        </section>

        {/* ════ CHAPTER VI — Contact ════ */}
        <section id="contact" className="hp-section" style={{ position:'relative', overflow:'hidden' }}>
          <DeathlyHallows size={260} style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', color:'rgba(201,162,39,0.04)', pointerEvents:'none' }}/>
          <div className="hp-container">
            <SectionHeader
              chapter="Chapter VI · Owl Post"
              title="Get In Touch"
              subtitle='"Happiness can be found even in the darkest of times — if you send the right owl."'
            />
            <div className="hp-contact reveal">
              <div className="parchment-card hp-contact__card">
                <div className="contact-owl">🦉</div>
                <p className="hp-contact__message">
                  I'm currently open to new opportunities. Whether it's a full-time role, a freelance project,
                  or just a chat about tech (or Harry Potter) — my owl is always ready.
                </p>
                <a href="mailto:yashgandhi2020@gmail.com" className="hp-btn hp-btn-solid" style={{ marginBottom: 32 }}>
                  Send Me an Owl ✉
                </a>
                <div className="hp-contact__links">
                  {[
                    { label: 'GitHub',   href: 'https://github.com/yashgandhi876',                          icon: '⌨' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/yashgandhi876',                     icon: '🔗' },
                    { label: 'LeetCode', href: 'https://leetcode.com/yashgandhi876',                        icon: '💡' },
                    { label: 'YouTube',  href: 'https://www.youtube.com/channel/UCyB_tsmZLM0nK2yTYF2ZaaA', icon: '▶' },
                  ].map(link => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hp-contact__link">
                      <span>{link.icon}</span><span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="hp-footer">
          <div className="hp-container">
            <div style={{ display:'flex', justifyContent:'center', gap:24, marginBottom:20, flexWrap:'wrap' }}>
              <DeathlyHallows size={28} style={{ color:'rgba(201,162,39,0.4)' }}/>
              <GoldenSnitch size={32} style={{ color:'rgba(201,162,39,0.4)' }}/>
              <DeathlyHallows size={28} style={{ color:'rgba(201,162,39,0.4)' }}/>
            </div>
            <p style={{ fontFamily:'var(--font-title)', fontSize:'0.65rem', letterSpacing:'0.2em', color:'var(--hp-muted)', textAlign:'center' }}>
              YASH GANDHI · MMXXV · PUNE, INDIA
            </p>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'rgba(168,144,96,0.5)', marginTop:8, textAlign:'center', fontStyle:'italic' }}>
              "After all this time?" — "Always."
            </p>
          </div>
        </footer>

      </div>
    );
  }
}

export default Home;
