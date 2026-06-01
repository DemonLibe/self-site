import './Tag.css'

export function Tag({ children, variant = 'skill' }) {
  return <span className={`tag tag--${variant}`}>{children}</span>
}
