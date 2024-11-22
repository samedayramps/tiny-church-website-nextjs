"use client"

import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const features = [
  "Professionally managed website that stays current",
  "Automatic updates and maintenance handled for you",
  "Best-in-class security and performance",
  "Expert support when you need it"
]

const images = [0, 1, 2, 3] // Array of image indices

export function FocusSection() {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-scroll effect for mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Focus on Your Community
              </h2>
              <p className="text-lg text-muted-foreground">
              Stop wrestling with digital tools and start investing in what truly matters - your people, your mission, and your community.
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

          {/* Right side - Image grid on desktop, carousel on mobile */}
          <div className="relative">
            {/* Mobile Carousel */}
            <div className="relative overflow-hidden rounded-2xl md:hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((_, index) => (
                  <div
                    key={index}
                    className="min-w-full"
                  >
                    <div className="aspect-[4/3] bg-background/50" />
                  </div>
                ))}
              </div>
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full transition-colors",
                      currentImage === index ? "bg-primary" : "bg-primary/20"
                    )}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="relative hidden md:grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-[500px] mx-auto lg:mx-0">
              <div className="grid gap-3 sm:gap-4 md:gap-6 mt-0 md:mt-16">
                {[0, 1].map((i) => (
                  <div key={i} className="overflow-hidden rounded-2xl bg-background/50 aspect-[4/3]">
                    <div className="h-full w-full bg-background/50" />
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:gap-4 md:gap-6">
                {[2, 3].map((i) => (
                  <div key={i} className="overflow-hidden rounded-2xl bg-background/50 aspect-[4/3]">
                    <div className="h-full w-full bg-background/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 