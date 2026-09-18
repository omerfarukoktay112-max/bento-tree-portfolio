import { Volume2, VolumeX } from 'lucide-react'
import { useSound } from '../context/SoundContext'

export function SoundToggle() {
  const { enabled, toggle } = useSound()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Sesi kapat' : 'Sesi aç'}
      className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 outline-none backdrop-blur-xl transition hover:text-white focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
    >
      {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  )
}
