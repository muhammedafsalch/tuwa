"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-primary-500/50 bg-primary-900/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
          >
            <button
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary-400' : 'text-white'}`}>
                {item.question}
              </h3>
              <ChevronDown 
                className={`text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-primary-400' : ''}`} 
                size={20} 
              />
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
