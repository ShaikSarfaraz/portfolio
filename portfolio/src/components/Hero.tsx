"use client"

import Image from "next/image"
import type React from "react"

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
      className="bg-red-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition duration-300"
    >
      {children}
    </a>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-red-500">Sarfaraz</span>. I love crafting stunning web experiences and turning ideas into reality with code.</h4>
            {/* <p className="text-xl mb-6 text-teal">Frontend Developer</p> */}
            {/* <p className="mb-8 text-sand">Guntur, Andhra Pradesh, India</p> */}
            {/* <div className='p-3 w-fit'> */}
              <ScrollLink href="#contact">Get in Touch</ScrollLink>
            {/* </div> */}
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

