import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { SystemsSection } from "@/components/systems-section"
import { FullFunnelTable } from "@/components/full-funnel-table"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PostHogPageView } from "@/lib/posthog"

export default function Page() {
  return (
    <main>
      <PostHogPageView />
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SystemsSection />
      <FullFunnelTable />
      <StatsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
