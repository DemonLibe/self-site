import { Reveal } from '../Reveal'
import './SectionHeader.css'

export function SectionHeader({ index, eyebrow, title, description }) {
  return (
    <Reveal className="section-header">
      <span className="section-header__eyebrow">
        <span className="section-header__index">{index}</span>
        <span className="section-header__line" />
        {eyebrow}
      </span>
      <h2 className="section-header__title">{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </Reveal>
  )
}
