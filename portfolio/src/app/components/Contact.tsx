import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async () => {
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating API call
    setIsSubmitting(false)
    setSubmitSuccess(true)
  }
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="text-coral mr-2" />
                <a href="tel:9397949059" className="hover:text-coral transition duration-300">
                  +91-9397949059
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-coral mr-2" />
                <a href="mailto:sarfarazshaik2807@gmail.com" className="hover:text-coral transition duration-300">
                  sarfarazshaik2807@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-coral mr-2" />
                <span>Hyderabad, India</span>
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border-b border-border focus:border-primary focus:outline-none bg-transparent"
                />
                {errors.name && <span className="text-red-500 text-sm">{String(errors.name.message)}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full p-2 border-b border-border focus:border-primary focus:outline-none bg-transparent"
                />
                {errors.email && <span className="text-red-500 text-sm">{String(errors.email.message)}</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full p-2 border-b border-border focus:border-primary focus:outline-none bg-transparent"
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{String(errors.message.message)}</span>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground py-2 px-4 rounded-full font-bold hover:bg-primary/90 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitSuccess && <p className="mt-4 text-green-500">Message sent successfully!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

