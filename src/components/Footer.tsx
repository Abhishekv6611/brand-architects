import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Instagram, Linkedin, Facebook, Twitter, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-neutral-950 text-white overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-black to-neutral-900/30 opacity-60"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8">

              <p className="text-lg text-neutral-400 leading-relaxed max-w-md font-light">
                Crafting bold, strategic brands that captivate audiences and drive meaningful connections.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-neutral-500 mt-1 transition-colors group-hover:text-white" />
                  <address className="not-italic text-neutral-400 leading-relaxed group-hover:text-white transition-colors">
                    RC62, Pallathu Rd, Thammanam,<br />
                    Ernakulam, Kerala 682032
                  </address>
                </div>

                <a href="mailto:info@rezintra.in" className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-neutral-500 transition-colors group-hover:text-white" />
                  <span className="text-neutral-400 group-hover:text-white transition-colors">info@rezintra.in</span>
                </a>

                <a href="tel:+918301055215" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-neutral-500 transition-colors group-hover:text-white" />
                  <span className="text-neutral-400 group-hover:text-white transition-colors">+91 83010 55215</span>
                </a>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Navigate</h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center gap-2 text-base font-medium text-neutral-300 hover:text-white transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social & Newsletter Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Connect</h3>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-12 h-12 flex items-center justify-center rounded-full border border-neutral-700 hover:border-white transition-all duration-300 overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                      <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors duration-300 relative z-10" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 uppercase tracking-widest">
              <span>&copy; {currentYear} Rezintra. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-8 text-xs uppercase tracking-widest">
              <Link
                to="/privacy"
                className="text-neutral-500 hover:text-white transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/terms"
                className="text-neutral-500 hover:text-white transition-colors relative group"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </footer>
  );
}
