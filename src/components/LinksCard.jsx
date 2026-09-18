import { Code2, Users, Mail, ArrowUpRight } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { links } from '../data/links'
import { useLanguage } from '../context/LanguageContext'

const ICONS = { Code2, Users, Mail }

export function LinksCard({ active }) {
  const { t } = useLanguage()

  return (
    <BentoCard active={active}>
      <h2 className="mb-3 text-sm font-medium text-white/80">{t.sections.links}</h2>
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = ICONS[link.icon]
          return (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              <span className="flex items-center gap-2">
                <Icon size={16} />
                {link.label}
              </span>
              <ArrowUpRight size={14} />
            </a>
          )
        })}
      </div>
    </BentoCard>
  )
}
