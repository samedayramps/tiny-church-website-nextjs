'use client'

import { useActionState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoadingButton } from '@/components/ui/loading-button'
import { useToast } from "@/hooks/use-toast"
import { useEffect, useRef } from 'react'
import { sendContactForm } from '@/app/actions'
import { trackEvent } from '@/lib/gtm'

type State = {
  error?: string
  success?: string
}

export function ContactForm() {
  const initialState: State = { error: undefined, success: undefined }
  const [state, formAction] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

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

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-xl">
          <form ref={formRef} action={formAction} className="space-y-4">
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
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your message"
                required
                className="min-h-[120px] sm:min-h-[150px]"
                aria-label="Message"
              />
            </div>
            <div className="flex justify-end">
              <LoadingButton type="submit" className="w-full sm:w-auto">
                Send Message
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 