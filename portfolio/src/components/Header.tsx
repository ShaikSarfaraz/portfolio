"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import type React from "react" // Added import for React

const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a href={href} onClick={handleClick} className="text-dark hover:text-primary transition duration-300">
      {children}
    </a>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md ${isScrolled ? "bg-transparent shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <ScrollLink href="#hero">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Sarfaraz Shaik" width={40} height={40} className="mr-2" />
              <span className="font-bold text-xl">Sarfaraz Shaik</span>
            </div>
          </ScrollLink>
          <div className="hidden md:flex space-x-4">
            <ScrollLink href="#about">About</ScrollLink>
            <ScrollLink href="#experience">Experience</ScrollLink>
            <ScrollLink href="#education">Education</ScrollLink>
            <ScrollLink href="#skills">Skills</ScrollLink>
            <ScrollLink href="#projects">Projects</ScrollLink>
            <ScrollLink href="#contact">Contact</ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

