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
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  interest: z.string().optional(),
  preferred_contact: z.enum(['email', 'phone']).optional(),
  source: z.string(),
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
    phone: formData.get('phone'),
    message: formData.get('message'),
    interest: formData.get('interest'),
    preferred_contact: formData.get('preferred_contact'),
    source: formData.get('source'),
  })

  if (!validatedFields.success) {
    return {
      error: 'Please check your input and try again.',
    }
  }

  const { name, email, phone, message, interest, preferred_contact, source } = validatedFields.data

  try {
    // Insert into Supabase
    const { error: supabaseError } = await supabase
      .from('lead_submissions')
      .insert([
        {
          name,
          email,
          phone,
          message,
          interest,
          source,
          status: 'new',
          utm_source: formData.get('utm_source') || null,
          utm_medium: formData.get('utm_medium') || null,
          utm_campaign: formData.get('utm_campaign') || null,
          utm_term: formData.get('utm_term') || null,
          utm_content: formData.get('utm_content') || null,
        }
      ])

    if (supabaseError) throw supabaseError

    // Send notification email with enhanced information
    await resend.emails.send({
      from: 'Tiny Church <hello@tinychurch.app>',
      to: 'hello@tinychurch.app',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${interest ? `<p><strong>Interest:</strong> ${interest}</p>` : ''}
        ${preferred_contact ? `<p><strong>Preferred Contact:</strong> ${preferred_contact}</p>` : ''}
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    })

    return {
      success: "Thanks for reaching out! We'll get back to you soon.",
    }
  } catch (err) {
    console.error('Failed to process contact form:', err)
    return {
      error: 'Something went wrong. Please try again.',
    }
  }
} 