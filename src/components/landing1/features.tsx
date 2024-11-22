import { Users, Cog, Globe } from "lucide-react"

const features = [
  {
    title: "Simple Member Management",
    description: "Keep track of your congregation with an easy-to-use member directory. Perfect for small churches.",
    icon: Users,
  },
  {
    title: "Focus on Ministry",
    description: "We handle all the technical details so you can dedicate your time to what matters most - your community.",
    icon: Cog,
  },
  {
    title: "Share Your Story",
    description: "A welcoming digital presence that authentically reflects your church's heart for community.",
    icon: Globe,
  },
]

export function Features() {
  return (
    <section id="features" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for Real Community
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg sm:leading-7">
            Simple tools that support authentic relationships and meaningful connections, not complicated systems that get in the way.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg border bg-background p-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 