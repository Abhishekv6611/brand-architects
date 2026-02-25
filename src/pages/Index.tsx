import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedElement } from "@/components/AnimatedText";
import QuoteSection from "@/components/QuoteSection";
import heroImage from "@/assets/hero-image.jpg";
import reelVivo from "@/assets/reels/videoplayback.1771562142561.publer.com.mp4";
import reelJos1 from "@/assets/reels/Jos_Alukkas_Film_ORCHID_Collection_Rezintra_Productions_1080P.mp4";
import reelJos2 from "@/assets/reels/Jos_Alukkas_Film_Solo_Collection_4k_Rezintra_Productions_1080P.mp4";
import reelEstilocus from "@/assets/reels/Estilocus_Henley_T-shirt_Reel_Rezintra_productions_1080P.mp4";
import reelOppoReno from "@/assets/reels/OPPO_RENO_12_ft.Aditi_Ravi_Rezintra_Productions_720P.mp4";
import reelJos3 from "@/assets/reels/Jos_Alukkas_Film_ORCHID_Collection_Tam_4k_Rezintra_Productions_1080P.mp4";

const services = [
  "Brand Strategy",
  "Creative Advertising",
  "Digital Campaigns",
  "Social Media & Content",
  "Performance Marketing",
];

type VideoCategory = "reels" | "ads" | "motion";

interface VideoItem {
  title: string;
  embedUrl: string;
  tag: string;
}

const workVideos: Record<VideoCategory, VideoItem[]> = {
  reels: [
    { title: "Reel 1", embedUrl: "https://www.youtube.com/embed/il2x8mJuV9I", tag: "Reel" },
    { title: "Reel 2", embedUrl: "https://www.youtube.com/embed/BcGRbKzdwk8", tag: "Reel" },
    { title: "Reel 3", embedUrl: "https://www.youtube.com/embed/IZ-TaJeThqk", tag: "Reel" },
    { title: "Reel 4", embedUrl: "https://www.youtube.com/embed/tZbLoHUlt-o", tag: "Reel" },
    { title: "Reel 5", embedUrl: "https://www.youtube.com/embed/jkEKWjjJ5sE", tag: "Reel" },
    { title: "Reel 6", embedUrl: "https://www.youtube.com/embed/X7oblo5bkb8", tag: "Reel" },
    { title: "Reel 7", embedUrl: "https://www.youtube.com/embed/qGTEigkRVeg", tag: "Reel" },
    { title: "Reel 8", embedUrl: "https://www.youtube.com/embed/eykK8qG1Ndo", tag: "Reel" },
    { title: "Reel 9", embedUrl: "https://www.youtube.com/embed/Hl2xBdzvGag", tag: "Reel" },
    { title: "Reel 10", embedUrl: "https://www.youtube.com/embed/lLyw4X3UGTo", tag: "Reel" },
    { title: "Reel 11", embedUrl: "https://www.youtube.com/embed/XPB1WBtrYEI", tag: "Reel" },
    { title: "Reel 12", embedUrl: "https://www.youtube.com/embed/wQblOEi6qmI", tag: "Reel" },
  ],
  ads: [
    { title: "Nexus Rebrand", embedUrl: "https://www.youtube.com/embed/DruZ0wIwfz0", tag: "Brand Strategy" },
    { title: "Urban Threads Campaign", embedUrl: "https://www.youtube.com/embed/I_xCFvovxMA", tag: "Creative Advertising" },
    { title: "GreenPath Digital Launch", embedUrl: "https://www.youtube.com/embed/kL5jKx_QSsI", tag: "Digital & Social" },
    { title: "Velocity Performance", embedUrl: "https://www.youtube.com/embed/wnpZwt8cE6g", tag: "Performance Marketing" },
    { title: "Creative Campaign 1", embedUrl: "https://www.youtube.com/embed/m_RFxBUCX_U", tag: "Ad" },
    { title: "Creative Campaign 2", embedUrl: "https://www.youtube.com/embed/VFqOR_rQHxo", tag: "Ad" },
    { title: "Creative Campaign 3", embedUrl: "https://www.youtube.com/embed/xwAnLu6ssyI", tag: "Ad" },
    { title: "Creative Campaign 4", embedUrl: "https://www.youtube.com/embed/e1q4HpD8OfQ", tag: "Ad" },
    { title: "Creative Campaign 5", embedUrl: "https://www.youtube.com/embed/fF5gFIboGjc", tag: "Ad" },
    { title: "Creative Campaign 6", embedUrl: "https://www.youtube.com/embed/wN2JCCK0kZA", tag: "Ad" },
    { title: "Creative Campaign 7", embedUrl: "https://www.youtube.com/embed/F2quD2tfUNA", tag: "Ad" },
    { title: "Creative Campaign 8", embedUrl: "https://www.youtube.com/embed/lZJ45aYruZ0", tag: "Ad" },
    { title: "Creative Campaign 9", embedUrl: "https://www.youtube.com/embed/8A4xCXDmGIg", tag: "Ad" },
    { title: "Creative Campaign 10", embedUrl: "https://www.youtube.com/embed/VYrFtJW4ae0", tag: "Ad" },
    { title: "Creative Campaign 11", embedUrl: "https://www.youtube.com/embed/D13jO2nGV3Y", tag: "Ad" },
    { title: "Creative Campaign 12", embedUrl: "https://www.youtube.com/embed/aAkeOc_3qCs", tag: "Ad" },
    { title: "Creative Campaign 13", embedUrl: "https://www.youtube.com/embed/Uuqfp8fGc_Q", tag: "Ad" },
    { title: "Creative Campaign 14", embedUrl: "https://www.youtube.com/embed/ewEUL2pNlW4", tag: "Ad" },
    { title: "Creative Campaign 15", embedUrl: "https://www.youtube.com/embed/BUdnAYeoGNQ", tag: "Ad" },
    { title: "Creative Campaign 16", embedUrl: "https://www.youtube.com/embed/W9nqrl30vmY", tag: "Ad" },
  ],
  motion: [
    { title: "Logo Animation", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Motion" },
    { title: "Explainer — How It Works", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Explainer" },
    { title: "Title Sequence", embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", tag: "Sequence" },
  ],
};

const reelItems = [
  { src: reelVivo, label: "Vivo X200" },
  { src: reelJos1, label: "Jos Alukkas" },
  { src: reelJos2, label: "Jos Alukkas" },
  { src: reelEstilocus, label: "Estilocus Henley" },
  { src: reelOppoReno, label: "Oppo Reno12" },
  { src: reelJos3, label: "Jos Alukkas" },
];

const categories: { key: VideoCategory; label: string }[] = [
  { key: "reels", label: "Reels" },
  { key: "ads", label: "Ads" },
  { key: "motion", label: "Motion Graphics" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("reels");
  const [reelPaused, setReelPaused] = useState(false);
  const [showAllWork, setShowAllWork] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
          <img
            src={heroImage}
            alt="Creative advertising"
            className="w-full h-full object-cover opacity-10"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20">
          {/* Agency label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-10"
          >
            Strategy-Led Creative Agency
          </motion.p>

          {/* Reels Infinite Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden"
          >
            {/* Inject keyframe animation */}
            <style>{`
              @keyframes reel-marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .reel-track {
                display: flex;
                gap: 16px;
                width: max-content;
                animation: reel-marquee 28s linear infinite;
              }
            `}</style>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Track: original + clone for seamless loop */}
            <div
              className="reel-track"
              style={{ animationPlayState: reelPaused ? "paused" : "running" }}
              onMouseEnter={() => setReelPaused(true)}
              onMouseLeave={() => setReelPaused(false)}
              onTouchStart={() => setReelPaused(true)}
              onTouchEnd={() => setReelPaused(false)}
              onTouchCancel={() => setReelPaused(false)}
            >
              {[...reelItems, ...reelItems].map((reel, index) => (
                <div
                  key={index}
                  style={{ flexShrink: 0, width: "190px" }}
                  className="group relative overflow-hidden rounded-2xl border border-border/30 bg-secondary/20 hover:border-foreground/40 transition-all duration-300 cursor-pointer"
                >
                  {/* Portrait 9:16 local video */}
                  <div style={{ aspectRatio: "9/16", position: "relative", overflow: "hidden" }}>
                    <video
                      src={reel.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Bottom label overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 px-3 py-3 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)" }}
                    >
                      <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium block">{reel.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tagline + CTA below carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className="body-large text-muted-foreground max-w-xl mx-auto mb-8">
              Strategy-led advertising for brands that want to matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
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

      {/* Work Showcase */}
      <section className="py-24 lg:py-40 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedElement>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Work
            </p>
            <h2 className="section-heading mb-12">Selected Work</h2>
          </AnimatedElement>

          {/* Category Tabs */}
          <AnimatedElement delay={0.1}>
            <div className="flex gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setShowAllWork(false);
                  }}
                  className={`px-6 py-3 text-sm font-heading font-medium uppercase tracking-wider border-2 transition-all duration-300 ${activeCategory === cat.key
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedElement>

          {/* Video Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-8 ${activeCategory === "reels"
              ? "grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
              : "md:grid-cols-2 lg:grid-cols-2"
              }`}
          >
            {workVideos[activeCategory].slice(0, showAllWork ? undefined : 4).map((video, index) => (
              <AnimatedElement key={`${activeCategory}-${index}`} delay={index * 0.1}>
                <div className="group">
                  <div className={`overflow-hidden mb-4 relative ${activeCategory === "reels" ? "aspect-[9/16]" : "aspect-video bg-primary/10"}`}>
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                </div>
              </AnimatedElement>
            ))}
          </motion.div>

          {workVideos[activeCategory].length > 4 && (
            <AnimatedElement delay={0.2} className="mt-12 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllWork(!showAllWork)}
              >
                {showAllWork ? "Show Less" : "Show All"}
              </Button>
            </AnimatedElement>
          )}

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
