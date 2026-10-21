// Proje kapakları görsel gerektirmeden, kategoriye göre üretilen gradyanlardır.
// Gerçek görseliniz olduğunda `project.image` alanını doldurup burada <img> kullanabilirsiniz.
const coverPalettes = {
  RAG: ['#4c1d95', '#0e7490'],
  Agent: ['#5b21b6', '#1e3a8a'],
  Pipeline: ['#0e7490', '#0f766e'],
  Memory: ['#6d28d9', '#0e7490'],
}

const fallback = ['#312e81', '#155e75']

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
