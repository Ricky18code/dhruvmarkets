import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, TrendingUp, Share2, BarChart2, Palette, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Website Design & Dev",
    description: "Custom, high-performing websites optimized for speed, aesthetics, and conversions.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Search Engine Optimization",
    description: "Rank higher on Google and drive organic, high-intent traffic to your business.",
  },
  {
    icon: <Share2 size={32} />,
    title: "Social Media Marketing",
    description: "Engaging content and community management to build a loyal audience.",
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Paid Advertising",
    description: "Data-driven Google & Meta Ads that maximize your ROI and lower acquisition costs.",
  },
  {
    icon: <Palette size={32} />,
    title: "Branding & Content",
    description: "Compelling visuals and copy that tell your brand's unique story effectively.",
  },
  {
    icon: <Server size={32} />,
    title: "Maintenance & Hosting",
    description: "Secure, reliable hosting and ongoing support so you never have to worry about downtime.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]" data-testid="section-services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-4">What We Do</h2>
          <p className="text-slate-600 text-lg">
            Comprehensive digital solutions designed to elevate your brand and drive measurable growth.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }}>
              <Card className="h-full border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 group bg-white rounded-xl">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-heading text-[#0F172A]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
