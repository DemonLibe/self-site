import { profile } from '../../../shared/config/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-profile">
            <img
              src={profile.photo}
              alt="Profile"
              className="profile-photo"
            />
            <div className="profile-info">
              <h1 className="header-title">{profile.name}</h1>
              <p className="header-subtitle">{profile.title}</p>
              <p className="header-tagline">{profile.tagline}</p>
            </div>
          </div>

          <nav className="header-nav">
            <ul className="nav-menu">
              <li><a href="#about" className="nav-link">Обо мне</a></li>
              <li><a href="#experience" className="nav-link">Опыт</a></li>
              <li><a href="#skills" className="nav-link">Навыки</a></li>
              <li><a href="#education" className="nav-link">Образование</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
