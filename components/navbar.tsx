"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Code } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset to trigger earlier

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group z-20">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/80 group-hover:border-primary transition-colors duration-300 flex items-center justify-center bg-background/80">
            <Code className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
            Ilyosbek
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-primary font-medium dark:text-primary dark:font-semibold"
                    : "hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <ModeToggle />
        </div>

        <div className="flex md:hidden items-center space-x-4 z-20">
          <ModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with improved animation and scrolling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-10 flex flex-col overflow-y-auto"
          >
            <motion.nav
              className="container mx-auto px-4 py-8 flex flex-col space-y-6 min-h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-4 text-center text-lg font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10 dark:text-primary dark:bg-primary/20"
                      : "hover:text-primary hover:bg-primary/5"
                  }`}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="flex-grow"></div>

              <motion.div
                className="text-center text-sm text-muted-foreground py-4 mt-auto border-t border-border/30"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
              >
                © {new Date().getFullYear()} Ilyosbek Nishonov
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

