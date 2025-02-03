import Image from "next/image"
import { motion } from "framer-motion"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  return (
    <section id="about" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              As a Technology and Innovation Enthusiast, I excel in both startup environments and large-scale
              enterprises, bringing dynamic creativity and a proactive &apos;can-do&apos; attitude to every project.
            </p>
            <p>
              My career is marked by demonstrated excellence in driving innovative solutions, delivering impactful UI
              architectures, and seamlessly integrating backend systems to create exceptional user experiences.
            </p>
            <p>
              I'm a Frontend Developer passionate about building user-friendly interfaces and dynamic web apps. I specialize in modern web technologies, especially React, Next.js, and TypeScript.
            </p>
            <p>
              I love creating smooth and intuitive user experiences while continuously learning and improving my skills in programming and product management. I blend technical expertise with a strong sense of design to ensure every project is both functional and visually engaging.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

