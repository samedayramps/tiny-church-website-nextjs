'use client'

import { useActionState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoadingButton } from '@/components/ui/loading-button'
import { useToast } from "@/hooks/use-toast"
import { useEffect, useRef } from 'react'
import { sendContactForm } from '@/app/actions'
import { trackEvent } from '@/lib/gtm'
import { useSearchParams, usePathname } from 'next/navigation'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type State = {
  error?: string
  success?: string
}

export function ContactForm() {
  const initialState: State = { error: undefined, success: undefined }
  const [state, formAction] = useActionState(sendContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleSubmit = async (formData: FormData) => {
    try {
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

      // Log form data for debugging
      console.log('Form submission attempt:', {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        church: formData.get('church'),
        message: formData.get('message'),
        interest: formData.get('interest'),
        preferred_contact: formData.get('preferred_contact'),
        source: formData.get('source'),
        utm_params: Object.fromEntries(
          utmParams
            .filter(param => formData.get(param))
            .map(param => [param, formData.get(param)])
        )
      })
      
      return formAction(formData)
    } catch (error) {
      console.error('Error in form submission:', error)
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      })
    }
  }

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message sent!",
        description: state.success,
      })
      const email = formRef.current?.email?.value
      if (email) {
        try {
          trackEvent('contact_form_submit', {
            email_domain: email.split('@')[1],
          })
        } catch (error) {
          console.error('Error tracking form submission:', error)
        }
      }
      formRef.current?.reset()
    } else if (state?.error) {
      console.error('Form submission error:', state.error)
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      })
    }
  }, [state, toast])

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
          <Input
            name="church"
            placeholder="Church Name"
            aria-label="Church Name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Select name="interest">
          <SelectTrigger aria-label="Biggest Challenge">
            <SelectValue placeholder="What's your biggest challenge?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Outdated Website">Outdated or hard to update website</SelectItem>
            <SelectItem value="Member Communication">Keeping in touch with members</SelectItem>
            <SelectItem value="Tech Overwhelm">Too many complicated tech tools</SelectItem>
            <SelectItem value="Limited Resources">Limited time and technical resources</SelectItem>
            <SelectItem value="Other">Other challenge</SelectItem>
          </SelectContent>
        </Select>
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

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Preferred Contact Method</Label>
          <RadioGroup name="preferred_contact" className="flex gap-4" defaultValue="email">
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

        <LoadingButton type="submit" className="w-full sm:w-auto">
          Request Information
        </LoadingButton>
      </div>
    </form>
  )
} 