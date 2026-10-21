import { useEffect, useRef } from 'react'
import ProjectCover from './ProjectCover.jsx'

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      {project ? (
        <div className="modal-box max-w-2xl overflow-hidden border border-white/10 bg-base-200 p-0">
          <ProjectCover project={project} className="h-36" />

          <form method="dialog">
            <button
              type="submit"
              className="btn btn-circle btn-sm absolute right-3 top-3 border-white/20 bg-black/30 text-white hover:bg-black/50"
              aria-label="Kapat"
            >
              <CloseIcon />
            </button>
          </form>

          <div className="space-y-6 p-6">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="badge badge-primary badge-sm">{project.category}</span>
                <span className="badge badge-ghost badge-sm text-base-content/60">{project.role}</span>
                <span className="font-mono text-xs text-base-content/40">{project.year}</span>
              </div>
              <h3 id="project-modal-title" className="text-xl font-bold md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-base-content/60">{project.summary}</p>
            </div>

            <section>
              <h4 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Problem
              </h4>
              <p className="text-sm text-base-content/70">{project.problem}</p>
            </section>

            <section>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Yaklaşım
              </h4>
              <ul className="space-y-2">
                {project.approach.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-base-content/70">
                    <span aria-hidden="true" className="mt-0.5 text-accent">
                      ▸
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                Sonuç
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((item) => (
                  <span key={item} className="badge badge-success badge-soft badge-sm">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap items-center gap-1.5 border-t border-white/5 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-sm border-white/10 bg-white/5 font-mono text-[0.75rem] text-base-content/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <form method="dialog" className="modal-backdrop">
        <button aria-label="Kapat">kapat</button>
      </form>
    </dialog>
  )
}
