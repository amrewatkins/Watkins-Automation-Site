"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Placeholder — wire to webhook later
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log("Contact form submission:", data)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: CTA */}
          <div
            className={`flex-1 flex flex-col justify-center ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Ready to Automate?
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
              Let&apos;s Build Your System
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              See how our automations work with a live walkthrough. Pick a time
              below, or drop us a message. No commitment, no pressure — we&apos;ll
              show you what it looks like for your specific shop.
            </p>
            <Button asChild size="lg" className="w-fit text-base">
              <a
                href="https://calendly.com/amreclothing/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Demo
              </a>
            </Button>
          </div>

          {/* Right: Form */}
          <div
            className={`flex-1 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-lg border border-border bg-card">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-6 md:p-8 rounded-lg border border-border bg-card"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="shop_name" className="text-sm font-medium mb-1.5 block">
                      Shop Name
                    </label>
                    <Input
                      id="shop_name"
                      name="shop_name"
                      placeholder="Your shop name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your shop and what you're looking for..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
