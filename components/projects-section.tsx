"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Link as LinkIcon } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface Project {
  title: string
  description: string
  techTags: string[]
  liveDemoLink?: string
  githubLink?: string
  imageUrl: string // Added imageUrl for visual appeal
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system with role-based dashboards for efficient hospital operations, featuring secure auth and real-time data.",
    techTags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/projects/hospital.jpg", // Example path
  },
  {
    title: "Dental Clinic Booking System",
    description: "Real-time appointment management for dental clinics with an admin dashboard to manage patient records and schedules.",
    techTags: ["React", "Firebase", "Node.js", "Material-UI"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/projects/dental.jpg", // Example path
  },
  {
    title: "Instagram Clone",
    description: "A social media app mimicking Instagram's core features like photo sharing, profiles, and a real-time feed.",
    techTags: ["Next.js", "Supabase", "React", "Tailwind CSS"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/projects/instagram.jpg", // Example path
  },
  {
    title: "Ethical Hacking Demo Lab",
    description: "A demonstration lab showcasing pentest reports and the practical use of cybersecurity tools like Nmap and Burp Suite.",
    techTags: ["Kali Linux", "Nmap", "Burp Suite", "Documentation"],
    liveDemoLink: "#",
    githubLink: "#",
    imageUrl: "/projects/hacking.jpg", // Example path
  },
]

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full"
  >
    <Card className="flex flex-col h-full bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={225}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold text-foreground mb-2">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-3 p-6 pt-0">
        {project.githubLink && (
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
        )}
        {project.liveDemoLink && (
          <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" passHref>
            <Button variant="outline" size="sm" className="flex items-center gap-2 group">
              Live Demo <LinkIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  </motion.div>
)

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of my work. Each project is a story of problem-solving and creative coding.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}