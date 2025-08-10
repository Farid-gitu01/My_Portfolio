"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, GraduationCap } from 'lucide-react'

interface TimelineItemProps {
  title: string
  subtitle: string
  date: string
  description: string
  icon: React.ElementType
}

const experiences: TimelineItemProps[] = [
  {
    title: "Full Stack Developer",
    subtitle: "Freelance Projects",
    date: "Jan 2023 - Present",
    description: "Developed and deployed full-stack web applications for clients, focusing on robust backends and responsive frontends.",
    icon: Briefcase,
  },
  {
    title: "CEH (Certified Ethical Hacker)",
    subtitle: "EC-Council",
    date: "Ongoing",
    description: "Pursuing CEH certification to deepen knowledge in penetration testing, vulnerability assessment, and hacking methodologies.",
    icon: Award,
  },
  {
    title: "Google Cybersecurity Certificate",
    subtitle: "Google & Coursera",
    date: "Completed: 2023",
    description: "Acquired skills in network security, incident response, and security operations through Google's professional program.",
    icon: Award,
  },
  {
    title: "Full Stack Developer Bootcamp",
    subtitle: "Tech Academy",
    date: "Aug 2022 - Dec 2022",
    description: "Intensive training covering modern web development technologies like React, Node.js, databases, and deployment.",
    icon: GraduationCap,
  },
]

const TimelineItem = ({ title, subtitle, date, description, icon: Icon }: TimelineItemProps) => (
  <motion.div 
    className="relative pl-16 py-4 group"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="absolute left-0 top-4 h-full w-px bg-border group-last:h-0"></div>
    <div className="absolute left-[-9px] top-4 h-6 w-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
      <Icon className="w-3 h-3 text-primary-foreground" />
    </div>
    <div className="transition-colors duration-300">
      <p className="text-sm text-muted-foreground absolute top-4 right-0">{date}</p>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="text-md text-primary font-semibold mb-2">{subtitle}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
)

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Experience & Certifications
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey and key qualifications.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto relative">
           <div className="absolute left-2 top-0 h-full w-0.5 bg-border -z-10"></div>
            {experiences.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
        </div>
      </div>
    </section>
  )
}