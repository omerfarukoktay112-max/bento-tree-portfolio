import { languages } from '../i18n/translations'
import { useLanguage } from '../context/LanguageContext'
import { cn } from '../lib/cn'

const LABELS = { tr: 'TR', en: 'EN', de: 'DE' }

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
      role="group"
      aria-label="Language"
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-medium outline-none transition-colors',
            'focus-visible:ring-2 focus-visible:ring-fuchsia-400/60',
            lang === code ? 'bg-fuchsia-400/80 text-black' : 'text-white/60 hover:text-white',
          )}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  )
}
