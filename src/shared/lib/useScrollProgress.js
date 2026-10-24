import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, scrolled: false })

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState({
        progress: max > 0 ? window.scrollY / max : 0,
        scrolled: window.scrollY > 24,
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return state
}
