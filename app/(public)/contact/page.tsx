"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import { useState } from "react";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-background relative pt-24">
      <div className="absolute inset-0 bg-noise opacity-50 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Trust */}
          <motion.div initial="hidden" animate="show" variants={FADE_UP} className="flex flex-col justify-center">
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-foreground">
              Let's eliminate your <span className="text-blue-500">design flaws.</span>
            </h1>
            <p className="text-xl text-muted font-medium leading-relaxed mb-12 max-w-lg">
              Speak directly with a senior CAE engineer. We review your CAD geometry and operational requirements to provide a deterministic simulation strategy within 2 hours.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-structural rounded-2xl flex items-center justify-center mr-6 shrink-0">
                  <Mail className="w-5 h-5 text-muted" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Engineering</h4>
                  <p className="text-muted">quotes@vortex-engineering.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-structural rounded-2xl flex items-center justify-center mr-6 shrink-0">
                  <Phone className="w-5 h-5 text-muted" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Hotline</h4>
                  <p className="text-muted">+1 (800) 123-4567 <span className="text-sm ml-2 bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded uppercase tracking-wider font-bold">24/7 Response</span></p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-card border border-structural rounded-2xl flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="w-5 h-5 text-muted" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Global Headquarters</h4>
                  <p className="text-muted leading-relaxed">Vortex Tech Park, Hinjewadi Phase II,<br/>Pune, Maharashtra 411057, India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-8 border-t border-structural">
              <div className="flex items-center text-sm font-semibold text-muted uppercase tracking-widest">
                <ShieldCheck className="w-5 h-5 mr-2 text-blue-500" /> NDA Compliant
              </div>
              <div className="flex items-center text-sm font-semibold text-muted uppercase tracking-widest">
                <Clock className="w-5 h-5 mr-2 text-blue-500" /> 2-Hour SLA
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-structural relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent rounded-full pointer-events-none"></div>
              
              {isSubmitted ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-4">Request Received.</h3>
                  <p className="text-muted text-lg mb-8 max-w-xs mx-auto">
                    A senior engineer has been assigned to your request. We will contact you within 2 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="px-8 py-4 bg-card border border-structural font-bold rounded-full hover:bg-muted/10 transition-colors">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold mb-8 relative z-10">Request a Technical Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Full Name</label>
                        <input required type="text" className="w-full bg-background border border-structural rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Work Email</label>
                        <input required type="email" className="w-full bg-background border border-structural rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Company / Organization</label>
                      <input required type="text" className="w-full bg-background border border-structural rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="AerospaceX Inc." />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Analysis Requirement</label>
                      <select required className="w-full bg-background border border-structural rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-foreground">
                        <option value="" disabled selected>Select Analysis Type</option>
                        <option value="meshing">Advanced Meshing (Hex/Tet)</option>
                        <option value="structural">Structural FEA / NVH</option>
                        <option value="cfd">Thermal & CFD</option>
                        <option value="crash">Crash & Impact Dynamics</option>
                        <option value="other">Other / Custom</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted ml-1">Project Details</label>
                      <textarea required rows={4} className="w-full bg-background border border-structural rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Briefly describe the components, materials, and physics involved..."></textarea>
                    </div>

                    <div className="pt-4 flex items-start">
                      <input type="checkbox" id="nda" required className="mt-1 w-4 h-4 rounded border-structural bg-background text-blue-500 focus:ring-blue-500 focus:ring-offset-background" />
                      <label htmlFor="nda" className="ml-3 text-sm text-muted leading-relaxed">
                        I acknowledge that any CAD files or proprietary data shared in subsequent communications will be covered under Vortex Engineering's mutual Non-Disclosure Agreement (NDA).
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-foreground text-background font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl flex justify-center items-center disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Submit Requirements"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
