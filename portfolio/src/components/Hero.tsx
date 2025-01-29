"use client"

import Image from "next/image"
import type React from "react" // Import React

const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a href={href} onClick={handleClick} className="btn-primary">
      {children}
    </a>
  )
}

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sarfaraz Shaik</h1>
            <p className="text-xl mb-6">Frontend Developer | React Developer | UI Developer</p>
            <p className="mb-8">Hyderabad, Telangana, India</p>
            <ScrollLink href="#contact">Get in Touch</ScrollLink>
          </div>
          {/* <div className="md:w-1/2 flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Sarfaraz Shaik"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero