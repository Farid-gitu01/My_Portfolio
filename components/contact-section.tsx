"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail, Send } from 'lucide-react'
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-card p-8 rounded-2xl shadow-lg border border-border">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out via email or connect with me on social media.
              </p>
              <div className="space-y-4">
                <Link href="mailto:faiz@example.com" className="flex items-center gap-4 group">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">faiz@example.com</span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Link href="https://github.com/faiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="group">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/faiz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="group">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              </Link>
              <Link href="https://twitter.com/faiz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="outline" size="icon" className="group">
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <form
              action="https://formspree.io/f/your_form_id" // Replace with your Formspree endpoint
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-background"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-background"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="bg-background"/>
              </div>
              <Button type="submit" className="w-full group text-lg py-6">
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}