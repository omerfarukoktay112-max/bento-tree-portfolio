import { ArrowRight, Dumbbell, KeyRound, PenTool } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { useLanguage } from '../context/language'
import { useSound } from '../context/sound'

const ICONS = { Dumbbell, KeyRound, PenTool }

export function FeaturedTile({ project, label, allLabel, allHref, active, onOpen }) {
  const { t } = useLanguage()
  const { playClick } = useSound()
  const copy = t.projects[project.id]
  const Icon = ICONS[project.icon]

  return (
    <BentoCard active={active} className="flex flex-col overflow-hidden p-0!">
      <button
        type="button"
        onClick={() => {
          playClick()
          onOpen(project)
        }}
        aria-label={`${copy.name} — ${t.ui.viewDetails}`}
        className="group flex flex-col text-left outline-none"
      >
        {project.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt=""
            width={630}
            height={400}
            className="aspect-[63/30] w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : null}
        <div className="flex flex-col gap-1.5 p-5 pb-3">
          <span className="text-[11px] font-medium uppercase tracking-widest text-fuchsia-300/80">{label}</span>
          <span className="flex items-center gap-2 font-medium text-white">
            {Icon && <Icon size={16} className="text-fuchsia-200" />}
            {copy.name}
          </span>
          <span className="line-clamp-2 text-sm text-white/60">{copy.description}</span>
        </div>
      </button>
      <a
        href={allHref}
        className="mx-5 mb-4 flex items-center gap-1 self-start rounded text-xs font-medium text-white/60 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
      >
        {allLabel}
        <ArrowRight size={12} />
      </a>
    </BentoCard>
  )
}
