import { useEffect } from 'react'

// [data-reveal] taşıyan bölümleri görünür olduklarında açar.
// Filtreleme sonrası eklenen kartları da yakalamak için DOM'u izler.
export default function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((node) => node.classList.add('is-visible'))
      return undefined
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
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    const observe = (node) => {
      if (!node.classList.contains('is-visible')) observer.observe(node)
    }

    document.querySelectorAll('[data-reveal]').forEach(observe)

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('[data-reveal]')) observe(node)
          node.querySelectorAll('[data-reveal]').forEach(observe)
        })
      })
    })

    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}
