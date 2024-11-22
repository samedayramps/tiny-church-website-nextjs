import { MessageSquare, Cog, Heart } from "lucide-react"

const steps = [
  {
    title: "1. Schedule a Chat",
    description: "Tell us about your church and its needs",
    icon: MessageSquare,
  },
  {
    title: "2. We Set Everything Up",
    description: "Our team handles all the technical details",
    icon: Cog,
  },
  {
    title: "3. Focus on Ministry",
    description: "While we maintain your digital presence",
    icon: Heart,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Getting Started Is Easy
          </h2>
        </div>

        <div className="mx-auto grid max-w-[64rem] gap-8 sm:grid-cols-2 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 