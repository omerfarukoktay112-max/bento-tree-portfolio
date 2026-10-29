import { ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { earlyWorks } from '../data/projects'
import { useLanguage } from '../context/language'

export function EarlyWorksCard({ active }) {
  const { t } = useLanguage()

  return (
    <BentoCard active={active}>
      <h2 className="mb-3 text-sm font-medium text-white/80">{t.sections.earlyWorks}</h2>
      <ul className="flex flex-col gap-1">
        {earlyWorks.map((work) => (
          <li key={work.url}>
            <a
              href={work.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm text-white/70 outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              <span>{work.name}</span>
              <span className="flex shrink-0 items-center gap-1 text-xs text-white/40">
                {work.tech}
                <ArrowUpRight size={12} className="group-hover:text-white/80" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </BentoCard>
  )
}
