import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Contact() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-cta" id="contact" ref={ref}>
      <div className="container">
        <div className="cta-content animate-target">
          <h2 className="cta-heading">
            Got something interesting to build?
          </h2>
          <p className="cta-desc">
            We're always up for a conversation about tricky problems and good
            software. Drop us a line.
          </p>
          <a href="mailto:hej@kattbjorn.se" className="btn btn-light-fill">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5l7 4.5 7-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="1.5" y="3.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            hej@kattbjorn.se
          </a>
          <div className="cta-social">
            <a href="https://www.linkedin.com/company/kattbjorn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
