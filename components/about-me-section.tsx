"use client"

import { motion } from "framer-motion"
import { PenTool } from "lucide-react"

export function AboutMeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            About Me
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="md:col-span-1 flex justify-center"
          >
            <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
              <PenTool className="w-24 h-24 text-primary" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          <div className="md:col-span-2 text-lg md:text-xl text-muted-foreground space-y-6 text-left">
            <motion.p variants={itemVariants}>
              I am a passionate Full Stack Developer with a strong focus on building
              secure, scalable, and high-performing web applications. With
              experience in both frontend and backend technologies, I love turning
              ideas into digital solutions that are both functional and elegant.
            </motion.p>
            <motion.p variants={itemVariants}>
              As an ethical hacker, I integrate cybersecurity best practices into every stage of development. My mission is to bridge the gap between innovative technology and robust security, ensuring every digital experience I create is safe, reliable, and impactful.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}