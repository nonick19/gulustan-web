import { useEffect, useState } from 'react'

const links = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#yetenekler', label: 'Yetenekler' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#iletisim', label: 'İletişim' },
]

function MenuIcon({ open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/5 bg-base-100/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="shell navbar h-16 min-h-0 px-0" aria-label="Ana menü">
        <div className="flex-1">
          <a href="#hero" onClick={closeMenu} className="text-xl font-extrabold tracking-[0.08em]">
            AG<span className="text-primary">.</span>
          </a>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
                className={`btn btn-ghost btn-sm font-medium ${
                  active === link.href.slice(1) ? 'text-secondary' : 'text-base-content/70'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-ghost btn-square md:hidden"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <div id="mobile-menu" className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <ul className="shell flex flex-col gap-1 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`flex rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? 'bg-primary/10 text-secondary'
                    : 'text-base-content/70 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
