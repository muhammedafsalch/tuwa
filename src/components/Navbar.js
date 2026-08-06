"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Button from "./ui/Button";

export default function Navbar({ dict, locale }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Generate localized path for switching languages
  const getLocalizedPath = (targetLocale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  const navLinks = [
    { name: dict?.services || "Services", href: `/${locale}/#services` },
    { name: dict?.about_us || "About Us", href: `/${locale}/about-us` },
    { name: dict?.blog || "Blog", href: `/${locale}/blog` },
    { name: dict?.contact || "Contact", href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href={`/${locale}`} className="relative z-50 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="px-3 py-1 rounded-xl flex items-center justify-center h-14 sm:h-16 w-[150px] sm:w-[180px] overflow-hidden">
              <img 
                src="/new%20tuwa%20logo.png" 
                alt="Tuwa Business Solutions" 
                className={`w-full h-full object-contain scale-[1.35] transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors text-sm font-bold tracking-wide ${
                  scrolled ? "text-gray-800 hover:text-primary-600" : "text-gray-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button href={`/${locale}/request-quote`} variant="primary" className="py-2.5 px-6 text-sm">
              {dict?.request_quote || "Request Quote"}
            </Button>

            {/* Language Switcher */}
            <div className="relative z-50 ml-4">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 transition-colors ${
                  scrolled ? "text-gray-800 hover:text-primary-600" : "text-gray-300 hover:text-white"
                }`}
              >
                <Globe size={20} />
                <span className="text-sm font-bold uppercase">{locale}</span>
              </button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 py-2 w-36 bg-[#0B1120] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'ar', label: 'العربية' },
                      { code: 'ml', label: 'മലയാളം' }
                    ].map((lang) => (
                      <Link 
                        key={lang.code}
                        href={getLocalizedPath(lang.code)}
                        onClick={() => setLangDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${locale === lang.code ? 'text-primary-400 font-bold bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                      >
                        {lang.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden relative z-50 p-2 ${scrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
            className="fixed inset-0 z-40 bg-background-light flex flex-col justify-center px-6"
          >
            {/* Background elements for mobile menu */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
              <div className="gradient-blob bg-primary-600/30 w-[300px] h-[300px] top-[10%] right-[-100px]" />
              <div className="gradient-blob bg-accent-500/20 w-[400px] h-[400px] bottom-[10%] left-[-150px] animation-delay-2000" />
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl sm:text-5xl font-bold text-white block hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * navLinks.length + 0.2 }}
                className="mt-8"
              >
                <Button href="/request-quote" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  Request a Quote
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
