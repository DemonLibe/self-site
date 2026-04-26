import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-profile">
            <img
              src="https://w7.pngwing.com/pngs/802/825/png-transparent-redbubble-polite-cat-meme-funny-cat-meme-thumbnail.png"
              alt="Profile"
              className="profile-photo"
            />
            <div className="profile-info">
              <h1 className="header-title">Артур Аслямов</h1>
              <p className="header-subtitle">Frontend Developer</p>
              <p className="header-tagline">Создаю современные и эффективные веб-приложения</p>
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
