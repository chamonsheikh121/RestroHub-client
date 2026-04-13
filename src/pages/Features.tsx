import { PublicNav, PublicFooter } from "./LandingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingCart, BarChart3, Users, Grid3X3, UtensilsCrossed,
  Building2, Zap, Shield, ArrowRight, CheckCircle2, TrendingUp, Lock, Clock, Map, Globe, 
} from "lucide-react";

export default function Features() {
  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-24 pb-32 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-6">
            Comprehensive Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Everything <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Restaurants Actually Need</span> - In One Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop switching between systems. RestroHub unifies POS, inventory, analytics, and staff management - giving you real-time control and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Explore Modules
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/60 dark:bg-slate-900/60 rounded-full border border-border backdrop-blur-sm">
              <div className="flex -space-x-2">
                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVvi4ELvSmV0JPiKAWf0ScQRAQ8lNbBSpHm1rCJLqA6vnGqjiJuozumlM1ARRLST7RUcM_cJBPy0_gMaO7n9LB29cqnujBa7-Mz-ufUuB2tb53iuezUWY9lsUNEHNSyfTOUlrb6d-DtLRgHy0a7x-uUa8yAdY7udB_7CKxRZg1T4sxH2QKDyxVXJHE7md9O1_43HS2jwfhC-jABkThHZ5pX4OGtRvPrtG6JawlQdvICEEiWK9a8_-nA3rpVJZ0_105bxEfMB0IEsca" />
                <img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy1yvDbfaDAy48Ehq-IBQgrwRJQI-Uv0C2xN09XYZOzj3Q9cd6ZmFI_ggH8UalC9EuAj_PWuK2xhv4aU1sEdHldezjEaBCWKXiKu1Ac3b3KCWMomEKCQxlat-eHWGsQjnBlz6jCV0S1wGR-7tMQz3fjDv3ro5ckOZD_uUvtLodS3LVxU1bdxiM0kjKr31Hi0-XUbuVxtR2IsTj_V3ddEOnTi4EOmlfdZLDfdAlpiscsVMHyWoVI-M5dUOnvlMq4P8VqAR8oGnlsLm7" />
              </div>
              <span className="text-sm font-semibold text-foreground">+1000 Restaurants Growing</span>
            </div>
          </div>
        </div>
      </header>

      {/* POS System Feature */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
                <img alt="POS UI" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByXcukbZK0gQVvWK8msIhwa3IZQO2nlee4qDBvdXJ8JKceTd6SpRUnRPxLF59y9BG-sFE6krIeWRL5vmFN4zzXnsFaTz-0ccUck0LvVlng-NP3xUnGpFfq5fzs2HBnAFJlYuN1oEFa2jvQyTgKhfOeqrMfWg2HRVLGRd20Cjg8kzI9ROUZXYWMa0DT0qD4CJfE-Dy7ghPmEwcdTOrK5essRmVp3oglD-GkLtrVXws65g5R79v8FO3cEaduaaH3QJOZrrOIXrQRJFS3" />
                <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold">Order #2402 - Sent to Kitchen</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ShoppingCart className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-4xl font-bold mb-6">POS System That Actually Works</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Reduce checkout time by 60%. Your staff processes orders 5x faster with zero friction. Customers pay quicker, you get data instantly, tables turn faster. That's how you increase covers and revenue.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  Visual Table Management & Layout
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  Contactless Payments & QR Integration
                </li>
                <li className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  Offline Mode for Uninterrupted Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Management Feature */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <UtensilsCrossed className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-4xl font-bold mb-6">Smart Menu Management</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Control your margins. See exactly which dishes are profitable. Update menus across all locations instantly. Track ingredient costs, reduce waste, and use data to engineer higher-margin items. Restaurants increase check average by 15% on average.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">Instant Sync</h4>
                    <p className="text-sm text-muted-foreground">Push updates to tablets and websites instantly.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">Cost Analysis</h4>
                    <p className="text-sm text-muted-foreground">Real-time margin calculation per dish.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
                <img alt="Menu Management" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN4RIgKAWZak6GT2ulrKxx3JEIBiy-Vw1b4jm9ek73wd_4WnP6eM5FjYMr9Eb7Ckt9KMrwVby0hh_kJSYL4bFLe8sDzm6wuq3BfMNcStG-mo9r4AmAyhszBs6lG-00kIynaNQsVdyMXKZ-0UQtoe6zaMxttMe5wz1iGkJT-8OzHg9P17cSQMVqlkL7P_wY2Z6UYFgRo50iu4qENZv0hml7AvuY_-OuMTwZevaEy8W0gtgXEVDavCdMNdiVD9ybgT7cQbeISdbrIswZ" />
                <div className="absolute bottom-6 -left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-lg shadow-xl border border-border max-w-xs">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-sm">Inventory Check</span>
                    <span className="text-xs bg-red-100 text-red-700 dark:bg-red-900/30 px-2 py-0.5 rounded">Low Stock</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-1/5"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">Truffle Oil: 200ml remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section - Bento Grid */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <BarChart3 className="h-12 w-12 text-indigo-600 mb-4 mx-auto" />
            <h2 className="text-4xl font-bold mb-6">Analytics That Drive Growth</h2>
            <p className="text-lg text-muted-foreground">
              Transform every transaction into a strategic insight. Monitor peak hours, top-selling staff, and waste reduction opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
            {/* Revenue Trends - Large Card */}
            <Card className="md:col-span-2 md:row-span-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">Revenue Trends</h3>
                <div className="h-48 flex items-end gap-3 mb-6">
                  {[75, 50, 85, 65, 100, 75].map((height, i) => (
                    <div key={i} className="flex-1 bg-indigo-200 dark:bg-indigo-900/50 rounded-t-lg hover:bg-indigo-300 transition-all" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">$124,500</p>
                    <p className="text-sm text-green-600 font-bold">+12.5% from last month</p>
                  </div>
                  <Button variant="outline" size="sm">Full Report</Button>
                </div>
              </CardContent>
            </Card>

            {/* Inventory Insights */}
            <Card className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white md:row-span-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Inventory Insights</h3>
                <p className="text-sm opacity-80 mb-6">Real-time alerts for critical supplies.</p>
                <div className="space-y-3">
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-between">
                    <span className="text-sm font-medium">Fresh Salmon</span>
                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">Normal</span>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg flex items-center justify-between">
                    <span className="text-sm font-medium">Wagyu Beef</span>
                    <span className="text-xs font-bold bg-red-500 px-2 py-1 rounded">Reorder</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staff Efficiency */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Staff Efficiency</h3>
                <p className="text-sm text-muted-foreground mb-4">Top performer this week</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img alt="Staff" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMIcycvMSp-R8ose6-1mTs5tWnYbBSiA7NzCeA10kZaS3IM6bgcQaz_EuUzJPeKiqTP0GIPU7UPJNABrAfSIHguw71Cigdr_w5UV8O8MhDbvGvfpZ68yip0n2i669vVj7Y5bQ6ub88IAd1U0TsgJgeowQeFfKT3PBXhBW5Y6qLEUZKgR1kZp1Y4pYZmwV1sHsQ_BVfCe2xcIcBnND45tYaV3PqdGaOrck3AEbmGO8Q3HLqn_MRrzd0IM31rO4vTWGHsK_UTUwOEV_" />
                    <div>
                      <p className="font-bold text-sm">Elena Rodriguez</p>
                      <p className="text-xs text-muted-foreground">98% Positive Feedback</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Reach */}
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Global Reach</h3>
                <p className="text-sm text-muted-foreground mb-4">Track performance across multiple regions and timezones.</p>
                <div className="flex gap-3">
                  <div className="px-4 py-2 bg-muted rounded-full text-xs font-bold">NYC Central</div>
                  <div className="px-4 py-2 bg-muted rounded-full text-xs font-bold">London West</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff & Shifts */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h2 className="text-4xl font-bold mb-6">Staff & Permission Logic</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Control access with surgical precision. Create roles for servers, chefs, and managers with customized permissions that match your restaurant's unique hierarchy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lock className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Granular Access</h4>
                    <p className="text-sm text-muted-foreground">Lock sensitive financial data while giving floor managers full operational control.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Auto-Scheduling</h4>
                    <p className="text-sm text-muted-foreground">Let AI suggest shift rotations based on historical sales volume and peak traffic.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-6">Shift Scheduler</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <div key={i} className="h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 rounded flex justify-between items-center">
                      <span className="text-xs font-bold">Lunch Rush (11:00 - 15:00)</span>
                      <span className="text-xs text-indigo-600 font-bold">4 Staff</span>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded flex justify-between items-center">
                      <span className="text-xs font-bold">Dinner Service (17:00 - 23:00)</span>
                      <span className="text-xs text-blue-600 font-bold">8 Staff</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Location */}
      <section className="py-24 bg-slate-900 text-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Unified Command for Chain Enterprises</h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                Manage 5 or 500 locations from a single bird's-eye dashboard. Standardize menus across regions or tailor them to local tastes while maintaining global brand integrity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold">Centralized Franchising Tools</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* <CloudSync className="h-5 w-5 text-blue-400" /> */}
                  <span className="font-semibold">Region-Specific Tax & Compliance</span>
                </div>
              </div>
              <Button className="mt-8 bg-blue-600 hover:bg-blue-700">
                Contact Enterprise Sales
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img alt="Restaurant Interior" className="w-full h-auto grayscale opacity-80 hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RYE_ZjGEFn8ARqQ-2EbKLUB0GRgTfKiKAvITEeBFwAneCaoUagVVc0EymWIprqS5ZUd4hD0eS_qgQ54kUIVYyaxYeNYYJfpEQ1MVo4hMsrhWdHiwqJAvhRHjZnWki4q7RSFKGf6DGJp7H1ydUjeAi1X6N__AucwxW49RIpmnG66LUL9yoGG9CHyIfxluQgAT8TOgYDO9ARPM29hdsS4LEU5qsH_R_l94UmEl7UaJyh2y2FgE87RdJZwer5xM8oVRtC4MNCWMUdeo" />
              <div className="grid grid-cols-2 gap-3 p-4 bg-black/50">
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-xs opacity-60">Avg. Revenue / Location</p>
                  <p className="text-lg font-bold">$12k / day</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-xs opacity-60">System Health</p>
                  <p className="text-lg font-bold text-green-400">99.9% Up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Architect Your Success?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of world-class restaurants leveraging our platform to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
