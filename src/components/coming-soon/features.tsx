import { Globe, Users, Calendar, MessageSquare, Lightbulb, DollarSign } from "lucide-react"

const features = [
  {
    title: "Effortless Website",
    icon: Globe,
    features: [
      "Professionally designed",
      "Mobile-responsive",
      "Easy content updates",
      "Always current, zero technical skills required"
    ]
  },
  {
    title: "Smart Member Management",
    icon: Users,
    features: [
      "Simple, intuitive directory",
      "Easy group communication",
      "Visitor tracking",
      "Privacy-focused tools"
    ]
  },
  {
    title: "Streamlined Event Hosting",
    icon: Calendar,
    features: [
      "Simple event creation",
      "Automatic reminders",
      "Online RSVPs",
      "Community calendar"
    ]
  },
  {
    title: "Integrated Communication",
    icon: MessageSquare,
    features: [
      "Email & text capabilities",
      "Social media optimization",
      "Visitor follow-up workflows",
      "Prayer request management"
    ]
  },
  {
    title: "Community Growth Tools",
    icon: Lightbulb,
    features: [
      "Google Business integration",
      "Visitor welcome sequences",
      "Engagement tracking",
      "Outreach campaign support"
    ]
  },
  {
    title: "Simplified Giving & Finances",
    icon: DollarSign,
    features: [
      "Online donation processing",
      "Automated contribution tracking",
      "Reporting & tax documentation",
      "Secure, transparent financial management"
    ]
  }
]

export function Features() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Features Built for Real Ministry
          </h2>
        </div>

        <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 rounded-lg border bg-background p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {item}
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