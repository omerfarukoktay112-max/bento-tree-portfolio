import { Mail } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { links } from '../data/links'
import { useLanguage } from '../context/language'

const email = links.find((link) => link.id === 'email')
const others = links.filter((link) => link.id !== 'email')

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <BentoCard className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:p-8">
      <div>
        <a
          href={email.href}
          className="text-xl font-semibold text-white underline decoration-fuchsia-400/50 underline-offset-4 outline-none transition hover:decoration-fuchsia-300 focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 md:text-2xl"
        >
          {email.href.replace('mailto:', '')}
        </a>
        <div className="mt-3 flex flex-wrap gap-2">
          {others.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <a
        href={email.href}
        className="flex shrink-0 items-center gap-2 rounded-full bg-fuchsia-400 px-5 py-2.5 text-sm font-semibold text-black outline-none transition hover:bg-fuchsia-300 focus-visible:ring-2 focus-visible:ring-fuchsia-200"
      >
        <Mail size={16} />
        {t.contact.emailCta}
      </a>
    </BentoCard>
  )
}
