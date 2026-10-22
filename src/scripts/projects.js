// Proje filtresi: kategori sekmeleri, yeteneklerden gelen etiket filtreleri
// ve filtre temizleme. Sunucu tarafında tüm kartlar HTML olarak basılır;
// burada yalnızca görünürlük ve sayaç yönetilir.
export function initProjects() {
  const root = document.querySelector('[data-projects]')
  if (!root) return

  const cards = [...root.querySelectorAll('[data-project-card]')]
  const tabs = [...root.querySelectorAll('[data-filter]')]
  const featured = root.querySelector('[data-featured-card]')
  const countEl = root.querySelector('[data-project-count]')
  const clearEl = root.querySelector('[data-clear-filter]')
  const emptyEl = root.querySelector('[data-projects-empty]')
  const countOne = root.getAttribute('data-count-one') || '1'
  const countMany = root.getAttribute('data-count-many') || '{n}'
  const clearTemplate = root.getAttribute('data-clear-template') || '{filter}'

  const isTab = (filter) => tabs.some((tab) => tab.getAttribute('data-filter') === filter)

  function apply(filter) {
    const showFeatured = filter === 'all'
    let visible = 0

    cards.forEach((card) => {
      const tags = (card.getAttribute('data-tags') || '').split('|')
      const match = filter === 'all' || card.getAttribute('data-category') === filter || tags.includes(filter)
      const isFeaturedGridCard = card.hasAttribute('data-featured-grid-card')
      card.hidden = !match || (showFeatured && isFeaturedGridCard)
      if (match) visible += 1
    })

    if (featured) featured.hidden = !showFeatured

    tabs.forEach((tab) => {
      const active = tab.getAttribute('data-filter') === filter
      tab.classList.toggle('tab-active', active)
      tab.setAttribute('aria-pressed', String(active))
    })

    if (clearEl) {
      clearEl.hidden = isTab(filter)
      clearEl.querySelector('[data-clear-label]').textContent = clearTemplate.replace('{filter}', filter)
    }

    if (countEl) {
      countEl.textContent = visible === 1 ? countOne : countMany.replace('{n}', String(visible))
    }
    if (emptyEl) emptyEl.hidden = visible !== 0
  }

  // Sekmeler + filtre temizleme
  root.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-filter]')
    if (tab) {
      apply(tab.getAttribute('data-filter'))
      return
    }
    if (event.target.closest('[data-clear-filter]')) apply('all')
  })

  // Yetenekler bölümünden gelen filtre istekleri (sayfa içindeki herhangi bir buton)
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-project-filter]')
    if (!button) return
    apply(button.getAttribute('data-project-filter'))
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  apply('all')
}