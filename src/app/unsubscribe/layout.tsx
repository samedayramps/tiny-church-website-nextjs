import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsubscribe - Tiny Church',
  description: 'Unsubscribe from Tiny Church emails',
}

export default function UnsubscribeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 