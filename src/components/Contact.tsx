import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function Contact() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-cta" id="kontakt" ref={ref}>
      <div className="container">
        <div className="cta-layout">
          <div className="cta-content animate-target">
            <div className="section-eyebrow section-eyebrow-light">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Kontakt</span>
            </div>
            <h2 className="cta-heading">
              Redo att bygga något <span className="text-glow">fantastiskt</span>?
            </h2>
            <p className="cta-desc">
              Vi letar alltid efter spännande projekt och bra människor att jobba med.
              Hör av er så snackar vi teknik.
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
              <a href="https://github.com/kattbjorn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="cta-terminal animate-target">
            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">~/kattbjorn</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">echo</span>
                  <span className="t-string">"Hej! Vi vill jobba med er"</span>
                </div>
                <div className="terminal-line">
                  <span className="t-output">Hej! Vi vill jobba med er</span>
                </div>
                <div className="terminal-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">curl</span>
                  <span className="t-flag">-s</span>
                  <span className="t-string">kattbjorn.se/status</span>
                </div>
                <div className="terminal-line">
                  <span className="t-output">{'{ "status": "redo", "kaffe": true }'}</span>
                </div>
                <div className="terminal-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
