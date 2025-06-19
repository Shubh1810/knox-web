import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { MacbookScroll } from "@/components/macbook-scroll"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="-mt-[24rem] sm:-mt-[48rem] z-30 relative">
          <MacbookScroll />
        </div>
      </div>
      <div className="-mt-16 sm:-mt-20 relative z-20">
        <TrustIndicators />
      </div>
      <div className="mt-32 sm:mt-48 lg:mt-80">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  )
}
