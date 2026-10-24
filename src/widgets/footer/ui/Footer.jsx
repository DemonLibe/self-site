import { profile } from '../../../shared/config/profile'
import { Icon } from '../../../shared/ui/Icon'
import './Footer.css'

const socials = [
  { icon: 'github', label: 'GitHub', href: profile.github },
  { icon: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { icon: 'mail', label: 'Email', href: `mailto:${profile.email}` },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{profile.name}</span>
          <span className="footer-copyright">
            © {currentYear} · Сделано с React и щепоткой магии
          </span>
        </div>

        <div className="footer-actions">
          <ul className="footer-socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="icon-btn"
                  aria-label={s.label}
                  title={s.label}
                  {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className="footer-top">
            Наверх
            <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
