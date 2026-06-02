import { useScrollAnimation } from '../hooks/useScrollAnimation'

const traits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Deep technical chops',
    desc: 'Fullstack, backend, frontend, cloud. Senior developers who know their stuff and can get up to speed fast.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Up to date',
    desc: 'We stay curious. New frameworks, new patterns, new ways of thinking about old problems.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 4.5c2 1.5 3.5 4 3.8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Good people',
    desc: 'The kind of teammates who make standup less painful and actually read your PR.',
  },
]

export function About() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="section-eyebrow animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">About</span>
        </div>
        <div className="about-layout">
          <div className="about-headline animate-target">
            <h2>
              Not just consultants.<br />
              <span className="text-gradient">Part of your team.</span>
            </h2>
          </div>
          <div className="about-body animate-target">
            <p className="about-lead">
              Kattbjörn is a group of developers who genuinely like what they do.
              We think the best software gets built when people enjoy working together.
            </p>
            <p>
              Named after the red panda (kattbjörn in Swedish) — curious, nimble,
              and a bit more charming than you'd expect. That's basically us, minus the tail.
            </p>
          </div>
        </div>
        <div className="traits-grid">
          {traits.map((t) => (
            <div className="trait-card animate-target" key={t.title}>
              <div className="trait-icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
