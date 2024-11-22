'use client'

import { sendGTMEvent } from '@next/third-parties/google'

type GTMEventProperties = {
  email_domain?: string
  button_name?: string
  value?: string | number
  [key: string]: string | number | undefined // Allow for additional properties
}

export const trackEvent = (event: string, properties?: GTMEventProperties) => {
  sendGTMEvent({ 
    event,
    ...properties
  })
}

// Common events
export const trackSubscribe = (email: string) => {
  trackEvent('newsletter_subscribe', {
    email_domain: email.split('@')[1],
  })
}

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
  })
} 