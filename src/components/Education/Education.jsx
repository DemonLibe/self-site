import './Education.css';

export default function Education() {
  const education = [
    {
      degree: 'Магистр',
      institution: 'Казанский национальный исследовательский технический университет им. А.Н. Туполева—КАИ',
      period: '2023 - 2025',
      description: 'Ифнорматика и ИКТ',
    },
    {
      degree: 'Бакалавр ',
      institution: 'Казанский национальный исследовательский технический университет им. А.Н. Туполева—КАИ',
      period: '2018 - 2022',
      description: 'Прикладная информатика',
    }
  ]

  const certificates = [
    {
      name: 'Крутой программист',
      issuer: 'Дядя Петя',
      date: '2022',
      // credentialId: 'AWS123456'
    },
    {
      name: 'Хакерское дело',
      issuer: 'Дядя Вова',
      date: '2021',
      // credentialId: 'REACT2021'
    },
    {
      name: 'Чинитель чайников',
      issuer: 'Мама',
      date: '2020',
      // credentialId: 'JSADV2020'
    }
  ]

  return (
    <section className="section education" id="education">
      <h2 className="section-title">Образование</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-details">
                <span className="education-institution">{edu.institution}</span>
                <span className="education-period">{edu.period}</span>
              </div>
            </div>
            <p className="education-description">{edu.description}</p>
            <div className="education-metrics">
              {/* <div className="metric">
                <span className="metric-label">Средний балл:</span>
                <span className="metric-value">{edu.gpa}</span>
              </div> */}
              {edu.honors && (
                <div className="metric">
                  <span className="metric-label">Диплом:</span>
                  <span className="metric-value honors">{edu.honors}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="certificates-section">
        <h3 className="certificates-title">Сертификаты</h3>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-header">
                <h4 className="certificate-name">{cert.name}</h4>
                <span className="certificate-issuer">{cert.issuer}</span>
              </div>
              <div className="certificate-details">
                <div className="certificate-detail">
                  <span className="detail-label">Выдан:</span>
                  <span className="detail-value">{cert.date}</span>
                </div>
                <div className="certificate-detail">
                  <span className="detail-label">ID:</span>
                  <span className="detail-value">{cert.credentialId}</span>
                </div>
              </div>
              <a href="/certificates" className="certificate-link">Просмотреть сертификат →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-section">
        <h3 className="courses-title">Дополнительные курсы</h3>
        <ul className="courses-list">
          <li className="course-item">Как не застрелиться в рабочее время (2023)</li>
          <li className="course-item">Что делать если Тимлид дурак? (2022)</li>
          <li className="course-item">Анекдоты про программистов (2022)</li>
          <li className="course-item">Рилсы и Тиктоки , или как не отвлекаться на работе (2021)</li>
        </ul>
      </div>
    </section>
  )
}