import { educationList, certificates, courses } from '../../../entities/education'
import './Education.css'

export function Education() {
  return (
    <section className="section education" id="education">
      <h2 className="section-title">Образование</h2>

      <div className="education-timeline">
        {educationList.map((edu) => (
          <div key={edu.degree + edu.period} className="education-item">
            <div className="education-header">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-details">
                <span className="education-institution">{edu.institution}</span>
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
            <p className="education-description">{edu.description}</p>
            {edu.honors && (
              <div className="education-metrics">
                <div className="metric">
                  <span className="metric-label">Диплом:</span>
                  <span className="metric-value honors">{edu.honors}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="certificates-section">
        <h3 className="certificates-title">Сертификаты</h3>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.name} className="certificate-card">
              <div className="certificate-header">
                <h4 className="certificate-name">{cert.name}</h4>
                <span className="certificate-issuer">{cert.issuer}</span>
              </div>
              <div className="certificate-details">
                <div className="certificate-detail">
                  <span className="detail-label">Выдан:</span>
                  <span className="detail-value">{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="certificate-detail">
                    <span className="detail-label">ID:</span>
                    <span className="detail-value">{cert.credentialId}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-section">
        <h3 className="courses-title">Дополнительные курсы</h3>
        <ul className="courses-list">
          {courses.map((course) => (
            <li key={course} className="course-item">{course}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
