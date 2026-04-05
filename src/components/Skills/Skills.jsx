import './Skills.css';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL', 'REST API'] },
    { category: 'Tools', items: ['Git', 'Webpack', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Soft Skills', items: ['Teamwork', 'Problem Solving', 'Communication', 'Time Management', 'Adaptability'] }
  ]

  return (
    <section className="section skills">
      <h2 className="section-title">Навыки</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skill-levels">
        <h3 className="skill-levels-title">Уровень владения</h3>
        <div className="skill-level-item">
          <span className="skill-name">JavaScript</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-level-item">
          <span className="skill-name">React</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-level-item">
          <span className="skill-name">Node.js</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-level-item">
          <span className="skill-name">Python</span>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}