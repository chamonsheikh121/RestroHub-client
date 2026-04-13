const Index = () => {
  return (
    <div className="w-full">
      {/* TopNavBar */}
      <nav className="sticky top-0 w-full z-50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-[0px_24px_48px_rgba(19,27,46,0.06)]">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-2xl font-black text-slate-900 dark:text-slate-50 tracking-tighter">
            RestroHub
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 pb-1 font-manrope tracking-tight font-semibold" href="#features">Features</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-indigo-600 font-manrope tracking-tight font-semibold transition-all duration-300" href="#pricing">Pricing</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-indigo-600 font-manrope tracking-tight font-semibold transition-all duration-300" href="#about">About Us</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:text-indigo-600 font-manrope tracking-tight font-semibold transition-all duration-300" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 text-slate-600 font-semibold hover:bg-slate-100 rounded-full transition-all duration-300 active:scale-95">Log In</button>
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all duration-300 active:scale-90">Start Free Trial</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-fixed rounded-full text-primary font-semibold text-sm mb-6">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              The Future of Dining is Here
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-on-background leading-[1.1] mb-8">
              All-in-One <span className="text-primary">Restaurant</span> Management System
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Streamline your kitchen, optimize your front-of-house, and grow your revenue with integrated POS, smart inventory, and real-time predictive analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="hero-gradient text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 transition-transform hover:-translate-y-1 active:scale-95">
                Start Free Trial
              </button>
              <button className="bg-surface-container-high text-on-surface px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-surface-container-highest active:scale-95 flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                View Demo
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-[0px_64px_96px_rgba(19,27,46,0.12)]">
              <img alt="Dashboard Preview" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABfVw0mFQ-4o-m-C5LTLmnOLpXqJApKCupcgyPMCqnUxuCH03YWD7P7LEbHIMzArPHt80zfk1KwYUo2968iJH2UPfReEhEBsaiXil0wHqChnXOHTkZkv5bXmwBWoQv0CZubllG28ZWdgRwuCJ894QcCn_opKUxFgnYQ22yEhpiH---ASh5rYOW4XieXEmVAY-94ihw5sVtA175UoStZi37Ycq4zeshfGQ4MBUuLA1SxcR3GcEpX5dRD7J1DqW0NoyE_mlYsG7wMYMH" />
              {/* Glassmorphic Overlay Pill */}
              <div className="absolute top-6 right-6 glass-card px-6 py-3 rounded-full flex items-center gap-3 border border-white/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="font-bold text-sm tracking-tight">Live Kitchen Syncing</span>
              </div>
            </div>
            {/* Asymmetric background shape */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-sm font-bold tracking-[0.2em] text-outline mb-12 uppercase">Empowering World-Class Kitchens</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold font-headline tracking-tighter">LUMIÈRE</div>
            <div className="text-2xl font-bold font-headline tracking-tighter">The Gilded Fork</div>
            <div className="text-2xl font-bold font-headline tracking-tighter">BISTRO 22</div>
            <div className="text-2xl font-bold font-headline tracking-tighter">URBAN HARVEST</div>
            <div className="text-2xl font-bold font-headline tracking-tighter">SALT & STONE</div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-6">Master Every Corner of Your <span className="text-primary">Empire</span></h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">From the first reservation to the final closing report, we provide the tools that turn data into delicious experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 shadow-sm border border-outline-variant/10 flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">point_of_sale</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Cloud-Native POS System</h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed">Fast, intuitive, and works offline. Handle complex orders, split checks, and table management with zero friction.</p>
              </div>
              <img alt="POS Feature" className="absolute -right-20 -bottom-10 w-2/3 rounded-xl opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkGr8kVazOcJNS6HbR3O3Q1Z0oJJ6fMLFwapl2Nz88DcZ2ULR63nEQM0l4ZQI049a0nnqyc-OLp_pgjhdkrRqsJ-LvMCU87jrRhf6QtaR38DbfBwZicHLDzQ2oaSf510ghd2qsR1c2yDfvvVoMdBaATO-x1qq2IPU69T-Boga4uNVpjRGuCmNQVpgYy3mZqBartly4Z-wyRUGZMOpZaRmB-oyij0701NxpcJceE3FqETBHE8gGQnBnxHz5Shb28l-VDcJgfd_ZMkK" />
            </div>
            {/* Small Feature */}
            <div className="md:col-span-4 bg-primary text-white rounded-xl p-10 shadow-xl flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl">insights</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Real-time Analytics</h3>
              <p className="text-primary-fixed/80 leading-relaxed mb-8">Monitor labor costs, food waste, and peak hour traffic from anywhere in the world.</p>
              <a className="mt-auto font-bold flex items-center gap-2 group" href="#">
                Explore Insights 
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            {/* Small Feature */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col items-start border border-outline-variant/20">
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl">inventory</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Smart Inventory</h3>
              <p className="text-on-surface-variant leading-relaxed">Automated reordering and waste tracking that keeps your margins healthy and your pantry full.</p>
            </div>
            {/* Large Feature */}
            <div className="md:col-span-8 bg-white rounded-xl p-10 flex flex-col md:flex-row items-center gap-10 border border-outline-variant/10">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Multi-Restaurant Support</h3>
                <p className="text-on-surface-variant leading-relaxed">Manage a single location or a global chain from one unified dashboard. Standardize menus and compare performance instantly.</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="h-24 bg-surface-container-low rounded-lg animate-pulse"></div>
                <div className="h-24 bg-surface-container rounded-lg"></div>
                <div className="h-24 bg-surface-container rounded-lg"></div>
                <div className="h-24 bg-surface-container-high rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-on-background text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">Implementation as Refined as Your Menu.</h2>
              <p className="text-slate-400 text-lg">We don't just provide software; we provide a foundation for growth.</p>
            </div>
            <div className="text-9xl font-black text-white/5 absolute -right-10 top-0 select-none">PROCESS</div>
          </div>
          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="relative group">
              <div className="text-8xl font-black text-primary/10 absolute -top-12 -left-6 group-hover:text-primary/20 transition-colors">01</div>
              <h3 className="text-2xl font-bold mb-6 pt-4 relative z-10">Setup & Import</h3>
              <p className="text-slate-400 leading-relaxed">Upload your current menu, inventory lists, and staff data. Our AI-assisted tool maps everything to our system in minutes.</p>
              <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-primary"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="text-8xl font-black text-primary/10 absolute -top-12 -left-6 group-hover:text-primary/20 transition-colors">02</div>
              <h3 className="text-2xl font-bold mb-6 pt-4 relative z-10">Manage & Flow</h3>
              <p className="text-slate-400 leading-relaxed">Launch your POS and kitchen displays. Staff training takes less than 30 minutes thanks to our familiar, intuitive interface.</p>
              <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="text-8xl font-black text-primary/10 absolute -top-12 -left-6 group-hover:text-primary/20 transition-colors">03</div>
              <h3 className="text-2xl font-bold mb-6 pt-4 relative z-10">Track & Grow</h3>
              <p className="text-slate-400 leading-relaxed">Use real-time data to adjust staffing, update prices, and optimize your supply chain for maximum profitability.</p>
              <div className="mt-8 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI Showcase */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                <div className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-primary">
                  <h4 className="text-xl font-bold mb-2">Predictive Ordering</h4>
                  <p className="text-on-surface-variant">Our algorithm predicts next week's demand based on weather, local events, and historical trends.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <h4 className="text-xl font-bold mb-2">Instant Table Mapping</h4>
                  <p className="text-on-surface-variant">A drag-and-drop floor plan designer that syncs status directly with your POS terminals.</p>
                </div>
                <div className="p-8 bg-surface-container-low rounded-xl">
                  <h4 className="text-xl font-bold mb-2">Staff Gamification</h4>
                  <p className="text-on-surface-variant">Turn upselling into a friendly competition with automated leaderboards and performance bonuses.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img alt="UI Map View" className="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY2v8LuWmUKvHedwgA5EMs1h6fBB3VaaPfAIbX0ZEvhVeB_YhPCjILSJ8dmlgye3rrdzsDlYf1vYEU_Med_6suV_1TXG0XmnWiZh0pG41v-UraBPR1-MIfM7RHKACyvdvnEPm-iYveDd_HVzbBYlKPER-PfrfMrtlLpE1MNMWE-4_6usnZNbetQpda9y-dFJ7J7H3Q4wf2DPnmArFVPIzzAUUchHQ4rCLKWqvrSvRnCFiCSw_iE0zQfecFSric5p7lQmt_i04EUXU7" />
              </div>
              {/* Secondary Floating UI */}
              <div className="absolute -bottom-10 -left-10 w-64 glass-card p-6 rounded-xl shadow-xl border border-white/40 hidden md:block">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-outline">DAILY REVENUE</span>
                  <span className="text-primary material-symbols-outlined">trending_up</span>
                </div>
                <div className="text-3xl font-black tracking-tight text-on-surface">$12,482.00</div>
                <div className="text-xs text-green-600 font-bold mt-2">+14% from last Tuesday</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black text-center mb-20 tracking-tight">The Critics are Raving.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-current">star</span>
                ))}
              </div>
              <p className="text-on-surface mb-8 italic leading-relaxed">"RestroHub transformed how we manage our operations. We cut costs and improved efficiency in just the first month."</p>
              <div className="flex items-center gap-4">
                <img alt="Chef Sarah" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDowAcFqV3EfzoDngSw9cCl1VMDOBdvcjysN3HF_FTTeBvXewwJuo0E5n-vwYisTJdKi9Sfp03CdP-rb5z_a-k9YFB7ScJCL6VdDn1bMW5hjYDtkMKjktIzGUqKf9W_G7SFubymLPz9HrpmAZ7CrwKAW8b18gIeYsFLvfS8hjGI9aUkPcfXFG-Jsom5YjowA3sp59eIi5-mHKMu9RvOTsIxq0vB61HU5GZW0ObCNkNXZgsOUweTrdVjG0ukQTie2XeG3ocUWGxcUx7C" />
                <div>
                  <div className="font-bold">Chef Sarah Jenkins</div>
                  <div className="text-xs text-outline font-medium">Owner, Lumière</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-current">star</span>
                ))}
              </div>
              <p className="text-on-surface mb-8 italic leading-relaxed">"Our staff training time dropped from 3 days to just 1 afternoon. The POS interface is so intuitive even our newest servers master it in minutes."</p>
              <div className="flex items-center gap-4">
                <img alt="Marcus T." className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeZ21ij9AHaCZlCOX_35PXdsVaBn-kDNwfbHy-fMrBjHFUFXN5_F2804yNevdn0GNrE7jJ9n7tq5uUwNFKbz1UD9juryqUOqdeOKrDTHBeHM-WP87d-FGQV_2f-2GPbEX3fU7zB5PNiNm3tKEbLS3qs-9QTuRadauz3I2BSGF4Ob7qznLoGOJ42T1dKPhN0z9U1JIghQyjZhqQJ40JZI4ZLwxGE9upEm7B93sZUPgg708K98imLcjcxKdyoQF7vogUSnVdZHUWSyX7" />
                <div>
                  <div className="font-bold">Marcus Thorne</div>
                  <div className="text-xs text-outline font-medium">Ops Manager, Urban Harvest</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-current">star</span>
                ))}
              </div>
              <p className="text-on-surface mb-8 italic leading-relaxed">"Finally, a system that handles multi-location scaling properly. We now have a single source of truth for all 12 of our bistros."</p>
              <div className="flex items-center gap-4">
                <img alt="Julian R." className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2xXRLe7UwXJMuyV2CFOZuUjLVhjUKFuxrJ9PVt1bwC8855wMyk3tze7octhcY59KFkkfGWkb2C0c7i7PWwEIlcrA08BKblokxnLVSaW2gg-gzgNs6-meNlvixk2H79DF10CKQRunZlLBjxhOxLwW_9DB8McTN9IxzYWqCWnb6ag5_l8kVVtBObBVMhHY5RSZ0QUeTYIZDthO45Tv5wkAjIIs-Y8N80_7jECK52RTNyYAiOOzIxMwbDUf-pwrfV9LVeC8kClPY2nlW" />
                <div>
                  <div className="font-bold">Julian Rossi</div>
                  <div className="text-xs text-outline font-medium">CEO, Rossi Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="hero-gradient rounded-xl p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-5xl font-black tracking-tight mb-8">Start managing your restaurant today</h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">Join thousands of restaurants that have transformed their operations with RestroHub.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-primary px-10 py-5 rounded-full font-extrabold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl">
                  Get Started Free
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-extrabold text-lg transition-transform hover:scale-105 active:scale-95">
                  Book a Demo
                </button>
              </div>
              <p className="mt-8 text-sm text-white/60 font-medium">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
            {/* Abstract floating circle */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 w-full pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 max-w-7xl mx-auto px-8">
          <div className="col-span-2">
            <div className="text-xl font-black text-slate-900 dark:text-white mb-4">RestroHub</div>
            <p className="text-slate-500 dark:text-slate-400 font-inter text-sm leading-relaxed mb-8 max-w-xs">
              Complete restaurant management software designed to help restaurant owners and managers succeed.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors duration-300" href="#">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-colors duration-300" href="#">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Product</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Features</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">POS Terminal</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Analytics</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Company</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">About Us</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Careers</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Support</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Help Center</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Community</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Status</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Legal</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Privacy Policy</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Terms of Service</a></li>
              <li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 transition-transform duration-200 hover:translate-x-1 block font-inter text-sm leading-relaxed" href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 dark:text-slate-400 font-inter text-sm leading-relaxed">© 2026 RestroHub. All rights reserved.</div>
          <div className="flex gap-8">
            <span className="text-indigo-600 dark:text-indigo-400 font-inter text-sm leading-relaxed">English (US)</span>
            <span className="text-slate-500 font-inter text-sm leading-relaxed">USD ($)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
