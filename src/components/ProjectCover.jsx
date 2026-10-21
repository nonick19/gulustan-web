// Proje kapakları görsel gerektirmeden, kategoriye göre ürelen düz tonlu
// yüzeylerdir. Gerçek görseliniz olduğunda `project.image` alanını doldurup
// burada <img> kullanabilirsiniz.
const coverPalettes = {
  RAG: ['#7a3327', '#2e1512'],
  Agent: ['#6b4a1f', '#241705'],
  Pipeline: ['#2f5d50', '#0f2420'],
  Memory: ['#7a4a2b', '#2a1710'],
}

const fallback = ['#4a3b2c', '#1c1510']

export default function ProjectCover({ project, large = false, className = '' }) {
  const [from, to] = coverPalettes[project.category] ?? fallback

  return (
    <div
      aria-hidden="true"
      className={`relative isolate overflow-hidden ${large ? 'h-48 sm:h-56 lg:h-auto lg:w-2/5' : 'h-32'} ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/20 blur-2xl"
      />
      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-black/25 blur-2xl" />

      <span className="absolute bottom-4 left-5 font-mono text-[0.75rem] uppercase tracking-[0.3em] text-white">
        {project.category}
      </span>
      <span className="absolute right-5 top-4 font-mono text-[0.75rem] text-white/95">
        {project.year}
      </span>
    </div>
  )
}
