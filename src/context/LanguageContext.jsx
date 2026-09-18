import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { languages, translations } from '../i18n/translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('portfolio-lang')
  return languages.includes(stored) ? stored : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      setLang: (next) => {
        if (!languages.includes(next)) return
        setLang(next)
        try {
          window.localStorage.setItem('portfolio-lang', next)
        } catch {
          // localStorage erişilemezse sessizce yoksay
        }
      },
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
