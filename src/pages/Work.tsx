import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";

const projects = [
  {
    id: 1,
    title: "Nexus Rebrand",
    category: "Brand Strategy",
    result: "200% increase in brand recognition",
    description: "Complete brand overhaul for a fintech startup entering new markets.",
  },
  {
    id: 2,
    title: "Urban Threads Campaign",
    category: "Creative Advertising",
    result: "5M+ organic impressions",
    description: "A bold fashion campaign that redefined streetwear advertising.",
  },
  {
    id: 3,
    title: "GreenPath Digital Launch",
    category: "Digital & Social",
    result: "45% conversion rate increase",
    description: "Multi-platform launch strategy for a sustainable energy brand.",
  },
  {
    id: 4,
    title: "Velocity Performance",
    category: "Performance Marketing",
    result: "3x ROAS improvement",
    description: "Data-driven campaign optimization for an e-commerce leader.",
  },
];

export default function Work() {
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
            Selected Work
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading max-w-4xl"
          >
            Work That Matters
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large text-muted-foreground max-w-2xl mt-8"
          >
            Focus on outcomes, not just designs. Here's a look at how we've helped brands make an impact.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <AnimatedElement key={project.id} delay={index * 0.1}>
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] bg-secondary mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl lg:text-8xl font-heading font-bold text-muted-foreground/20">
                        0{project.id}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold group-hover:underline underline-offset-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="text-lg font-heading font-semibold">
                      {project.result}
                    </p>
                  </div>
                </article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-40 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <AnimatedElement>
            <h2 className="section-heading mb-8">
              Want Results Like These?
            </h2>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Let's Talk
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
