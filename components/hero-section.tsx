"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Download } from "lucide-react"

export function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
    >
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Image
            src="/portfolio.jpg"
            alt="Farid's Photo Avatar"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary/20 object-cover shadow-2xl shadow-primary/20"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2"
        >
          Mohammad Farid
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-6"
        >
          Full Stack Developer & Ethical Hacker
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          “Building secure and scalable web applications that solve real-world
          problems.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            onClick={handleScrollToProjects}
            className="group px-8 py-6 text-lg font-semibold shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            size="lg"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </Button>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" passHref>
            <Button
              variant="outline"
              size="lg"
              className="group px-8 py-6 text-lg font-semibold shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}