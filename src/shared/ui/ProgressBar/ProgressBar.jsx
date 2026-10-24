import { useInView } from '../../lib/useInView'
import './ProgressBar.css'

export function ProgressBar({ value, label, sublabel, showValue = false }) {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <div ref={ref} className="progress-bar-item">
      {(label || sublabel) && (
        <div className="progress-bar-header">
          {label && <span className="progress-bar-label">{label}</span>}
          {sublabel && <span className="progress-bar-sublabel">{sublabel}</span>}
          {showValue && <span className="progress-bar-value">{value}%</span>}
        </div>
      )}
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className="progress-bar__fill" style={{ width: inView ? `${value}%` : 0 }} />
      </div>
    </div>
  )
}
