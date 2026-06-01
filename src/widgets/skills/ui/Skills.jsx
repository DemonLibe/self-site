import { skillGroups, skillLevels } from '../../../entities/skill'
import { ProgressBar } from '../../../shared/ui/ProgressBar'
import { Tag } from '../../../shared/ui/Tag'
import './Skills.css'

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <h2 className="section-title">Навыки</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-category">
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((skill) => (
                <Tag key={skill} variant="skill">{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skill-levels">
        <h3 className="skill-levels-title">Уровень владения</h3>
        {skillLevels.map((skill) => (
          <ProgressBar key={skill.name} label={skill.name} value={skill.value} />
        ))}
      </div>
    </section>
  )
}
