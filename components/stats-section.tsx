"use client"

import { MessageSquare, Zap, Clock, ShieldCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "500+", label: "Status Updates Sent", icon: MessageSquare },
  { value: "<60s", label: "Average Lead Response", icon: Zap },
  { value: "24/7", label: "System Uptime", icon: Clock },
  { value: "0", label: "Leads Dropped", icon: ShieldCheck },
]

export function StatsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            Built for Results
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`p-6 text-center bg-card border-border ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-extrabold font-display text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
