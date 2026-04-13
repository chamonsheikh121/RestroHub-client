import { Link } from "react-router-dom";
import { PublicNav, PublicFooter } from "./LandingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "For independent restaurants looking to scale. Get core tools to optimize operations.",
    features: [
      { name: "POS System (Unlimited Orders)", included: true },
      { name: "Real-Time Inventory", included: true },
      { name: "Staff Management", included: true },
      { name: "Basic Analytics", included: true },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "99",
    description: "For growing restaurant groups. Full suite for multi-location operations with advanced insights.",
    features: [
      { name: "Advanced Analytics & Profitability Reports", included: true },
      { name: "Multi-Location Management (Unlimited)", included: true },
      { name: "Smart Staff Scheduling & Performance", included: true },
      { name: "Priority Support + Training", included: true },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large chains and sophisticated operations. Complete customization and dedicated support.",
    features: [
      { name: "White-label Solution (Your Branding)", included: true },
      { name: "Custom Integrations & API Access", included: true },
      { name: "Dedicated Account Manager + 24/7 Support", included: true },
      { name: "Custom Reports & Training Program", included: true },
    ],
    popular: false,
  },
];

const comparisonFeatures = [
  {
    name: "Real-time Inventory Tracking",
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Number of Locations",
    basic: "1",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    name: "Predictive Ordering AI",
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom White-labeling",
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: "Support Level",
    basic: "Ticket-based",
    pro: "Priority Chat",
    enterprise: "24/7 Phone + Manager",
  },
];

const faqs = [
  {
    question: "How does the 14-day trial work?",
    answer: "You get full access to the Pro Plan features for 14 days. No credit card is required to start. We'll notify you when the trial is ending so you can choose a plan.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade or downgrade your subscription at any time from your dashboard. Plan changes are prorated immediately.",
  },
  {
    question: "How long does setup take?",
    answer: "Most restaurants are fully integrated within 48 hours. Our automated CSV importing and POS syncing make the architecture transition seamless.",
  },
  {
    question: "Is my data secure?",
    answer: "We use bank-grade AES-256 encryption for all data storage. Your financial records and proprietary recipes are isolated and protected by multi-factor authentication.",
  },
];

export default function Pricing() {
  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-bl from-blue-400 to-transparent rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-6">
            Investment Tiers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Pricing for every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">restaurant size.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing with all the features you need to run your restaurant efficiently. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pb-32 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-10 flex flex-col h-full transition-all duration-500 ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-600 to-blue-600 text-white shadow-2xl shadow-indigo-500/30 md:-translate-y-4 border border-white/10"
                  : "bg-white dark:bg-slate-900 text-foreground shadow-sm border border-border hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Recommended
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? "opacity-80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-bold">${plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className={plan.popular ? "opacity-80" : "text-muted-foreground"}>/mo</span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "text-blue-200" : "text-indigo-600"}`} />
                    ) : (
                      <X className={`h-5 w-5 flex-shrink-0 ${plan.popular ? "opacity-40" : "opacity-30"}`} />
                    )}
                    <span className={feature.included ? "" : plan.popular ? "opacity-60" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full py-6 text-base font-bold rounded-full ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-slate-50"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                <Link to={plan.price === "Custom" ? "/contact" : "/registration"}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-8 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Comparison</h2>
            <p className="text-muted-foreground">Deep-dive into the architectural details of every plan.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold">Features</th>
                  <th className="text-center p-4 font-bold">Basic</th>
                  <th className="text-center p-4 font-bold bg-indigo-50 dark:bg-indigo-900/20">Pro</th>
                  <th className="text-center p-4 font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td className="p-4 text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 opacity-30 mx-auto" />
                        )
                      ) : (
                        feature.basic
                      )}
                    </td>
                    <td className="p-4 text-center bg-indigo-50 dark:bg-indigo-900/20">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 opacity-30 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-indigo-600">{feature.pro}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 opacity-30 mx-auto" />
                        )
                      ) : (
                        feature.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Everything you need to know about getting started with RestroHub. Can't find the answer?{" "}
                <Link to="/contact" className="text-indigo-600 underline underline-offset-4 hover:text-indigo-700">
                  Talk to us.
                </Link>
              </p>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Chef using digital tablet"
                  className="w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCULTyPumETyf2fAlc38F6N-5TQ1HMELmOIbpYV69OYdOv76LogZT5u_6uSMRAxOJ3WTt2l4kXAr8w7QNKY9r1bMlKpo1z4AEsAfH9husck7H2UbZiqlEBVm0kV_ILxmqJDoY6206hFhFsunI4bgaEzkW1xncyLgVxleIJOy-SRPa7fTgDXKmD9Y8wt5p_Ox5PIgC1LGBI_0Bk8E2OMji81FKXqFqqCbj_78_TIOgSP5-ep5pxae8R5SEjDa37cqmpV4GwKWFJnoCI6"
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-3">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-12 md:p-24 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to design a better restaurant?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-50">
                <Link to={'registration'}>Start Free Trial</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
              >
                <Link to={'login'}>Book a Personalized Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
