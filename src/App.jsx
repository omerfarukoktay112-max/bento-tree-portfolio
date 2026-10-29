import { lazy, Suspense, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { GameCard } from './components/GameCard'
import { AppCard } from './components/AppCard'
import { EarlyWorksCard } from './components/EarlyWorksCard'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { useLanguage } from './context/language'
import { projects } from './data/projects'

// Yeni proje eklemek için data/projects.js ve i18n/translations.js yeterli.
const games = projects.filter((project) => project.category === 'game')
const apps = projects.filter((project) => project.category === 'app')
const YEAR = new Date().getFullYear()

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((module) => ({ default: module.ProjectModal })),
)

function App() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState(null)
  const [modalEverOpened, setModalEverOpened] = useState(false)

  const openProject = (project) => {
    setModalEverOpened(true)
    setActiveProject(project)
  }

  return (
    <div className="relative min-h-svh overflow-x-clip bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(192,132,252,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <Hero onOpenProject={openProject} />

        <Section id="games" title={t.sections.games.title} subtitle={t.sections.games.subtitle}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((project) => (
              <GameCard key={project.id} project={project} onOpen={openProject} />
            ))}
          </div>
        </Section>

        <Section id="apps" title={t.sections.apps.title} subtitle={t.sections.apps.subtitle}>
          <div className="grid gap-6 md:grid-cols-3">
            {apps.map((project) => (
              <AppCard key={project.id} project={project} onOpen={openProject} />
            ))}
          </div>
          <div className="mt-6">
            <EarlyWorksCard />
          </div>
        </Section>

        <Section id="about" title={t.sections.about.title} subtitle={t.sections.about.subtitle}>
          <AboutSection />
        </Section>

        <Section id="contact" title={t.sections.contact.title} subtitle={t.sections.contact.subtitle}>
          <ContactSection />
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-white/40 sm:flex-row sm:justify-between md:px-8">
          <p>© {YEAR} {t.profile.name}</p>
          <p>{t.contact.footer}</p>
        </div>
      </footer>

      {modalEverOpened && (
        <Suspense fallback={null}>
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        </Suspense>
      )}
    </div>
  )
}

export default App
