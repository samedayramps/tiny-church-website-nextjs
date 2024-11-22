'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type State = {
  error?: string
  success?: string
}

export async function subscribeToNewsletter(prevState: State | null, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid email',
    }
  }

  try {
    await resend.contacts.create({
      email: validatedFields.data.email,
      audienceId: '589aac68-2790-486e-bb58-20218cf66f5e',
      firstName: '', // Optional: Add if you want to collect names
    })

    return {
      success: 'Thanks for subscribing!',
    }
  } catch (err) {
    console.error('Failed to subscribe:', err)
    return {
      error: 'Something went wrong. Please try again.',
    }
  }
} 