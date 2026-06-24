"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Building2, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 md:mt-6 px-4">
        <nav className="w-full max-w-5xl transition-all duration-300 bg-background/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border border-structural shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full">
          <div className="px-5 md:px-6 h-14 md:h-16 flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group z-50 relative">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Building2 className="text-background w-3 h-3 md:w-4 md:h-4" />
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight text-foreground font-heading">
                Vortex<span className="text-accent font-medium">Eng</span>
              </span>
            </Link>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-semibold text-muted hover:text-foreground transition-colors">Home</Link>
              <Link href="/services" className="text-sm font-semibold text-muted hover:text-foreground transition-colors">Capabilities</Link>
              <Link href="/industries" className="text-sm font-semibold text-muted hover:text-foreground transition-colors">Sectors</Link>
              <Link href="/about" className="text-sm font-semibold text-muted hover:text-foreground transition-colors">Firm</Link>
              <Link href="/blog" className="text-sm font-semibold text-muted hover:text-foreground transition-colors">Insights</Link>
              
              <div className="flex items-center space-x-2 pl-2">
                <ThemeToggle />
                <Link href="/contact" className="ml-2 px-5 py-2 bg-foreground text-background text-sm font-bold tracking-wide transition-transform hover:scale-105 rounded-full shadow-lg">
                  Consult
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center space-x-3 md:hidden relative z-50">
              <ThemeToggle />
              <button 
                className="md:hidden p-2 text-muted hover:text-foreground transition-colors z-50 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden pt-28 px-6 flex flex-col animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-6 text-center">
            <Link href="/" className="font-heading text-3xl font-bold text-foreground">Home</Link>
            <Link href="/services" className="font-heading text-3xl font-bold text-foreground">Capabilities</Link>
            <Link href="/industries" className="font-heading text-3xl font-bold text-foreground">Sectors</Link>
            <Link href="/about" className="font-heading text-3xl font-bold text-foreground">Firm</Link>
            <Link href="/blog" className="font-heading text-3xl font-bold text-foreground">Insights</Link>
          </div>
          
          <div className="mt-auto mb-12 flex justify-center w-full">
            <Link href="/contact" className="w-full max-w-sm py-4 bg-foreground text-background font-bold text-lg tracking-wide rounded-full shadow-2xl flex items-center justify-center">
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
