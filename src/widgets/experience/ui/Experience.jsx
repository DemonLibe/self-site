import { Card, Chip } from '@heroui/react'
import { experiences, experienceSummary } from '../../../entities/experience'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { Icon } from '../../../shared/ui/Icon'
import './Experience.css'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Опыт работы"
          title="Где я работал"
          description={experienceSummary}
        />

        <ol className="experience-timeline">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.title + exp.company} delay={i * 80} className="experience-item">
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                {i === 0 && (
                  <Chip color="success" variant="soft" size="sm" className="experience-current">
                    Текущее место
                  </Chip>
                )}
              </div>

              <span className="experience-dot" aria-hidden="true" />

              <Card
                render={(props) => <article {...props} />}
                className="experience-card glass-card"
              >
                <Card.Header className="experience-header">
                  <span className="experience-icon">
                    <Icon name="briefcase" size={18} />
                  </span>
                  <div>
                    <Card.Title className="experience-title">{exp.title}</Card.Title>
                    <span className="experience-company">{exp.company}</span>
                  </div>
                </Card.Header>
                <Card.Content>
                  <p className="experience-description">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <ul className="achievements-list" aria-label="Достижения">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="achievement-item">
                          <Icon name="check" size={16} strokeWidth={2.4} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card.Content>
              </Card>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
