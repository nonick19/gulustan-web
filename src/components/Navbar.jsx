import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#yetenekler', label: 'Yetenekler' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#hero" className="navbar__logo" onClick={() => setOpen(false)}>
          AG<span>.</span>
        </a>
        <button
          className="navbar__toggle"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
