import type React from "react"
import { FaCode, FaBriefcase, FaUserTie } from "react-icons/fa"
import Image from "next/image"

interface Project {
  title: string
  client: string
  company: string
  role: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: "Cloud Inventory Management System (CIMS)",
    client: "Foxfire Technologies",
    company: "Foxfire Technologies",
    role: "Software Engineer",
    description:
      "My role revolves around designing user-friendly interfaces and integrating RF devices for efficient warehouse operations within the Cloud Inventory Management System (CIMS). I ensure smooth data transactions between the host system and CIMS, enabling real-time updates on inventory status and order processing. Emphasizing responsive design and performance optimization, I strive to create a reliable interface that boosts productivity and reduces errors. Furthermore, I offer documentation and training to support warehouse staff in effectively utilizing the system.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Truck Management System",
    client: "Trangla Innovations",
    company: "Trangla Innovations",
    role: "Frontend Developer",
    description:
      "Engineered the Fleet Management System for SwiftLogistics, an end-to-end solution for optimizing trucking operations. This system streamlines fleet management tasks, including truck and driver profiles, load assignments, and route optimization. Real-time tracking and communication tools ensure efficient coordination between dispatchers and drivers, enhancing overall logistics efficiency and customer satisfaction.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Locate Care",
    client: "Salvone Technology Solutions",
    company: "Netweb Software",
    role: "React Developer",
    description:
      "Developed and designed user interfaces for a healthcare management platform catering to providers and NHS/ICB users. Designed and implemented modules such as Provider Onboarding, Facility Setup, Bed Management, and Reports, focusing on modern, intuitive, and responsive UI using React.js, Redux Toolkit, and TypeScript. UI Design: Created visually appealing and user-centric interfaces with smart search, filters, and validation flows, Figma designs, ensuring a seamless and engaging user experience. Google Maps Integration: Enhanced location-based services by embedding maps and interactive elements for user navigation. Performance Optimization: Integrated AWS CloudFront for image caching, reducing load times and improving UI responsiveness. Reporting Modules: Developed dynamic, visually clear reporting tools, including features like export functionality, dynamic filters, and role-based access controls. Collaboration: Worked closely with the UX/UI team to ensure alignment with design standards and user needs, contributing to the platform's usability and accessibility.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-navy mb-2">{project.title}</h3>
      <p className="flex items-center mb-2">
        <FaBriefcase className="mr-2 text-coral" />
        <span className="font-semibold">Client:</span> {project.client}
      </p>
      <p className="flex items-center mb-2">
        <FaCode className="mr-2 text-coral" />
        <span className="font-semibold">Company:</span> {project.company}
      </p>
      <p className="flex items-center mb-4">
        <FaUserTie className="mr-2 text-coral" />
        <span className="font-semibold">Role:</span> {project.role}
      </p>
      <p className="text-gray-700">{project.description.substring(0, 150)}...</p>
    </div>
  </div>
)

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-teal bg-opacity-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

