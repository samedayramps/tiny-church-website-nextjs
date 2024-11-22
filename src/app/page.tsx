import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { FocusSection } from '@/components/focus-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FocusSection />
        <Features />
      </main>
      <Footer />
    </div>
  )
} 