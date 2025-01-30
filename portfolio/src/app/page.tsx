"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import SkillsAnima from "@/components/SkillsAnima"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import Projects from "@/components/Projects"

export default function Home() {
  useSmoothScroll()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* <SkillsAnima /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

