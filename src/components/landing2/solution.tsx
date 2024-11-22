import { Globe, Users, Megaphone } from "lucide-react"

const solutions = [
  {
    title: "Website That Works",
    icon: Globe,
    features: [
      "Professional, always-current website",
      "Automatic updates and maintenance",
      "Mobile-friendly design",
      "Simple content updates"
    ]
  },
  {
    title: "Easy Member Connection",
    icon: Users,
    features: [
      "Single church directory",
      "Simple group messaging",
      "Event management",
      "Private prayer requests"
    ]
  },
  {
    title: "Community Growth",
    icon: Megaphone,
    features: [
      "Google Maps integration",
      "Social media automation",
      "Visitor follow-up tools",
      "Community outreach features"
    ]
  }
]

export function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            One Simple Platform. Everything Your Church Needs.
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle all your church&apos;s technology so you can focus on what truly matters - your ministry and your people.
          </p>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col gap-6 rounded-lg border bg-background p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 