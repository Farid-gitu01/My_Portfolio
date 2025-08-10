"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Bug, GitBranch, Laptop, Braces, Server, Shield, Terminal, Cloud, Wind, Workflow, Palette } from 'lucide-react'

interface Skill {
  name: string
  icon: React.ElementType
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Braces },
      { name: "Next.js", icon: Laptop },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Framer Motion", icon: Workflow },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Firebase", icon: Cloud },
      { name: "Supabase", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Kali Linux", icon: Terminal },
      { name: "Nmap", icon: Shield },
      { name: "Wireshark", icon: Bug },
      { name: "Burp Suite", icon: Shield },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Cloud },
      { name: "Figma", icon: Palette },
      { name: "REST APIs", icon: Braces },
    ],
  },
]

const SkillItem = ({ skill }: { skill: Skill }) => (
  <motion.div
    className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-transparent hover:border-primary/50 hover:bg-muted transition-colors"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="bg-primary/10 p-2 rounded-md">
      <skill.icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-medium text-foreground text-sm">
      {skill.name}
    </h3>
  </motion.div>
)

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            My Tech Arsenal
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="h-full bg-card/60 backdrop-blur-sm border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-center text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}