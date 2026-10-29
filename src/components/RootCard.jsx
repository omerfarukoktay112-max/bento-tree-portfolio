import { useState } from 'react'
import { Download } from 'lucide-react'
import { BentoCard } from './BentoCard'
import { profile } from '../data/profile'
import { useLanguage } from '../context/language'

export function RootCard() {
  const { t } = useLanguage()
  const [avatarFailed, setAvatarFailed] = useState(false)

  return (
    <BentoCard className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 text-2xl font-semibold text-white ring-2 ring-fuchsia-400/50">
        {avatarFailed ? (
          profile.avatarInitials
        ) : (
          <img
            src={profile.avatar}
            alt={t.profile.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
            onError={() => setAvatarFailed(true)}
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-white">{t.profile.name}</h1>
        <p className="mt-1 text-sm text-fuchsia-200/80">{t.profile.title}</p>
      </div>
      <p className="max-w-xs text-sm text-white/70">{t.profile.bio}</p>
      <div className="flex gap-2">
        {Object.entries(profile.cv).map(([code, href]) => (
          <a
            key={code}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.ui.downloadCv} (${code.toUpperCase()})`}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-3 py-1.5 text-xs font-medium text-fuchsia-100 outline-none transition hover:bg-fuchsia-400/20 focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
          >
            <Download size={14} />
            CV · {code.toUpperCase()}
          </a>
        ))}
      </div>
    </BentoCard>
  )
}
