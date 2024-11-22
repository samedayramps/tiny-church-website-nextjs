'use client'

import { Input } from './ui/input'
import { useActionState } from 'react'
import { subscribeToNewsletter } from '@/app/actions'
import { useEffect, useRef } from 'react'
import { LoadingButton } from './ui/loading-button'
import { useToast } from "@/hooks/use-toast"
import { trackSubscribe } from '@/lib/gtm'

type State = {
  error?: string
  success?: string
}

export function Hero() {
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
    <section className="container min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-6 px-4 py-12 md:gap-8 md:py-16 lg:py-32">
      <div className="mx-auto flex flex-col items-center gap-4 md:gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Nurture Community,<br />Not Technology
        </h1>
        <p className="max-w-[42rem] text-center leading-normal text-muted-foreground text-base sm:text-lg md:text-xl md:leading-8">
          Coming soon: A simple platform that lets you focus on what matters most - building authentic relationships and fostering meaningful connections in your congregation.
        </p>
      </div>

      <div className="w-full max-w-sm space-y-3 px-4 sm:px-0">
        <form ref={formRef} action={formAction} className="space-y-3 sm:space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            <Input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              required
              aria-label="Email address"
              className="flex-1"
            />
            <LoadingButton className="w-full sm:w-auto">Subscribe</LoadingButton>
          </div>
        </form>
        <p className="text-xs sm:text-sm text-center text-muted-foreground">
          Be the first to know when we launch
        </p>
      </div>
    </section>
  )
} 