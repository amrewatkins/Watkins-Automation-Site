"use client"

import { Check, Megaphone, Globe, Zap, MessageSquare, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const included = [
  { icon: Megaphone, label: "Facebook Ads", detail: "Custom campaigns, targeting, optimization & reporting" },
  { icon: Globe, label: "Custom Website", detail: "Mobile-first design, built & maintained for you" },
  { icon: Zap, label: "Lead Automation", detail: "Instant notification & follow-up to every lead" },
  { icon: MessageSquare, label: "Job Status Tracker", detail: "Automatic SMS updates at every stage" },
  { icon: ShieldCheck, label: "Review Shield", detail: "Post-job feedback routing & review generation" },
]

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div ref={ref} className="max-w-3xl mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            One Package. Everything Included.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No tiers, no upsells. You get the full system from day one.
          </p>
        </div>

        <Card
          className={`p-8 md:p-10 bg-card border-border hover:border-orange-500/50 transition-all duration-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Setup</p>
              <p className="text-4xl md:text-5xl font-extrabold font-display text-primary">
                $7,500
              </p>
              <p className="text-sm text-muted-foreground mt-1">one-time</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Monthly</p>
              <p className="text-4xl md:text-5xl font-extrabold font-display text-primary">
                $3,000
              </p>
              <p className="text-sm text-muted-foreground mt-1">per month</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <p className="font-semibold text-sm uppercase tracking-wide mb-4">Everything included:</p>
            <div className="space-y-4">
              {included.map((item) => (
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

          <p className="text-xs text-muted-foreground mb-8">
            Ad spend is separate — you cover the budget, we deliver results that more than pay for it.
          </p>

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
    </section>
  )
}
