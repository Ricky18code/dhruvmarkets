import { SiInstagram } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 pt-16 pb-8" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="col-span-1">
            <a href="#home" className="text-2xl font-heading font-bold text-white flex items-center gap-1 tracking-tight mb-4">
              <span className="text-primary">D</span>hruvMarkets
            </a>
            <p className="text-slate-400 text-sm max-w-xs">
              A premier digital marketing agency dedicated to scaling ambitious brands through innovative strategies.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:rickyrawat2008@gmail.com" className="hover:text-primary transition-colors break-all">
                  rickyrawat2008@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/rickyrawat18ag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} DhruvMarkets. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
