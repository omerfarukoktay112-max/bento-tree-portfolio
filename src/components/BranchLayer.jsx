import { motion } from 'framer-motion'

function buildPath(root, point) {
  const dx = point.x - root.x
  const dy = point.y - root.y
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const bend = Math.min(len * 0.18, 40)

  const midX = (root.x + point.x) / 2
  const midY = (root.y + point.y) / 2
  const c1x = root.x + dx * 0.25 + nx * bend
  const c1y = root.y + dy * 0.25 + ny * bend
  const c2x = root.x + dx * 0.75 - nx * bend
  const c2y = root.y + dy * 0.75 - ny * bend

  return `M ${root.x} ${root.y} C ${c1x} ${c1y}, ${(root.x + midX) / 2} ${(root.y + midY) / 2}, ${midX} ${midY} S ${c2x} ${c2y}, ${point.x} ${point.y}`
}

export function BranchLayer({ root, nodes, hoveredId }) {
  if (!root) return null

  const entries = Object.entries(nodes)

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <filter id="branch-glow" x="-75%" y="-75%" width="250%" height="250%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {entries.map(([id, point], index) => {
        const active = hoveredId === id
        return (
          <motion.path
            key={id}
            d={buildPath(root, point)}
            fill="none"
            stroke={active ? '#c084fc' : 'rgba(255,255,255,0.14)'}
            strokeWidth={active ? 2 : 1}
            strokeLinecap="round"
            filter={active ? 'url(#branch-glow)' : undefined}
            className="transition-[stroke,stroke-width] duration-300 ease-out"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ pathLength: { duration: 1, delay: index * 0.15, ease: 'easeInOut' }, opacity: { duration: 0.3, delay: index * 0.15 } }}
          />
        )
      })}
    </svg>
  )
}
