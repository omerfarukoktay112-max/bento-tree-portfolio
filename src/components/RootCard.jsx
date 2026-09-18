import { BentoCard } from './BentoCard'
import { profile } from '../data/profile'
import { useLanguage } from '../context/LanguageContext'

export function RootCard() {
  const { t } = useLanguage()

  return (
    <BentoCard className="flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 text-2xl font-semibold text-white">
        {profile.avatarInitials}
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-white">{t.profile.name}</h1>
        <p className="mt-1 text-sm text-white/60">{t.profile.title}</p>
      </div>
      <p className="max-w-xs text-sm text-white/70">{t.profile.bio}</p>
    </BentoCard>
  )
}
