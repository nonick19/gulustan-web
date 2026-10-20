import { useState } from 'react'
import { categories, projects } from '../data/projects.js'
import ProjectCover from './ProjectCover.jsx'
import ProjectModal from './ProjectModal.jsx'
import SectionTitle from './ui/SectionTitle.jsx'

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function matches(project, filter) {
  return filter === 'all' || project.category === filter || project.tags.includes(filter)
}

function ProjectLinks({ links }) {
  const items = [
    links.demo ? { href: links.demo, label: 'Canlı demo' } : null,
    links.repo ? { href: links.repo, label: 'GitHub' } : null,
  ].filter(Boolean)

  if (items.length === 0) return null

  return (
    <div className="flex items-center gap-1">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-xs text-base-content/60 hover:text-secondary"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="badge badge-sm border-white/10 bg-white/5 font-mono text-[0.7rem] text-base-content/60"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="card group border border-white/5 bg-base-200/50 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/30">
      <ProjectCover project={project} />
      <div className="card-body gap-3 p-5">
        <h3 className="text-base font-bold leading-snug">
          <button type="button" onClick={() => onOpen(project)} className="text-left hover:text-primary">
            {project.title}
          </button>
        </h3>
        <p className="text-sm leading-relaxed text-base-content/60">{project.summary}</p>
        <TagList tags={project.tags} />
        <div className="card-actions mt-auto items-center justify-between pt-1">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="btn btn-ghost btn-xs gap-1 px-0 text-primary hover:bg-transparent hover:text-secondary"
          >
            Vaka detayı <ArrowIcon />
          </button>
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  )
}

function FeaturedCard({ project, onOpen }) {
  return (
    <article className="card overflow-hidden border border-white/10 bg-base-200/50 transition duration-300 hover:border-primary/40 lg:card-side">
      <ProjectCover project={project} large />
      <div className="card-body gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge badge-primary badge-sm">Öne çıkan</span>
          <span className="badge badge-ghost badge-sm text-base-content/60">{project.role}</span>
        </div>

        <div>
          <h3 className="text-xl font-bold leading-tight md:text-2xl">
            <button type="button" onClick={() => onOpen(project)} className="text-left hover:text-primary">
              {project.title}
            </button>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-base-content/60 md:text-base">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <span key={item} className="badge badge-success badge-soft badge-sm">
              {item}
            </span>
          ))}
        </div>

        <TagList tags={project.tags} />

        <div className="card-actions mt-auto items-center justify-between">
          <button type="button" onClick={() => onOpen(project)} className="btn btn-primary btn-sm gap-2">
            Vaka detayı <ArrowIcon />
          </button>
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  )
}

export default function Projects({ filter, onFilterChange }) {
  const [selected, setSelected] = useState(null)

  const isTab = categories.some((category) => category.key === filter)
  const visible = projects.filter((project) => matches(project, filter))
  const featured = filter === 'all' ? visible.find((project) => project.featured) : null
  const rest = featured ? visible.filter((project) => project !== featured) : visible

  return (
    <section id="projeler" className="py-20 md:py-28">
      <div className="shell">
        <SectionTitle
          num="03."
          title="Projeler"
          lead="Üretim odaklı AI sistemleri: problem, yaklaşım ve sonuç. Bir karta tıklayarak vaka detayını okuyabilirsiniz."
        />

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" data-reveal>
          <div className="tabs tabs-box tabs-sm w-fit bg-base-200/70 p-1" aria-label="Proje kategorileri">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                aria-pressed={filter === category.key}
                onClick={() => onFilterChange(category.key)}
                className={`tab ${filter === category.key ? 'tab-active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {!isTab ? (
              <button
                type="button"
                onClick={() => onFilterChange('all')}
                className="badge badge-primary badge-soft badge-sm gap-1.5 py-3"
                aria-label={`${filter} filtresini kaldır`}
              >
                {filter}
                <span aria-hidden="true">✕</span>
              </button>
            ) : null}
            <p aria-live="polite" className="font-mono text-xs text-base-content/50">
              {visible.length} proje
            </p>
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-base-content/50">
            Bu filtreye uygun proje bulunamadı.
          </div>
        ) : (
          <div className="space-y-6">
            {featured ? (
              <div data-reveal>
                <FeaturedCard project={featured} onOpen={setSelected} />
              </div>
            ) : null}

            {rest.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project) => (
                  <div key={project.slug} data-reveal>
                    <ProjectCard project={project} onOpen={setSelected} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
