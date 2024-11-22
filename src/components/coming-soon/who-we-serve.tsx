import { Check } from "lucide-react"

const targets = [
  "Connect more deeply with their congregation",
  "Create a professional digital presence",
  "Save time on technical management",
  "Grow their community with ease"
]

export function WhoWeServe() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Who We&apos;re For
          </h2>
          <p className="text-lg text-muted-foreground">
            Small churches, church plants, and home churches looking to:
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[48rem]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {targets.map((target, index) => (
              <li key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-background">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">{target}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 