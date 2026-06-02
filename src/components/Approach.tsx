import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    title: 'We sit with you',
    desc: 'No drive-by consulting. We join your standups, your Slack channels, your retros. We\'re in it with you.',
  },
  {
    title: 'Code you can maintain',
    desc: 'We write code for the person who has to read it six months from now. Tests, reviews, documentation where it matters.',
  },
  {
    title: 'We ask why first',
    desc: 'Understanding the problem properly saves everyone time. We\'d rather ask a dumb question early than build the wrong thing.',
  },
  {
    title: 'Work should be fun',
    desc: 'Happy developers write better code. That\'s not a slogan, it\'s just what we\'ve seen over and over.',
  },
]

export function Approach() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="how-we-work" ref={ref}>
      <div className="container">
        <h2 className="approach-heading animate-target">
          Consultants who give a damn
        </h2>
        <div className="approach-grid">
          {steps.map((s) => (
            <div className="approach-card animate-target" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
