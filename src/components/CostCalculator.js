'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, HelpCircle } from 'lucide-react';

const CostCalculator = () => {
  const [activeTab, setActiveTab] = useState('debt'); // debt, formation, pro, translation
  const scrollRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 200;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const services = {
    debt: [
      { id: 10, label: 'Bank Debt Settlement' },
      { id: 11, label: 'Commercial Clearances' },
      { id: 12, label: 'Legal Liability Resolution' },
      { id: 13, label: 'Strategic Financial Advisory' },
    ],
    formation: [
      { id: 1, label: 'LLC Company Registration' },
      { id: 3, label: 'Tax Card Registration' },
      { id: 14, label: 'Trade License Renewal' },
    ],
    pro: [
      { id: 4, label: 'New Work Visa Processing' },
      { id: 5, label: 'Visa Renewal (RP)' },
      { id: 6, label: 'Health Insurance Setup' },
    ],
    translation: [
      { id: 7, label: 'Legal Document Translation' },
      { id: 8, label: 'Commercial Contract Translation' },
      { id: 9, label: 'MOI Attestation Support' },
    ]
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/5 rounded-[4rem] p-8 md:p-16 shadow-premium border border-white/5">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Info */}
            <div className="lg:w-1/2">
              <div className="w-20 h-20 rounded-[2rem] bg-secondary text-primary flex items-center justify-center mb-8 shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight uppercase tracking-tight">
                Strategic <br /> <span className="text-secondary">Service Inquiry</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Select a category to explore our specialized corporate solutions. We provide tailored strategies for your business success in Qatar.
              </p>
              
              <ul className="space-y-6">
                {['Expert Support', 'Tailored Business Strategies', 'Dedicated Account Partners'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-black text-lg uppercase tracking-tight">
                    <CheckCircle2 className="w-6 h-6 text-secondary" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-16 p-8 glass-dark rounded-3xl border-white/5">
                <div className="flex items-start gap-5">
                  <HelpCircle className="w-8 h-8 text-secondary shrink-0 mt-1" />
                  <p className="text-lg text-gray-300">
                    <span className="font-black text-white uppercase tracking-tight block mb-2">Need a custom strategy?</span> Our experts can provide a detailed roadmap for your specific business requirements within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Selection */}
            <div className="lg:w-1/2 bg-white/5 rounded-[4rem] p-12 shadow-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10">
                <div className="relative mb-12 flex items-center gap-2">
                  <button 
                    onClick={() => scroll('left')}
                    className="p-3 rounded-xl bg-primary/80 border border-white/10 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 z-10 shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div 
                    ref={scrollRef}
                    className="flex-1 flex bg-primary/80 p-2 rounded-2xl border border-white/10 backdrop-blur-md overflow-x-auto custom-scrollbar no-scrollbar-buttons"
                  >
                    {Object.keys(services).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-5 px-6 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                          activeTab === tab ? 'bg-secondary text-primary shadow-2xl scale-[1.02]' : 'text-gray-500 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => scroll('right')}
                    className="p-3 rounded-xl bg-primary/80 border border-white/10 text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 z-10 shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 mb-16">
                  {services[activeTab].map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-between items-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-secondary hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group/item"
                    >
                      <span className="font-black text-white uppercase tracking-tight text-lg">{item.label}</span>
                      <ChevronRight className="text-secondary w-6 h-6 group-hover/item:translate-x-2 transition-transform" />
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-secondary hover:bg-secondary-hover text-primary py-8 rounded-[2rem] font-black flex items-center justify-center gap-4 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-2xl uppercase tracking-widest"
                >
                  Inquire Now <ChevronRight className="w-8 h-8" />
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-10 font-black uppercase tracking-[0.3em]">
                  *Premium Strategic Corporate Data
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


export default CostCalculator;
