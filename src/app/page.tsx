import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6 px-4 py-12 md:gap-8 md:py-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Focus on Your Ministry,<br />Not Technology
            </h1>
            <p className="max-w-[42rem] text-muted-foreground text-base sm:text-lg md:text-xl md:leading-8">
              Simple church management that works for you, not the other way around. We handle the tech so you can focus on what matters most.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 