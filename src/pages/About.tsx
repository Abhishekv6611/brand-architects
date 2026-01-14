import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";

const values = [
  {
    title: "Insight Before Ideas",
    description: "We research, analyze, and understand before we create. Great ideas come from deep understanding.",
  },
  {
    title: "People Over Platforms",
    description: "Technology changes. Human nature doesn't. We focus on connecting with real people.",
  },
  {
    title: "Bold Thinking",
    description: "Safe work gets forgotten. We push boundaries to create work that gets remembered.",
  },
  {
    title: "Measurable Impact",
    description: "Creativity without results is art. We're in the business of building brand value.",
  },
];

export default function About() {
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
            About Rezintra
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading max-w-4xl"
          >
            Built on Thinking. Powered by Creativity.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedElement>
              <h2 className="section-heading">Our Story</h2>
            </AnimatedElement>
            
            <div className="space-y-6">
              <AnimatedElement delay={0.1}>
                <p className="body-large text-muted-foreground">
                  Inspired by global agencies like Ogilvy and Dentsu, Rezintra was founded with a simple belief: advertising should build brands, not just awareness.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={0.2}>
                <p className="body-large text-muted-foreground">
                  We focus on long-term brand impact rather than short-term visibility. Every campaign we create is designed to make a lasting impression—one that turns audiences into advocates and customers into communities.
                </p>
              </AnimatedElement>
              
              <AnimatedElement delay={0.3}>
                <p className="body-large text-muted-foreground">
                  Our team brings together strategists, creatives, and digital experts who share a common passion: creating work that matters.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Values
            </p>
            <h2 className="section-heading mb-16">What We Believe</h2>
          </AnimatedElement>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <AnimatedElement key={value.title} delay={index * 0.1}>
                <div className="border-t-2 border-foreground pt-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-40 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <AnimatedElement>
              <h2 className="editorial-heading mb-8">
                "The best ideas don't come from creativity alone. They come from understanding."
              </h2>
            </AnimatedElement>
            
            <AnimatedElement delay={0.2}>
              <p className="text-lg text-primary-foreground/70">
                — The Rezintra Philosophy
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
