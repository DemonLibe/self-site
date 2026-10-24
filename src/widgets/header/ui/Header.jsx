import { useEffect, useState } from 'react'
import { profile } from '../../../shared/config/profile'
import { useActiveSection, useScrollProgress, useTheme } from '../../../shared/lib'
import { Icon } from '../../../shared/ui/Icon'
import './Header.css'

const NAV_ITEMS = [
  { id: 'about', label: 'Обо мне' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Навыки' },
  { id: 'education', label: 'Образование' },
  { id: 'contact', label: 'Контакты' },
]

export function Header() {
  const { progress, scrolled } = useScrollProgress()
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : ''}`}>
      <div className="container header-content">
        <a href="#top" className="header-logo" onClick={closeMenu} aria-label="В начало">
          <span className="header-logo__mark">{profile.initials}</span>
          <span className="header-logo__text">
            {profile.firstName}
            <span className="header-logo__dot">.</span>
          </span>
        </a>

        <nav className="header-nav" aria-label="Основная навигация">
          <ul className="nav-menu">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id} style={{ '--i': i }}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${active === item.id ? 'nav-link--active' : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  <span className="nav-link__index">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            title="Сменить тему"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a href="#contact" className="header-cta" onClick={closeMenu}>
            Связаться
          </a>
          <button
            type="button"
            className="icon-btn header-burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>
      <div className="header-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  )
}
