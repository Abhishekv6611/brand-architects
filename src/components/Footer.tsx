import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-3xl font-bold mb-4">REZINTRA</h3>
            <p className="text-primary-foreground/70 max-w-md">
              Strategy-led advertising for brands that want to matter. We build influence, not just ads.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-6 text-primary-foreground/50">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary-foreground/70 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground/70 transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-primary-foreground/70 transition-colors">Work</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground/70 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-6 text-primary-foreground/50">
              Connect
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-foreground/70 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70 transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Rezintra. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Built on thinking. Powered by creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}
