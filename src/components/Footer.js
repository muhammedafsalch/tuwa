import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-light pt-20 pb-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="gradient-blob bg-primary-700/10 w-[500px] h-[500px] bottom-0 left-[20%]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="bg-white px-3 py-1 rounded-xl flex items-center justify-center h-14 sm:h-16 w-[150px] sm:w-[180px] overflow-hidden">
                <img 
                  src="/tuwa%20logo.png" 
                  alt="Tuwa Business Solutions" 
                  className="w-full h-full object-contain scale-[1.35]"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted. Professional. Reliable. Empowering entrepreneurs, startups, and enterprises to establish and grow in Qatar with expert corporate solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/tuwatranslations?mibextid=wwXIfr&rdid=w8KphFF9GGaHn1IW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18jKzVfiWK%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/tuwa.translations?igsh=ajBjc2Y3NTkyNWNy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-500/20 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Our Process', 'Industries We Serve', 'Careers', 'Blog'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0"></div>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                'Business Setup Qatar',
                'PRO Services',
                'Certified Legal Translation',
                'Document Attestation',
                'Debt Recovery'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0"></div>
                  <Link href="/services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">Matar Qadeem Street, Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+974 7732 3214</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@tuwabusiness.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Tuwa Business Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
