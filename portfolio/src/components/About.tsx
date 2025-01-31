import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-50% md:pl-8">
            <p className="text-lg mb-6">
            I'm a Frontend Developer passionate about building user-friendly interfaces and dynamic web apps. I specialize in modern web technologies, especially React, Next.js, and TypeScript.
            </p>
            <p className="text-lg">
            I love creating smooth and intuitive user experiences while continuously learning and improving my skills in programming and product management. I blend technical expertise with a strong sense of design to ensure every project is both functional and visually engaging.
            </p>
          </div>
          {/* <div className="md:w-1/2 md:pl-8">
            
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About

