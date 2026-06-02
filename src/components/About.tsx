import { useScrollAnimation } from '../hooks/useScrollAnimation'

const traits = [
  {
    title: 'Deep technical chops',
    desc: 'Fullstack, backend, frontend, cloud. Senior developers who know their stuff and can get up to speed fast.',
  },
  {
    title: 'Up to date',
    desc: 'We stay curious. New frameworks, new patterns, new ways of thinking about old problems.',
  },
  {
    title: 'Good people',
    desc: 'The kind of teammates who make standup less painful and actually read your PR.',
  },
]

export function About() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about-layout">
          <div className="about-headline animate-target">
            <h2>
              Not just consultants.<br />
              Part of your team.
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
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
