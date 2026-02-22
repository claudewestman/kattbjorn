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
    title: 'Del av teamet',
    desc: 'Vi integreras fullt ut i ert team. Inga silos, inga murar. Vi jobbar sida vid sida med era utvecklare.',
  },
  {
    step: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kvalitet i koden',
    desc: 'Vi skriver kod som andra kan förstå och underhålla. Clean code, code reviews och automatiserade tester.',
  },
  {
    step: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Nyfikna på riktigt',
    desc: 'Vi frågar "varför?" innan vi frågar "hur?". Att förstå problemet på djupet ger bättre lösningar.',
  },
  {
    step: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kul på jobbet',
    desc: 'Vi tror att bra stämning ger bättre resultat. Hackathons, spelkvällar och spontana tech talks.',
  },
]

export function Approach() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="approach" ref={ref}>
      <div className="container">
        <div className="section-eyebrow animate-target">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Så jobbar vi</span>
        </div>
        <h2 className="approach-heading animate-target">
          Konsulter som <span className="text-gradient">bryr sig</span> på riktigt
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
