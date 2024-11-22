'use client'

import { useRef, useEffect } from 'react'
import { useActionState } from 'react'
import { Input } from "@/components/ui/input"
import { LoadingButton } from "@/components/ui/loading-button"
import { useToast } from "@/hooks/use-toast"
import { subscribeToNewsletter } from '@/app/actions'
import { trackSubscribe } from '@/lib/gtm'

type State = {
  error?: string
  success?: string
}

export function EmailSignup() {
  const initialState: State = { error: undefined, success: undefined }
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.success,
      })
      const email = formRef.current?.email?.value
      if (email) {
        trackSubscribe(email)
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
    <section className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Your Invitation to Simplify
          </h2>
          <p className="text-lg text-muted-foreground">
            Be the first to know when we launch
          </p>

          <div className="mx-auto max-w-sm space-y-4">
            <form ref={formRef} action={formAction} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-label="Email address"
              />
              <LoadingButton className="w-full">
                Get Early Access
              </LoadingButton>
            </form>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Get exclusive early access</li>
              <li>• Insider updates</li>
              <li>• Special launch pricing</li>
            </ul>
          </div>

          <p className="text-sm italic text-muted-foreground">
            We&apos;re building technology that serves your ministry, not the other way around.
          </p>
        </div>
      </div>
    </section>
  )
} 