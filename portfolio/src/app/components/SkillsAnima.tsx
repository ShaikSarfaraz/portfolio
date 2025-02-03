"use client"

import { motion, useAnimation, useMotionValue } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiExpress,
  // SiFramermotion,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiGit,
} from "react-icons/si"

interface Skill {
  name: string
  Icon: JSX.Element
  size?: number
}

const skillsPics: Skill[] = [
  { name: "Javascript", Icon: <SiJavascript size={30} />, size: 60 },
  { name: "React", Icon: <SiReact size={30} />, size: 60 },
  { name: "Next.js", Icon: <SiNextdotjs size={30} />, size: 60 },
  { name: "Tailwind CSS", Icon: <SiTailwindcss size={30} />, size: 60 },
  { name: "Typescript", Icon: <SiTypescript size={30} />, size: 60 },
  { name: "Redux", Icon: <SiRedux size={30} />, size: 60 },
  { name: "Node.js", Icon: <SiNodedotjs size={30} />, size: 60 },
  { name: "MongoDB", Icon: <SiMongodb size={30} />, size: 60 },
  { name: "PostgreSQL", Icon: <SiPostgresql size={30} />, size: 60 },
  { name: "MySQL", Icon: <SiMysql size={30} />, size: 60 },
  { name: "Python", Icon: <SiPython size={30} />, size: 60 },
  { name: "Express", Icon: <SiExpress size={30} />, size: 60 },
  // { name: "Framer Motion", Icon: <SiFramermotion size={30} />, size: 60 },
  { name: "Photoshop", Icon: <SiAdobephotoshop size={30} />, size: 60 },
  { name: "Illustrator", Icon: <SiAdobeillustrator size={30} />, size: 60 },
  { name: "Figma", Icon: <SiFigma size={30} />, size: 60 },
  { name: "Git", Icon: <SiGit size={30} />, size: 60 },
]

const FloatingIcon = ({
  skill,
  index,
  mouseX,
  mouseY,
}: { skill: Skill; index: number; mouseX: number; mouseY: number }) => {
  const iconRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const angle = (index / skillsPics.length) * 2 * Math.PI
    const radius = 150
    const baseX = Math.cos(angle) * radius
    const baseY = Math.sin(angle) * radius

    controls.start({
      x: baseX + (mouseX - window.innerWidth / 2) / 10,
      y: baseY + (mouseY - window.innerHeight / 2) / 10,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    })
  }, [index, mouseX, mouseY, controls])

  return (
    <motion.div
      ref={iconRef}
      className="absolute"
      style={{ x, y, width: skill.size || 50, height: skill.size || 50 }}
      animate={controls}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {skill.Icon}
    </motion.div>
  )
}

const SkillsAnima = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      {/* <div className="absolute inset-0 flex items-center justify-center"> */}
        <div className="relative w-full h-full max-w-3xl mx-auto pl-52 pt-64">
          {skillsPics.map((skill, index) => (
            <FloatingIcon key={index} skill={skill} index={index} mouseX={mousePosition.x} mouseY={mousePosition.y} />
          ))}
        </div>
      {/* </div> */}
      <div className="relative z-10 pt-20 pb-10">
        {/* <h2 className="text-4xl font-bold text-white text-center font-mono">Skills</h2> */}
      </div>
    </section>
  )
}

export default SkillsAnima

