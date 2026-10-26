import { Label, ProgressBar as HeroProgressBar } from '@heroui/react'
import { useInView } from '../../lib/useInView'
import './ProgressBar.css'

// HeroUI ProgressBar that fills up once it scrolls into view
export function ProgressBar({ value, label, sublabel, showValue = false }) {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <div ref={ref} className="skill-progress">
      <HeroProgressBar
        value={inView ? value : 0}
        size="sm"
        color="accent"
        aria-label={label}
        className="skill-progress__bar"
      >
        <div className="skill-progress__header">
          <Label className="skill-progress__label">{label}</Label>
          {sublabel && <span className="skill-progress__badge">{sublabel}</span>}
          {showValue && <span className="skill-progress__badge">{value}%</span>}
        </div>
        <HeroProgressBar.Track className="skill-progress__track">
          <HeroProgressBar.Fill className="skill-progress__fill" />
        </HeroProgressBar.Track>
      </HeroProgressBar>
    </div>
  )
}
