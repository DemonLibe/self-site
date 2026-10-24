import { skillGroups, skillLevels } from '../../../entities/skill'
import { SectionHeader } from '../../../shared/ui/SectionHeader'
import { Reveal } from '../../../shared/ui/Reveal'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import { Tag } from '../../../shared/ui/Tag'
import './Skills.css'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHeader index="03" eyebrow="Навыки" title="Технологии и инструменты" />

        <div className="skills-layout">
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 80} className="skill-category card">
                <div className="skill-category-head">
                  <h3 className="skill-category-title">{group.category}</h3>
                  <span className="skill-category-count">{String(group.items.length).padStart(2, '0')}</span>
                </div>
                <div className="skill-tags">
                  {group.items.map((skill) => (
                    <Tag key={skill} variant="skill">
                      {skill}
                    </Tag>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="skill-levels card">
            <h3 className="skill-levels-title">Уровень владения</h3>
            <p className="skill-levels-subtitle">Ключевые технологии в ежедневной работе</p>
            {skillLevels.map((skill) => (
              <ProgressBar key={skill.name} label={skill.name} value={skill.value} showValue />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
