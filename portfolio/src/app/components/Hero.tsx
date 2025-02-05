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
      className="hidden md:inline px-8 py-3 border border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
    >
      {children}
    </a>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding">
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
            Passionate Frontend Developer with 3 years of experience in building high-performance, user-centric web applications.
            Skilled in React, Next.js, and modern front-end technologies. I constantly explore new technologies to push the boundaries
            of front-end development.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ScrollLink href="#contact">Get in Touch</ScrollLink>
            <a
              href="/Sarfaraz-Shaik-Frontend-Developer.pdf"
              download
              className="ml-4 px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute left-1/2 bottom-10 transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-10 h-16 border-2 border-primary rounded-full flex justify-center items-start p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

