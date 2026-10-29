import { lazy, Suspense, useState } from 'react'
import { RootCard } from './components/RootCard'
import { ProjectCard } from './components/ProjectCard'
import { SkillsCard } from './components/SkillsCard'
import { LinksCard } from './components/LinksCard'
import { EarlyWorksCard } from './components/EarlyWorksCard'
import { BranchLayer } from './components/BranchLayer'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { SoundToggle } from './components/SoundToggle'
import { useBranchPoints } from './hooks/useBranchPoints'
import { useLanguage } from './context/language'
import { projects } from './data/projects'
import { cn } from './lib/cn'

// Sol dal: oyunlar, sağ dal: uygulamalar. Yeni proje eklemek için data/projects.js yeterli.
const games = projects.filter((project) => project.category === 'game')
const apps = projects.filter((project) => project.category === 'app')

const NODE_IDS = [...projects.map((project) => project.id), 'early-works', 'skills', 'links']

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((module) => ({ default: module.ProjectModal })),
)

function App() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const [modalEverOpened, setModalEverOpened] = useState(false)
  const { t } = useLanguage()
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

  const renderProject = (project) => (
    <div key={project.id} {...nodeProps(project.id)}>
      <ProjectCard project={project} active={hoveredId === project.id} onOpen={openProject} />
    </div>
  )

  const columnLabel = (label) => (
    <h2 className="px-1 text-xs font-medium uppercase tracking-widest text-fuchsia-300/80">{label}</h2>
  )

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

        <div className="order-2 flex w-full flex-col gap-4 md:order-none md:w-72 md:justify-center">
          {columnLabel(t.sections.games)}
          {games.map(renderProject)}
          <div {...nodeProps('early-works')}>
            <EarlyWorksCard active={hoveredId === 'early-works'} />
          </div>
        </div>

        <div ref={rootRef} className="relative z-10 order-1 w-full shrink-0 md:order-none md:w-80">
          <RootCard />
        </div>

        <div className="order-3 flex w-full flex-col gap-4 md:order-none md:w-72 md:justify-center">
          {columnLabel(t.sections.apps)}
          {apps.map(renderProject)}
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
