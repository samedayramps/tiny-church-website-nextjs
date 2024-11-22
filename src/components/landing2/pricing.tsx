import { Check } from "lucide-react"

const features = [
  "No setup costs",
  "No long-term contracts",
  "No hidden fees",
  "Cancel anytime"
]

export function Pricing() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything your church needs for one monthly fee
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[42rem]">
          <div className="rounded-lg border bg-background p-8">
            <div className="text-center">
              <div className="text-5xl font-bold">$99</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 