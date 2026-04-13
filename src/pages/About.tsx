import { PublicNav, PublicFooter } from "./LandingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Eye, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Marcus Sterling",
    role: "CEO & Founder",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyLVEZu27YZL3C_o9RRDeUYmhey4nDejcO7K9SNUE-QOXqYqI_cmtZG40IpYk1czUBx4BldY_gXGOH5NBO9THVW25WA6Zm35RFh1KOVBoWDglNdG23Hu_3dAbI272mBYo26Ll4KukY-73qId3JA7nNt_COhfXzRZUMPaUPVfulUG29ozBEunVE9UDTcqKZSt9qt9gtMWORBq4767CJZj06kcE90Yy1oDX6oHOK8-_SciAahai8khfA2m7YN3s_Yh0BYUCW6WtoctVV",
  },
  {
    name: "Dr. Elena Vance",
    role: "CTO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB33-63b0fIcEUDyDbvlVfi16ktz83ufvHE0e80nQgyuBQWJrFW6LG79goilrt0BS2t7_5Ve8mnAINI4OHtimBbxoLqh4K7mAcuD7l5HJTBQ3jRIa3DpOMeBsN8fwF9d5cdUPmtY36t41Odq5uyAbhcjGthfVse0a37hUIFRCPWE_8rIuqjCUShM4nbkR9c9o_XIOWkzoWnfaKWtoEm8zOEAFxFOIAje4uKbnI7kN0phE87Bb1fv_Y0AThxKHD18g4Zi38SwkccBhrU",
  },
  {
    name: "Julian Thorne",
    role: "Lead Designer",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnKing1obXBT7DGgvfG81Ifm026WB6psWqxoKzZz1cdtWA3yqLW1LlvYiMjEtxnxfZ34qhPjKSa3oz6rxNtYj-DcmsTDxZKCpPFPK7ZXzkVYbucTMSuTcWt9gwbvJUnBJJt3qb4dIhXFsW7USgKGp_GDMUda9zL1qz8F9F-yzpUPJ3sWSXvldH8f8QkMucaAf2JgrxjOYtuewan5_He-2n0-ICxP7vanR76ebfZRgQiOxwcbRr9bO1krQAbwmekqLJRHQd0QWhVDz",
  },
  {
    name: "Sarah Chen",
    role: "Head of Customer Success",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvLh7iT-Mphia60aWkxztaAi2Z1M09cuIC2VDUSIMgLG34Yd1LyFsNlKWe-fyU1VBSG_Tji5iOTgc_19WusQzJcQa-R64yjNKjrB1Vv6Q0Qu29287DXArRow7so0teX2btaocCJ87KPhJ4EGbQ9VNEmGXk3R3pADDo1MN5ffynRPIhPStcX31jbqCUwFH_LglyFLw_fXVB3_P7GHvZQVGlBTW6q1g5Okc2xoJZlVVj8gGFgy0Vf56yHU98UvSVvbyl7cmZFBKVW-gj",
  },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description: "RestroHub was founded by restaurant owners who understood the pain of managing multiple systems. We set out to build better restaurant management software.",
    color: "from-indigo-600",
  },
  {
    year: "2020",
    title: "Rapid Growth",
    description: "We launched our full platform suite and were helping over 500 restaurants streamline their operations with real-time data and integrated management.",
    color: "from-blue-600",
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "RestroHub now powers over 1,000 restaurants worldwide, with advanced analytics, AI-driven insights, and integrations that make restaurant management simpler.",
    color: "from-indigo-500",
  },
];

export default function About() {
  return (
    <div className="w-full">
      <PublicNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 border border-border backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Our Narrative</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              The story behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">RestroHub.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Built by restaurant owners for restaurant owners. We created RestroHub to simplify operations and help restaurants grow with confidence.
            </p>
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-600">1000+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Active Restaurants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600">50M+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Transactions Processed</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/10 to-blue-600/10 blur-3xl rounded-full"></div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl border border-border">
              <img
                className="w-full h-full object-cover"
                alt="Professional chef in modern kitchen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJ3rsgdJJBvJ_DLwIgSXSatneqO7D_913WyqHAcYzmFP7oBM5rWj4CvC_Mwr4JoOG1BDaQ8lqeBxznkQGGPKxVpH1sEupjpQ_MBfpqpRDDNBqG-WiaEsoGf5AYxJJLaqiN143Gi85YqVcAztgM1-J-CHUNhuezySc3540ZuWBmqnwMc3bpsIKG4-xdjDzA71tE9hEsw8UYWos8G4WIBEgosmwBiQmMk1mtrfepIiTuV0YUMIn2HZ8nHtaerZf0FcpXsNY7b5P_6AH"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Layout */}
      <section className="py-24 bg-muted/50 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Mission Card */}
            <Card className="md:col-span-8 bg-white dark:bg-slate-900 border-border">
              <CardContent className="p-12 flex flex-col justify-between h-full">
                <div>
                  <Rocket className="h-12 w-12 text-indigo-600 mb-6" />
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    To empower restaurateurs through data-driven architectural tools that transform chaotic back-of-house operations into streamlined, profitable symphonies of culinary excellence.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="md:col-span-4 bg-gradient-to-br from-indigo-600 to-blue-600 text-white border-0">
              <CardContent className="p-12 flex flex-col justify-between h-full">
                <div>
                  <Eye className="h-12 w-12 text-blue-200 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="opacity-90 leading-relaxed text-lg">
                    Creating a world where every chef has the digital infrastructure to focus on their art, while our AI handles the architecture of the business.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg mt-8">
                  <p className="text-sm font-medium italic">"Artistry meets efficiency."</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-4">The Minds Behind the Menu</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the designers, engineers, and culinary experts building the future of hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative mb-6 rounded-xl overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-500">
                  <img className="w-full h-full object-cover" alt={member.name} src={member.image} />
                </div>
                <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                <p className="text-indigo-600 font-medium text-sm tracking-widest uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-slate-900 dark:bg-slate-950 text-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-bold tracking-tight mb-8">The Journey.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                From a small kitchen in Brooklyn to global recognition. Every milestone was a step toward perfecting the digital maître d'.
              </p>
            </div>

            <div className="lg:w-2/3 space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-12 border-l border-slate-700">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} to-blue-600`}></div>
                  <span className="text-6xl font-bold text-white/5 absolute -top-8 left-16 select-none">
                    {item.year}
                  </span>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-400 max-w-xl leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to simplify your restaurant operations?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of restaurants using RestroHub to run their operations more efficiently.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 font-bold h-14 text-base">
              <Link to="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
