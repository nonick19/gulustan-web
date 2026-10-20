import { lazy, Suspense } from 'react'

// three.js ağır bir bağımlılık: ana paketten ayırıp sayfa açılışını hızlandırıyoruz.
const HeroScene = lazy(() => import('./HeroScene.jsx'))

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="hero__glow" aria-hidden="true" />
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="pointer-events-none relative z-10 shell pb-24 pt-32">
        <p className="mb-3 font-mono text-sm tracking-[0.18em] text-secondary">Merhaba, ben</p>
        <h1 className="text-gradient text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Ali Gülüstan
        </h1>
        <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
          AI Engineer <span className="mx-2 text-primary">/</span> AI Context Manager
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-base-content/60 sm:text-lg">
          LLM tabanlı ürünler, RAG sistemleri ve otonom AI agent'lar geliştiriyorum. Modellerin
          doğru bağlamla doğru işi yapmasını sağlamak benim işim.
        </p>

        <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
          <a href="#projeler" className="btn btn-primary">
            Projelerimi Gör
          </a>
          <a href="#iletisim" className="btn btn-outline btn-secondary">
            İletişime Geç
          </a>
        </div>
      </div>

      <a
        href="#hakkimda"
        aria-label="Aşağı kaydır"
        className="hero__scroll absolute bottom-7 left-1/2 z-10 flex h-11 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-base-content/30 transition-colors hover:border-secondary"
      >
        <span className="mt-2 h-2 w-1 rounded-full bg-secondary" />
      </a>
    </section>
  )
}
