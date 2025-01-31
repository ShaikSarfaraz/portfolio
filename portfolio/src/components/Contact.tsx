import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-navy rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaPhone className="text-coral mr-2" />
                    <a href="tel:9397949059" className="hover:text-coral transition duration-300">
                      +91 9397949059
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="text-coral mr-2" />
                    <a href="mailto:sarfarazshaik2807@gmail.com" className="hover:text-coral transition duration-300">
                      sarfarazshaik2807@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <FaLinkedin className="text-coral mr-2" />
                    <a
                      href="https://www.linkedin.com/in/sarfaraz-shaik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-coral transition duration-300"
                    >
                      linkedin.com/in/sarfaraz-shaik
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-6 bg-sand">
                <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral"
                      rows={4}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary bg-coral hover:bg-opacity-90 w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

