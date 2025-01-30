import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-6">
              As a Frontend developer with over 3 years of experience, I specialize in creating user-friendly interfaces
              and dynamic web applications. My expertise spans across modern web technologies, with a focus on React,
              Next.js, and TypeScript.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg">
              I'm passionate about crafting seamless user experiences and constantly expanding my skills in both
              programming and product management. My approach combines technical proficiency with a keen eye for design,
              ensuring that every project I work on is not just functional, but also visually engaging and intuitive for
              users.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

