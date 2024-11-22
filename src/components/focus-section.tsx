"use client"

import { Check } from "lucide-react"

const features = [
  "Professionally managed website that stays current",
  "Automatic updates and maintenance handled for you",
  "Best-in-class security and performance",
  "Expert support when you need it"
]

export function FocusSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Focus on Your Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Stop spending time managing technology. We&apos;ll handle your digital presence so you can invest in what matters most - your people and your mission.
              </p>
            </div>
            
            <ul className="grid gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border bg-background">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Image grid */}
          <div className="relative grid gap-6 md:grid-cols-2">
            <div className="grid gap-6 md:mt-16">
              {[0, 1].map((i) => (
                <div key={i} className="overflow-hidden rounded-2xl bg-background/50 aspect-[4/3]">
                  <div className="h-full w-full bg-background/50" />
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              {[0, 1].map((i) => (
                <div key={i} className="overflow-hidden rounded-2xl bg-background/50 aspect-[4/3]">
                  <div className="h-full w-full bg-background/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 