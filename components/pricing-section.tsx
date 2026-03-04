"use client"

import { Globe, Zap, MessageSquare, ShieldCheck, BarChart3, Paintbrush, Clock, Server, Smartphone, Bell, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const websiteIncluded = [
  { icon: Globe, label: "Custom Website", detail: "Mobile-first design, built from scratch for your brand" },
  { icon: Paintbrush, label: "Unlimited Updates", detail: "Request any changes, anytime — text, photos, sections, full redesigns. No limits." },
  { icon: Clock, label: "Priority Support", detail: "Direct access to your developer whenever you need something changed" },
  { icon: BarChart3, label: "Performance & Analytics", detail: "Speed optimization, traffic reports & conversion tracking" },
  { icon: Server, label: "Hosting & Security", detail: "SSL, domain management, backups & security updates — all handled" },
]

const trackerIncluded = [
  { icon: MessageSquare, label: "Automatic SMS Updates", detail: "Customers get a text at every stage — checked in, in queue, in progress, almost done, ready for pickup" },
  { icon: Smartphone, label: "No App Required", detail: "Works through standard text messages. No downloads, no logins — just texts." },
  { icon: Bell, label: "Real-Time Stage Tracking", detail: "As your team moves a job through the pipeline, the customer is notified instantly" },
  { icon: Users, label: "Fewer Phone Calls", detail: "Customers stop calling to ask \"is my car done?\" — they already know" },
  { icon: Clock, label: "Ongoing Support", detail: "Pipeline customization, stage updates & system maintenance — all handled" },
]

const fullSystemIncluded = [
  { icon: Globe, label: "Custom Website", detail: "Mobile-first design with unlimited updates, priority support, analytics & fully managed hosting" },
  { icon: Zap, label: "Lead Automation", detail: "Every lead gets an instant response within seconds. You get notified immediately — no lead falls through the cracks, 24/7" },
  { icon: MessageSquare, label: "Job Status Tracker", detail: "Automatic SMS at every stage of service — checked in through ready for pickup. No app required." },
  { icon: ShieldCheck, label: "Review Shield", detail: "After every job, customers rate their experience. Happy ones go to Google Reviews. Unhappy ones come to you privately first." },
  { icon: Clock, label: "Dedicated Support", detail: "One point of contact for your entire system. Updates, changes, troubleshooting — all handled for you." },
]

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            Choose Your System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start with what you need. Scale when you&apos;re ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Website Only */}
          <Card
            className={`p-8 bg-card border-border hover:border-orange-500/50 transition-all duration-300 flex flex-col ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Website Only</p>

            <div className="flex items-end gap-6 mb-2">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$3,000</p>
                <p className="text-xs text-muted-foreground">one-time setup</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$750</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6 mb-6 flex-1">
              <p className="font-semibold text-sm uppercase tracking-wide mb-4">What&apos;s included:</p>
              <div className="space-y-3">
                {websiteIncluded.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" variant="outline" className="w-full">
              <a
                href="https://calendly.com/amreclothing/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Demo
              </a>
            </Button>
          </Card>

          {/* Job Status Tracker */}
          <Card
            className={`p-8 bg-card border-border hover:border-orange-500/50 transition-all duration-300 flex flex-col ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.15s" }}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Job Status Tracker</p>

            <div className="flex items-end gap-6 mb-2">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$2,500</p>
                <p className="text-xs text-muted-foreground">one-time setup</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$500</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6 mb-6 flex-1">
              <p className="font-semibold text-sm uppercase tracking-wide mb-4">What&apos;s included:</p>
              <div className="space-y-3">
                {trackerIncluded.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" variant="outline" className="w-full">
              <a
                href="https://calendly.com/amreclothing/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Demo
              </a>
            </Button>
          </Card>

          {/* Full System */}
          <Card
            className={`p-8 bg-card border-primary/50 hover:border-primary transition-all duration-300 relative flex flex-col ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute -top-3 left-8">
              <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Full System</p>

            <div className="flex items-end gap-6 mb-2">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$7,500</p>
                <p className="text-xs text-muted-foreground">one-time setup</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold font-display text-primary">$3,000</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6 mb-6 flex-1">
              <p className="font-semibold text-sm uppercase tracking-wide mb-4">Everything included:</p>
              <div className="space-y-3">
                {fullSystemIncluded.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-primary/10 flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs text-muted-foreground">
                  Includes Lead Automation & Review Shield — only available in the Full System. One system, one monthly bill, everything managed for you.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <a
                href="https://calendly.com/amreclothing/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Demo
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
