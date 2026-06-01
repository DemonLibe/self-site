import './About.css'

const highlights = [
  {
    icon: '🚀',
    title: 'Быстрое развитие',
    description: 'Постоянно изучаю новые технологии и внедряю лучшие практики',
  },
  {
    icon: '💡',
    title: 'Решение проблем',
    description: 'Эффективно решаю сложные задачи и оптимизирую производительность',
  },
  {
    icon: '🤝',
    title: 'Командная работа',
    description: 'Легко интегрируюсь в команды и эффективно сотрудничаю',
  },
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">Обо мне</h2>
          <p className="about-description">
            Привет! Я Frontend Developer с более чем 4-летним опытом создания современных и отзывчивых веб-приложений.
            Специализируюсь на разработке с использованием React, JavaScript/TypeScript и современных инструментов веб-разработки.
          </p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div key={item.title} className="highlight-item">
                <span className="highlight-icon">{item.icon}</span>
                <div className="highlight-content">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-description">{item.description}</p>
                </div>
              </div>
            ))}
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
