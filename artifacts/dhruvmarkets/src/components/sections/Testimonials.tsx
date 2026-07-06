import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "DhruvMarkets took our online presence from zero to hero. Our website bookings doubled within 3 months.",
    author: "Priya S.",
    role: "Local Restaurant Owner",
  },
  {
    quote: "Finally found an agency that actually delivers. Our Google Ads are now profitable every single month.",
    author: "Rohit M.",
    role: "E-commerce Store",
  },
  {
    quote: "Professional, responsive, and genuinely invested in our growth. Best decision we made this year.",
    author: "Anita K.",
    role: "Fitness Studio",
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="reviews" className="py-24 bg-[#F8FAFC]" data-testid="section-testimonials">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="flex items-center text-yellow-400">
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
            </span>
            <span className="text-sm font-semibold text-slate-700">4.7 from 41 reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A]">What Our Clients Say</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border-slate-200 shadow-sm bg-white rounded-xl">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex text-primary mb-6">
                    <Star size={20} className="fill-current" />
                    <Star size={20} className="fill-current" />
                    <Star size={20} className="fill-current" />
                    <Star size={20} className="fill-current" />
                    <Star size={20} className="fill-current" />
                  </div>
                  <blockquote className="text-slate-700 text-lg mb-8 flex-grow italic">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[#0F172A]">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
