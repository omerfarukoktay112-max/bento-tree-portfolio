import { lazy, Suspense, useState } from 'react'
import { RootCard } from './components/RootCard'
import { ProjectCard } from './components/ProjectCard'
import { SkillsCard } from './components/SkillsCard'
import { LinksCard } from './components/LinksCard'
import { BranchLayer } from './components/BranchLayer'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { SoundToggle } from './components/SoundToggle'
import { useBranchPoints } from './hooks/useBranchPoints'
import { projects } from './data/projects'
import { cn } from './lib/cn'

const NODE_IDS = ['lotto-game', 'arena-battle', 'fitstep', 'skills', 'links']

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((module) => ({ default: module.ProjectModal })),
)

function App() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const [modalEverOpened, setModalEverOpened] = useState(false)
  const { containerRef, rootRef, registerNode, points } = useBranchPoints(NODE_IDS)

  const openProject = (project) => {
    setModalEverOpened(true)
    setActiveProject(project)
  }

  const nodeProps = (id) => ({
    ref: registerNode(id),
    className: 'relative z-10',
    onMouseEnter: () => setHoveredId(id),
    onMouseLeave: () => setHoveredId((current) => (current === id ? null : current)),
    onFocus: () => setHoveredId(id),
    onBlur: () => setHoveredId((current) => (current === id ? null : current)),
  })

  const projectById = (id) => projects.find((project) => project.id === id)

  return (
    <div className="relative min-h-svh overflow-hidden bg-surface px-4 py-10 md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(192,132,252,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="fixed right-4 top-4 z-20 flex items-center gap-2">
        <SoundToggle />
        <LanguageSwitcher />
      </div>

      <div
        ref={containerRef}
        className={cn(
          'relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 py-8',
          'md:flex-row md:items-center md:justify-center md:gap-12',
        )}
      >
        <BranchLayer root={points.root} nodes={points.nodes} hoveredId={hoveredId} />

        <div className="flex w-full flex-col gap-4 md:w-72 md:justify-center">
          <div {...nodeProps('lotto-game')}>
            <ProjectCard
              project={projectById('lotto-game')}
              active={hoveredId === 'lotto-game'}
              onOpen={openProject}
            />
          </div>
          <div {...nodeProps('arena-battle')}>
            <ProjectCard
              project={projectById('arena-battle')}
              active={hoveredId === 'arena-battle'}
              onOpen={openProject}
            />
          </div>
        </div>

        <div ref={rootRef} className="relative z-10 w-full shrink-0 md:w-80">
          <RootCard />
        </div>

        <div className="flex w-full flex-col gap-4 md:w-72 md:justify-center">
          <div {...nodeProps('fitstep')}>
            <ProjectCard
              project={projectById('fitstep')}
              active={hoveredId === 'fitstep'}
              onOpen={openProject}
            />
          </div>
          <div {...nodeProps('skills')}>
            <SkillsCard active={hoveredId === 'skills'} />
          </div>
          <div {...nodeProps('links')}>
            <LinksCard active={hoveredId === 'links'} />
          </div>
        </div>
      </div>

      {modalEverOpened && (
        <Suspense fallback={null}>
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        </Suspense>
      )}
    </div>
  )
}

export default App
