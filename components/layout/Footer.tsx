import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-structural pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 pr-0 md:pr-8">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Vortex<span className="text-primary font-normal">Engineering</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-sm">
              Global leaders in precision Computer-Aided Engineering (CAE), Finite Element Analysis (FEA), and Advanced Meshing Services for Fortune 500 manufacturers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-muted text-sm">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>contact@vortex-engineering.com</span>
              </div>
              <div className="flex items-center text-muted text-sm">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center text-muted text-sm">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span>Global HQ: Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-6 text-foreground uppercase tracking-wider">Expertise</h4>
            <ul className="space-y-4">
              <li><Link href="/services#meshing" className="text-muted hover:text-accent transition-colors text-sm">Advanced Meshing</Link></li>
              <li><Link href="/services#fea" className="text-muted hover:text-accent transition-colors text-sm">Structural FEA</Link></li>
              <li><Link href="/services#cfd" className="text-muted hover:text-accent transition-colors text-sm">Thermal & CFD</Link></li>
              <li><Link href="/services#crash" className="text-muted hover:text-accent transition-colors text-sm">Crash & Impact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-6 text-foreground uppercase tracking-wider">Industries</h4>
            <ul className="space-y-4">
              <li><Link href="/industries#automotive" className="text-muted hover:text-accent transition-colors text-sm">Automotive OEM</Link></li>
              <li><Link href="/industries#aerospace" className="text-muted hover:text-accent transition-colors text-sm">Aerospace & Defense</Link></li>
              <li><Link href="/industries#machinery" className="text-muted hover:text-accent transition-colors text-sm">Heavy Machinery</Link></li>
              <li><Link href="/industries#medical" className="text-muted hover:text-accent transition-colors text-sm">Medical Devices</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-6 text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted hover:text-accent transition-colors text-sm">Firm & Leadership</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-accent transition-colors text-sm">Insights & Blog</Link></li>
              <li><Link href="/faq" className="text-muted hover:text-accent transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-accent transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/admin" className="text-muted hover:text-accent transition-colors text-sm">Client Portal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Vortex Engineering Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/privacy-policy" className="text-muted hover:text-foreground text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted hover:text-foreground text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
