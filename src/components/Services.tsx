import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    num: '01',
    title: 'Webb & appar',
    desc: 'Moderna webbapplikationer och mobilappar med React, Vue, Angular och mer. Responsiva, tillgängliga och snabba.',
    tags: ['React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    num: '02',
    title: 'Backend & API:er',
    desc: 'Robusta och skalbara backend-system. Vi matchar teknikval med era behov och bygger för framtiden.',
    tags: ['Java', '.NET', 'Node.js', 'Python'],
  },
  {
    num: '03',
    title: 'Cloud & DevOps',
    desc: 'Infrastruktur, automation och deployment-pipelines. Vi hjälper er flytta till molnet eller optimera det ni har.',
    tags: ['AWS', 'Azure', 'Kubernetes', 'CI/CD'],
  },
  {
    num: '04',
    title: 'Arkitektur & design',
    desc: 'Systemarkitektur som håller. Mikrotjänster, event-driven arkitektur och domändriven design.',
    tags: ['DDD', 'Microservices', 'Event-driven'],
  },
  {
    num: '05',
    title: 'AI & data',
    desc: 'Machine learning, dataanalys och intelligenta system. Vi hjälper er dra nytta av era data på riktigt.',
    tags: ['ML', 'LLMs', 'Data pipelines'],
  },
  {
    num: '06',
    title: 'Agilt & teamwork',
    desc: 'Vi lever och andas agilt. Scrum, Kanban, par-programmering och continuous delivery.',
    tags: ['Scrum', 'Kanban', 'Code review'],
  },
]

export function Services() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-dark" id="tjanster" ref={ref}>
      <div className="container">
        <div className="section-eyebrow section-eyebrow-light animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Tjänster</span>
        </div>
        <h2 className="section-heading-light animate-target">Vad vi kan hjälpa er med</h2>
        <p className="section-sub-light animate-target">
          Vi levererar seniora mjukvarukonsulter som gör skillnad. Inte timmar på papper.
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
