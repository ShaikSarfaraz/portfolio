import { motion } from "framer-motion"

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id="services" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <motion.p className="section-title font-semibold mb-4">
          Services
        </motion.p>

        <motion.h2
          className="text-4xl md:text-3xl font-bold text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Code that solves problems,</span>
          <span>one product at a time.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* What I can do for you */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          // className="border-t-2 border-primary pt-6"
          >
            <div className="mb-6">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="30" cy="50" r="20" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">What I can do for you</h3>
            <p className="text-l mb-6">
              Deliver faster, better products that your users will love. Here are the services I provide:
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            // className="border-t-2 border-primary pt-6"
            >
              <ul className="space-y-3">
                <li>Design Strategy</li>
                <li>Web Developemnt</li>
                <li>Front-end Development</li>
                <li>UI Design</li>
                {/* <li>React Development</li> */}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          // className="border-t-2 border-primary pt-6"
          >
            <div className="mb-6">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <polygon points="50,20 80,80 20,80" fill="none" stroke="currentColor" strokeWidth="2" />
                <polygon points="50,30 70,70 30,70" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Applications I'm fluent in</h3>
            <p className="text-l mb-6">
              Every designer needs the right tools to craft the perfect product. Thankfully, I'm proficient in multiple
              platforms:
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            // className="border-t-2 border-primary pt-6"
            >
              <ul className="space-y-3">
                <li>Sketch</li>
                <li>Webflow</li>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* What you can expect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          // className="border-t-2 border-primary pt-6"
          >
            <div className="mb-6">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <path d="M20,50 A30,30 0 0,1 80,50" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="20" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">What you can expect</h3>
            <p className="text-l mb-6">
              I design products that go beyond aesthetics—they're shippable and usable:
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            // className="border-t-2 border-primary pt-6"
            >
              <ul className="space-y-3">
                <li className="font-medium">Clean and Functional: Intuitive designs that prioritize functionality.</li>
                <li className="font-medium">Device and User Friendly: Seamless experiences across all devices.</li>
                <li className="font-medium">Efficient and Maintainable: Code that is easy to manage and scale.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services