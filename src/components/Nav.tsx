import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#" className="nav-logo">
          <img src="/logo.svg" alt="Kattbjörn" className="nav-logo-img" />
          <span className="nav-logo-text">kattbjörn</span>
        </a>
        <div className={`nav-links${menuOpen ? ' active' : ''}`}>
          <a href="#om-oss" onClick={closeMenu}>Om oss</a>
          <a href="#tjanster" onClick={closeMenu}>Tjänster</a>
          <a href="#approach" onClick={closeMenu}>Så jobbar vi</a>
          <a href="#kontakt" className="nav-cta" onClick={closeMenu}>Säg hej</a>
        </div>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Meny"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
