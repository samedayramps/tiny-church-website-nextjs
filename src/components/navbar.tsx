import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const navLinks = [
  { title: 'Features', href: '#features' },
  { title: 'Digital Presence', href: '#digital-presence' },
  { title: 'Get Started', href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex-1">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl"
          >
            <Image
              src="/logo.svg"
              alt="Tiny Church Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            Tiny Church
          </Link>
        </div>
        
        {/* Center - Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex flex-1 justify-end gap-2">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
} 