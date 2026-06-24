"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/api";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs().then((response: any) => {
      // Handle { success: true, data: [...] } or direct array
      const postsArray = Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
      setPosts(postsArray);
      setLoading(false);
    }).catch(() => {
      setPosts([]);
      setLoading(false);
    });
  }, []);

  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => p._id !== featuredPost?._id);

  return (
    <div className="flex flex-col bg-background relative pt-24">
      <div className="absolute inset-0 bg-noise opacity-50 z-0 pointer-events-none"></div>
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-16 z-10">
        <div className="container mx-auto px-4 max-w-6xl text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <motion.div initial="hidden" animate="show" variants={FADE_UP} className="max-w-2xl">
            <h1 className="font-heading text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.9] text-foreground">
              Technical <span className="text-muted">Insights.</span>
            </h1>
            <p className="text-xl text-muted font-medium leading-relaxed">
              Deep-dive whitepapers, workflows, and case studies published directly by our senior simulation engineers.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="w-full md:w-auto relative">
            <Search className="w-5 h-5 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search engineering topics..." 
              className="w-full md:w-80 pl-12 pr-4 py-4 rounded-full bg-card border border-structural focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow text-sm font-medium"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Featured Post */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-muted p-12">No technical insights published yet.</div>
      ) : (
        <>
          {featuredPost && (
            <section className="py-8 relative z-10">
              <div className="container mx-auto px-4 max-w-6xl">
                <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="group relative rounded-3xl overflow-hidden border border-structural bg-card/50 glass p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">{featuredPost.tags?.[0] || 'Featured'}</span>
                    <span className="text-sm font-medium text-muted">{featuredPost.readTime} min read</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 group-hover:text-blue-400 transition-colors">{featuredPost.title}</h2>
                  <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest">
                    Read Whitepaper <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="w-full md:w-1/3 aspect-square rounded-2xl border border-structural bg-background relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                  <div className="text-8xl font-black text-structural absolute -right-8 -bottom-8">01</div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* 3. Article Grid */}
      <section className="py-16 relative z-10 border-b border-structural">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1 }}>
                <Link href={`/blog/${post.slug}`} className="block group glass p-8 rounded-3xl border border-structural h-full hover:border-muted transition-colors relative">
                  <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-muted uppercase tracking-widest">{post.tags?.[0] || 'Engineering'}</span>
                    <span className="text-xs font-medium text-muted">{new Date(post.createdAt || Date.now()).toLocaleDateString()}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-muted leading-relaxed">{post.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {/* 4. Newsletter CTA */}
      <section className="py-24 relative z-10 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter mb-6">Get Monthly Simulation Workflows.</h2>
            <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
              Join 5,000+ engineers receiving our highly technical breakdowns of complex FEA/CFD challenges. No marketing fluff.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="engineering@company.com" 
                required
                className="flex-1 px-6 py-4 rounded-full bg-background border border-structural focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="px-8 py-4 bg-foreground text-background font-bold text-sm tracking-wide rounded-full hover:scale-[1.02] transition-transform shadow-xl">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
