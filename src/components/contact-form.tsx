'use client'

import { useActionState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoadingButton } from '@/components/ui/loading-button'
import { useToast } from "@/hooks/use-toast"
import { useEffect, useRef, Suspense } from 'react'
import { sendContactForm } from '@/app/actions'
import { trackEvent } from '@/lib/gtm'
import { useSearchParams, usePathname } from 'next/navigation'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type State = {
  error?: string
  success?: string
}

// Create a separate component for the form content
function ContactFormContent() {
  const initialState: State = { error: undefined, success: undefined }
  const [state, formAction] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message sent!",
        description: state.success,
      })
      const email = formRef.current?.email?.value
      if (email) {
        trackEvent('contact_form_submit', {
          email_domain: email.split('@')[1],
        })
      }
      formRef.current?.reset()
    } else if (state?.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      })
    }
  }, [state, toast])

  const handleSubmit = (formData: FormData) => {
    // Add source path
    formData.append('source', pathname)
    
    // Add UTM parameters
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    utmParams.forEach(param => {
      const value = searchParams.get(param)
      if (value) {
        formData.append(param, value)
      }
    })
    
    return formAction(formData)
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input
            name="name"
            placeholder="Name"
            required
            aria-label="Name"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            aria-label="Email"
          />
        </div>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            aria-label="Phone"
          />
        </div>
        <div className="space-y-2">
          <select
            name="interest"
            className="w-full px-3 py-2 border rounded-md text-muted-foreground"
            aria-label="Biggest Challenge"
          >
            <option value="">What&apos;s your biggest challenge?</option>
            <option value="Outdated Website">Outdated or hard to update website</option>
            <option value="Member Communication">Keeping in touch with members</option>
            <option value="Tech Overwhelm">Too many complicated tech tools</option>
            <option value="Limited Resources">Limited time and technical resources</option>
            <option value="Other">Other challenge</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <RadioGroup name="preferred_contact" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="Tell us more about your church and what you're looking for..."
          required
          className="min-h-[120px] sm:min-h-[150px]"
          aria-label="Message"
        />
      </div>

      <div className="flex justify-end">
        <LoadingButton type="submit" className="w-full sm:w-auto">
          Request Information
        </LoadingButton>
      </div>
    </form>
  )
}

// Main component with Suspense boundary
export function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Simplify Your Church Tech?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Let&apos;s discuss how Tiny Church can serve your congregation. Share your details below, and we&apos;ll reach out to learn more about your needs.
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-xl">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>
      </div>
    </section>
  )
} 