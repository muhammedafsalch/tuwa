"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="bg-white px-3 py-1 rounded-xl flex items-center justify-center h-14 sm:h-16 w-[150px] sm:w-[180px] overflow-hidden">
              <img 
                src="/tuwa%20logo.png" 
                alt="Tuwa Business Solutions" 
                className="w-full h-full object-contain scale-[1.35]"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Button href="/request-quote" variant="primary" className="py-2.5 px-6 text-sm">
              Request Quote
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-white"
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
