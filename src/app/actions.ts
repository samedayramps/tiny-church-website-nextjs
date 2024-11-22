'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { welcomeEmailTemplate } from '@/lib/email-template'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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

  const email = validatedFields.data.email

  try {
    // Add to Supabase
    const { error: supabaseError } = await supabase
      .from('email_signups')
      .insert([
        { 
          email,
          signup_date: new Date().toISOString(),
          unsubscribed: false
        }
      ])

    if (supabaseError) throw supabaseError

    // Add to Resend audience
    await resend.contacts.create({
      email,
      audienceId: '589aac68-2790-486e-bb58-20218cf66f5e',
      firstName: '',
    })

    // Send welcome email
    await resend.emails.send({
      from: 'Tiny Church <hello@tinychurch.app>',
      to: email,
      subject: 'Welcome to Tiny Church!',
      html: welcomeEmailTemplate(email),
      headers: {
        'List-Unsubscribe': `${process.env.NEXT_PUBLIC_UNSUBSCRIBE_URL}?email=${encodeURIComponent(email)}`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
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

export async function sendContactForm(prevState: State | null, formData: FormData): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      error: 'Please check your input and try again.',
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    await resend.emails.send({
      from: 'Tiny Church <hello@tinychurch.app>',
      to: 'hello@tinychurch.app',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return {
      success: "Thanks for reaching out! We'll get back to you soon.",
    }
  } catch (err) {
    console.error('Failed to send contact form:', err)
    return {
      error: 'Something went wrong. Please try again.',
    }
  }
} 