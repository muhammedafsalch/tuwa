'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, Globe, Phone, Mail, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Hello, I would like to get in touch with TUWA Services.');
    window.open(`https://wa.me/97477323214?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/qatar.jpeg" 
          alt="TUWA Business Excellence" 
          fill 
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary blur-[150px] opacity-20 animate-pulse"></div>
              <Image 
                src="/tuwa logo png-01.png" 
                alt="TUWA Logo" 
                width={500} 
                height={180} 
                className="relative z-10 brightness-0 invert object-contain w-[300px] md:w-[500px] transition-all duration-1000 group-hover:scale-105" 
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-9xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            Strategic <br /> <span className="text-secondary">Partnership</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 font-bold mb-16 tracking-tight max-w-3xl mx-auto leading-relaxed">
            Empowering global enterprises with premium <strong>Company formation qatar</strong>, <strong>Debt clearance services</strong>, and elite <strong>Pro services qatar</strong>.
          </p>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <button 
              onClick={handleWhatsAppChat}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover text-primary px-16 py-6 rounded-[2rem] font-black transition-all duration-500 shadow-premium hover:shadow-premium-hover transform hover:-translate-y-2 flex items-center justify-center gap-4 text-2xl uppercase tracking-widest"
            >
              Get Started
            </button>
          </div>
        </motion.div>


        {/* Feature Boxes - Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-auto pb-10">
          {[
            { title: 'Stress Free Licensing', icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
            { title: 'Streamlined Operations', icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
            { title: 'Professional Support', icon: <CheckCircle2 className="w-6 h-6 text-secondary" /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
              className="glass-dark border-white/5 p-8 rounded-3xl flex items-center gap-5 hover:bg-white/5 transition-soft cursor-default group"
            >
              <div className="w-12 h-12 rounded-full border-2 border-secondary/30 flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                {item.icon}
              </div>
              <span className="text-white font-black text-xl text-left uppercase tracking-tight leading-tight">{item.title}</span>
            </motion.div>
          ))}
        </div>


        {/* Bottom Contact Info - Matching Reference */}
        <div className="w-full max-w-5xl flex flex-wrap justify-center md:justify-between items-center gap-8 py-8 border-t border-white/10 text-white/80">
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-5 h-5 text-secondary" />
            <span className="font-bold">+974 7732 3214</span>
          </div>
          <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-secondary" />
            <span className="font-bold">tuwatranslations@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs tracking-widest uppercase opacity-40">
            <span>Premium Business Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

