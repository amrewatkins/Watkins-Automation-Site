import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { SystemsSection } from "@/components/systems-section"
import { FullFunnelTable } from "@/components/full-funnel-table"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SystemsSection />
      <FullFunnelTable />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
