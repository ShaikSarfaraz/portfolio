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
      className="inline-block px-8 py-3 border border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
    >
      {children}
    </a>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding">
      <div className="container mx-auto container-padding lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Passionate Frontend Developer with 3 years of experience in building high-performance, user-centric web applications.
            Skilled in React, Next.js, and modern front-end technologies. I constantly explore new technologies to push the boundaries
            of front-end development.
          </p>
          <motion.div
            className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ScrollLink href="#contact">Get in Touch</ScrollLink>
            <a
              href="/Sarfaraz-Shaik-Frontend-Developer.pdf"
              download
              className="inline-block px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full max-w-2xl">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">Sarfaraz Shaik</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">skills:</span>
              <span className="text-gray-400">{`['`}</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">NextJS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Redux</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">JavaScript</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">TypeScript</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">MS-Sql</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">MongoDB</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Docker</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">AWS</span>
              <span className="text-gray-400">{"'],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">{'() {'}</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
              <span className="text-gray-400">{`(`}</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">skills.length</span>
              <span className="mr-2 text-amber-300">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
            <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
            <div><span className="text-gray-400">{`};`}</span></div>
          </code>
        </div>
      </div>
    </section>
  )
}

export default Hero