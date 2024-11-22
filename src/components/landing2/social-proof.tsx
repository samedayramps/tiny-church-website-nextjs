import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, a tech solution that doesn&apos;t require a degree to use. Now I can spend my time with people instead of fixing website issues.",
    author: "Pastor Mike",
    church: "Grace Community Church"
  },
  {
    quote: "The simplicity is what sold us. Everything we need, nothing we don&apos;t, and support that actually understands ministry.",
    author: "Pastor Sarah",
    church: "New Life Fellowship"
  }
]

export function SocialProof() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by Churches Like Yours
          </h2>
        </div>

        <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-lg border bg-background p-8">
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" />
              <blockquote className="space-y-4">
                <p className="text-lg italic text-muted-foreground">
                  {testimonial.quote}
                </p>
                <footer className="text-sm">
                  <strong>{testimonial.author}</strong>
                  <span className="text-muted-foreground">, {testimonial.church}</span>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 