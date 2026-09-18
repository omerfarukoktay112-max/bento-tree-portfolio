import { BentoCard } from './BentoCard'
import { skills } from '../data/skills'
import { useLanguage } from '../context/LanguageContext'
import { cn } from '../lib/cn'

export function SkillsCard({ active }) {
  const { t } = useLanguage()

  return (
    <BentoCard active={active}>
      <h2 className="mb-3 text-sm font-medium text-white/80">{t.sections.skills}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className={cn(
              'rounded-full border px-3 py-1 text-xs',
              skill.featured
                ? 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-200'
                : 'border-white/10 bg-white/5 text-white/70',
            )}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}
