"use client";

import { motion } from "framer-motion";
import { ChevronDown, MessageSquare, ShieldCheck, Settings, CreditCard, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getFaqs } from "@/lib/api";

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFaqs().then((data: any[]) => {
      const catMap = data.reduce((acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = { title: faq.category, icon: Settings, faqs: [] };
        }
        acc[faq.category].faqs.push({ q: faq.question, a: faq.answer });
        return acc;
      }, {} as Record<string, any>);
      setCategories(Object.values(catMap));
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) setOpenFaq(null);
    else setOpenFaq(idx);
  };

  return (
    <div className="flex flex-col bg-background relative pt-24">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 border-b border-structural z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full bg-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-muted">
              Knowledge Base
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] text-foreground">
              Frequently Asked <br className="hidden md:block"/>
              <span className="text-blue-500">Questions.</span>
            </h1>
            
            <p className="text-xl text-muted max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Everything you need to know about our simulation methodologies, security protocols, and engagement models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Categorized FAQs */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Sidebar Categories */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {!loading && categories.map((cat, idx) => {
                const Icon = cat.icon;
                const isActive = openCategory === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => { setOpenCategory(idx); setOpenFaq(0); }}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-card border border-structural shadow-xl ring-1 ring-white/10' 
                        : 'bg-transparent border border-transparent hover:bg-card/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${isActive ? 'bg-blue-500/10' : 'bg-muted/10'}`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-blue-500' : 'text-muted'}`} />
                      </div>
                      <span className={`font-heading text-xl font-bold ${isActive ? 'text-foreground' : 'text-muted'}`}>
                        {cat.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : categories.length === 0 ? (
                <div className="text-center text-muted p-12">No FAQs available yet.</div>
              ) : (
                <motion.div 
                  key={openCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-2">{categories[openCategory]?.title}</h2>
                  <p className="text-muted">Answers to common queries regarding {categories[openCategory]?.title.toLowerCase()}.</p>
                </div>

                {categories[openCategory]?.faqs.map((faq: any, idx: number) => (
                  <div 
                    key={idx} 
                    className={`border border-structural rounded-2xl overflow-hidden transition-colors ${openFaq === idx ? 'bg-white/5' : 'glass hover:bg-white/5'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-6 flex items-center justify-between text-left font-bold text-lg focus:outline-none"
                    >
                      <span className="pr-8 leading-snug">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-blue-500 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openFaq === idx && (
                      <div className="px-6 pb-8 text-muted leading-relaxed text-base pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 border-t border-structural bg-card relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">Didn't find what you were looking for?</h3>
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Our engineering team is always ready to discuss your specific technical challenges and compliance requirements.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest rounded-full hover:scale-[1.02] transition-transform shadow-xl items-center">
            Consult an Expert <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
