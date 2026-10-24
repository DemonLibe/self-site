import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { Icon } from '../../../shared/ui/Icon'
import './About.css'

const highlights = [
  {
    icon: 'rocket',
    title: 'Быстрое развитие',
    description: 'Постоянно изучаю новые технологии и внедряю лучшие практики',
  },
  {
    icon: 'bulb',
    title: 'Решение проблем',
    description: 'Эффективно решаю сложные задачи и оптимизирую производительность',
  },
  {
    icon: 'users',
    title: 'Командная работа',
    description: 'Легко интегрируюсь в команды и эффективно сотрудничаю',
  },
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHeader index="01" eyebrow="Обо мне" title="Немного о себе" />

        <div className="about-grid">
          <Reveal className="about-text">
            <p className="about-lead">
              Привет! Я Frontend Developer с более чем{' '}
              <span className="text-gradient">4-летним опытом</span> создания современных и
              отзывчивых веб-приложений.
            </p>
            <p className="about-description">
              Специализируюсь на разработке с использованием React, JavaScript/TypeScript и
              современных инструментов веб-разработки.
            </p>

            <blockquote className="about-philosophy">
              <h3 className="philosophy-title">Мой подход к работе</h3>
              <p className="philosophy-text">
                Верю в чистый, поддерживаемый код и внимательность к деталям. Уделяю особое
                внимание производительности, доступности и пользовательскому опыту. Постоянно
                стремлюсь к совершенству и профессиональному росту.
              </p>
            </blockquote>
          </Reveal>

          <div className="about-highlights">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="highlight-item card">
                <span className="highlight-icon">
                  <Icon name={item.icon} size={22} />
                </span>
                <div className="highlight-content">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-description">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
