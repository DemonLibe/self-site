import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Иван Иванов</h3>
            <p className="footer-subtitle">Senior Frontend Developer</p>
            <p className="footer-tagline">Создаю будущее веб-технологий</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Быстрые ссылки</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">Обо мне</a></li>
              <li><a href="#experience" className="footer-link">Опыт работы</a></li>
              <li><a href="#skills" className="footer-link">Навыки</a></li>
              <li><a href="#education" className="footer-link">Образование</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Контакты</h4>
            <ul className="footer-contacts">
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:example@email.com" className="footer-link">example@email.com</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <a href="tel:+79991234567" className="footer-link">+7 (999) 123-45-67</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span className="footer-text">Москва, Россия</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Соцсети</h4>
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link">LinkedIn</a>
              <a href="https://github.com" className="social-link">GitHub</a>
              <a href="https://telegram.org" className="social-link">Telegram</a>
              <a href="https://twitter.com" className="social-link">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Иван Иванов. Все права защищены.
          </div>
          <div className="footer-links-bottom">
            <a href="/privacy" className="footer-link">Политика конфиденциальности</a>
            <a href="/terms" className="footer-link">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
