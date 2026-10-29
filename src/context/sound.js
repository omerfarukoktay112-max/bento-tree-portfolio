import { createContext, useContext } from 'react'

export const SoundContext = createContext(null)

export function useSound() {
  const ctx = useContext(SoundContext)
  if (!ctx) throw new Error('useSound must be used within a SoundProvider')
  return ctx
}
