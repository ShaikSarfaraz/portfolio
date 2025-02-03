"use client"

import Image from "next/image"
import type React from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding">
    {/* // <section id="hero" className="pt-24 pb-12"> */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"> */}
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                <span className="block">Sarfaraz Shaik</span>
                <span className="block text-primary mt-2">
                  <TypeAnimation
                    sequence={["FrontEnd Developer", 2000, "React Developer", 2000, "UI Developer", 2000]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
                I love crafting stunning web experiences and turning ideas into reality with code.
              </p>
              {/* <h4 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Sarfaraz</span>. I love crafting stunning web experiences and turning ideas into reality with code.</h4> */}
              {/* <p className="text-xl mb-6 text-teal">Frontend Developer</p> */}
              {/* <p className="mb-8 text-sand">Guntur, Andhra Pradesh, India</p> */}
              {/* <div className='p-3 w-fit'> */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div>
                  <ScrollLink href="#contact">Get in Touch</ScrollLink>
                  <a
                    href="/Sarfaraz-Shaik-Frontend-Developer.pdf"
                    download
                    className="ml-4 px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300">
                    Download Resume
                  </a>
                </div>
                {/* </div> */}
              </motion.div>
            </motion.div>
          {/* </div> */}
          {/* <div className="md:w-1/2 flex justify-center">
            <Image
              src="/SarfarazProfile.png?height=400&width=400"
              alt="Sarfaraz Shaik"
              width={400}
              height={400}
              className="rounded-full shadow-lg border-4 border-teal"
            />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default Hero

