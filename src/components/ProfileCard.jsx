import { useState } from 'react'
import { Download, MapPin, Mail } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { profile } from '../data/profile'
import { useLanguage } from '../context/language'

export function ProfileCard() {
  const { t } = useLanguage()
  const [avatarFailed, setAvatarFailed] = useState(false)

  return (
    <BentoCard className="flex flex-col items-center gap-4 text-center md:p-8">
      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 text-3xl font-semibold text-white ring-2 ring-fuchsia-400/50 ring-offset-4 ring-offset-surface">
        {avatarFailed ? (
          profile.avatarInitials
        ) : (
          <img
            src={profile.avatar}
            alt={t.profile.name}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            onError={() => setAvatarFailed(true)}
          />
        )}
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-white">{t.profile.name}</h1>
        <p className="mt-1 font-medium text-fuchsia-200/90">{t.profile.title}</p>
        <p className="mt-2 flex items-center justify-center gap-1 text-xs text-white/50">
          <MapPin size={12} />
          {t.hero.location}
        </p>
      </div>
      <p className="max-w-sm text-sm text-white/70">{t.profile.bio}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <a
          href="#contact"
          className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-fuchsia-400 px-4 py-2 text-xs font-semibold text-black outline-none transition hover:bg-fuchsia-300 focus-visible:ring-2 focus-visible:ring-fuchsia-200"
        >
          <Mail size={14} />
          {t.hero.contactCta}
        </a>
        <div className="flex items-center overflow-hidden rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 text-xs font-medium text-fuchsia-100">
          <span className="flex items-center gap-1.5 py-2 pl-4 pr-2">
            <Download size={14} />
            CV
          </span>
          {Object.entries(profile.cv).map(([code, href]) => (
            <a
              key={code}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.ui.downloadCv} (${code.toUpperCase()})`}
              className="border-l border-fuchsia-400/30 px-3 py-2 outline-none transition last:pr-4 hover:bg-fuchsia-400/20 focus-visible:bg-fuchsia-400/20"
            >
              {code.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}
