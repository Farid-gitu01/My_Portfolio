import { HeroSection } from "@/components/hero-section"
import { AboutMeSection } from "@/components/about-me-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResumeSection } from "@/components/resume-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { ModeToggle } from "@/components/dark-mode-toggle"

export default function Home() {
  return (
    <div className="relative">
      <header className="fixed top-0 right-0 z-50 p-4">
        <ModeToggle />
      </header>
      <HeroSection />
      <main className="container mx-auto px-4 py-12 space-y-24 md:space-y-32">
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ExperienceSection />
        {/* <BlogSection /> */} {/* Optional: Uncomment if you add blog content */}
        {/* <TestimonialsSection /> */} {/* Optional: Uncomment if you add testimonials */}
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
