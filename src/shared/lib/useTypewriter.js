import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1800 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const word = words[index % words.length]

    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = pause
    if (deleting && text === '') delay = 300

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}
