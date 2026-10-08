import { useScrollAnimation } from '../hooks/useScrollAnimation'

const traits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Senior developers',
    desc: 'Fullstack, backend, frontend and cloud. Experienced developers who quickly find their way around a new codebase.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Always learning',
    desc: 'We spend time trying out new tools and techniques, and we share what we learn with each other and with the teams we work in.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 4.5c2 1.5 3.5 4 3.8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Good teammates',
    desc: 'We care about the team around us. Clear communication, honest feedback and careful code reviews.',
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
              Experienced developers<br />
              <span className="text-gradient">who like working in teams</span>
            </h2>
          </div>
          <div className="about-body animate-target">
            <p className="about-lead">
              Kattbjörn is a small group of developers who enjoy what we do.
              We think good software comes from people who work well together,
              and that's where we put our energy.
            </p>
            <p>
              Kattbjörn is Swedish for red panda. We liked the name.
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
