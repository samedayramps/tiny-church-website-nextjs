import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/landing1/hero'
import { Features } from '@/components/landing1/features'
import { FocusSection } from '@/components/landing1/focus-section'
import { CTA } from '@/components/landing1/cta'
import { Footer } from '@/components/footer'

export default function Landing1() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FocusSection />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
} 