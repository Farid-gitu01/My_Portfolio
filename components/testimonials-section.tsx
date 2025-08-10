"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial \{
  quote: string
  name: string
  title: string
  avatarUrl: string
\}

const testimonials: Testimonial[] = [
  \{
    quote:
      "Faiz is an exceptional developer with a keen eye for detail and a strong commitment to security. His full-stack expertise is truly impressive.",
    name: "Jane Doe",
    title: "Senior Software Engineer",
    avatarUrl: "/placeholder.svg?height=64&width=64",
  \},
  \{
    quote:
      "Working with Faiz was a pleasure. He's a quick learner and always brings innovative solutions to the table, especially regarding application security.",
    name: "John Smith",
    title: "Project Manager",
    avatarUrl: "/placeholder.svg?height=64&width=64",
  \},
  \{
    quote:
      "Faiz's dedication to building secure applications is evident in his work. He's a valuable team player and a true problem solver.",
    name: "Alice Johnson",
    title: "Cybersecurity Analyst",
    avatarUrl: "/placeholder.svg?height=64&width=64",
  \},
]

const TestimonialCard = (\{ testimonial \}: \{ testimonial: Testimonial \}) => (
  <Card className="p-6 shadow-lg flex flex-col items-center text-center h-full">
    <CardContent className="flex flex-col items-center p-0">
      <Image
        src={testimonial.avatarUrl || "/placeholder.svg"}
        alt=\{testimonial.name\}
        width=\{80\}
        height=\{80\}
        className="rounded-full mb-4 border-2 border-primary"
      />
      <p className="text-lg italic text-foreground mb-4">
        &quot;\{testimonial.quote\}&quot;
      </p>
      <p className="font-semibold text-primary">\{testimonial.name\}</p>
      <p className="text-sm text-muted-foreground">\{testimonial.title\}</p>
    </CardContent>
  </Card>
)

export function TestimonialsSection() \{
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <motion.h2
        initial=\{\{ opacity: 0, y: -50 \}\}
        whileInView=\{\{ opacity: 1, y: 0 \}\}
        viewport=\{\{ once: true, amount: 0.5 \}\}
        transition=\{\{ duration: 0.6 \}\}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
      >
        Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        \{testimonials.map((testimonial, index) => (
          <motion.div
            key=\{testimonial.name\}
            initial=\{\{ opacity: 0, y: 50 \}\}
            whileInView=\{\{ opacity: 1, y: 0 \}\}
            viewport=\{\{ once: true, amount: 0.3 \}\}
            transition=\{\{ duration: 0.6, delay: index * 0.1 \}\}
          >
            <TestimonialCard testimonial=\{testimonial\} />
          </motion.div>
        ))\}
      </div>
    </section>
  )
\}
