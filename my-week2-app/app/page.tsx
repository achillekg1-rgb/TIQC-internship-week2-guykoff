import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Gauge } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 md:pt-48 md:pb-32">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 text-xs sm:text-sm">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                <span className="font-medium">Ship 10x faster</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Build the web,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                faster
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Ship products with confidence. Modern tools designed for developers who demand speed, reliability, and
              scale without complexity.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center pt-6 sm:pt-8">
              <Link href="/auth/signup">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative w-full py-16 sm:py-24 md:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Everything you need to ship</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features out of the box, designed to help you build better products
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Optimized performance out of the box. Deploy globally in milliseconds with edge computing at the
                    core.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Security First</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Enterprise-grade security with zero config. SSL certificates, DDoS protection, and more included.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-primary/50 hover:shadow-lg transition-all sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Scale Infinitely</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Auto-scaling infrastructure that grows with your business. Pay only for what you use, always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">99.99%</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">200+</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">10M+</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Deployments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">24/7</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Ready to ship faster?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Join thousands of developers building the next generation of web applications.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center pt-6 sm:pt-8">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-6 sm:gap-8 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                B
              </div>
              BuildHub
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">© 2025 BuildHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
