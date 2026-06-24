"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Share2, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { getBlogBySlug } from "@/lib/api";

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (params.slug) {
      getBlogBySlug(params.slug as string).then((res: any) => {
        setPost(res?.data || res);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background pt-24">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background pt-24">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-500 hover:underline">Return to Insights</Link>
      </div>
    );
  }

  return (
    <article className="flex flex-col bg-background relative pt-24">
      {/* 1. Hero Header */}
      <header className="relative pt-24 pb-20 border-b border-structural z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-muted hover:text-foreground transition-colors mb-12">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">{post.tags?.[0] || 'Engineering'}</span>
              <div className="flex items-center text-muted text-sm font-medium">
                <Clock className="w-4 h-4 mr-1.5" /> {post.readTime || 5} min read
              </div>
              <div className="flex items-center text-muted text-sm font-medium hidden sm:flex">
                <Calendar className="w-4 h-4 mr-1.5" /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}
              </div>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-[1.1] text-foreground">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card rounded-full border border-structural flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center font-heading text-lg font-bold text-muted">{post.author ? post.author.charAt(0).toUpperCase() : 'V'}</div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{post.author || 'Vortex Engineer'}</h4>
                  <p className="text-sm text-muted">Technical Expert</p>
                </div>
              </div>
              
              <button className="p-3 rounded-full bg-card border border-structural hover:bg-muted/10 transition-colors group">
                <Share2 className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Article Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-p:text-muted prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
            <p className="text-xl text-foreground font-medium mb-12 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div dangerouslySetInnerHTML={{ __html: (post.content || '').replace(/\n\n/g, '<br/><br/>') }} />

          </motion.div>
        </div>
      </section>

      {/* 3. Read Next Footer */}
      <section className="py-24 border-t border-structural bg-card relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="font-heading text-3xl font-bold mb-8">Need this level of precision for your project?</h3>
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Our meshing engineers specialize in building flawless hexahedral structures for Tier-1 OEMs. Let us handle your pre-processing bottlenecks.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest rounded-full hover:scale-[1.02] transition-transform shadow-xl items-center">
            Consult our Team <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
