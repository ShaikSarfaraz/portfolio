"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SkillsAnima from "./SkillsAnima"
import { TypeAnimation } from "react-type-animation"

const Skills = () => {
  // const skills = [
  //   { name: "React", level: 90 },
  //   { name: "TypeScript", level: 85 },
  //   { name: "Next.js", level: 80 },
  //   { name: "JavaScript", level: 95 },
  //   { name: "HTML5 & CSS3", level: 90 },
  //   { name: "Redux", level: 85 },
  //   { name: "Node.js", level: 75 },
  //   { name: "SQL", level: 70 },
  // ]

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React JS", level: 85 },
        { name: "Next JS", level: 80 },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "MS-SQL", level: 80 },
        { name: "Node.js", level: 50 },
        { name: "RESTful APIs", level: 50 },
        { name: "Java", level: 40 },
        // { name: "GraphQL", level: 60 },
      ],
    },
    // {
    //   category: "UI Design",
    //   items: [
    //     { name: "Photoshop", level: 90 },
    //     { name: "Figma", level: 80 },
    //     { name: "Sketch", level: 80 },
    //     { name: "Webflow", level: 75 },
    //   ],
    // },
    // {
    //   category: "Cloud & DevOps",
    //   items: [
    //     { name: "AWS", level: 85 },
    //     { name: "Docker", level: 90 },
    //     { name: "Kubernetes", level: 80 },
    //     { name: "CI/CD", level: 90 },
    //     { name: "Microservices", level: 85 },
    //   ],
    // },
  ]

  return (
    <section id="skills" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Skills</h2>
        {/* <TypeAnimation
                sequence={["FrontEnd Developer", 2000, "React Developer", 2000, "UI Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="section-title"
              /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1">
                      <motion.div
                        className="bg-primary h-1 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                      ></motion.div>
                      {/* <motion.div
                        className="bg-primary h-1 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                      ></motion.div> */}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <SkillsAnima /> */}
    </section>
  )
}

export default Skills

