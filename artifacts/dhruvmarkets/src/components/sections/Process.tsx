import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We learn your goals and audit your current presence to identify opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A custom growth plan tailored specifically to your business model and target audience.",
  },
  {
    num: "03",
    title: "Design & Build",
    desc: "We create, launch, and optimize your digital assets for maximum conversion.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "Ongoing support, transparent reporting, and scaling strategies to accelerate growth.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden" data-testid="section-process">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Process</h2>
        </div>

        <div ref={ref} className="max-w-5xl mx-auto relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-800" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Node */}
                <div className="w-24 h-24 rounded-full bg-slate-800 border-[6px] border-[#0F172A] flex items-center justify-center text-2xl font-heading font-bold text-primary mb-6 relative z-10 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  {step.num}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
