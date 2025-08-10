import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingHireMe } from "@/components/floating-hire-me"
import { ScrollProgress } from "@/components/scroll-progress"
import { cn } from "@/lib/utils" // Import cn for conditional class names

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faiz - Full Stack Developer & Ethical Hacker",
  description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
  keywords: ["Faiz", "Full Stack Developer", "Ethical Hacker", "Portfolio", "Next.js", "Tailwind CSS", "Framer Motion"],
  authors: [{ name: "Faiz" }],
  openGraph: {
    title: "Faiz - Full Stack Developer & Ethical Hacker",
    description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
    url: "https://faiz-portfolio.vercel.app", // Replace with actual URL
    siteName: "Faiz's Portfolio",
    images: [
      {
        url: "/placeholder.png", // Replace with a more specific OG image
        width: 800,
        height: 600,
        alt: "Faiz's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz - Full Stack Developer & Ethical Hacker",
    description: "Portfolio of Faiz, a Full Stack Developer and Ethical Hacker, showcasing secure and scalable web applications.",
    images: ["/placeholder.png"], // Replace with a more specific Twitter image
  },
  icons: {
    icon: "/favicon.ico", // Add a favicon.ico to public folder
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <FloatingHireMe />
        </ThemeProvider>
      </body>
    </html>
  )
}
