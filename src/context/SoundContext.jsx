import { createContext, useContext, useMemo, useRef, useState } from 'react'

const SoundContext = createContext(null)

function getInitialEnabled() {
  if (typeof window === 'undefined') return true
  const stored = window.localStorage.getItem('portfolio-sound')
  return stored === null ? true : stored === 'on'
}

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(getInitialEnabled)
  const audioCtxRef = useRef(null)

  const value = useMemo(() => {
    const getContext = () => {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        if (!AudioCtx) return null
        audioCtxRef.current = new AudioCtx()
      }
      return audioCtxRef.current
    }

    const playTone = (frequency, duration) => {
      if (!enabled) return
      const ctx = getContext()
      if (!ctx) return
      if (ctx.state === 'suspended') ctx.resume()

      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = frequency
      gain.gain.setValueAtTime(0, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.01)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

      oscillator.connect(gain)
      gain.connect(ctx.destination)
      oscillator.start()
      oscillator.stop(ctx.currentTime + duration)
    }

    return {
      enabled,
      toggle: () => {
        setEnabled((current) => {
          const next = !current
          try {
            window.localStorage.setItem('portfolio-sound', next ? 'on' : 'off')
          } catch {
            // localStorage erişilemezse sessizce yoksay
          }
          return next
        })
      },
      playHover: () => playTone(720, 0.08),
      playClick: () => playTone(920, 0.1),
    }
  }, [enabled])

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSound must be used within a SoundProvider')
  return ctx
}
