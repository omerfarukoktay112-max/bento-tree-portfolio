import { useEffect, useMemo, useState } from 'react'
import { languages, translations } from '../i18n/translations'
import { LanguageContext } from './language'

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem('portfolio-lang')
  if (languages.includes(stored)) return stored
  // Kayıtlı tercih yoksa tarayıcı dilini kullan
  const browser = (window.navigator.language || '').slice(0, 2).toLowerCase()
  return languages.includes(browser) ? browser : 'en'
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
