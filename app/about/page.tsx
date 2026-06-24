"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Target, ShieldCheck, Users2 } from "lucide-react";
import Image from "next/image";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const LEADERS = [
  { name: "Dr. Arvind Rao", role: "Founder & Chief Engineer", desc: "15+ years leading thermal management systems for Tier-1 Automotive OEMs." },
  { name: "Sarah Jenkins, Ph.D.", role: "Head of Structural Dynamics", desc: "Former lead aerospace analyst specializing in explicit impact simulations." },
  { name: "Vikram Mehta", role: "VP of Global Operations", desc: "Scaling high-fidelity mesh delivery centers across North America and APAC." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-background relative pt-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 border-b border-structural z-10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-20">
          <motion.div initial="hidden" animate="show" variants={FADE_UP}>
            <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-structural bg-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-muted">
              The Firm
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-foreground">
              We eliminate failure <br className="hidden md:block"/>
              <span className="text-muted">before it's manufactured.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed mb-0">
              Vortex Engineering was founded to bridge the critical gap between sloppy, inaccurate outsourcing and prohibitively expensive in-house CAE teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Story / Manifesto */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
              <h2 className="font-heading text-4xl font-bold mb-6">Our Engineering Manifesto.</h2>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  In the world of physical manufacturing, a late-stage design failure costs millions in tooling and months of delayed time-to-market. The industry standard response has been to either build massive internal teams or outsource to low-cost centers that sacrifice mesh quality.
                </p>
                <p>
                  <strong className="text-foreground">We rejected both options.</strong>
                </p>
                <p>
                  Vortex was built on a singular obsession: Deterministic Accuracy. We don't just "run software." We deeply understand the physics, the boundary conditions, and the math behind the solvers. When we deliver a report, it is the absolute ground truth of how your design will perform in the real world.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative aspect-square rounded-3xl overflow-hidden border border-structural glass p-8 flex flex-col justify-between">
               <div className="absolute inset-0 bg-blue-500/5"></div>
               <Target className="w-12 h-12 text-blue-500 mb-8 relative z-10" />
               <h3 className="font-heading text-3xl font-bold text-foreground relative z-10">Absolute Precision. <br/> Zero Compromise.</h3>
               <div className="flex items-center space-x-4 mt-12 relative z-10 border-t border-structural pt-6">
                 <ShieldCheck className="w-6 h-6 text-muted" />
                 <span className="text-sm font-semibold uppercase tracking-widest text-muted">Strict Quality Control</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team */}
      <section className="py-16 md:py-32 bg-card border-y border-structural relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="text-center mb-16">
            <Users2 className="w-12 h-12 text-muted mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4">Principal Leadership.</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">Led by veterans from Tier-1 automotive and aerospace sectors.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERS.map((leader, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }} className="glass p-8 rounded-3xl border border-structural relative overflow-hidden group">
                <div className="w-20 h-20 bg-background rounded-full mb-6 border border-structural flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center font-heading text-2xl font-bold text-muted">
                    {leader.name.charAt(0)}
                  </div>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-1 text-foreground">{leader.name}</h3>
                <p className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
                <p className="text-muted text-sm leading-relaxed">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Presence */}
      <section className="py-16 md:py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-8">Global Delivery Network.</h2>
            <div className="relative aspect-[21/9] rounded-3xl border border-structural overflow-hidden bg-black/50 glass p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] opacity-10 bg-no-repeat bg-center bg-contain mix-blend-screen"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
                <div className="bg-background/80 backdrop-blur border border-structural p-6 rounded-2xl">
                  <MapPin className="w-6 h-6 text-blue-500 mb-4 mx-auto" />
                  <h4 className="font-bold text-lg mb-1">Global HQ</h4>
                  <p className="text-sm text-muted">Pune, India</p>
                </div>
                <div className="bg-background/80 backdrop-blur border border-structural p-6 rounded-2xl">
                  <MapPin className="w-6 h-6 text-purple-500 mb-4 mx-auto" />
                  <h4 className="font-bold text-lg mb-1">US Office</h4>
                  <p className="text-sm text-muted">Detroit, MI</p>
                </div>
                <div className="bg-background/80 backdrop-blur border border-structural p-6 rounded-2xl">
                  <MapPin className="w-6 h-6 text-orange-500 mb-4 mx-auto" />
                  <h4 className="font-bold text-lg mb-1">EU Hub</h4>
                  <p className="text-sm text-muted">Stuttgart, Germany</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
