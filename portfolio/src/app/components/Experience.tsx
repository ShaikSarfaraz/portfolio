import { FaBriefcase } from "react-icons/fa"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      title: "React Developer",
      company: "NetWeb Software",
      period: "May 2024 - January 2025 (9 months)",
      description:
        "Built dynamic and visually engaging web applications using React, Next.js, and TypeScript. Collaborated with design and backend teams to deliver scalable, responsive, and accessible solutions.",
    },
    {
      title: "Frontend Developer",
      company: "Trangla",
      period: "November 2023 - April 2024 (6 months)",
      description:
        "Crafted resilient, responsive, and accessible user interfaces using modern web technologies including React, Redux, and Hooks.",
    },
    {
      title: "Software Engineer",
      company: "Foxfire Technologies (India) Limited",
      period: "November 2021 - October 2023 (2 years)",
      description:
        "Developed and maintained web applications using jQuery, JavaScript, and React. Improved database performance and automated backend tasks with Jenkins and .NET Console Applications.",
    },
  ]

  return (
    <section id="experience" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" rounded-lg shadow-md p-6 mb-6 transition duration-300 hover:shadow-lg"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border-l-2 border-primary pl-6"
              >
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-coral mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <h4 className="text-lg text-navy mb-2">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
                </motion.div>
                {/* <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border-l-2 border-primary pl-6"
              >
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-coral mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <h4 className="text-lg text-navy mb-2">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
                </motion.div> */}
            </div>
          ))}
      </div>
    </div>
    </section >
  )
}

export default Experience

