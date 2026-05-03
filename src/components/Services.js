'use client';

import { motion } from 'framer-motion';
import { 
  BriefcaseBusiness, 
  Users2, 
  FileText, 
  BadgeCheck, 
  MonitorSmartphone, 
  Stamp,
  Globe2,
  FileSpreadsheet,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Debt clearance qatar',
    icon: <BadgeCheck className="w-8 h-8" />,
    desc: 'Strategic financial and legal support for debt settlement, bank clearances, and commercial liability resolution.',
    color: 'bg-primary'
  },
  {
    title: 'Company formation qatar',
    icon: <BriefcaseBusiness className="w-8 h-8" />,
    desc: 'Seamless business setup, LLC formation, and commercial license acquisition in Doha.',
    color: 'bg-primary'
  },
  {
    title: 'PRO Services Qatar',
    icon: <Users2 className="w-8 h-8" />,
    desc: 'Complete PRO solutions including visa processing, license renewals, and government relations.',
    color: 'bg-primary'
  },
  {
    title: 'Legal Translation services Qatar',
    icon: <FileText className="w-8 h-8" />,
    desc: 'Certified and court-approved translations for all legal, medical, and commercial documents.',
    color: 'bg-primary'
  },
  {
    title: 'Hukoomi services qatar',
    icon: <MonitorSmartphone className="w-8 h-8" />,
    desc: 'Expert assistance with the Hukoomi e-government portal and online application systems.',
    color: 'bg-primary'
  },
  {
    title: 'Certificate Attestation Qatar',
    icon: <Stamp className="w-8 h-8" />,
    desc: 'Fast-track attestation for educational, birth, and marriage certificates from all ministries.',
    color: 'bg-primary'
  },
  {
    title: 'Visa services Qatar',
    icon: <Globe2 className="w-8 h-8" />,
    desc: 'Comprehensive support for business visas, work permits, and family residency in Qatar.',
    color: 'bg-primary'
  },
  {
    title: 'Typing Works',
    icon: <FileSpreadsheet className="w-8 h-8" />,
    desc: 'Professional document preparation and typing services for all official Qatar ministry requirements.',
    color: 'bg-primary'
  },
];


const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 leading-tight uppercase tracking-tight">
              Elite Corporate <br /> <span className="text-secondary">Solutions</span>
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              We provide comprehensive support for every stage of your business journey, specializing in <strong>Company formation qatar</strong>, <strong>Translation services qatar</strong>, <strong>Debt clearance services</strong>, and <strong>Pro services qatar</strong>.
            </p>

          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group bg-white/5 rounded-4xl p-10 shadow-premium hover:shadow-premium-hover transition-soft border border-white/5 flex flex-col h-full relative overflow-hidden">
                {/* Hover Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-secondary/10"></div>
                
                <div className={`w-20 h-20 rounded-2xl bg-primary border border-white/10 text-secondary flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-500`}>
                  {srv.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-secondary transition-colors uppercase tracking-tight">{srv.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-10 flex-grow text-lg">
                  {srv.desc}
                </p>
                
                <Link 
                  href="#contact" 
                  className="inline-flex items-center font-black text-secondary hover:text-white transition-colors group/link text-lg uppercase tracking-widest"
                >
                  Explore <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;

