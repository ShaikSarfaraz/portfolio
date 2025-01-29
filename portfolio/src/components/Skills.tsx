const Skills = () => {
    const skills = [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "SQL", level: 70 },
    ]
  
    return (
      <section id="skills" className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Skills</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills