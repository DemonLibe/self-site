import React from 'react';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'artur2000as62@gmail.com',
      link: 'mailto:example@email.com'
    },
    {
      icon: '📱',
      label: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: '📍',
      label: 'Локация',
      value: 'Москва, Россия',
      link: 'https://maps.google.com/?q=Москва'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/arthur-aslyamov-38727b253',
      link: 'https://linkedin.com/in/arthur-aslyamov-38727b253'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/DemonLibe',
      link: 'https://github.com/DemonLibe'
    }
  ]

  const languages = [
    { language: 'Русский', level: 'Native', proficiency: 100 },
    { language: 'Английский', level: 'B1', proficiency: 80 },
    { language: 'Японский', level: 'N5', proficiency: 20 }
  ]

  const interests = [
    'Открытый исходный код',
    'Искусственный интеллект',
    'Anime',
    'Путешествия',
    'Чтение'
  ]

  return (
    <section className="section contact">
      <h2 className="section-title">Контакты</h2>
      
      <div className="contact-info">
        {contactInfo.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-details">
              <span className="contact-label">{item.label}</span>
              <a href={item.link} className="contact-value">{item.value}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-form-section">
        <h3 className="form-title">Связаться со мной</h3>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Ваше имя" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Ваш email" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Сообщение" className="form-textarea" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary form-submit">Отправить сообщение</button>
        </form>
      </div>

      <div className="languages-section">
        <h3 className="languages-title">Языки</h3>
        <div className="languages-list">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="language-header">
                <span className="language-name">{lang.language}</span>
                <span className="language-level">{lang.level}</span>
              </div>
              <div className="language-progress-bar">
                <div 
                  className="language-progress" 
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="interests-section">
        <h3 className="interests-title">Интересы</h3>
        <div className="interests-tags">
          {interests.map((interest, index) => (
            <span key={index} className="interest-tag">{interest}</span>
          ))}
        </div>
      </div>

      <div className="availability-section">
        <h3 className="availability-title">Доступность</h3>
        <div className="availability-status">
          <div className="status-indicator active"></div>
          <span className="status-text">Открыт для новых возможностей</span>
        </div>
        <p className="availability-note">
          Готов к удаленной работе и релокации. Рассматриваю интересные предложения в сфере веб-разработки.
        </p>
        <a href="/resume.pdf" className="btn btn-secondary download-cv">
          📥 Скачать резюме (PDF)
        </a>
      </div>
    </section>
  )
}