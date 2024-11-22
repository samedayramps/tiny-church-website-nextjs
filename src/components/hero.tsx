'use client'

import { Input } from './ui/input'
import { useFormState } from 'react-dom'
import { subscribeToNewsletter } from '@/app/actions'
import { useEffect, useRef } from 'react'
import { LoadingButton } from './ui/loading-button'
import { useToast } from "@/hooks/use-toast"
import { trackSubscribe } from '@/lib/gtm'

export function Hero() {
  const [state, formAction] = useFormState(subscribeToNewsletter, null)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  // Show toast and reset form on success/error
  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.success,
      })
      // Track successful subscription
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
    <section className="container min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-8 py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl">
          Nurture Community,<br />Not Technology
        </h1>
        <p className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Coming soon: A simple platform that lets you focus on what matters most - building authentic relationships and fostering meaningful connections in your congregation.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              required
              aria-label="Email address"
            />
            <LoadingButton />
          </div>
        </form>
        <p className="text-sm text-center text-muted-foreground">
          Be the first to know when we launch
        </p>
      </div>
    </section>
  )
} 