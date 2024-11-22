'use client'

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from 'react-dom'

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function LoadingButton({ children, ...props }: LoadingButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        children
      )}
    </Button>
  )
} 