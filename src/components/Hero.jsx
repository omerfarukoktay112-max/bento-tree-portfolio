import { useState } from 'react'
import { ProfileCard } from './ProfileCard'
import { FeaturedTile } from './FeaturedTile'
import { StatsCard } from './StatsCard'
import { LinksCard } from './LinksCard'
import { BranchLayer } from './BranchLayer'
import { useBranchPoints } from '../hooks/useBranchPoints'
import { useLanguage } from '../context/language'
import { projects } from '../data/projects'

const featuredGame = projects.find((project) => project.category === 'game' && project.featured)
const featuredApp = projects.find((project) => project.category === 'app' && project.featured)

const NODE_IDS = ['featured-game', 'stats', 'featured-app', 'links']

// Giriş ekranı: profil kartı köke, çevresindeki kartlar dallara bağlanır.
export function Hero({ onOpenProject }) {
  const { t } = useLanguage()
  const [hoveredId, setHoveredId] = useState(null)
  const { containerRef, rootRef, registerNode, points } = useBranchPoints(NODE_IDS)

  const nodeProps = (id) => ({
    ref: registerNode(id),
    className: 'relative z-10',
    onMouseEnter: () => setHoveredId(id),
    onMouseLeave: () => setHoveredId((current) => (current === id ? null : current)),
    onFocus: () => setHoveredId(id),
    onBlur: () => setHoveredId((current) => (current === id ? null : current)),
  })

  return (
    <section id="top" className="flex items-center pb-4 pt-24 md:pt-28 lg:min-h-[90svh]">
      <div
        ref={containerRef}
        className="relative grid w-full items-center gap-6 lg:grid-cols-[1fr_minmax(0,1.25fr)_1fr] lg:gap-12"
      >
        <BranchLayer root={points.root} nodes={points.nodes} hoveredId={hoveredId} />

        <div className="order-2 flex flex-col gap-6 lg:order-none">
          <div {...nodeProps('featured-game')}>
            <FeaturedTile
              project={featuredGame}
              label={t.hero.featuredGame}
              allLabel={t.hero.seeAllGames}
              allHref="#games"
              active={hoveredId === 'featured-game'}
              onOpen={onOpenProject}
            />
          </div>
          <div {...nodeProps('stats')}>
            <StatsCard active={hoveredId === 'stats'} />
          </div>
        </div>

        <div ref={rootRef} className="relative z-10 order-1 lg:order-none">
          <ProfileCard />
        </div>

        <div className="order-3 flex flex-col gap-6 lg:order-none">
          <div {...nodeProps('featured-app')}>
            <FeaturedTile
              project={featuredApp}
              label={t.hero.featuredApp}
              allLabel={t.hero.seeAllApps}
              allHref="#apps"
              active={hoveredId === 'featured-app'}
              onOpen={onOpenProject}
            />
          </div>
          <div {...nodeProps('links')}>
            <LinksCard active={hoveredId === 'links'} />
          </div>
        </div>
      </div>
    </section>
  )
}
