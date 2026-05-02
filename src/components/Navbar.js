'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ChevronRight, MapPin, Mail, Facebook, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Steps', href: '#steps' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass shadow-premium py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative z-10">
            <Image 
              src="/tuwa logo png-01.png" 
              alt="TUWA Qatar - #1 Company Formation and PRO Services Doha" 
              width={180} 
              height={60} 
              className={`transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'} object-contain`} 
            />

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`font-black text-sm uppercase tracking-[0.2em] hover:text-secondary transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+97477323214"
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-soft shadow-lg hover:shadow-premium-hover transform hover:-translate-y-1 ${
                isScrolled ? 'bg-primary text-white' : 'bg-secondary text-primary'
              }`}
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-3 rounded-2xl transition-colors ${
              isScrolled ? 'text-primary bg-primary/5' : 'text-white bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay (Off-canvas) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-md z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-primary z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-8 flex justify-between items-center border-b border-white/5">
                <Image src="/tuwa logo png-01.png" alt="TUWA Logo" width={140} height={50} className="brightness-0 invert object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white/5 text-white"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-10">
                <div className="space-y-10">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-4xl font-black text-white uppercase tracking-tighter group"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-8 h-8 text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 space-y-8">
                  <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.4em]">Connect</h4>
                  <div className="space-y-6">
                    <a href="tel:+97477323214" className="flex items-center gap-5 text-white">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="font-black text-xl">+974 7732 3214</span>
                    </a>
                    <div className="flex gap-4 pt-4">
                      <Link href="https://www.facebook.com/share/18jKzVfiWK/?mibextid=wwXIfr" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                        <Facebook className="w-6 h-6" />
                      </Link>
                      <Link href="https://www.instagram.com/tuwa.translations?igsh=ajBjc2Y3NTkyNWNy&utm_source=qr" target="_blank" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary">
                        <Instagram className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 border-t border-white/5">
                <a 
                  href="https://wa.me/97477323214"
                  target="_blank"
                  className="w-full bg-secondary text-primary py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-xl uppercase tracking-widest"
                >
                  <MessageSquare className="w-6 h-6" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};


export default Navbar;
