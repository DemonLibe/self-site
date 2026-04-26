import React from 'react';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Разработка и поддержка клиентских веб-приложений на React. Оптимизация производительности и улучшение пользовательского опыта.',
      achievements: [
        'Сократил время загрузки приложения на 40%',
        'Внедрил TypeScript для улучшения качества кода',
        'Руководил командой из 3 разработчиков'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Разработка полного цикла веб-приложений с использованием React и Node.js.',
      achievements: [
        'Разработал 5+ коммерческих проектов',
        'Интегрировал платежную систему Stripe',
        'Реализовал систему авторизации JWT'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Studio',
      period: '2018 - 2019',
      description: 'Создание лендингов и корпоративных сайтов. Участие в командных проектах.',
      achievements: [
        'Создал 10+ адаптивных сайтов',
        'Изучил современные технологии веб-разработки',
        'Работал с Agile методологией'
      ]
    }
  ]

  return (
    <section className="section experience" id="experience">
      <h2 className="section-title">Опыт работы</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company-period">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <p className="experience-description">{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="experience-achievements">
                <h4 className="achievements-title">Достижения:</h4>
                <ul className="achievements-list">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="experience-summary">
        <h3 className="summary-title">Итог:</h3>
        <p className="summary-text">Более 4 лет опыта в веб-разработке с фокусом на современных технологиях и лучших практиках. Участвовал в 15+ проектах различной сложности.</p>
      </div>
    </section>
  )
}