"use client";

import { useState, useEffect } from "react";
import { getBlogs, getFaqs } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, BrainCircuit, Cpu, ChevronDown, Factory, Plane, Tractor, Stethoscope, Layers, ThermometerSun, Zap, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    getBlogs().then((res: any) => {
      const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
      setBlogs(data.slice(0, 3)); // Only show top 3 on home page
    }).catch(() => setBlogs([]));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background relative selection:bg-accent/30">
      <div className="absolute inset-0 bg-noise opacity-50 z-0 pointer-events-none"></div>
      
      {/* 1. The Hook (Massive Hero) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-24 md:pt-32 md:pb-48 overflow-hidden border-b border-structural z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent rounded-[100%] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-20">
          <motion.div initial="hidden" animate="show" variants={FADE_UP}>
            <div className="inline-flex items-center mb-8 px-4 py-1.5 rounded-full border border-structural bg-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-muted">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Next-Gen FEA & Meshing Services
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[7rem] font-black mb-6 md:mb-8 tracking-tighter leading-[0.9] text-foreground">
              Don&apos;t Guess. <br/>
              <span className="text-accent opacity-90">Simulate.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto font-medium leading-tight tracking-tight">
              We provide Tier-1 automotive and aerospace OEMs with flawless finite element analysis to eliminate catastrophic physical failures.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-30">
              <Link href="/contact" className="group w-full sm:w-auto px-8 py-4 bg-foreground text-background font-bold text-sm tracking-wide rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl flex items-center justify-center">
                Start a Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="group w-full sm:w-auto px-8 py-4 bg-card border border-structural text-foreground font-bold text-sm tracking-wide rounded-full hover:bg-muted/10 transition-colors flex items-center justify-center">
                Explore Capabilities
              </Link>
            </div>
            <div className="mt-4 flex justify-center text-[10px] text-muted font-semibold uppercase tracking-widest opacity-70 relative z-30">
              Strict NDA Compliance • Quotes in 2Hrs
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard/Image Reveal */}
      <section className="relative -mt-40 pb-24 z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] overflow-hidden border border-structural shadow-2xl glass p-2 md:p-4 bg-white/40 dark:bg-black/40"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-structural bg-[#050505]">
              <Image 
                src="/saas_dashboard.png" 
                alt="Vortex Precision Dashboard"
                fill
                className="object-cover opacity-80"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="py-12 bg-card/30 border-b border-structural z-10 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted mb-8">Trusted by Engineering Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-xl font-black tracking-tighter">AEROSPACE<span className="text-accent">X</span></span>
            <span className="text-xl font-bold font-serif italic">GlobalMotors</span>
            <span className="text-xl font-extrabold uppercase tracking-widest border-2 border-current px-2">TechMech</span>
            <span className="text-xl font-black tracking-tight flex items-center"><Activity className="w-5 h-5 mr-1"/> DYNAMICS</span>
          </div>
        </div>
      </section>

      {/* 3. The Agitation (Pain) */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h2 className="font-heading text-3xl md:text-6xl font-bold tracking-tighter mb-8 text-foreground leading-tight">
              Physical prototyping is a<br className="hidden md:block"/> million-dollar gamble.
            </h2>
            <p className="text-xl text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Poor mesh quality and inaccurate boundary conditions lead to solver crashes and false-positives. When your design fails in production, you lose months of time and millions in tooling costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. The Solution (Bento Grid) */}
      <section className="py-12 pb-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            
            {/* Bento 1: Large with Image */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-black border border-structural shadow-lg">
              <div className="absolute inset-0">
                <Image 
                  src="/fea_heatmap.png" 
                  alt="FEA Heatmap Analysis"
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
              
              <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end text-white">
                <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mb-4 md:mb-6" />
                <h3 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Hyper-Accurate FEA</h3>
                <p className="text-gray-300 text-sm md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed">We utilize industry-standard solvers (LS-DYNA, Abaqus) to simulate extreme real-world stress conditions with zero margin for error.</p>
                <ul className="space-y-2 md:space-y-3">
                  {["Non-Linear Statics & Dynamics", "Crash & Impact Simulation", "NVH & Fatigue Life"].map((i, k) => (
                    <li key={k} className="flex items-center text-sm font-semibold text-gray-200"><CheckCircle2 className="w-5 h-5 text-blue-400 mr-3"/> {i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bento 2: Small Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent rounded-full"></div>
              <Cpu className="w-8 h-8 text-foreground mb-auto relative z-10" />
              <h3 className="text-2xl font-bold tracking-tight mb-2 relative z-10">Flawless Meshing</h3>
              <p className="text-muted text-sm font-medium relative z-10">Hexahedral & Tetrahedral meshing exceeding Six-Sigma quality metrics.</p>
            </motion.div>

            {/* Bento 3: Small Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-zinc-950 dark:bg-[#050505] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-end relative overflow-hidden group border border-structural shadow-lg"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-auto relative z-10" />
              <h3 className="text-2xl font-bold tracking-tight mb-2 relative z-10">Secure IP</h3>
              <p className="text-gray-400 text-sm font-medium relative z-10 leading-relaxed">Military-grade encryption for all your proprietary CAD files and solver data.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. The Proof (Massive Metrics) */}
      <section className="py-32 bg-card border-y border-structural relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-structural">
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-black tracking-tighter text-foreground mb-2">99.9<span className="text-blue-500">%</span></div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted">Mesh Accuracy</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-black tracking-tighter text-foreground mb-2">&lt;24<span className="text-blue-500">h</span></div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted">Turnaround Time</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-6xl md:text-7xl font-black tracking-tighter text-foreground mb-2">500<span className="text-blue-500">+</span></div>
              <div className="text-sm font-bold uppercase tracking-widest text-muted">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Expertise Grid */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-foreground">Deep Expertise.</h2>
              <p className="text-lg md:text-xl text-muted mt-4 max-w-2xl mx-auto md:mx-0">Specialized multi-physics simulation capabilities for the most complex engineering challenges.</p>
            </motion.div>
            <Link href="/services" className="group flex items-center text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors mt-4 md:mt-0">
              View All Capabilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Layers, title: "Advanced Meshing", desc: "Automated hexahedral & complex tetrahedral structures." },
              { icon: BrainCircuit, title: "Structural FEA", desc: "Non-linear implicit/explicit solver workflows." },
              { icon: ThermometerSun, title: "Thermal & CFD", desc: "Conjugate heat transfer & aerodynamics." },
              { icon: Zap, title: "Crash & Impact", desc: "High-velocity dynamic impact analysis." }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors border border-structural">
                <item.icon className="w-10 h-10 text-blue-500 mb-6" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Industries */}
      <section className="py-16 md:py-32 bg-black text-white relative z-10 border-y border-white/10">
        <div className="absolute inset-0 bg-noise opacity-50 z-0 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">Sectors We Empower.</h2>
              <p className="text-gray-400 mt-4 max-w-xl text-base md:text-lg">We deliver production-ready simulation data across mission-critical industries.</p>
            </motion.div>
            <Link href="/industries" className="group flex items-center text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors mt-4 md:mt-0">
              View All Sectors <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Factory, title: "Automotive OEM" },
              { icon: Plane, title: "Aerospace & Defense" },
              { icon: Tractor, title: "Heavy Machinery" },
              { icon: Stethoscope, title: "Medical Devices" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-blue-400" />
                </div>
                <item.icon className="w-8 h-8 text-blue-400 mb-12 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-lg font-bold tracking-tight">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Testimonials (Social Proof) */}
      <section className="py-16 md:py-32 relative z-10 bg-card/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="mb-16 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">Don&apos;t just take our word for it.</h2>
            <p className="text-muted text-lg">Hear from the engineering leaders who rely on our simulations.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                quote: "Vortex eliminated 3 rounds of physical prototyping for our latest aero-structure. Their mesh accuracy and turnaround time is simply unmatched.",
                name: "Dr. Elena Rostova", title: "Chief Aerodynamics Engineer, AerospaceX"
              },
              { 
                quote: "When we faced catastrophic failure in our chassis design, their dynamic impact analysis pinpointed the exact stress fracture zone within 24 hours.",
                name: "Marcus Thorne", title: "Lead Structural Designer, GlobalMotors"
              },
              { 
                quote: "We've worked with many FEA contractors, but Vortex is the only one that routinely exceeds Six-Sigma quality metrics on complex tetrahedral meshes.",
                name: "David Chen", title: "VP of Engineering, TechMech"
              }
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="glass p-8 md:p-10 rounded-3xl border border-structural relative">
                <div className="text-accent text-6xl font-serif absolute top-6 left-6 opacity-20">"</div>
                <p className="text-foreground font-medium text-sm md:text-base leading-relaxed relative z-10 italic mb-8">"{t.quote}"</p>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">{t.name}</span>
                  <span className="text-xs font-semibold text-muted tracking-widest uppercase mt-1">{t.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: FAQ */}
      <FAQSection />

      {/* NEW: Blog / Insights */}
      <section className="py-16 md:py-32 relative z-10 border-t border-structural">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 text-center md:text-left">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">Latest Insights.</h2>
              <p className="text-muted mt-4 max-w-xl text-base md:text-lg">Deep technical dives from our senior simulation engineers.</p>
            </motion.div>
            <Link href="/blog" className="group flex items-center text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors mt-4 md:mt-0">
              View All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.length > 0 ? blogs.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-muted/20 mb-6 border border-structural relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-700"></div>
                  </div>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-muted mb-3 space-x-3">
                    <span className="text-blue-500">{post.tags?.[0] || 'Engineering'}</span>
                    <span>{new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug group-hover:text-blue-500 transition-colors">{post.title}</h3>
                </Link>
              </motion.div>
            )) : (
              <div className="col-span-3 text-center text-muted p-8 border border-dashed border-structural rounded-2xl">
                No technical insights published yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. The Close (Final CTA & Contact) */}
      <section className="py-16 md:py-32 relative z-10 overflow-hidden border-t border-structural">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="text-center lg:text-left">
              <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter mb-6 text-foreground leading-none">
                Ready to eliminate design flaws?
              </h2>
              <p className="text-lg md:text-xl text-muted font-medium mb-10 max-w-lg mx-auto lg:mx-0">
                Stop guessing. Start simulating. Enter your details and an engineering specialist will review your requirements within 2 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Secure NDA Transfer</h4>
                    <p className="text-sm text-muted">Military-grade CAD encryption.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <Activity className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Express Turnaround</h4>
                    <p className="text-sm text-muted">Options for 24-hour delivery.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <div className="glass p-6 md:p-10 rounded-3xl border border-structural relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent rounded-full pointer-events-none"></div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-6 relative z-10">Request a Consultation</h3>
                <form className="space-y-4 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted">First Name</label>
                      <input type="text" className="w-full bg-black/40 border border-structural rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted">Last Name</label>
                      <input type="text" className="w-full bg-black/40 border border-structural rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Work Email</label>
                    <input type="email" className="w-full bg-black/40 border border-structural rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted">Project Details</label>
                    <textarea rows={4} className="w-full bg-black/40 border border-structural rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Briefly describe your FEA or Meshing requirements..."></textarea>
                  </div>
                  <button type="button" className="w-full py-4 bg-white text-black font-bold text-sm tracking-wide rounded-lg hover:bg-gray-200 transition-colors mt-2">
                    Submit Request
                  </button>
                  <p className="text-xs text-muted text-center mt-4">
                    By submitting, you agree to our strict confidentiality policy.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}

// Pure Simple FAQ Component
function FAQSection() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaqs().then((res: any) => {
      const data = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
      setFaqs(data.slice(0, 4)); // Only show top 4 on home page
      setLoading(false);
    }).catch(() => {
      // Fallback to static if DB is not connected
      setFaqs([
        { question: "Do you sign NDAs before receiving CAD files?", answer: "Yes, we adhere to strict military-grade data compliance. A mutual NDA is signed before any proprietary geometry is exchanged." },
        { question: "What is your typical turnaround time?", answer: "Standard mesh-and-solve workflows are delivered within 48-72 hours. We also offer expedited 24-hour turnaround for critical failure analysis." }
      ]);
      setLoading(false);
    });
  }, []);

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">Common Questions.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border border-structural rounded-2xl overflow-hidden transition-colors ${open === i ? 'bg-white/5 dark:bg-white/5' : 'glass hover:bg-white/5'}`}
            >
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-6 flex items-center justify-between text-left font-bold text-lg focus:outline-none"
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-100 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              
              {open === i && (
                <div className="px-6 pb-6 text-muted leading-relaxed border-t border-white/5 pt-4 mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/faq" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors">
            View Comprehensive FAQ <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
