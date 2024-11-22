import { ConsultationModal } from "../consultation-modal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Simplify Your Church Tech?
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a free consultation to see how we can serve your church.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <ConsultationModal />
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                Join Our Launch List
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 