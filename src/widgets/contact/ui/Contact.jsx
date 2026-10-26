import { Button, Card, Chip, buttonVariants, toast } from '@heroui/react'
import { contactInfo, languages, interests } from '../../../entities/contact'
import { profile } from '../../../shared/config/profile'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import { Icon } from '../../../shared/ui/Icon'
import './Contact.css'

function CopyEmailButton({ email }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      toast.success('Email скопирован', { description: email, timeout: 2500 })
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <Button variant="outline" size="lg" className="btn-xl btn-glass" onPress={copy}>
      <Icon name="copy" size={18} />
      Скопировать email
    </Button>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader index="05" eyebrow="Контакты" title="Давайте поработаем вместе" />

        <Reveal>
          <Card className="contact-cta glass-card">
            <div className="contact-cta__glow" aria-hidden="true" />
            <p className="contact-cta__text">
              Есть интересный проект или вакансия? Напишите мне — отвечу в течение дня.
            </p>
            <a href={`mailto:${profile.email}`} className="contact-cta__email">
              {profile.email}
            </a>
            <div className="contact-cta__actions">
              <a
                href={`mailto:${profile.email}`}
                className={`${buttonVariants({ size: 'lg' })} btn-xl btn-gradient`}
              >
                Написать письмо
                <Icon name="arrowRight" size={18} className="icon-arrow" />
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
          </Card>
        </Reveal>

        <ul className="contact-info">
          {contactInfo.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 60}>
              <Card
                render={(props) => (
                  <a
                    {...props}
                    href={item.link}
                    {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  />
                )}
                className="contact-item glass-card"
              >
                <span className="contact-icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <span className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </span>
                <Icon name="arrowRight" size={18} className="contact-arrow" />
              </Card>
            </Reveal>
          ))}
        </ul>

        <div className="contact-extra">
          <Reveal>
            <Card className="languages-section glass-card">
              <Card.Header>
                <Card.Title className="contact-subtitle">Языки</Card.Title>
              </Card.Header>
              <Card.Content>
                {languages.map((lang) => (
                  <ProgressBar
                    key={lang.language}
                    label={lang.language}
                    sublabel={lang.level}
                    value={lang.proficiency}
                  />
                ))}
              </Card.Content>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="interests-section glass-card">
              <Card.Header>
                <Card.Title className="contact-subtitle">Интересы</Card.Title>
              </Card.Header>
              <Card.Content className="interests-tags">
                {interests.map((interest) => (
                  <Chip key={interest} size="lg" className="interest-chip">
                    {interest}
                  </Chip>
                ))}
              </Card.Content>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
