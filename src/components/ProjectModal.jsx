import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function ProjectModal({ project, onClose }) {
  const { t } = useLanguage()
  const closeButtonRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    previouslyFocused.current = document.activeElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused.current?.focus?.()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-surface-2/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t.ui.close}
              className="absolute right-4 top-4 rounded-full p-1 text-white/50 outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              <X size={18} />
            </button>

            <h2 id="project-modal-title" className="pr-8 text-lg font-semibold text-white">
              {t.projects[project.id].name}
            </h2>
            <p className="mt-1 text-xs text-white/50">{project.language}</p>
            <p className="mt-4 text-sm text-white/70">{t.projects[project.id].description}</p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-fuchsia-300/80">
                  {t.ui.problem}
                </h3>
                <p className="mt-1 text-white/70">{t.projects[project.id].caseStudy.problem}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-fuchsia-300/80">
                  {t.ui.approach}
                </h3>
                <p className="mt-1 text-white/70">{t.projects[project.id].caseStudy.approach}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-fuchsia-300/80">
                  {t.ui.result}
                </h3>
                <p className="mt-1 text-white/70">{t.projects[project.id].caseStudy.result}</p>
              </div>
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              {t.ui.viewOnGithub}
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
