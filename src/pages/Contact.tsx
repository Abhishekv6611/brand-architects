import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

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
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="editorial-heading max-w-4xl text-foreground"
          >
            Let's Create Something That Matters
          </motion.h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24 lg:pb-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedElement>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b-2 border-foreground rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-muted-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b-2 border-foreground rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-muted-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm uppercase tracking-widest mb-3">
                    Company
                  </label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-transparent border-0 border-b-2 border-foreground rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-muted-foreground"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-3">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-transparent border-0 border-b-2 border-foreground rounded-none px-0 py-4 text-lg focus-visible:ring-0 focus-visible:border-muted-foreground resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg">
                  Start the Conversation
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </AnimatedElement>

            <AnimatedElement delay={0.2} className="lg:pt-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Email
                  </h3>
                  <a href="mailto:hello@rezintra.com" className="text-2xl font-heading font-bold hover:underline underline-offset-4">
                    hello@rezintra.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-6">
                    <a href="#" className="text-lg hover:underline underline-offset-4">LinkedIn</a>
                    <a href="#" className="text-lg hover:underline underline-offset-4">Instagram</a>
                    <a href="#" className="text-lg hover:underline underline-offset-4">Twitter</a>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="body-large text-muted-foreground">
                    We typically respond within 24 hours. For urgent inquiries, don't hesitate to reach out directly via email.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
