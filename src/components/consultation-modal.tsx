'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"
import { Suspense } from "react"

export function ConsultationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Schedule a Free Consultation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule Your Free Consultation</DialogTitle>
          <DialogDescription>
            Tell us about your church and we&apos;ll get back to you within one business day.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </DialogContent>
    </Dialog>
  )
} 