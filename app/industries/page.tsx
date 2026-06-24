"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Plane, Car, Factory, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const SECTORS = [
  {
    id: "automotive",
    title: "Automotive OEM",
    icon: Car,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    desc: "From body-in-white (BIW) crash testing to battery pack thermal management, we help automotive manufacturers achieve 5-star NCAP ratings while aggressively lightweighting structural components.",
    points: [
      "FMVSS & Euro NCAP Crash Simulation",
      "NVH & Acoustic Optimization",
      "EV Battery Thermal Runaway Analysis",
      "Fatigue Life of Suspension Components"
    ]
  },
  {
    id: "aerospace",
    title: "Aerospace & Defense",
    icon: Plane,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    desc: "Mission-critical simulations for extreme environments. We analyze aero-structures, turbine blades, and defense ballistics to ensure absolute survivability under extreme pressure and thermal loads.",
    points: [
      "Bird Strike & Explicit Impact Dynamics",
      "Composite Material Delamination",
      "Jet Engine Conjugate Heat Transfer",
      "High-Altitude Pressure Vessel FEA"
    ]
  },
  {
    id: "machinery",
    title: "Heavy Machinery",
    icon: Factory,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    desc: "Durability is paramount. We predict the fatigue life and structural limits of mining equipment, agricultural machinery, and heavy lifting cranes operating under massive cyclic loads.",
    points: [
      "Weld Fatigue & Fracture Mechanics",
      "Rollover Protective Structures (ROPS)",
      "Hydraulic Cylinder Stress Analysis",
      "Topology Optimization for Castings"
    ]
  },
  {
    id: "medical",
    title: "Medical Devices",
    icon: Activity,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    desc: "Precision engineering for human lives. We provide ISO-compliant simulation data for orthopedic implants, surgical tools, and drug delivery devices.",
    points: [
      "Orthopedic Implant Biomechanics",
      "Stent Deployment & Fatigue Analysis",
      "Drop Testing for Wearables",
      "Micro-fluidics & Blood Flow CFD"
    ]
  }
];

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(SECTORS[0].id);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTORS.some(s => s.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="flex flex-col bg-background relative pt-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 border-b border-structural z-10">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-20">
          <motion.div initial="hidden" animate="show" variants={FADE_UP}>
            <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-structural bg-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-muted">
              Global Sectors
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-foreground">
              Mission-Critical <br className="hidden md:block"/>
              <span className="text-muted">Simulation.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We deliver production-ready simulation data tailored to the strict regulatory and safety standards of the world's most demanding industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Sector Tabs */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sidebar Tabs */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {SECTORS.map((sector) => {
                const Icon = sector.icon;
                const isActive = activeTab === sector.id;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setActiveTab(sector.id)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                      isActive 
                        ? 'bg-card border-structural shadow-xl ring-1 ring-white/10' 
                        : 'bg-transparent border-transparent hover:bg-card/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${isActive ? sector.bg : 'bg-muted/10'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? sector.color : 'text-muted'}`} />
                      </div>
                      <span className={`font-heading text-xl font-bold ${isActive ? 'text-foreground' : 'text-muted'}`}>
                        {sector.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              {SECTORS.map((sector) => {
                if (activeTab !== sector.id) return null;
                const Icon = sector.icon;
                return (
                  <motion.div 
                    key={sector.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="glass p-8 md:p-12 rounded-3xl border border-structural relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] ${sector.bg.replace('10', '5').replace('bg-', 'from-')} to-transparent rounded-full pointer-events-none`}></div>
                    
                    <Icon className={`w-12 h-12 mb-8 ${sector.color} relative z-10`} />
                    <h2 className="font-heading text-4xl font-bold mb-6 relative z-10">{sector.title}</h2>
                    <p className="text-xl text-muted leading-relaxed mb-10 relative z-10">
                      {sector.desc}
                    </p>
                    
                    <div className="space-y-6 relative z-10">
                      <h3 className="font-bold text-sm uppercase tracking-widest text-muted pb-2">Key Competencies</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sector.points.map((point, idx) => (
                          <div key={idx} className="flex items-start bg-background/50 p-4 rounded-xl">
                            <ArrowRight className={`w-5 h-5 mr-3 shrink-0 ${sector.color}`} />
                            <span className="font-medium text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-12 pt-8 relative z-10 flex justify-start">
                      <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-sm uppercase tracking-widest text-background bg-foreground rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative z-10 flex items-center">
                          Consult with an Expert <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Standards & Compliance */}
      <section className="py-24 border-t border-structural bg-card relative z-10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h3 className="font-heading text-3xl font-bold mb-12">Regulatory Compliance</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              <span className="text-2xl font-bold tracking-widest">ISO 9001</span>
              <span className="text-2xl font-bold tracking-widest">AS9100</span>
              <span className="text-2xl font-bold tracking-widest">ISO 13485</span>
              <span className="text-2xl font-bold tracking-widest">FDA 510(k) Data</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
