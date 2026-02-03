import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";
import QuoteSection from "@/components/QuoteSection";
import heroImage from "@/assets/hero-image.jpg";

const services = [
  "Brand Strategy",
  "Creative Advertising",
  "Digital Campaigns",
  "Social Media & Content",
  "Performance Marketing",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img
            src={heroImage}
            alt="Creative advertising"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-6"
            >
              Strategy-Led Creative Agency
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="editorial-heading mb-8"
            >
              We Don't Sell Ads.
              <br />
              We Build Influence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="body-large text-muted-foreground max-w-xl mb-10"
            >
              Strategy-led advertising for brands that want to matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/work">See Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Who We Are
              </p>
              <h2 className="section-heading">
                Blending Creativity, Culture & Strategy
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="body-large text-muted-foreground">
                Rezintra is a modern advertising agency blending creativity, culture, and strategy to shape brands that connect with real people. We don't chase trends—we create them.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-40 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="editorial-heading mb-8">
                Creativity Without Strategy Is Noise
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
                Every idea we create is grounded in insight, data, and human behavior. We believe in building brands that don't just speak—they resonate.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-40 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              What We Do
            </p>
            <h2 className="section-heading mb-16">Our Services</h2>
          </AnimatedElement>

          <div className="border-t border-border">
            {services.map((service, index) => (
              <AnimatedElement key={service} delay={index * 0.1}>
                <Link
                  to="/services"
                  className="group flex items-center justify-between py-8 border-b border-border hover:bg-secondary/50 transition-colors px-4 -mx-4"
                >
                  <span className="text-2xl md:text-4xl font-heading font-bold">
                    {service}
                  </span>
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement delay={0.5} className="mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-40 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedElement>
            <h2 className="section-heading mb-8">
              Ready to Build Something That Matters?
            </h2>
          </AnimatedElement>

          <AnimatedElement delay={0.2}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start the Conversation
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* <QuoteSection /> */}
      <Footer />
    </div>
  );
}
