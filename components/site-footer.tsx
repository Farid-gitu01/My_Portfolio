"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]
  
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <Link href="#hero" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Mohammad Farid
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex gap-2">
           <Link href="https://github.com/faiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/faiz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/faiz" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
            </Link>
        </div>
      </div>
    </footer>
  )
}