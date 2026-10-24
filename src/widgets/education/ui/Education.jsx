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
              <Reveal key={edu.degree + edu.period} delay={i * 100} className="education-item card">
                <div className="education-top">
                  <span className="education-icon">
                    <Icon name="cap" size={22} />
                  </span>
                  <span className="education-period">{edu.period}</span>
                </div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-description">{edu.description}</p>
                <p className="education-institution">{edu.institution}</p>
                {edu.honors && <span className="education-honors">Диплом: {edu.honors}</span>}
              </Reveal>
            ))}
          </div>

          <div className="education-side">
            <Reveal className="certificates-section">
              <h3 className="education-subtitle">
                <Icon name="award" size={18} />
                Сертификаты
              </h3>
              <ul className="certificates-list">
                {certificates.map((cert) => (
                  <li key={cert.name} className="certificate-card card">
                    <div>
                      <h4 className="certificate-name">{cert.name}</h4>
                      <span className="certificate-issuer">{cert.issuer}</span>
                      {cert.credentialId && (
                        <span className="certificate-id">ID: {cert.credentialId}</span>
                      )}
                    </div>
                    <span className="certificate-date">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="courses-section">
              <h3 className="education-subtitle">
                <Icon name="book" size={18} />
                Дополнительные курсы
              </h3>
              <ul className="courses-list">
                {courses.map((course, i) => (
                  <li key={course} className="course-item">
                    <span className="course-index">{String(i + 1).padStart(2, '0')}</span>
                    {course}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
