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
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Kattbjörn" className="nav-logo-img" />
          <span className="nav-logo-text">kattbjörn</span>
        </a>
        <div className={`nav-links${menuOpen ? ' active' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#how-we-work" onClick={closeMenu}>How we work</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Say hi</a>
        </div>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
