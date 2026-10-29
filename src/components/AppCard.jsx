import { Dumbbell, KeyRound, PenTool } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { ProjectLinks } from './ProjectLinks'
import { useLanguage } from '../context/language'
import { useSound } from '../context/sound'

const ICONS = { Dumbbell, KeyRound, PenTool }

export function AppCard({ project, onOpen }) {
  const { t } = useLanguage()
  const { playClick } = useSound()
  const copy = t.projects[project.id]
  const Icon = ICONS[project.icon]

  return (
    <BentoCard className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => {
          playClick()
          onOpen(project)
        }}
        aria-label={`${copy.name} — ${t.ui.viewDetails}`}
        className="group flex flex-1 flex-col gap-3 text-left outline-none"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200">
          <Icon size={20} />
        </span>
        <h3 className="font-medium text-white">{copy.name}</h3>
        <p className="flex-1 text-sm text-white/60">{copy.description}</p>
        <p className="text-xs text-white/40">
          {project.tech} · {project.platform}
        </p>
      </button>
      <ProjectLinks links={project.links} />
    </BentoCard>
  )
}
