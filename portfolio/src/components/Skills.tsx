import Image from "next/image"
import SkillsAnima from "./SkillsAnima"

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
    <section id="skills" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Skills"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
            <SkillsAnima />
          </div>
          <div className="md:w-1/2 md:pl-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-coral h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

