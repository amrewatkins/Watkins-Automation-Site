"use client"

import { Globe, Zap, MessageSquare, ShieldCheck, Check } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const systems = [
  {
    icon: Globe,
    title: "Custom Website",
    tagline: "Capture Their Info",
    description:
      "A modern, mobile-friendly website built for conversions. Contact forms connected directly to your automation systems.",
    features: [
      "Modern, mobile-first design",
      "Contact form connected to automation",
      "Service pages, location, hours, gallery",
      "Fast-loading, SEO-optimized",
    ],
  },
  {
    icon: Zap,
    title: "Lead Follow-Up",
    tagline: "Respond Instantly",
    description:
      "When a lead comes in, they get a response within seconds. You get notified immediately. No lead falls through the cracks.",
    features: [
      "Instant notification when a lead comes in",
      "Auto-response to the lead within seconds",
      "Runs 24/7 — nights, weekends, holidays",
      "Every lead logged and organized",
    ],
  },
  {
    icon: MessageSquare,
    title: "Job Status Tracker",
    tagline: "Keep Them Updated",
    description:
      'Like a pizza tracker for auto shops. Customers get automatic text updates as their vehicle moves through your pipeline.',
    features: [
      "Automatic SMS at each stage of service",
      "Checked In \u2192 In Queue \u2192 In Progress \u2192 Almost Done \u2192 Ready",
      "No app download — standard text messages",
      'Fewer "is my car done?" phone calls',
    ],
  },
  {
    icon: ShieldCheck,
    title: "Review Shield",
    tagline: "Protect Your Reputation",
    description:
      "After every job, customers get a feedback text. Happy ones go to Google Reviews. Unhappy ones come to you privately first.",
    features: [
      "Post-job feedback text to every customer",
      "Happy customers (4-5 stars) \u2192 Google Reviews",
      "Unhappy customers (1-3 stars) \u2192 private feedback to you",
      "Steady positive reviews, negative ones caught early",
    ],
  },
]

export function SystemsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="systems" className="py-20 md:py-28 bg-card/50">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            Our Systems
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each system works independently or together. Start with what you need most.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {systems.map((system, index) => (
            <Card
              key={system.title}
              className={`bg-card border-border border-l-2 border-l-primary/40 hover:border-l-primary hover:border-orange-500/40 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              } ${index >= 3 ? "lg:col-span-1 lg:mx-auto lg:w-full" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <system.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {system.tagline}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold">{system.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {system.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {system.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
