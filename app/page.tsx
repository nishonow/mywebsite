import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Base texture */}
      <div className="absolute inset-0 -z-20 bg-noise opacity-[0.03] dark:opacity-[0.05]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 dark:bg-grid-white/[0.05] bg-grid-black/[0.03] pointer-events-none" />

      {/* Light mode decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/60 via-indigo-100/30 to-transparent -z-10 dark:opacity-0" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/40 via-pink-100/20 to-transparent -z-10 dark:opacity-0" />
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-yellow-100/40 rounded-full blur-xl -z-10 dark:opacity-0" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-100/30 rounded-full blur-xl -z-10 dark:opacity-0" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-teal-100/30 rounded-full blur-xl -z-10 dark:opacity-0" />

      {/* Dark mode decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-0 dark:opacity-100" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-900/10 rounded-full blur-3xl -z-10 opacity-0 dark:opacity-100" />

      {/* Main background gradients */}
      <div className="absolute inset-0 -z-10 dark:bg-black bg-gradient-to-br from-blue-50/80 via-slate-50 to-indigo-50/50 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(36,36,54,0.5),rgba(0,0,0,0))]" />

      {/* Content */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

