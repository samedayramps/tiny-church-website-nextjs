import { XCircle } from "lucide-react"

const problems = [
  "Complicated church management tools",
  "Outdated or hard-to-update websites",
  "Disconnected communication systems",
  "Limited time and technical resources",
  "Difficulty tracking member engagement",
  "Financial administration complexity"
]

export function Problems() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Problems We Solve
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[48rem]">
          <ul className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-center gap-3 p-4 rounded-lg border bg-background">
                <XCircle className="h-5 w-5 text-destructive shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 