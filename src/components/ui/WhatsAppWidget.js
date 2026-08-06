"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl w-[300px] overflow-hidden"
          >
            <div className="bg-[#070B17] p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src="/tuwa%20logo.png" alt="Tuwa Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#070B17]" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">TUWA Support</h4>
                  <p className="text-xs text-gray-400">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4 bg-gray-50 h-32 flex items-end">
              <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm text-gray-800 max-w-[85%]">
                Hello! 👋 How can we help you with your business setup today?
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <a 
                href="https://wa.me/97477323214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#1ebd5b] text-white text-center font-bold py-3 rounded-xl transition-colors"
              >
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
