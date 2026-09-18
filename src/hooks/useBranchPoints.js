import { useCallback, useEffect, useRef, useState } from 'react'

export function useBranchPoints(ids) {
  const containerRef = useRef(null)
  const rootRef = useRef(null)
  const nodeRefs = useRef(new Map())
  const [points, setPoints] = useState({ root: null, nodes: {} })

  const registerNode = useCallback(
    (id) => (el) => {
      if (el) nodeRefs.current.set(id, el)
      else nodeRefs.current.delete(id)
    },
    [],
  )

  const measure = useCallback(() => {
    const container = containerRef.current
    const root = rootRef.current
    if (!container || !root) return

    const containerRect = container.getBoundingClientRect()
    const toRelativeCenter = (rect) => ({
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    })

    const nodes = {}
    nodeRefs.current.forEach((el, id) => {
      nodes[id] = toRelativeCenter(el.getBoundingClientRect())
    })

    setPoints({ root: toRelativeCenter(root.getBoundingClientRect()), nodes })
  }, [])

  useEffect(() => {
    measure()

    const observer = new ResizeObserver(() => measure())
    if (containerRef.current) observer.observe(containerRef.current)
    if (rootRef.current) observer.observe(rootRef.current)
    nodeRefs.current.forEach((el) => observer.observe(el))

    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure, ids.join(',')])

  return { containerRef, rootRef, registerNode, points }
}
