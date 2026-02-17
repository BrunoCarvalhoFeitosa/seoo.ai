import { PreLoader } from "@/app/components/common/pre-loader"
import { Header } from "@/app/components/layout/header"
import { HeroSection } from "@/app/components/home/hero-section"
import { SponsorsSection } from "@/app/components/home/sponsors-section"
import { BentoGridSection } from "@/app/components/home/bento-grid-section"
import { AdvantagesSection } from "@/app/components/home/advantages-section"
import { TestimonialsSection } from "@/app/components/home/testimonials-section"
import { PricesSection } from "@/app/components/home/prices-section"
import { NewsletterSection } from "@/app/components/home/newsletter-section"
import { Footer } from "@/app/components/layout/footer"

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-auto">
        <PreLoader />
        <HeroSection />
        <SponsorsSection />
        <BentoGridSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <PricesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
