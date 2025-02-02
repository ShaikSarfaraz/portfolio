"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import type React from "react"
import { Moon, Sun } from "lucide-react" // Using Lucide icons as per instructions

const ScrollLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition duration-300"
    >
      {children}
    </a>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setTheme("dark")
        document.documentElement.classList.add("dark")
      } else {
        setTheme("light")
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      setTheme("light")
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <ScrollLink href="#hero">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Sarfaraz Shaik" width={40} height={40} className="mr-2" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">Sarfaraz Shaik</span>
            </div>
          </ScrollLink>
          {/* <ScrollLink href="#hero">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Sarfaraz Shaik" width={40} height={40} className="mr-2" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">Sarfaraz Shaik</span>
            </div>
          </ScrollLink> */}
          <div className="hidden md:flex items-center space-x-4">
            <ScrollLink href="#about">About</ScrollLink>
            <ScrollLink href="#skills">Skills</ScrollLink>
            <ScrollLink href="#services">Services</ScrollLink>
            <ScrollLink href="#projects">Projects</ScrollLink>
            <ScrollLink href="#experience">Experience</ScrollLink>
            {/* <ScrollLink href="#contact">Contact</ScrollLink>
            <ScrollLink href="#about">About</ScrollLink>
            <ScrollLink href="#skills">Skills</ScrollLink>
            <ScrollLink href="#services">Services</ScrollLink>
            <ScrollLink href="#projects">Projects</ScrollLink>
            <ScrollLink href="#experience">Experience</ScrollLink>
            <ScrollLink href="#contact">Contact</ScrollLink> */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
              ) : (
                <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

