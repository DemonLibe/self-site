import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-profile">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="profile-photo"
            />
            <div className="profile-info">
              <h1 className="header-title">Иван Иванов</h1>
              <p className="header-subtitle">Senior Frontend Developer</p>
              <p className="header-tagline">Создаю современные и эффективные веб-приложения</p>
            </div>
          </div>

          <nav className="header-nav">
            <ul className="nav-menu">
              <li><a href="#about" className="nav-link">Обо мне</a></li>
              <li><a href="#experience" className="nav-link">Опыт</a></li>
              <li><a href="#skills" className="nav-link">Навыки</a></li>
              <li><a href="#education" className="nav-link">Образование</a></li>
              <li><a href="#contact" className="nav-link">Контакты</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">Связаться</a>
            <a href="/resume.pdf" className="btn btn-secondary">Скачать CV</a>
          </div>
        </div>
      </div>
    </header>
  )
}
