'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone, Send } from 'lucide-react';
import Image from 'next/image';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChat = () => {
    const text = encodeURIComponent('Hello TUWA, I have a business inquiry.');
    window.open(`https://wa.me/97477323214?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-primary border-t border-white/5 px-6 py-5 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary border border-white/10">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Contact Expert</p>
            <p className="text-lg font-black text-white tracking-tight">+974 7732 3214</p>
          </div>
        </div>
        <button 
          onClick={handleChat}
          className="bg-secondary text-primary px-6 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl uppercase tracking-widest text-sm"
        >
          <MessageSquare className="w-5 h-5" /> Chat
        </button>
      </div>


      {/* Desktop Floating Button */}
      <div className="fixed bottom-10 right-10 z-[100] hidden md:block">
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-premium p-5 border border-gray-100"
            >
              <button 
                onClick={() => setShowNotification(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold overflow-hidden">
                    <Image src="/tuwa logo png-01.png" alt="TUWA Business Support Qatar" width={48} height={48} className="object-cover" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">TUWA Business Support</p>
                  <p className="text-xs text-gray-500 mt-1">Hello! How can we help you with your business setup today?</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsOpen(true);
                  setShowNotification(false);
                }}
                className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                Start Chat
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-80 bg-white rounded-[2rem] shadow-premium-hover overflow-hidden border border-gray-100"
            >
              <div className="bg-primary p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center relative">
                       <Image src="/tuwa logo png-01.png" alt="TUWA Qatar Business Excellence" width={30} height={30} className="brightness-0 invert object-contain" />
                       <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
                    </div>
                    <div>
                      <p className="font-bold">TUWA Support</p>
                      <p className="text-xs opacity-80">Typically replies in minutes</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 min-h-[150px] flex flex-col justify-end">
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-gray-700 max-w-[90%]">
                  Hi there! 👋 <br />
                  Welcome to TUWA. How can I assist you with your business services in Qatar?
                </div>
              </div>

              <div className="p-4 bg-white border-t">
                <button 
                  onClick={handleChat}
                  className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" /> Open WhatsApp Chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-premium transition-soft transform hover:scale-110 ${isOpen ? 'bg-primary' : 'bg-[#25D366]'}`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        </button>
      </div>
    </>
  );
};

export default WhatsAppChat;
