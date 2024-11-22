import Link from 'next/link'
import { Twitter, Github } from 'lucide-react'

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/tinychurchapp', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/tinychurch', label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container section-padding">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Link href="/" className="text-lg font-semibold">
              Tiny Church
            </Link>
            <p className="max-w-md text-sm text-gray-400">
              Simple church management and digital presence for small congregations.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-400 transition-colors hover:text-white"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© 2024 Tiny Church</span>
            <span>•</span>
            <Link 
              href="mailto:hello@tinychurch.app" 
              className="hover:text-white transition-colors"
            >
              hello@tinychurch.app
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 