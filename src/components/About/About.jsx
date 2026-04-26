import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">Обо мне</h2>
          <p className="about-description">
            Привет! Я  Frontend Developer с более чем 4-летним опытом создания современных и отзывчивых веб-приложений.
            Специализируюсь на разработке с использованием React, JavaScript/TypeScript и современных инструментов веб-разработки.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <div className="highlight-content">
                <h3 className="highlight-title">Быстрое развитие</h3>
                <p className="highlight-description">Постоянно изучаю новые технологии и внедряю лучшие практики</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-icon">💡</span>
              <div className="highlight-content">
                <h3 className="highlight-title">Решение проблем</h3>
                <p className="highlight-description">Эффективно решаю сложные задачи и оптимизирую производительность</p>
              </div>
            </div>

            <div className="highlight-item">
              <span className="highlight-icon">🤝</span>
              <div className="highlight-content">
                <h3 className="highlight-title">Командная работа</h3>
                <p className="highlight-description">Легко интегрируюсь в команды и эффективно сотрудничаю</p>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="about-philosophy">
        <h3 className="philosophy-title">Мой подход к работе</h3>
        <p className="philosophy-text">
          Верю в чистый, поддерживаемый код и внимательность к деталям. Уделяю особое внимание производительности,
          доступности и пользовательскому опыту. Постоянно стремлюсь к совершенству и профессиональному росту.
        </p>
      </div>
    </section>
  )
}
