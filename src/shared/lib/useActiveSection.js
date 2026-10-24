import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState('')
  const key = ids.join(',')

  useEffect(() => {
    const sections = key
      .split(',')
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const onScroll = () => {
      const offset = window.innerHeight * 0.35
      let current = ''
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) current = section.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [key])

  return active
}
