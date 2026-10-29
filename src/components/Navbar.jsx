import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { SoundToggle } from './SoundToggle'
import { useLanguage } from '../context/language'
import { cn } from '../lib/cn'

const SECTION_IDS = ['games', 'apps', 'about', 'contact']

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'rounded-full px-3 py-1.5 text-sm text-white/70 outline-none transition hover:bg-white/5 hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 border-b transition-colors duration-300',
        scrolled || open ? 'border-white/10 bg-surface/80 backdrop-blur-xl' : 'border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/60 to-cyan-400/60 text-[13px] font-bold tracking-tight text-white">
            ÖO
          </span>
          <span className="hidden text-sm font-medium text-white sm:inline">{t.profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass}>
              {t.nav[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <SoundToggle />
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.ui.menu}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white/70 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 md:hidden">
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className={linkClass}>
              {t.nav[id]}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
