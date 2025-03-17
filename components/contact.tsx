"use client"

import type React from "react"

import { motion } from "framer-motion"
import { BrandTelegram, BrandWhatsapp, BrandInstagram, Mail, BrandGithub, BrandLinkedin } from "tabler-icons-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contacts = [
    {
      name: "Telegram",
      icon: <BrandTelegram size={24} />,
      url: "https://t.me/nishonow",
    },
    {
      name: "Instagram",
      icon: <BrandInstagram size={24} />,
      url: "https://instagram.com/nishonovv_47",
    },
    {
      name: "WhatsApp",
      icon: <BrandWhatsapp size={24} />,
      url: "https://wa.me/996222665027",
    },
    {
      name: "LinkedIn",
      icon: <BrandLinkedin size={24} />,
      url: "https://www.linkedin.com/in/ilyosbek-nishonov/",
    },
    {
      name: "GitHub",
      icon: <BrandGithub size={24} />,
      url: "https://github.com/nishonow",
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:inishonov05@gmail.com",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a Gmail compose URL with the form data
    const subject = `Message from ${name} via Portfolio`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=inishonov05@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open Gmail in a new tab
    window.open(gmailComposeUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Light mode decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl -z-10 dark:opacity-0" />

      {/* Dark mode decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 dark:opacity-100" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Contact options - Left side */}
            <div className="md:w-1/3 flex-1">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-sm border h-full flex flex-col items-center">
                <h3 className="text-lg font-medium mb-6 text-center w-full">Connect With Me</h3>

                <div className="flex flex-col space-y-4 flex-grow justify-center w-full">
                  {contacts.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={contact.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 w-full"
                    >
                      <span className="p-2 bg-background/80 rounded-full shadow-sm">{contact.icon}</span>
                      <span>{contact.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form - Right side */}
            <div className="md:w-2/3 flex-1">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-sm border h-full flex flex-col">
                <h3 className="text-lg font-medium mb-4 text-center">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded-md border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none flex-grow"
                      style={{ height: "calc(100% - 30px)", minHeight: "150px" }}
                      placeholder="Hello Ilyosbek, I'd like to discuss a project..."
                    />
                  </div>

                  <Button type="submit" className="w-full group bg-blue-600 hover:bg-blue-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

