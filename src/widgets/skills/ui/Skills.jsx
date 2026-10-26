import { Card, Chip } from '@heroui/react'
import { skillGroups, skillLevels } from '../../../entities/skill'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import './Skills.css'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeader index="03" eyebrow="Навыки" title="Технологии и инструменты" />

        <div className="skills-layout">
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 80}>
                <Card className="skill-category glass-card">
                  <Card.Header className="skill-category-head">
                    <Card.Title className="skill-category-title">{group.category}</Card.Title>
                    <span className="skill-category-count">
                      {String(group.items.length).padStart(2, '0')}
                    </span>
                  </Card.Header>
                  <Card.Content className="skill-tags">
                    {group.items.map((skill) => (
                      <Chip key={skill} variant="tertiary" className="skill-chip">
                        {skill}
                      </Chip>
                    ))}
                  </Card.Content>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <Card className="skill-levels glass-card">
              <Card.Header>
                <Card.Title className="skill-levels-title">Уровень владения</Card.Title>
                <Card.Description className="skill-levels-subtitle">
                  Ключевые технологии в ежедневной работе
                </Card.Description>
              </Card.Header>
              <Card.Content>
                {skillLevels.map((skill) => (
                  <ProgressBar key={skill.name} label={skill.name} value={skill.value} showValue />
                ))}
              </Card.Content>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
