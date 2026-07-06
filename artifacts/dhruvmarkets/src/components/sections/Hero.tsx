import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scrollToWork = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] pt-20"
      data-testid="section-hero"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82F6]/20 rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-slate-200 text-sm font-medium backdrop-blur-sm" data-testid="trust-badge">
            <span className="flex items-center text-yellow-400">
              <Star size={14} className="fill-current" />
              <span className="ml-1 text-slate-100 font-bold">4.7</span>
            </span>
            <span>Rating · 41 Reviews</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Grow Your Business Online with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#3B82F6]">DhruvMarkets</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl"
          >
            We build tailored digital marketing strategies, stunning websites, and high-converting campaigns that scale your business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-xl text-base h-14 px-8 font-semibold shadow-lg shadow-primary/20"
              onClick={scrollToContact}
              data-testid="button-hero-start"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto rounded-xl text-base h-14 px-8 font-semibold border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={scrollToWork}
              data-testid="button-hero-work"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
