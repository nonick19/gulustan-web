// Navbar: scroll durumu, mobil menü ve aktif bölüm takibi (scroll spy).
export function initNavbar() {
  const header = document.querySelector('[data-navbar]')
  if (!header) return

  const toggle = header.querySelector('[data-menu-toggle]')
  const menu = document.getElementById('mobile-menu')
  const labelOpen = toggle?.getAttribute('data-label-open') ?? ''
  const labelClose = toggle?.getAttribute('data-label-close') ?? ''

  // Scroll'da başlık zemini
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Mobil menü
  const setOpen = (open) => {
    header.classList.toggle('is-open', open)
    if (toggle) {
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? labelClose : labelOpen)
    }
    if (menu) menu.classList.toggle('is-open', open)
  }

  toggle?.addEventListener('click', () => setOpen(!header.classList.contains('is-open')))
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)))

  // Geniş ekrana geçildiğinde mobil menüyü kapat
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && header.classList.contains('is-open')) setOpen(false)
  })

  // Aktif bölüm takibi (yalnızca bölüm bağlantıları varsa)
  const sectionLinks = [...header.querySelectorAll('[data-nav-section]')]
  const sections = sectionLinks
    .map((link) => document.getElementById(link.getAttribute('data-nav-section')))
    .filter(Boolean)

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          sectionLinks.forEach((link) =>
            link.toggleAttribute(
              'data-nav-active',
              link.getAttribute('data-nav-section') === entry.target.id,
            ),
          )
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
  }
}