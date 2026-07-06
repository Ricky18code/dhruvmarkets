import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Target, HeartHandshake, PiggyBank } from "lucide-react";

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Custom-Built Websites",
    description: "We don't do cookie-cutter templates. Every site is tailored exactly to your brand's unique needs.",
  },
  {
    icon: <Target size={28} />,
    title: "Data-Driven Strategies",
    description: "No guesswork. Our marketing campaigns are backed by deep analytics and real market insights.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Dedicated Support",
    description: "We aren't just an agency; we're your long-term growth partner, always a call or email away.",
  },
  {
    icon: <PiggyBank size={28} />,
    title: "Affordable Pricing",
    description: "Agency-quality results at startup-friendly prices. We believe great marketing should be accessible.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden" data-testid="section-why-us">
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Why DhruvMarkets?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Choosing the right agency can make or break your digital presence. We bring transparency, expertise, and a relentless focus on ROI to everything we do.
            </p>
          </div>

          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
