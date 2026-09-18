import { Star, GitCommit, ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { useLanguage } from '../context/LanguageContext'
import { useSound } from '../context/SoundContext'

export function ProjectCard({ project, active, onOpen }) {
  const { t } = useLanguage()
  const { playClick } = useSound()
  const copy = t.projects[project.id]

  return (
    <BentoCard active={active}>
      <button
        type="button"
        onClick={() => {
          playClick()
          onOpen(project)
        }}
        aria-label={`${copy.name} — ${t.ui.viewDetails}`}
        className="group flex h-full w-full flex-col gap-2 text-left outline-none"
      >
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-medium text-white">{copy.name}</h2>
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
          />
        </div>
        <p className="flex-1 text-sm text-white/60">{copy.description}</p>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{project.language}</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1" title={t.stats.commits}>
              <GitCommit size={14} />
              {project.commits}
            </span>
            <span className="flex items-center gap-1" title={t.stats.stars}>
              <Star size={14} />
              {project.stars}
            </span>
          </span>
        </div>
      </button>
    </BentoCard>
  )
}
