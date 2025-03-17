"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BrandTelegram } from "tabler-icons-react"
import { ArrowRight } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Light mode decorative elements */}
      <div className="absolute bottom-1/3 left-10 w-56 h-56 bg-purple-100/30 rounded-full blur-3xl -z-10 dark:opacity-0" />

      {/* Dark mode decorative elements */}
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 dark:opacity-100" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out my work and latest projects on my Telegram channel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-xl bg-[#4299e1] dark:bg-[#1e3a8a] dark:bg-gradient-to-br dark:from-[#1e3a8a] dark:to-[#2563eb] shadow-lg">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative p-8 md:p-10 text-white">
              <div className="flex items-center gap-4 mb-6">
                <BrandTelegram size={32} />
                <h3 className="text-2xl md:text-3xl font-bold">Telegram Channel</h3>
              </div>

              <div className="max-w-xl">
                <p className="text-white/90 mb-8 text-lg">
                  Join my Telegram channel to access all my projects, coding tutorials, and backend development
                  insights. Stay updated with my latest work and connect with a community of developers.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#4299e1] dark:text-[#1e3a8a] hover:bg-white/90 group"
                >
                  <a
                    href="https://t.me/arrbots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join Channel
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

