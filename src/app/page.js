'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  PhoneCall, 
  MapPin, 
  ChevronRight,
  MessageSquare,
  HelpCircle,
  Star,
  Quote,
  X,
  ChevronDown,
  Facebook,
  Instagram
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CostCalculator from '@/components/CostCalculator';
import WhatsAppChat from '@/components/WhatsAppChat';

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  // Block scroll when modal is open
  useEffect(() => {
    if (selectedPoster) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPoster]);

  const posters = [
    { id: 1, title: 'Legal Translation services Qatar', desc: 'Court-certified translation services in Qatar.' },
    { id: 2, title: 'Company formation qatar', desc: '100% foreign ownership company formation.' },
    { id: 3, title: 'PRO services qatar', desc: 'Expert administrative and legal support.' },
    { id: 4, title: 'Hukoomi services qatar', desc: 'Fast-track Traffic & MOI approvals.' },
    { id: 5, title: 'Certificate Attestation Qatar', desc: 'Streamlined visa and document processing.' },
    { id: 6, title: 'Debt clearance qatar', desc: 'Professional legal and commercial advice.' },
    { id: 7, title: 'Typing works', desc: 'Commercial and professional license support.' },
    { id: 8, title: 'Visa services Qatar', desc: 'Navigating Qatar\'s regulatory landscape.' },
    { id: 9, title: 'Legal advocacy', desc: 'Premium services for international investors.' },
    { id: 10, title: 'Operational Support', desc: 'Ensuring your business runs smoothly.' },
    { id: 11, title: 'Direct PRO Support', desc: 'Daily ministry and department presence.' },
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Showcase</h2>
            <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight">Expert <span className="text-secondary">Advocacy</span> & Support</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Visualizing our core services through our professional corporate portfolio, specializing in <strong>Company formation qatar</strong> and <strong>Translation services qatar</strong>.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posters.map((poster, idx) => (
            <FadeIn key={poster.id} delay={idx * 0.05}>
              <div 
                onClick={() => setSelectedPoster(poster)}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-secondary transition-soft aspect-[3/4] cursor-zoom-in"
              >
                <Image 
                  src={`/posters/${poster.id}.jpeg`} 
                  alt={poster.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-black text-2xl uppercase tracking-tight mb-2">{poster.title}</h4>
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{poster.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20 overflow-hidden"
          >
            {/* Darker Solid Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedPoster(null)}
              className="absolute inset-0 bg-black/55 backdrop-blur-sm cursor-zoom-out" 
            />
            
            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-4xl h-full flex flex-col items-center justify-center">
              
              {/* Close Button (Clearly Outside on Desktop) */}
              <motion.button 
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedPoster(null)}
                className="absolute -top-12 md:-top-16 right-0 md:-right-16 bg-red-600 text-white p-3 md:p-4 rounded-full transition-all duration-500 hover:rotate-90 hover:bg-red-700 shadow-2xl z-20"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </motion.button>
              
              {/* Image Container (Fit on Screen) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full max-h-[75vh]  md:max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40"
              >
                <Image 
                  src={`/posters/${selectedPoster.id}.jpeg`} 
                  alt={selectedPoster.title} 
                  fill 
                  className="object-contain"
                  priority
                />
              </motion.div>
              
              {/* Text Info */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
                className="mt-6 md:mt-10 text-center"
              >
                <h4 className="text-white font-black text-2xl md:text-4xl uppercase tracking-tighter mb-2">{selectedPoster.title}</h4>
                <p className="text-secondary font-black text-sm md:text-lg uppercase tracking-[0.2em]">{selectedPoster.desc}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};




const Testimonials = () => {
  const reviews = [
    { name: 'Michael Chen', role: 'CEO, Global Logistics', text: 'TUWA made our company formation in Qatar incredibly smooth. Their PRO team is exceptional.', rating: 5 },
    { name: 'Sarah Ahmed', role: 'Operations Director', text: 'Best translation services in Doha. Their legal translations are fast and highly accurate.', rating: 5 },
    { name: 'Robert Wilson', role: 'Founder, TechVentures', text: 'Expert debt clearance support. They handled our complex legal settlements with total professionalism.', rating: 5 },
  ];

  return (
    <section className="py-24 bg-primary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Client Feedback</h2>
            <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight text-center">Corporate <span className="text-secondary">Trust</span></h3>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((rev, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:border-secondary transition-soft relative group">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-secondary opacity-20" />
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">&quot;{rev.text}&quot;</p>
                <div>
                  <p className="text-white font-black uppercase tracking-tight text-xl">{rev.name}</p>
                  <p className="text-secondary text-sm font-bold uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    { 
      q: 'How long does company formation in Qatar take?', 
      a: 'Typically, business setup in Qatar takes 2-4 weeks depending on the license type and ministry approvals. Our team accelerates this for <strong>Company formation qatar</strong> by handling all bureaucracy upfront.' 
    },
    { 
      q: 'What is required for legal translation in Doha?', 
      a: 'We require the original document and identity proofs. Our <strong>Translation services qatar</strong> are court-certified and accepted by all Qatari ministries and embassies.' 
    },
    { 
      q: 'Can you handle debt clearance for foreign entities?', 
      a: 'Yes, our <strong>Debt clearance qatar</strong> team specializing in commercial advocacy handles complex financial settlements for international firms and local entities.' 
    },
    { 
      q: 'Do you offer online Hukoomi portal support?', 
      a: 'Absolutely. We manage all <strong>Hukoomi services qatar</strong>, including e-government applications, portal registrations, and digital document filings for Traffic & MOI.' 
    },
    { 
      q: 'What are the benefits of using Pro services qatar?', 
      a: 'Using professional <strong>Pro services qatar</strong> ensures compliance with labor laws, faster visa processing, and avoids costly penalties for document delays.' 
    },
    { 
      q: 'How does Certificate Attestation Qatar work?', 
      a: 'Our <strong>Certificate Attestation Qatar</strong> service covers educational, marriage, and birth certificates, managing the process from MOFA to embassy approvals.' 
    },
  ];

  return (
    <section className="py-24 bg-primary border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Support Hub</h2>
            <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight">Expert <span className="text-secondary">FAQ</span></h3>
          </FadeIn>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  activeIndex === idx ? 'bg-white/10 border-secondary shadow-2xl' : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                  className="w-full p-8 md:p-10 flex items-center justify-between text-left"
                >
                  <div className="flex items-start gap-6">
                    <HelpCircle className={`w-8 h-8 shrink-0 transition-colors duration-500 ${activeIndex === idx ? 'text-secondary' : 'text-gray-500'}`} />
                    <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                      {faq.q}
                    </h4>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === idx ? 'bg-secondary text-primary rotate-180' : 'bg-white/5 text-white'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-10 pb-10 md:px-24 md:pb-12 border-t border-white/5 pt-8">
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function Home() {
  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Hello, I would like to get in touch with TUWA Services.');
    window.open(`https://wa.me/97477323214?text=${text}`, '_blank');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TUWA Translation & Business Services Qatar",
    "image": "https://www.tuwatranslations.com/tuwa%20logo%20png-01.png",
    "@id": "https://www.tuwatranslations.com",
    "url": "https://www.tuwatranslations.com",
    "telephone": "+974 7732 3214",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Matar Qadeem Street",
      "addressLocality": "Doha",
      "addressRegion": "Doha",
      "postalCode": "00000",
      "addressCountry": "QA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2854,
      "longitude": 51.5310
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/18jKzVfiWK/?mibextid=wwXIfr",
      "https://www.instagram.com/tuwa.translations?igsh=ajBjc2Y3NTkyNWNy&utm_source=qr"
    ],
    "description": "Leading provider of Company formation qatar, Translation services qatar, Debt clearance, PRO services, Hukoomi services, and Certificate Attestation Qatar."
  };

  return (
    <div className="bg-primary text-white font-poppins selection:bg-secondary selection:text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      
      <main>
        <Hero />
        
        <Services />

        <About />

        <Posters />


        {/* 3 Simple Steps Section */}
        <section id="steps" className="py-24 sm:py-32 bg-primary overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                <FadeIn direction="right">
                  <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 text-center lg:text-left">The Strategy</h2>
                  <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-12 leading-tight uppercase tracking-tight text-center lg:text-left">
                    Your Path to <br /> <span className="text-secondary">Excellence</span>
                  </h3>
                  
                  <div className="space-y-12">
                    {[
                      { title: 'Strategic Consultation', desc: 'We analyze your business goals to recommend the perfect legal structure for <strong>Company formation qatar</strong>.' },
                      { title: 'Documentation & Approval', desc: 'Our PRO team handles all ministry interactions, document attestation, and <strong>Hukoomi services qatar</strong>.' },
                      { title: 'Operational Launch', desc: 'Finalize your corporate bank account and begin operations with our <strong>Pro services qatar</strong>.' }
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-10 group">
                        <div className="shrink-0 w-20 h-20 rounded-3xl bg-white/5 text-secondary border border-white/10 flex items-center justify-center font-black text-3xl group-hover:bg-secondary group-hover:text-primary transition-all duration-500 shadow-2xl">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h4>
                          <p className="text-gray-400 leading-relaxed text-xl" dangerouslySetInnerHTML={{ __html: step.desc }}></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <FadeIn direction="left">
                  <div className="relative rounded-[4rem] overflow-hidden shadow-premium h-[800px] w-full border-[1px] border-white/10">
                    <Image 
                      src="/images/qatar.jpeg" 
                      alt="TUWA Excellence" 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>

                    <div className="absolute bottom-12 left-12 right-12">
                      <div className="glass-dark p-10 rounded-[3rem] border-white/10">
                        <p className="text-white text-2xl font-black uppercase tracking-tight leading-relaxed">
                          &quot;TUWA is the catalyst for business transformation in Qatar.&quot;
                        </p>
                        <div className="mt-8 flex items-center gap-6">
                           <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary font-black">TTS</div>
                           <div>
                              <p className="text-white font-black uppercase tracking-widest">Global Partners</p>
                              <p className="text-secondary text-sm font-bold uppercase tracking-[0.2em]">Strategic Excellence</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <CostCalculator />

        <Testimonials />

        <FAQ />

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 sm:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <FadeIn>
                <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Core Advantage</h2>
                <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight">The TUWA Difference</h3>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
              {[
                { title: 'Full Spectrum Compliance', desc: 'Comprehensive handling of formation, licensing, and ongoing <strong>PRO services qatar</strong>.' },
                { title: 'Accelerated Delivery', desc: 'Proprietary workflows that reduce government processing times for <strong>Certificate Attestation Qatar</strong>.' },
                { title: 'Zero Hidden Costs', desc: 'Transparent, upfront pricing with no unexpected service charges or fees.' },
                { title: 'Deep Local Insight', desc: 'Over a decade of experience navigating Qatar’s unique legal and cultural landscape.' },
                { title: 'Priority Government Access', desc: 'Dedicated PRO team with daily presence in all major ministries and departments.' },
                { title: 'Long-term Growth Support', desc: 'Beyond setup, we provide the structural support needed for sustainable scaling.' },
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col gap-8 group text-center md:text-left">
                    <div className="w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 shadow-xl">
                      <CheckCircle2 className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 sm:py-32 bg-primary relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-premium border border-white/5">
              <div className="absolute inset-0 bg-white/5"></div>
              
              <div className="relative z-10 text-center">
                <FadeIn>
                  <h2 className="text-4xl md:text-8xl font-black text-white mb-10 leading-[1] uppercase tracking-tighter">Ready for <br /> <span className="text-secondary">Expansion?</span></h2>
                  <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                    Connect with our corporate specialists today and take the first step towards a compliant and successful business launch in Doha.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-8">
                    <button 
                      onClick={handleWhatsAppChat}
                      className="bg-secondary hover:bg-secondary-hover text-primary px-12 py-6 rounded-3xl font-black transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-4 text-xl uppercase tracking-widest"
                    >
                       WhatsApp Support
                    </button>
                    <a 
                      href="tel:+97477323214"
                      className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-12 py-6 rounded-3xl font-black transition-all backdrop-blur-md flex items-center justify-center gap-4 text-xl uppercase tracking-widest"
                    >
                      <PhoneCall className="w-6 h-6 text-secondary" /> +974 7732 3214
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-gray-500 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Image src="/tuwa logo png-01.png" alt="TUWA Logo" width={220} height={80} className="mb-10 brightness-0 invert object-contain" />
              <p className="mb-12 text-lg leading-relaxed text-gray-400">
                TUWA Translation & Services is the premier corporate service provider in Qatar, empowering entrepreneurs and enterprises through expert legal and administrative solutions.
              </p>
              <p className="text-secondary font-black uppercase tracking-widest text-sm mb-8">Powered By Tawa Trading and Services WLL</p>
              <div className="flex gap-6">
                <Link href="https://www.facebook.com/share/18jKzVfiWK/?mibextid=wwXIfr" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary transition-all duration-500">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/tuwa.translations?igsh=ajBjc2Y3NTkyNWNy&utm_source=qr" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-secondary hover:border-secondary transition-all duration-500">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-black mb-10 uppercase tracking-[0.2em]">Solutions</h4>
              <ul className="space-y-6 text-lg font-bold">
                <li><Link href="#" className="hover:text-secondary transition-colors uppercase tracking-tight">Company Formation qatar</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors uppercase tracking-tight">Pro services qatar</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors uppercase tracking-tight">Translation services qatar</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors uppercase tracking-tight">Hukoomi services qatar</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-black mb-10 uppercase tracking-[0.2em]">Network</h4>
              <ul className="space-y-6 text-lg font-bold">
                <li><Link href="#about" className="hover:text-white transition-colors uppercase tracking-tight">Why TUWA?</Link></li>
                <li><Link href="#steps" className="hover:text-white transition-colors uppercase tracking-tight">Our Process</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors uppercase tracking-tight">Connect Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-black mb-10 uppercase tracking-[0.2em]">Contact</h4>
              <ul className="space-y-8 text-lg font-bold">
                <li className="flex items-start gap-5">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-gray-300 uppercase tracking-tight">Matar Qadeem Street, <br /> Doha, Qatar</span>
                </li>
                <li className="flex items-center gap-5">
                  <PhoneCall className="w-6 h-6 text-secondary shrink-0" />
                  <a href="tel:+97477323214" className="hover:text-white transition-colors text-white">+974 7732 3214</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-600">© {new Date().getFullYear()} TUWA Qatar. Strategic Corporate Partners.</p>
            <div className="flex items-center gap-10 text-xs font-black uppercase tracking-widest text-gray-600">
              <Link href="#" className="hover:text-secondary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-secondary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>


      <WhatsAppChat />
    </div>
  );
}