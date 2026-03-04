"use client"

import { Check, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const funnelSteps = [
  { step: 1, what: "Customer finds you and visits your site", system: "Website", auto: true },
  { step: 2, what: "They fill out the lead form", system: "Website / Lead Form", auto: true },
  { step: 3, what: "You get a text with their info in seconds", system: "Lead Follow-Up", auto: true },
  { step: 4, what: "They get an automatic response", system: "Lead Follow-Up", auto: true },
  { step: 5, what: "They book and drop off their vehicle", system: "\u2014", auto: false },
  { step: 6, what: "They get text updates through service", system: "Job Tracker", auto: true },
  { step: 7, what: 'They get a "Ready for Pickup" text', system: "Job Tracker", auto: true },
  { step: 8, what: "After pickup, asked to rate experience", system: "Review Shield", auto: true },
  { step: 9, what: "Happy \u2192 Google review. Unhappy \u2192 private to you", system: "Review Shield", auto: true },
]

export function FullFunnelTable() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="funnel" className="py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display uppercase tracking-wide mb-4">
            The Full System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From first visit to five-star review — every step of the customer journey, fully automated.
          </p>
        </div>

        {/* Desktop table */}
        <div className={`hidden md:block ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-card hover:bg-card">
                  <TableHead className="w-16">Step</TableHead>
                  <TableHead>What Happens</TableHead>
                  <TableHead>System</TableHead>
                  <TableHead className="w-28 text-center">Automated?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {funnelSteps.map((row) => (
                  <TableRow key={row.step}>
                    <TableCell className="font-bold text-primary">{row.step}</TableCell>
                    <TableCell>{row.what}</TableCell>
                    <TableCell className="text-muted-foreground">{row.system}</TableCell>
                    <TableCell className="text-center">
                      {row.auto ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          <User className="h-3 w-3 mr-1" />
                          Staff
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="flex md:hidden flex-col gap-3">
          {funnelSteps.map((row, index) => (
            <div
              key={row.step}
              className={`p-4 rounded-lg border border-border bg-card ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-primary">Step {row.step}</span>
                {row.auto ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Badge variant="secondary" className="text-xs">
                    <User className="h-3 w-3 mr-1" />
                    Staff
                  </Badge>
                )}
              </div>
              <p className="text-sm mb-1">{row.what}</p>
              <p className="text-xs text-muted-foreground">{row.system}</p>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground">
            8 out of 9 steps are fully automated. Your team just does the work — the system handles everything else.
          </p>
        </div>
      </div>
    </section>
  )
}
