"use client"

import dynamic from "next/dynamic"

const AnimatedShaderHero = dynamic(
  () => import("@/components/ui/animated-shader-hero"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen bg-gradient-to-br from-background via-orange-950/20 to-background" />
    ),
  }
)

export function HeroSection() {
  return (
    <AnimatedShaderHero
      trustBadge={{
        text: "Trusted by Auto Shops Across the PNW",
        icons: ["🛡️"],
      }}
      headline={{
        line1: "Automate Your Shop.",
        line2: "Scale Your Business.",
      }}
      subtitle="Fewer phone calls. Faster follow-ups. Happier customers. We build the systems that handle lead generation, customer updates, and reputation management — so you can focus on the work."
      buttons={{
        primary: {
          text: "Book a Free Demo",
          href: "https://calendly.com/amreclothing/free-demo-call",
        },
        secondary: {
          text: "See Our Systems",
          href: "#systems",
        },
      }}
    />
  )
}
