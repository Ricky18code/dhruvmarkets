import { FormEvent } from "react";
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(formData.get("message")?.toString() || "");
    window.location.href = `mailto:rickyrawat2008@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] relative overflow-hidden" data-testid="section-contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 bg-[#0F172A] p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Grow Your Business Online?</h2>
              <p className="text-slate-300 mb-8">
                Let's discuss how we can help you scale your brand, drive traffic, and increase revenue.
              </p>
            </div>
            
            <div className="space-y-6 relative z-10">
              <a 
                href="mailto:rickyrawat2008@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                data-testid="link-contact-email"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <span className="font-medium">rickyrawat2008@gmail.com</span>
              </a>
              
              <a 
                href="https://www.instagram.com/rickyrawat18ag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                data-testid="link-contact-instagram"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                  <SiInstagram size={18} />
                </div>
                <span className="font-medium">Follow on Instagram</span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-10 lg:p-12 bg-white">
            <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <Input id="name" name="name" placeholder="John Doe" required className="rounded-lg bg-slate-50 border-slate-200" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <Input id="email" name="email" type="email" placeholder="john@company.com" required className="rounded-lg bg-slate-50 border-slate-200" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your project..." 
                  rows={4} 
                  required 
                  className="rounded-lg bg-slate-50 border-slate-200 resize-none" 
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl text-base h-12 mt-2" data-testid="button-submit-contact">
                Send Message
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
