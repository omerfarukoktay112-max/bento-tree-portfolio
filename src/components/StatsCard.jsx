import { BentoCard } from './BentoCard'
import { useLanguage } from '../context/language'

export function StatsCard({ active }) {
  const { t } = useLanguage()

  return (
    <BentoCard active={active} className="p-5">
      <dl className="grid grid-cols-3 gap-3 text-center">
        {t.hero.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="order-2 text-[11px] leading-tight text-white/50">{stat.label}</dt>
            <dd className="order-1 bg-gradient-to-br from-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-semibold text-transparent">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </BentoCard>
  )
}
