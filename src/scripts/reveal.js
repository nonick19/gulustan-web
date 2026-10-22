// Scroll ile beliren bölümler (eski useReveal hook'unun Astro karşılığı).
export function initReveal() {
  const els = document.querySelectorAll('[data-reveal]')
  if (els.length === 0) return

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -12% 0px' },
  )

  els.forEach((el) => observer.observe(el))
}