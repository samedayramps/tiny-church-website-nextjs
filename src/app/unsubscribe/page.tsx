import { Resend } from 'resend'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: { email?: string }
}) {
  let message = "You've been unsubscribed."
  
  if (searchParams.email) {
    try {
      // Update Supabase record
      const { error: supabaseError } = await supabase
        .from('email_signups')
        .update({ 
          unsubscribed: true,
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', searchParams.email)

      if (supabaseError) throw supabaseError

      // Remove from Resend audience
      await resend.contacts.remove({
        audienceId: '589aac68-2790-486e-bb58-20218cf66f5e',
        email: searchParams.email,
      })
    } catch (error) {
      console.error('Failed to unsubscribe:', error)
      message = "Something went wrong. Please try again or contact support."
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Unsubscribed</h1>
        <p className="text-muted-foreground">{message}</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
} 