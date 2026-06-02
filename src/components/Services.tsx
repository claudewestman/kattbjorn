import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    num: '01',
    title: 'Web & apps',
    desc: 'SPAs, server-rendered apps, progressive web apps. Frontends that are fast, accessible, and don\'t make your users cry.',
    tags: ['React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    num: '02',
    title: 'Backend & APIs',
    desc: 'The stuff behind the curtain. REST, GraphQL, event-driven systems — whatever fits your problem best.',
    tags: ['Java', '.NET', 'Node.js', 'Python'],
  },
  {
    num: '03',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure, pipelines, deployments. We help you ship with confidence and sleep at night.',
    tags: ['AWS', 'Azure', 'Kubernetes', 'CI/CD'],
  },
  {
    num: '04',
    title: 'Architecture',
    desc: 'Systems that hold up over time. We think about the boring parts so you don\'t end up rewriting everything in two years.',
    tags: ['DDD', 'Microservices', 'Event-driven'],
  },
  {
    num: '05',
    title: 'AI & data',
    desc: 'ML models, data pipelines, LLM integrations. Practical stuff, not just demos that look cool on LinkedIn.',
    tags: ['ML', 'LLMs', 'Data pipelines'],
  },
  {
    num: '06',
    title: 'Ways of working',
    desc: 'Pair programming, code reviews, continuous delivery. We care about the process as much as the output.',
    tags: ['Scrum', 'Kanban', 'Code review'],
  },
]

export function Services() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-dark" id="services" ref={ref}>
      <div className="container">
        <div className="section-eyebrow section-eyebrow-light animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Services</span>
        </div>
        <h2 className="section-heading-light animate-target">What we do</h2>
        <p className="section-sub-light animate-target">
          We place senior developers on your team. People who ship, not people who attend meetings about shipping.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card animate-target" key={s.num}>
              <div className="service-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
