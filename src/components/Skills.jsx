import { projects } from '../data/projects.js'
import { processSteps, skillGroups, tools } from '../data/skills.js'
import SectionTitle from './ui/SectionTitle.jsx'

const levelStyles = {
  Üretimde: 'badge-success badge-soft',
  Projede: 'badge-info badge-soft',
  Aşina: 'badge-ghost',
}

function proofCount(filter) {
  return projects.filter(
    (project) => project.category === filter || project.tags.includes(filter),
  ).length
}

function SkillRow({ skill, onFilter }) {
  const count = skill.filter ? proofCount(skill.filter) : 0

  return (
    <li className="border-t border-white/5 py-4 first:border-t-0 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-semibold text-base-content">{skill.name}</h4>
        <span className={`badge badge-sm ${levelStyles[skill.level] ?? 'badge-ghost'}`}>
          {skill.level}
        </span>
      </div>

      <p className="mt-1 text-sm leading-relaxed text-base-content/60">{skill.desc}</p>

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-sm border-white/5 bg-white/5 font-mono text-[0.68rem] text-base-content/55"
          >
            {tag}
          </span>
        ))}
        {count > 0 ? (
          <button
            type="button"
            onClick={() => onFilter(skill.filter)}
            className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-secondary"
          >
            İlgili projeler ({count}) <span aria-hidden="true">→</span>
          </button>
        ) : null}
      </div>
    </li>
  )
}

export default function Skills({ onFilter }) {
  return (
    <section id="yetenekler" className="py-20 md:py-28">
      <div className="shell">
        <SectionTitle
          num="02."
          title="Yetenekler"
          lead="Alanlara göre gruplanmış yetkinlikler ve her birinin arkasındaki projeler. İlgili projeler bağlantısıyla o yeteneğin işlerine geçebilirsiniz."
        />

        <div className="mb-10 flex flex-wrap gap-2" data-reveal>
          {tools.map((tool) => (
            <span
              key={tool}
              className="badge badge-md border border-white/10 bg-base-200/60 px-3 py-3 font-mono text-xs text-base-content/60"
            >
              <span aria-hidden="true" className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
              {tool}
            </span>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              data-reveal
              className="rounded-2xl border border-white/5 bg-base-200/40 p-5 transition hover:border-white/10 md:p-6"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <p className="mt-1 text-sm text-base-content/55">{group.blurb}</p>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} onFilter={onFilter} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14" data-reveal>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-base-content/55">
            Nasıl çalışırım
          </h3>
          <ul className="steps steps-vertical w-full md:steps-horizontal">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                data-content={String(index + 1).padStart(2, '0')}
                className="step step-primary"
              >
                <div className="text-left md:text-center">
                  <p className="font-semibold">{step.title}</p>
                  <p className="mt-1 max-w-[15rem] text-xs leading-relaxed text-base-content/55">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
