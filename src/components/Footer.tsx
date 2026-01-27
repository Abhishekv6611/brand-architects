export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl font-bold mb-4">REZINTRA</h3>
            {/* <p className="text-primary-foreground/70 mb-4 font-semibold">
              No.1 Productions in Kerala
            </p> */}
            <p className="text-primary-foreground/60 text-sm">
              With 19 years of industrial experience
            </p>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-6 text-primary-foreground/50">
              Our Locations
            </h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Kochi</li>
              <li>Bangalore</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-6 text-primary-foreground/50">
              Contact Info
            </h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li>
                <address className="not-italic">
                  RC62, Pallathu Rd, Thammanam,<br />
                   Ernakulam, Kerala 682032<br />
                </address>
              </li>
              <li>
                <a href="mailto:info@rezintra.in" className="hover:text-primary-foreground transition-colors">
                  info@rezintra.in
                </a>
              </li>
              <li>Office Hours: 8AM - 11PM</li>
              <li>Sunday - Weekend Day</li>
            </ul>
          </div>

          {/* Get Free Quote */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider mb-6 text-primary-foreground/50">
              Get Free Quote
            </h4>
            <div className="space-y-3">
              <p className="text-primary-foreground/70">
                Ready to start your project?
              </p>
              <a
                href="tel:+918301055215"
                className="inline-block text-lg font-heading font-semibold hover:text-primary-foreground/70 transition-colors"
              >
                Call us at 8301055215
              </a>
            </div>
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
