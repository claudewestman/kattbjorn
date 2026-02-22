import { useScrollAnimation } from '../hooks/useScrollAnimation'

const traits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Teknisk spets',
    desc: 'Fullstack, backend, frontend, cloud. Vi levererar seniora utvecklare med djup kompetens.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Modern stack',
    desc: 'Vi håller oss i framkant. Nya ramverk, nya mönster, nya sätt att lösa problem.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 4.5c2 1.5 3.5 4 3.8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Riktigt trevliga',
    desc: 'Teamspelare som höjer stämningen och lyfter hela organisationen.',
  },
]

export function About() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="om-oss" ref={ref}>
      <div className="container">
        <div className="section-eyebrow animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Om oss</span>
        </div>
        <div className="about-layout">
          <div className="about-headline animate-target">
            <h2>
              Vi är inte bara konsulter.<br />
              <span className="text-gradient">Vi blir en del av ert team.</span>
            </h2>
          </div>
          <div className="about-body animate-target">
            <p className="about-lead">
              Kattbjörn samlar utvecklare som har en sak gemensamt: vi gillar genuint
              det vi gör. Vi är nyfikna, drivna och tycker att bra kod bäst skrivs med
              bra stämning.
            </p>
            <p>
              Precis som vår maskot, kattbjörnen (den röda pandan), är vi nyfikna,
              smidiga och lite oväntat charmiga. Vi tror att de bästa lösningarna
              skapas när teknisk spets möter humor och en ärlig vilja att förstå
              verksamheten.
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
