import React from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Артур Аслямов. Все права защищены.
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
