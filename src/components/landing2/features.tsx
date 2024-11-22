import { Check } from "lucide-react"

const featureGroups = [
  {
    title: "Built for Real Ministry",
    features: [
      "Member directory",
      "Event calendar",
      "Prayer requests",
      "Group messaging",
      "Visitor follow-up",
      "Online giving"
    ]
  },
  {
    title: "Managed for You",
    features: [
      "Website updates",
      "Security maintenance",
      "Regular backups",
      "Technical support",
      "Performance optimization",
      "Content assistance"
    ]
  }
]

export function Features2() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything Essential, Nothing Excessive
          </h2>
        </div>

        <div className="mx-auto grid max-w-[64rem] gap-8 md:grid-cols-2">
          {featureGroups.map((group, index) => (
            <div key={index} className="rounded-lg border bg-background p-8">
              <h3 className="mb-6 text-xl font-semibold">{group.title}</h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {group.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 