export function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-grid-bg" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Aktiebolaget Kattbjörn
          </div>
          <h1 className="hero-title">
            Social nerds
            <span className="hero-title-line2">with a taste for</span>
            <span className="hero-title-highlight">software development</span>
          </h1>
          <p className="hero-desc">
            Vi är IT-konsulter som brinner för kod, knäcka problem och bygga saker
            som faktiskt fungerar. Nördiga, sociala och redo att bli en del av ert team.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Prata med oss
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#om-oss" className="btn btn-outline">Vilka är vi?</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-logo-wrapper">
            <div className="hero-logo-ring" />
            <img src={`${import.meta.env.BASE_URL}kattbjorn.png`} alt="Kattbjörn logotyp" className="hero-logo" />
          </div>
        </div>
      </div>
    </header>
  )
}
