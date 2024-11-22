'use client'

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFormStatus } from 'react-dom'

export function LoadingButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        'Get Updates'
      )}
    </Button>
  )
} 