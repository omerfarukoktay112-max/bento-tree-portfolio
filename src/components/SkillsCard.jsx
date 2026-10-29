import { BentoCard } from './BentoCard'
import { skillGroups } from '../data/skills'
import { useLanguage } from '../context/language'
import { cn } from '../lib/cn'

export function SkillsCard() {
  const { t } = useLanguage()

  return (
    <BentoCard>
      <h3 className="mb-4 font-medium text-white">{t.sections.skills}</h3>
      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-white/50">{t.skillGroups[group.id]}</h4>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={cn(
                    'rounded-full border px-3 py-1 text-xs',
                    group.featured?.includes(skill)
                      ? 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200'
                      : 'border-white/10 bg-white/5 text-white/70',
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
