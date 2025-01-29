import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sarfaraz Shaik. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sarfarazshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarfaraz-shaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/sarfarazshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer