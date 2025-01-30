import { FaGraduationCap } from "react-icons/fa"
import Image from "next/image"

const Education = () => {
  const educations = [
    {
      degree: "Bachelor's degree, Computer Science",
      institution: "Lovely Professional University",
      period: "August 2014 - May 2020",
    },
    {
      degree: "Intermediate",
      institution: "Vignan Junior Collage, Vadlamudi",
      period: "June 2012 - March 2014",
    },
    {
      degree: "High School Diploma",
      institution: "Oxford High School, Guntur",
      period: "June 2011 - March 2012",
    },
  ]

  return (
    <section id="education" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white">Education</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Education"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className="bg-teal bg-opacity-10 rounded-lg shadow-md p-6 mb-6 transition duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-coral mr-2 text-xl" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <h4 className="text-lg text-sand mb-2">{edu.institution}</h4>
                <p className="text-sm text-gray-300">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

