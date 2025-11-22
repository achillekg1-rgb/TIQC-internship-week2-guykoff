"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-8 min-w-0">
            <Link href="/" className="flex items-center gap-2 font-bold text-sm sm:text-base flex-shrink-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xs">
                B
              </div>
              <span className="hidden sm:inline">BuildHub</span>
            </Link>

            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="#features"
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                Docs
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border hover:bg-accent transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <Link href="/auth/signin" className="flex-shrink-0">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup" className="flex-shrink-0">
              <Button size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}