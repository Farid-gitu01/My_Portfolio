"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Blog {
  title: string
  description: string
  imageUrl: string
  link: string
}

const blogs: Blog[] = [
  {
    title: "How I Built a Hospital Management System in Next.js",
    description: "A deep dive into the architecture, challenges, and solutions encountered while developing a robust hospital management system.",
    imageUrl: "/blogs/hospital-system.jpg", // Example path
    link: "#", 
  },
  {
    title: "Securing Web Applications – Basics for Beginners",
    description: "An introductory guide to fundamental web application security practices, covering common vulnerabilities and protective measures.",
    imageUrl: "/blogs/web-security.jpg", // Example path
    link: "#",
  },
  {
    title: "Leveraging Framer Motion for Stunning UI Animations",
    description: "Explore how Framer Motion can transform static UIs into dynamic and engaging user experiences with minimal code.",
    imageUrl: "/blogs/framer-motion.jpg", // Example path
    link: "#",
  },
]

const BlogCard = ({ blog }: { blog: Blog }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-full"
  >
    <Card className="flex flex-col h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden bg-card border border-border">
       <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={blog.imageUrl || "/placeholder.svg"}
            alt={blog.title}
            width={400}
            height={225}
            className="rounded-t-lg object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl font-semibold mb-2 text-foreground">
          {blog.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground flex-grow">
          {blog.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={blog.link} passHref>
          <Button variant="link" className="p-0 h-auto text-primary group">
            Read More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  </motion.div>
)

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-background">
       <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Blog & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing insights on development, security, and design.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}