import { PublicNav, PublicFooter } from "./LandingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, HelpCircle, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    restaurantName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6">
            Connect with us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            We're here to help you grow.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about RestroHub? Our support team is here to help you succeed. Get in touch with us today.
          </p>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <Card className="lg:col-span-7 bg-white dark:bg-slate-900 border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-muted border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600/40 transition-all outline-none"
                    placeholder="Chef Auguste"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-muted border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600/40 transition-all outline-none"
                    placeholder="auguste@kitchen.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Phone Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-muted border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600/40 transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Restaurant Name</label>
                  <input
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    className="w-full bg-muted border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-600/40 transition-all outline-none"
                    placeholder="The Grand Palace"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-muted border-0 rounded-lg px-4 py-4 focus:ring-2 focus:ring-indigo-600/40 transition-all outline-none"
                    placeholder="Tell us about your kitchen's needs..."
                    rows={4}
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-6 text-base font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/20">
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Info Card */}
            <Card className="bg-white dark:bg-slate-900 border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email us</p>
                      <p className="text-lg font-semibold">hello@culinaryarchitect.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Call us</p>
                      <p className="text-lg font-semibold">+1 (800) CHEF-FIX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Visit us</p>
                      <p className="text-lg font-semibold leading-snug">
                        245 Gastronomy Way,
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="h-64 rounded-xl overflow-hidden relative group">
              <img
                alt="San Francisco map"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQybDDfpl-BFUfGOKC1UXmnfkZxOkCfWUjyuqr-9w0qKehqG6U1M8LquK6BmJy5EF1Rfv1rJC2e8vH_lnZvWm1h809aszEJp2D4OeTZL8_njLeP-21LYd-NJx8RLt_VLWOcNYXXfYTo-s6Hw8Ui8eorridQGBDJdlcSHV18XQe948a5L8WXNIFHUPDIw2HsvlN0ltL9bbIVWXzAlZIUi0Vpnlswzd88A7DHZWiVSymRI6_0TInzBGnTcg6SOJn7GRa4temAyoIsjyS"
              />
              <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-indigo-600 rounded-full animate-pulse flex items-center justify-center shadow-xl border-2 border-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="#help">
                <div className="p-6 bg-muted rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 transition-all group cursor-pointer">
                  <HelpCircle className="h-6 w-6 text-indigo-600 mb-3" />
                  <p className="font-bold text-foreground">Help Center</p>
                  <p className="text-xs text-muted-foreground">Browse guides</p>
                </div>
              </Link>
              <Link to="#faq">
                <div className="p-6 bg-muted rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 transition-all group cursor-pointer">
                  <MessageSquare className="h-6 w-6 text-indigo-600 mb-3" />
                  <p className="font-bold text-foreground">FAQ</p>
                  <p className="text-xs text-muted-foreground">Quick answers</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Support Floating Badge */}
      <div className="fixed bottom-10 right-10 z-40 hidden md:block">
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl border border-border">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
          </span>
          <p className="text-sm font-bold tracking-tight">Live Support Online</p>
        </div>
      </div>

      <PublicFooter />
    </div>
  );
}
