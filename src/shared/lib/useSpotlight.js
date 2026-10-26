import { useEffect } from 'react'

// Tracks the pointer over any `.glass-card` so CSS can draw a soft glow under the cursor.
export function useSpotlight(selector = '.glass-card') {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(selector)
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [selector])
}
