import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChefHat,
  ShoppingCart,
  BarChart3,
  Users,
  Grid3X3,
  UtensilsCrossed,
  ArrowRight,
  Star,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: ShoppingCart,
    title: "Fast POS System",
    desc: "Reduce checkout time by 60%. Process orders 5x faster with intuitive interface. Works seamlessly online or offline.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Business Intelligence",
    desc: "See exactly what's profitable per dish. Track revenue trends, identify top performers, and make data-driven decisions instantly.",
  },
  {
    icon: Users,
    title: "Smart Staff Management",
    desc: "Automate scheduling, track performance, and reduce labor costs. See who's working and their productivity metrics in real-time.",
  },
  {
    icon: Grid3X3,
    title: "Table & Reservations",
    desc: "Visual table management with real-time status. Maximize table turnover and never lose a reservation again.",
  },
  {
    icon: UtensilsCrossed,
    title: "Inventory Control",
    desc: "Stop food waste. Track inventory in real-time, set alerts for low stock, and automate reordering to maximize margins.",
  },
  {
    icon: Star,
    title: "Multi-Location Unified Control",
    desc: "Manage 1 or 100 locations from one dashboard. Compare performance, sync menus, and maintain consistency everywhere.",
  },
];

const testimonials = [
  {
    name: "Sarah Kumar",
    role: "Owner, The Gilded Fork",
    content: "Eliminated chaos from managing 3 separate systems. We cut operating costs by 15%, improved table turnover by 25%, and staff training time dropped from 3 days to 2 hours.",
  },
  {
    name: "Michael Chen",
    role: "General Manager, Urban Eats Group",
    content: "Managing 12 locations was impossible. Now I get real-time visibility across all properties. Average check size increased 18% through better menu engineering with their analytics.",
  },
  {
    name: "Priya Patel",
    role: "Restaurant Owner, Spice Route",
    content: "Reduced food waste by 30% with better inventory tracking. Our POS is 3x faster which means happier customers and more covers during peak hours. ROI was achieved in 6 months.",
  },
];

function PublicNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">RestroHub</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/created-by" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Created By
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700" asChild>
            <Link to="/signup">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/features" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Features
            </Link>
            <Link to="/pricing" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Pricing
            </Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              About Us
            </Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Contact
            </Link>
            <Link to="/created-by" className="block text-sm text-muted-foreground hover:text-foreground py-2">
              Created By
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-indigo-600" asChild>
                <Link to="/signup">Start Free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function PublicFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-foreground">RestroHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete restaurant management software for every business size.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><a href="#features" className="hover:text-foreground transition-colors">Features</a></p>
              <p><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">POS Terminal</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">Analytics</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><a href="#about" className="hover:text-foreground transition-colors">About Us</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">Careers</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">Blog</a></p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></p>
              <p><a href="#" className="hover:text-foreground transition-colors">Security</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 RestroHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { PublicNav, PublicFooter };

export default function LandingPage() {
  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-6">
            <Star className="h-4 w-4" />
            The Future of Dining is Here
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Stop Juggling Multiple Systems.<br/><span className="text-indigo-600">Run Your Restaurant Smarter.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Restaurants using RestroHub reduce costs by 15%, increase covers by 25%, and cut food waste by 30%. One integrated platform. Real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold tracking-widest text-muted-foreground uppercase mb-8">
            Trusted by 1000+ Growing Restaurants - Processing 50M+ Orders Annually
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-lg font-bold">The Gilded Fork</div>
            <div className="text-lg font-bold">Urban Eats Group</div>
            <div className="text-lg font-bold">Spice Route</div>
            <div className="text-lg font-bold">Sunrise Café</div>
            <div className="text-lg font-bold">Coast to Coast Bistro</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Master Every Corner of Your <span className="text-indigo-600">Empire</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From the first reservation to the final closing report, we provide the tools that turn data into delicious experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Up and Running in Minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple setup, powerful results. Start managing your restaurant today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Quick Setup",
                desc: "Connect your POS hardware and import your menu, staff, and inventory data. Takes less than an hour.",
              },
              {
                step: "02",
                title: "Train Your Team",
                desc: "Your staff will love the intuitive interface. Most restaurants complete training in a single shift.",
              },
              {
                step: "03",
                title: "Grow Your Business",
                desc: "Monitor real-time sales, manage operations efficiently, and make data-driven decisions.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold text-indigo-600/30">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Loved by Restaurant Owners
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-indigo-600 text-indigo-600" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of restaurants that have unlocked their potential with RestroHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
