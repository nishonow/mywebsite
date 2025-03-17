"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false)

  const skills = [
    { name: "Python", level: 95 },
    { name: "Aiogram", level: 90 },
    { name: "SQLite", level: 85 },
    { name: "HTML/CSS", level: 80 },
    { name: "Bootstrap", level: 75 },
    { name: "C++", level: 70 },
  ]

  return (
    <section id="about" className="py-20 relative">
      {/* Light mode decorative elements */}
      <div className="absolute top-1/3 right-10 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl -z-10 dark:opacity-0" />

      {/* Dark mode decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 dark:opacity-100" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <p className="text-lg mb-10">
            I'm a passionate backend developer with expertise in building scalable and efficient server-side
            applications. With a strong foundation in modern technologies and best practices, I create robust solutions
            that power seamless user experiences.
          </p>

          <div className="border rounded-lg p-6 bg-card/50 backdrop-blur-sm shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            >
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isSkillsOpen ? "transform rotate-180" : ""}`}
                />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>

            {isSkillsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 space-y-5"
              >
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

