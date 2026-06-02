export function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Social nerds
            <span className="hero-title-line2">with a taste for</span>
            <span className="hero-title-highlight">software development</span>
          </h1>
          <p className="hero-desc">
            We're a small crew of developers in Sweden who actually enjoy
            writing code. We work as consultants, embedded in your team,
            shipping real things.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">Who are we?</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={`${import.meta.env.BASE_URL}kattbjorn.png`} alt="Kattbjörn logo" className="hero-logo" />
        </div>
      </div>
    </header>
  )
}
