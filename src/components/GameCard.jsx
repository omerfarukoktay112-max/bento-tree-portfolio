import { BentoCard } from './BentoCard'
import { ProjectLinks } from './ProjectLinks'
import { useLanguage } from '../context/language'
import { useSound } from '../context/sound'

export function GameCard({ project, onOpen }) {
  const { t } = useLanguage()
  const { playClick } = useSound()
  const copy = t.projects[project.id]

  return (
    <BentoCard className="flex flex-col overflow-hidden p-0!">
      <button
        type="button"
        onClick={() => {
          playClick()
          onOpen(project)
        }}
        aria-label={`${copy.name} — ${t.ui.viewDetails}`}
        className="group flex flex-1 flex-col text-left outline-none"
      >
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt=""
          loading="lazy"
          width={630}
          height={400}
          className="aspect-[63/40] w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        />
        <div className="flex flex-1 flex-col gap-2 p-4 pb-3">
          <h3 className="font-medium text-white">{copy.name}</h3>
          <p className="flex-1 text-sm text-white/60">{copy.description}</p>
          <p className="text-xs text-white/40">
            {project.tech} · {project.platform}
          </p>
        </div>
      </button>
      <ProjectLinks links={project.links} className="px-4 pb-4" />
    </BentoCard>
  )
}
