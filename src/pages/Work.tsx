import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";
import { useState } from "react";

// YouTube video IDs extracted from the provided URLs
const videoIds = [
  "DruZ0wIwfz0",
  "I_xCFvovxMA",
  "kL5jKx_QSsI",
  "wnpZwt8cE6g",
  "m_RFxBUCX_U",
  "VFqOR_rQHxo",
  "xwAnLu6ssyI",
  "e1q4HpD8OfQ",
  "fF5gFIboGjc",
  "wN2JCCK0kZA",
  "F2quD2tfUNA",
  "lZJ45aYruZ0",
  "8A4xCXDmGIg",
  "VYrFtJW4ae0",
  "D13jO2nGV3Y",
  "aAkeOc_3qCs",
  "Uuqfp8fGc_Q",
  "ewEUL2pNlW4",
  "BUdnAYeoGNQ",
  "W9nqrl30vmY",
];

const projects = [
  {
    id: 1,
    title: "Nexus Rebrand",
    category: "Brand Strategy",
    result: "200% increase in brand recognition",
    description: "Complete brand overhaul for a fintech startup entering new markets.",
    videoId: videoIds[0],
  },
  {
    id: 2,
    title: "Urban Threads Campaign",
    category: "Creative Advertising",
    result: "5M+ organic impressions",
    description: "A bold fashion campaign that redefined streetwear advertising.",
    videoId: videoIds[1],
  },
  {
    id: 3,
    title: "GreenPath Digital Launch",
    category: "Digital & Social",
    result: "45% conversion rate increase",
    description: "Multi-platform launch strategy for a sustainable energy brand.",
    videoId: videoIds[2],
  },
  {
    id: 4,
    title: "Velocity Performance",
    category: "Performance Marketing",
    result: "3x ROAS improvement",
    description: "Data-driven campaign optimization for an e-commerce leader.",
    videoId: videoIds[3],
  },
];

export default function Work() {
  const [showAllVideos, setShowAllVideos] = useState(false);

  // Get remaining video IDs (after the first 4 used in projects)
  const remainingVideoIds = videoIds.slice(4);

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
                  <div className="aspect-[4/3] bg-secondary mb-6 overflow-hidden relative rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.videoId}`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
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

          {/* See More Button */}
          {!showAllVideos && (
            <div className="flex justify-center mt-12">
              <AnimatedElement delay={0.4}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllVideos(true)}
                  className="group"
                >
                  See More Videos
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </AnimatedElement>
            </div>
          )}

          {/* Additional Videos Grid */}
          {showAllVideos && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {remainingVideoIds.map((videoId, index) => (
                  <AnimatedElement key={videoId} delay={index * 0.05}>
                    <div className="group">
                      <div className="aspect-[4/3] bg-secondary overflow-hidden rounded-lg">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Video ${index + 5}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              {/* Show Less Button */}
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setShowAllVideos(false);
                    // Scroll back to the projects section
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group"
                >
                  Show Less
                  <ArrowUpRight className="ml-2 rotate-180 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}
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
