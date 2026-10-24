import { useState } from 'react'
import { contactInfo, languages, interests } from '../../../entities/contact'
import { profile } from '../../../shared/config/profile'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import { Tag } from '../../../shared/ui/Tag'
import { Icon } from '../../../shared/ui/Icon'
import './Contact.css'

function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button type="button" className="btn btn-ghost" onClick={copy}>
      <Icon name={copied ? 'check' : 'copy'} size={18} />
      {copied ? 'Скопировано!' : 'Скопировать email'}
    </button>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader index="05" eyebrow="Контакты" title="Давайте поработаем вместе" />

        <Reveal className="contact-cta card">
          <div className="contact-cta__glow" aria-hidden="true" />
          <p className="contact-cta__text">
            Есть интересный проект или вакансия? Напишите мне — отвечу в течение дня.
          </p>
          <a href={`mailto:${profile.email}`} className="contact-cta__email">
            {profile.email}
          </a>
          <div className="contact-cta__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Написать письмо
              <Icon name="arrowRight" size={18} />
            </a>
            <CopyEmailButton email={profile.email} />
          </div>
        </Reveal>

        <ul className="contact-info">
          {contactInfo.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 60}>
              <a
                href={item.link}
                className="contact-item card"
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="contact-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </span>
                <Icon name="arrowRight" size={18} className="contact-arrow" />
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="contact-extra">
          <Reveal className="languages-section card">
            <h3 className="contact-subtitle">Языки</h3>
            {languages.map((lang) => (
              <ProgressBar
                key={lang.language}
                label={lang.language}
                sublabel={lang.level}
                value={lang.proficiency}
              />
            ))}
          </Reveal>

          <Reveal delay={100} className="interests-section card">
            <h3 className="contact-subtitle">Интересы</h3>
            <div className="interests-tags">
              {interests.map((interest) => (
                <Tag key={interest} variant="interest">
                  {interest}
                </Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
