export default function SectionTitle({ num, title, lead }) {
  return (
    <div className="mb-10 md:mb-14" data-reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{num}</span>
        <h2 className="text-2xl font-bold tracking-tight md:text-[2rem]">{title}</h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
        />
      </div>
      {lead ? (
        <p className="mt-3 max-w-[560px] text-sm text-base-content/60 md:text-base">{lead}</p>
      ) : null}
    </div>
  )
}
