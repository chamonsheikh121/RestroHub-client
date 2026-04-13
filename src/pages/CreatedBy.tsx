import { PublicNav, PublicFooter } from "./LandingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Laptop, Globe, Mail, ExternalLink } from "lucide-react";

export default function CreatedBy() {
  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 border border-border backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Meet The Builder</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Chamon Ali</span>
              <br />Full Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              We build systems. You grow business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              With expertise in modern tech stack and deep understanding of business needs, I create solutions that solve real problems. RestroHub is built using industry-leading technologies with a focus on performance, scalability, and user experience that drives measurable business results.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2" asChild>
                <a href="https://portfolio.chamonali.com" target="_blank" rel="noopener noreferrer">
                  <Laptop className="h-4 w-4" />
                  View Portfolio
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" gap="gap-2" asChild>
                <a href="https://upwork.com/freelancers/chamonali" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  Upwork Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" gap="gap-2" asChild>
                <a href="https://fiverr.com/chamonali" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                  Fiverr Profile
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/10 to-blue-600/10 blur-3xl rounded-full"></div>
            <img
              className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl border border-border w-full h-auto object-cover"
              alt="Chamon Ali - Full Stack Developer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJ3rsgdJJBvJ_DLwIgSXSatneqO7D_913WyqHAcYzmFP7oBM5rWj4CvC_Mwr4JoOG1BDaQ8lqeBxznkQGGPKxVpH1sEupjpQ_MBfpqpRDDNBqG-WiaEsoGf5AYxJJLaqiN143Gi85YqVcAztgM1-J-CHUNhuezySc3540ZuWBmqnwMc3bpsIKG4-xdjDzA71tE9hEsw8UYWos8G4WIBEgosmwBiQmMk1mtrfepIiTuV0YUMIn2HZ8nHtaerZf0FcpXsNY7b5P_6AH"
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-muted/50 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg">Modern stack for real-world problems</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Frontend Development</h3>
                <p className="text-sm text-muted-foreground mb-4">React, TypeScript, Tailwind CSS, Vue.js - Building responsive, performant user interfaces that your customers love.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">React 18</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">Tailwind</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Backend Development</h3>
                <p className="text-sm text-muted-foreground mb-4">Node.js, Python, Database Design - Scalable systems that handle growth without breaking down.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">APIs</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Deployment & DevOps</h3>
                <p className="text-sm text-muted-foreground mb-4">AWS, Docker, CI/CD - Reliable infrastructure that stays up so your business doesn't go down.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">Docker</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">AWS</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">CI/CD</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-2xl p-12 border border-indigo-200 dark:border-indigo-900/30">
            <h2 className="text-3xl font-bold mb-6">Philosophy</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Technology is a means, not an end.</span> The best systems are invisible - they work so well that users forget they're using software. RestroHub was built with this principle: powerful enough for enterprise needs, simple enough for any staff member.
              </p>
              <p>
                <span className="font-semibold text-foreground">Business first, tech second.</span> Every feature, every decision, every line of code should serve one purpose: help your restaurant grow. Whether it's reducing operational costs or increasing revenue per customer, functionality is always tied to real business outcomes.
              </p>
              <p>
                <span className="font-semibold text-foreground">Build to last.</span> Scalable architecture, clean code, comprehensive testing - RestroHub is built to grow with you from a single location to an enterprise chain without technical debt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a SaaS platform, business automation, or technical consultation - let's talk about how to turn your vision into reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 gap-2" asChild>
              <a href="mailto:chamon@example.com">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://upwork.com/freelancers/chamonali" target="_blank" rel="noopener noreferrer">
                Hire on Upwork
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
