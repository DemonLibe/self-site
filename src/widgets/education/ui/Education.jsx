import { Card, Chip, Tabs } from '@heroui/react'
import { educationList, certificates, courses } from '../../../entities/education'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { Icon } from '../../../shared/ui/Icon'
import './Education.css'

export function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHeader index="04" eyebrow="Образование" title="Учёба и сертификаты" />

        <div className="education-layout">
          <div className="education-list">
            {educationList.map((edu, i) => (
              <Reveal key={edu.degree + edu.period} delay={i * 100}>
                <Card className="education-item glass-card">
                  <div className="education-top">
                    <span className="education-icon">
                      <Icon name="cap" size={22} />
                    </span>
                    <Chip variant="secondary" className="education-period">
                      {edu.period}
                    </Chip>
                  </div>
                  <Card.Header>
                    <Card.Title className="education-degree">{edu.degree}</Card.Title>
                    <Card.Description className="education-description">
                      {edu.description}
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <p className="education-institution">{edu.institution}</p>
                    {edu.honors && <span className="education-honors">Диплом: {edu.honors}</span>}
                  </Card.Content>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <Tabs className="education-tabs">
              <Tabs.ListContainer>
                <Tabs.List aria-label="Сертификаты и курсы" className="education-tabs__list">
                  <Tabs.Tab id="certificates" className="education-tabs__tab">
                    <Icon name="award" size={16} />
                    Сертификаты
                    <Tabs.Indicator />
                  </Tabs.Tab>
                  <Tabs.Tab id="courses" className="education-tabs__tab">
                    <Icon name="book" size={16} />
                    Курсы
                    <Tabs.Indicator />
                  </Tabs.Tab>
                </Tabs.List>
              </Tabs.ListContainer>

              <Tabs.Panel id="certificates" className="education-tabs__panel">
                <ul className="certificates-list">
                  {certificates.map((cert) => (
                    <li key={cert.name}>
                      <Card className="certificate-card glass-card">
                        <Card.Header>
                          <Card.Title render={(props) => <h4 {...props} />} className="certificate-name">
                            {cert.name}
                          </Card.Title>
                          <Card.Description className="certificate-issuer">
                            {cert.issuer}
                            {cert.credentialId && ` · ID: ${cert.credentialId}`}
                          </Card.Description>
                        </Card.Header>
                        <span className="certificate-date">{cert.date}</span>
                      </Card>
                    </li>
                  ))}
                </ul>
              </Tabs.Panel>

              <Tabs.Panel id="courses" className="education-tabs__panel">
                <ul className="courses-list">
                  {courses.map((course, i) => (
                    <li key={course} className="course-item">
                      <span className="course-index">{String(i + 1).padStart(2, '0')}</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </Tabs.Panel>
            </Tabs>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
