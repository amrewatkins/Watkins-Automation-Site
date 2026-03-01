"use client"

import { Megaphone, Globe, Zap, MessageSquare, ShieldCheck, ChevronRight, ChevronDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  { icon: Megaphone, label: "Get Customers", system: "Facebook Ads" },
  { icon: Globe, label: "Capture Their Info", system: "Custom Website" },
  { icon: Zap, label: "Follow Up Instantly", system: "Lead Automation" },
  { icon: MessageSquare, label: "Keep Them Updated", system: "Job Tracker" },
  { icon: ShieldCheck, label: "Protect Your Rep", system: "Review Shield" },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            How It All Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Five connected systems that cover the entire customer journey. Start with one, add more as your shop grows. Everything runs on autopilot.
          </p>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2">
              <div
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-orange-500/50 transition-all duration-300 w-48 h-40 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-sm text-center leading-tight">{step.label}</span>
                <span className="text-xs text-muted-foreground text-center">{step.system}</span>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center gap-2">
          {steps.map((step, index) => (
            <div key={step.label} className="flex flex-col items-center gap-2 w-full">
              <div
                className={`flex items-center gap-4 p-4 rounded-xl border border-border bg-card w-72 h-16 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-sm">{step.label}</span>
                  <p className="text-xs text-muted-foreground">{step.system}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
