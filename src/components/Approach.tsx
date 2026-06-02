import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    step: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'We sit with you',
    desc: 'No drive-by consulting. We join your standups, your Slack channels, your retros. We\'re in it with you.',
  },
  {
    step: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Code you can maintain',
    desc: 'We write code for the person who has to read it six months from now. Tests, reviews, documentation where it matters.',
  },
  {
    step: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'We ask why first',
    desc: 'Understanding the problem properly saves everyone time. We\'d rather ask a dumb question early than build the wrong thing.',
  },
  {
    step: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Work should be fun',
    desc: 'Happy developers write better code. That\'s not a slogan, it\'s just what we\'ve seen over and over.',
  },
]

export function Approach() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="how-we-work" ref={ref}>
      <div className="container">
        <div className="section-eyebrow animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">How we work</span>
        </div>
        <h2 className="approach-heading animate-target">
          Consultants who <span className="text-gradient">give a damn</span>
        </h2>
        <div className="approach-grid">
          {steps.map((s) => (
            <div className="approach-card animate-target" data-step={s.step} key={s.step}>
              <div className="approach-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
