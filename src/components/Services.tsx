import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    num: '01',
    title: 'Web & apps',
    desc: 'Web applications and apps built with modern frontend tools, with care for performance and accessibility.',
    tags: ['React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    num: '02',
    title: 'Backend & APIs',
    desc: 'Services, APIs and integrations. REST, GraphQL or event-driven, depending on what the problem calls for.',
    tags: ['Java', '.NET', 'Node.js', 'Python'],
  },
  {
    num: '03',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure, build pipelines and deployments that make releasing new code a routine task.',
    tags: ['AWS', 'Azure', 'Kubernetes', 'CI/CD'],
  },
  {
    num: '04',
    title: 'Architecture',
    desc: 'System design that holds up as the product and the organisation grow.',
    tags: ['DDD', 'Microservices', 'Event-driven'],
  },
  {
    num: '05',
    title: 'AI & data',
    desc: 'Data pipelines, machine learning and LLM integrations in real products.',
    tags: ['ML', 'LLMs', 'Data pipelines'],
  },
  {
    num: '06',
    title: 'Ways of working',
    desc: 'Pair programming, code review and continuous delivery. We like helping teams improve how they work together.',
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
          We work as consultants in our clients' teams. These are the areas we know best.
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
