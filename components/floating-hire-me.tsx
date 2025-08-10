"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquarePlus } from "lucide-react"

export function FloatingHireMe() {
  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 120, damping: 12 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="#contact" passHref>
        <Button 
          className="rounded-full shadow-lg shadow-primary/30 px-6 py-6 text-lg group flex items-center gap-2"
          size="lg"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 3 }}
          >
            <MessageSquarePlus className="h-6 w-6" />
          </motion.div>
          <span className="hidden sm:inline">Hire Me</span>
        </Button>
      </Link>
    </motion.div>
  )
}