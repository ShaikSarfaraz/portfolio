import { FaGraduationCap } from "react-icons/fa"

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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6 transition duration-300 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary mr-2 text-xl" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <h4 className="text-lg text-gray-600 mb-2">{edu.institution}</h4>
              <p className="text-sm text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education