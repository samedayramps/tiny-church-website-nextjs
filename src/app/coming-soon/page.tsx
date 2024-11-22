import { Navbar } from '@/components/navbar'
import { ComingSoonHero } from '@/components/coming-soon/hero'
import { WhoWeServe } from '@/components/coming-soon/who-we-serve'
import { Problems } from '@/components/coming-soon/problems'
import { Features } from '@/components/coming-soon/features'
import { EmailSignup } from '@/components/coming-soon/email-signup'
import { Footer } from '@/components/footer'

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ComingSoonHero />
        <WhoWeServe />
        <Problems />
        <Features />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  )
} 