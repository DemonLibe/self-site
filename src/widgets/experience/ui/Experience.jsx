import { experiences, experienceSummary } from '../../../entities/experience'
import './Experience.css'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <h2 className="section-title">Опыт работы</h2>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.title + exp.company} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company-period">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            {exp.achievements?.length > 0 && (
              <div className="experience-achievements">
                <h4 className="achievements-title">Достижения:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="achievement-item">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="experience-summary">
        <h3 className="summary-title">Итог:</h3>
        <p className="summary-text">{experienceSummary}</p>
      </div>
    </section>
  )
}
