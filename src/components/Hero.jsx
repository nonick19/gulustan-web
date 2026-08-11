import HeroScene from './HeroScene.jsx'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <HeroScene />
      <div className="hero__content container">
        <p className="hero__eyebrow">Merhaba, ben</p>
        <h1 className="hero__name">Ali Gülüstan</h1>
        <h2 className="hero__title">
          AI Engineer <span className="hero__sep">/</span> AI Context Manager
        </h2>
        <p className="hero__desc">
          LLM tabanlı ürünler, RAG sistemleri ve otonom AI agent'lar geliştiriyorum.
          Modellerin doğru bağlamla doğru işi yapmasını sağlamak benim işim.
        </p>
        <div className="hero__cta">
          <a href="#projeler" className="btn btn--primary">Projelerimi Gör</a>
          <a href="#iletisim" className="btn btn--ghost">İletişime Geç</a>
        </div>
      </div>
      <a href="#hakkimda" className="hero__scroll" aria-label="Aşağı kaydır">
        <span />
      </a>
    </section>
  )
}
