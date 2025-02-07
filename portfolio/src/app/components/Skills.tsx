"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SkillsAnima from "./SkillsAnima"
import { TypeAnimation } from "react-type-animation"
import SkillsFlow from "./SkillsFlow"
import type { FC } from "react";
import { skillsData } from "../utils/data/skills";
// import { skillsIcon } from "../utils";
import { skillsIcon } from "../utils/SkillsIcons";
import Marquee from "react-fast-marquee";

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

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
        <motion.h2 variants={itemVariants} className="section-title">
          Skills
        </motion.h2>
        {/* <h2 className="section-title">Skills</h2> */}
        {/* <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-primary"></span>
            <span className="bg-primary text-primary-foreground py-2 px-4 rounded-full font-bold text-xl rounded-md hover:bg-primary/90 transition duration-300 disabled:opacity-50">Skills</span>
            <span className="w-24 h-[2px] bg-primary"></span>
          </div>
        </div> */}
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
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill: string, id: number) => {
            const skillIcon = skillsIcon(skill);

            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      {skillIcon ? (
                        skillIcon
                      ) : (
                        <span className="text-gray-500">No Icon</span>
                      )}
                    </div>
                    <p className="text-white text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  )
}

export default Skills

