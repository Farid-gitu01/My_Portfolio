"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
      >
        Resume
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8"
      >
        <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl border border-border">
          <Image
            src="/placeholder.png?height=600&width=450" // Placeholder for resume thumbnail
            alt="Resume Preview"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-xl font-semibold">
            Resume Preview
          </div>
        </div>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" passHref>
          <Button className="px-8 py-3 text-lg font-semibold shadow-md hover:scale-105 transition-transform">
            <Download className="w-5 h-5 mr-2" /> Download Resume
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
