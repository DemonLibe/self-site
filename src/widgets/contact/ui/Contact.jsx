import { contactInfo, languages, interests } from '../../../entities/contact'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import { Tag } from '../../../shared/ui/Tag'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Контакты</h2>

      <div className="contact-info">
        {contactInfo.map((item) => (
          <div key={item.label} className="contact-item">
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-details">
              <span className="contact-label">{item.label}</span>
              <a href={item.link} className="contact-value">{item.value}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="languages-section">
        <h3 className="languages-title">Языки</h3>
        <div className="languages-list">
          {languages.map((lang) => (
            <div key={lang.language} className="language-item">
              <ProgressBar
                label={lang.language}
                sublabel={lang.level}
                value={lang.proficiency}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="interests-section">
        <h3 className="interests-title">Интересы</h3>
        <div className="interests-tags">
          {interests.map((interest) => (
            <Tag key={interest} variant="interest">{interest}</Tag>
          ))}
        </div>
      </div>
    </section>
  )
}
