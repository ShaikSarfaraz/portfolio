"use client"

import Image from "next/image"
import type React from "react"

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
    <section id="hero" className="pt-24 pb-12 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sarfaraz Shaik</h1>
            <p className="text-xl mb-6 text-teal">Frontend Developer</p>
            <p className="mb-8 text-sand">Guntur, Andhra Pradesh, India</p>
            <ScrollLink href="#contact">Get in Touch</ScrollLink>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/SarfarazProfile.png?height=400&width=400"
              alt="Sarfaraz Shaik"
              width={400}
              height={400}
              className="rounded-full shadow-lg border-4 border-teal"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

