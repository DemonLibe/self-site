import './ProgressBar.css'

export function ProgressBar({ value, label, sublabel }) {
  return (
    <div className="progress-bar-item">
      {(label || sublabel) && (
        <div className="progress-bar-header">
          {label && <span className="progress-bar-label">{label}</span>}
          {sublabel && <span className="progress-bar-sublabel">{sublabel}</span>}
        </div>
      )}
      <div className="progress-bar">
        <div className="progress-bar__fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
