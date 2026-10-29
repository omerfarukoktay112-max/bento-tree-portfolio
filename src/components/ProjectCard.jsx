import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { useLanguage } from '../context/language'
import { useSound } from '../context/sound'

export function ProjectCard({ project, active, onOpen }) {
  const { t } = useLanguage()
  const { playClick } = useSound()
  const copy = t.projects[project.id]

  return (
    <BentoCard active={active} className={project.image ? 'overflow-hidden p-0!' : undefined}>
      <button
        type="button"
        onClick={() => {
          playClick()
          onOpen(project)
        }}
        aria-label={`${copy.name} — ${t.ui.viewDetails}`}
        className="group flex h-full w-full flex-col text-left outline-none"
      >
        {project.image && (
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt=""
            loading="lazy"
            width={630}
            height={400}
            className="aspect-[63/40] w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        <div className={project.image ? 'flex flex-1 flex-col gap-2 p-4' : 'flex flex-1 flex-col gap-2'}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-medium text-white">{copy.name}</h3>
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
            />
          </div>
          <p className="flex-1 text-sm text-white/60">{copy.description}</p>
          <div className="flex items-center justify-between gap-2 text-xs text-white/60">
            <span>{project.tech}</span>
            <span>{project.platform}</span>
          </div>
        </div>
      </button>
    </BentoCard>
  )
}
