"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] px-4 py-8 sm:py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1.5 sm:space-y-2 px-4 sm:px-6 pt-6 sm:pt-8">
            <CardTitle className="text-xl sm:text-2xl">Reset password</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {isSubmitted
                ? "Check your email for a password reset link"
                : "Enter your email and we'll send you a link to reset your password"}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
            {isSubmitted ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-lg bg-accent/10 border border-accent/20 p-4 text-center">
                  <p className="text-sm sm:text-base text-foreground font-medium">Check your email</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    We've sent a password reset link to {email}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  Didn't receive an email? Check your spam folder or{" "}
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setEmail("")
                    }}
                    className="text-primary font-medium hover:underline"
                  >
                    try another email
                  </button>
                </p>

                <Link href="/auth/signin">
                  <Button variant="outline" className="w-full gap-2 text-sm sm:text-base bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    Back to sign in
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-sm sm:text-base"
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2 text-sm sm:text-base" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset link"}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </Button>

                <Link href="/auth/signin">
                  <Button variant="outline" className="w-full gap-2 text-sm sm:text-base bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    Back to sign in
                  </Button>
                </Link>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
