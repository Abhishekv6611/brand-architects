import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";

const services = [
  {
    name: "Brand Strategy",
    description: "Brand positioning, identity, messaging, and market clarity. We help you find your voice and own your space in the market.",
    deliverables: ["Brand Positioning", "Visual Identity", "Messaging Framework", "Market Analysis"],
  },
  {
    name: "Advertising Campaigns",
    description: "Concept-driven campaigns across digital and offline media. From TV spots to digital banners, we create work that captures attention.",
    deliverables: ["Campaign Concepts", "Art Direction", "Copywriting", "Production"],
  },
  {
    name: "Digital & Social",
    description: "Content, reels, storytelling, and community building. We help brands show up authentically in the digital spaces that matter.",
    deliverables: ["Content Strategy", "Social Media", "Video Production", "Community Management"],
  },
  {
    name: "Performance Marketing",
    description: "Data-backed campaigns focused on growth and ROI. We turn insights into action and clicks into customers.",
    deliverables: ["Paid Media", "Analytics", "Conversion Optimization", "Growth Strategy"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-6"
          >
            Our Services
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading max-w-4xl"
          >
            Strategy Meets Creativity
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          {services.map((service, index) => (
            <AnimatedElement key={service.name} delay={index * 0.1}>
              <div className="border-t border-border py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                  <div>
                    <span className="text-sm text-muted-foreground mb-4 block">
                      0{index + 1}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                      {service.name}
                    </h2>
                    <p className="body-large text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="lg:pt-12">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                      Deliverables
                    </p>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-lg">
                          <span className="w-2 h-2 bg-foreground rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-40 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedElement>
            <h2 className="section-heading mb-8">
              Let's Work Together
            </h2>
            <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto mb-10">
              Have a project in mind? We'd love to hear about it.
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <Button 
              variant="heroOutline" 
              size="lg" 
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
