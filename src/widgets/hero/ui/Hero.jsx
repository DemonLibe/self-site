import { Avatar, Card, Chip, buttonVariants } from '@heroui/react'
import { profile } from '../../../shared/config/profile'
import { useTypewriter } from '../../../shared/lib'
import { Icon } from '../../../shared/ui/Icon'
import './Hero.css'

const ORBIT_TAGS = ['React', 'TypeScript', 'Node.js', 'CSS']

export function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob--1" />
        <span className="hero-blob hero-blob--2" />
        <span className="hero-blob hero-blob--3" />
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          {profile.available && (
            <Chip variant="secondary" className="hero-badge hero-anim" style={{ '--d': '0ms' }}>
              <span className="hero-badge__dot" />
              <Chip.Label>Открыт к новым предложениям</Chip.Label>
            </Chip>
          )}

          <h1 className="hero-title hero-anim" style={{ '--d': '100ms' }}>
            <span className="hero-title__hello">Привет, я</span>
            <span className="hero-title__name">
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </span>
          </h1>

          <p className="hero-role hero-anim" style={{ '--d': '200ms' }}>
            <span className="hero-role__prompt">&gt;</span>
            <span>{role}</span>
            <span className="hero-role__caret" aria-hidden="true" />
          </p>

          <p className="hero-tagline hero-anim" style={{ '--d': '300ms' }}>
            {profile.tagline}. Фокус на производительности, доступности и пользовательском
            опыте — от идеи до продакшена.
          </p>

          <div className="hero-actions hero-anim" style={{ '--d': '400ms' }}>
            <a href="#contact" className={`${buttonVariants({ size: 'lg' })} btn-xl btn-gradient`}>
              Связаться со мной
              <Icon name="arrowRight" size={18} className="icon-arrow" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({ variant: 'outline', size: 'lg' })} btn-xl btn-glass`}
            >
              <Icon name="github" size={18} />
              GitHub
            </a>
          </div>

          <dl className="hero-stats hero-anim" style={{ '--d': '500ms' }}>
            {profile.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <dt className="hero-stat__value">{stat.value}</dt>
                <dd className="hero-stat__label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual hero-anim" style={{ '--d': '250ms' }}>
          <div className="hero-avatar">
            <div className="hero-avatar__ring" />
            <Avatar className="hero-avatar__inner">
              {profile.photo && <Avatar.Image src={profile.photo} alt={profile.name} />}
              <Avatar.Fallback className="hero-avatar__initials">{profile.initials}</Avatar.Fallback>
            </Avatar>
            {ORBIT_TAGS.map((tag, i) => (
              <Chip key={tag} size="lg" className={`hero-chip hero-chip--${i + 1}`}>
                {tag}
              </Chip>
            ))}
          </div>

          <Card className="hero-code glass-card" aria-hidden="true">
            <Card.Header className="hero-code__bar">
              <span />
              <span />
              <span />
              <em>developer.js</em>
            </Card.Header>
            <pre>
              <code>
                <span className="tk-k">const</span> <span className="tk-v">artur</span> = {'{'}
                {'\n'}  role: <span className="tk-s">'{profile.title}'</span>,
                {'\n'}  city: <span className="tk-s">'Москва'</span>,
                {'\n'}  loves: [<span className="tk-s">'React'</span>, <span className="tk-s">'Anime'</span>],
                {'\n'}  coffee: <span className="tk-n">Infinity</span>,
                {'\n'}{'}'}
              </code>
            </pre>
          </Card>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Прокрутить вниз">
        <span className="hero-scroll__mouse">
          <span />
        </span>
      </a>
    </section>
  )
}
