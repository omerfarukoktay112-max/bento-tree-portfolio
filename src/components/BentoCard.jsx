import { motion } from 'framer-motion'
import { cn } from '../lib/cn'
import { useSound } from '../context/SoundContext'

export function BentoCard({ className, active, children }) {
  const { playHover } = useSound()

  return (
    <motion.div
      whileHover={{ y: -4 }}
      onHoverStart={playHover}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'h-full rounded-2xl border bg-white/5 backdrop-blur-xl',
        'shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-6 transition-colors duration-300',
        'focus-within:ring-2 focus-within:ring-fuchsia-400/60 focus-within:ring-offset-0',
        active ? 'border-fuchsia-400/60' : 'border-white/10',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
