import { Navbar } from '@/components/navbar'
import { Hero2 } from '@/components/landing2/hero'
import { Problem } from '@/components/landing2/problem'
import { Solution } from '@/components/landing2/solution'
import { HowItWorks } from '@/components/landing2/how-it-works'
import { SocialProof } from '@/components/landing2/social-proof'
import { Features2 } from '@/components/landing2/features'
import { Pricing } from '@/components/landing2/pricing'
import { FAQ } from '@/components/landing2/faq'
import { CTA } from '@/components/landing2/cta'
import { Footer } from '@/components/footer'

export default function Landing2() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero2 />
        <Problem />
        <Solution />
        <HowItWorks />
        <SocialProof />
        <Features2 />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
} 