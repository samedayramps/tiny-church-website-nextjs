import { XCircle } from "lucide-react"

const problems = [
  "Updating your church website",
  "Managing multiple communication tools",
  "Wrestling with complicated systems",
  "Training volunteers on different platforms"
]

export function Problem() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Being a pastor shouldn&apos;t mean being an IT expert
          </h2>
          <p className="text-lg text-muted-foreground">
            You went into ministry to shepherd people, not manage websites and juggle technology. Yet here you are, spending hours every week on:
          </p>
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
          
          <p className="mt-8 text-xl font-semibold text-center">
            There&apos;s a better way.
          </p>
        </div>
      </div>
    </section>
  )
} 