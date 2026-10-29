import { Download, ExternalLink, Gamepad2, Code2 } from 'lucide-react'
import { useLanguage } from '../context/language'
import { cn } from '../lib/cn'

const ICONS = { itch: Gamepad2, github: Code2, download: Download }

export function ProjectLinks({ links, className }) {
  const { t } = useLanguage()
  const labels = { itch: t.ui.viewOnItch, github: t.ui.viewOnGithub, download: t.ui.download }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {links.map((link) => {
        const Icon = ICONS[link.type]
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-fuchsia-400/60',
              link.type === 'github'
                ? 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                : 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-100 hover:bg-fuchsia-400/20',
            )}
          >
            <Icon size={14} />
            {labels[link.type]}
            <ExternalLink size={12} className="opacity-60" />
          </a>
        )
      })}
    </div>
  )
}
