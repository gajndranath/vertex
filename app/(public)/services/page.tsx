"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, BrainCircuit, CheckCircle2, Layers, ThermometerSun, Zap } from "lucide-react";
import Link from "next/link";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-background relative pt-24">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-structural z-10">
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-20">
          <motion.div initial="hidden" animate="show" variants={FADE_UP}>
            <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-muted">
              Core Capabilities
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-foreground">
              Engineering <br className="hidden md:block"/>
              <span className="text-blue-500">Uncompromised.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              We leverage the world's most advanced physics solvers to provide Tier-1 OEMs with deterministic failure analysis and flawless mesh geometries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Pillars */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-32">
            
            {/* Pillar 1: Meshing */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="meshing">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-black relative group">
                  {/* Placeholder for complex mesh image */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-32 h-32 text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  {/* Faux wireframe grid pattern overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
                  <Layers className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">Advanced Meshing</h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Poor mesh quality is the number one cause of solver divergence. Our dedicated meshing teams specialize in building flawless hexahedral and complex tetrahedral structures that exceed strict Six-Sigma quality criteria (aspect ratio, skewness, jacobian).
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Body-in-White (BIW):</strong> Full vehicle assemblies exceeding 20M+ elements.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Hexahedral Dominant:</strong> Mapped and swept 3D solid meshing for complex castings.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 shrink-0 mt-0.5"/> <span><strong>1D/2D Connections:</strong> Spot welds, seam welds, and rigid spider attachments.</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 2: Structural FEA */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="fea">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8">
                  <BrainCircuit className="w-8 h-8 text-purple-500" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">Structural FEA</h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  We predict structural integrity before physical manufacturing begins. Using non-linear implicit workflows, we simulate complex contact interactions, large deformations, and advanced material plasticity.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-purple-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Non-Linear Statics:</strong> Elastoplastic material modeling and hyperelasticity.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-purple-500 mr-4 shrink-0 mt-0.5"/> <span><strong>NVH & Frequency:</strong> Modal analysis, harmonic response, and random vibration.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-purple-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Fatigue Life:</strong> High/Low cycle fatigue prediction using strain-life methods.</span></li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-black relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit className="w-32 h-32 text-purple-500/20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: Thermal & CFD */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="cfd">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-black relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ThermometerSun className="w-32 h-32 text-orange-500/20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8">
                  <ThermometerSun className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">Thermal & CFD</h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  From aerodynamic drag optimization to complex battery pack thermal management. We map fluid flows and conjugate heat transfers to optimize cooling architectures and ensure thermal safety compliance.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Conjugate Heat Transfer:</strong> Coupled fluid-solid thermal interactions.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Aerodynamics:</strong> Drag reduction, lift analysis, and wind noise prediction.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-orange-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Battery Thermal Mgmt:</strong> EV pack cooling strategies and thermal runaway.</span></li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 4: Crash & Impact */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="crash">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-8">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">Crash & Impact</h2>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  Mission-critical explicit dynamics. We simulate high-velocity impact, drop tests, and automotive crash scenarios to ensure structural survivability and regulatory compliance (FMVSS, Euro NCAP).
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Automotive Crash:</strong> Full frontal, side impact, and rollover simulations.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Drop Testing:</strong> Electronics and medical device survivability.</span></li>
                  <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5"/> <span><strong>Bird Strike & Blast:</strong> Extreme event simulations for aerospace/defense.</span></li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-black relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-32 h-32 text-red-500/20 group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Tooling Stack */}
      <section className="py-16 md:py-32 border-y border-structural bg-card relative z-10">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h3 className="font-heading text-3xl font-bold mb-12">Certified Solver Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
              <span className="text-2xl font-bold tracking-widest uppercase">ANSYS</span>
              <span className="text-2xl font-black italic tracking-tighter">ABAQUS</span>
              <span className="text-2xl font-mono font-bold">LS-DYNA</span>
              <span className="text-2xl font-serif font-bold italic">HyperMesh</span>
              <span className="text-2xl font-bold tracking-widest">NASTRAN</span>
            </div>
            <p className="text-muted mt-12 text-sm max-w-2xl mx-auto">
              Our engineers hold advanced certifications in the industry's most rigorous FEA and CFD solvers, ensuring absolute compliance with OEM standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section className="py-16 md:py-32 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP} className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4">The Vortex Workflow.</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">From raw CAD geometry to production-ready deterministic reports.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "CAD Clean-up & Meshing", desc: "We ingest your raw geometry, repair surface defects, and generate a solver-optimized mesh adhering to strict quality criteria." },
              { step: "02", title: "Boundary setup & Solving", desc: "Application of accurate physical loads, constraints, and material models before running the simulation on cloud HPC clusters." },
              { step: "03", title: "Analysis & Reporting", desc: "Detailed stress heatmaps, fatigue life calculations, and actionable design recommendations delivered in a comprehensive PDF." }
            ].map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.2 }} className="glass p-8 rounded-3xl relative overflow-hidden group">
                <div className="text-8xl font-black text-structural absolute -right-4 -bottom-4 group-hover:text-white/5 transition-colors duration-500">{w.step}</div>
                <h4 className="font-heading text-xl font-bold mb-4 relative z-10">{w.title}</h4>
                <p className="text-muted text-sm leading-relaxed relative z-10">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 md:py-32 relative z-10 border-t border-structural overflow-hidden">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">Need expert analysis?</h2>
            <p className="text-xl text-muted mb-10">Send us your requirements and we'll outline the exact simulation strategy needed.</p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-foreground text-background font-bold text-sm tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl items-center">
              Request a Technical Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
