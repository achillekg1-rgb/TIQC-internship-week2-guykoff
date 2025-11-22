"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex items-center justify-center min-h-[calc(100vh-56px)] sm:min-h-[calc(100vh-64px)] px-4 py-8 sm:py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1.5 sm:space-y-2 px-4 sm:px-6 pt-6 sm:pt-8">
            <CardTitle className="text-xl sm:text-2xl">Create account</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Join thousands of developers shipping faster
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="password" className="text-sm sm:text-base">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm sm:text-base">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                  required
                />
              </div>

              <Button type="submit" className="w-full gap-2 text-sm sm:text-base" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Sign Up"}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </Button>
            </form>

            <div className="relative my-4 sm:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <div className="grid gap-2 sm:gap-3">
              <Button variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                Sign up with GitHub
              </Button>
              <Button variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                Sign up with Google
              </Button>
            </div>

            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}