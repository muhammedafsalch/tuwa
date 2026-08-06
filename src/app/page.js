import Image from "next/image";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/animations/Reveal";
import Posters from "@/components/Posters";
import { CheckCircle2, TrendingUp, ShieldCheck, Briefcase, Users, FileText, ArrowRight, ArrowUpRight, Building2, MapPin, Phone, Mail, Clock, Award, Star, MessageCircle } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TypewriterText from "@/components/animations/TypewriterText";

const faqItems = [
  { question: "How long does company formation in Qatar take?", answer: "Typically, business setup in Qatar takes 2-4 weeks depending on the license type and ministry approvals. Our team accelerates this for Company formation qatar by handling all bureaucracy upfront." },
  { question: "What is required for legal translation in Doha?", answer: "To begin, we need the original documents or certified true copies. Our certified legal translators will process your documents to ensure they meet all governmental and judicial standards in Qatar." },
  { question: "Can you handle debt clearance for foreign entities?", answer: "Yes, we specialize in debt recovery and clearance services for both local and foreign entities operating in Qatar, utilizing ethical and legally compliant frameworks." },
  { question: "Do you offer online Hukoomi portal support?", answer: "Absolutely. We manage all Hukoomi portal requirements, including visa processing, commercial registration renewals, and computer card updates on your behalf." },
  { question: "What are the benefits of using Pro services qatar?", answer: "Outsourcing PRO services saves you time, reduces administrative overhead, ensures 100% compliance with changing labor laws, and expedites all government-related processing." },
  { question: "How does Certificate Attestation Qatar work?", answer: "We collect your documents, process them through the relevant ministries in the country of origin, and finalize the attestation at the Ministry of Foreign Affairs (MOFA) in Qatar." },
];

const testimonials = [
  { quote: "TUWA made our company formation in Qatar incredibly smooth. Their PRO team is exceptional.", name: "MICHAEL CHEN", title: "CEO, GLOBAL LOGISTICS" },
  { quote: "Best translation services in Doha. Their legal translations are fast and highly accurate.", name: "SARAH AHMED", title: "OPERATIONS DIRECTOR" },
  { quote: "Expert debt clearance support. They handled our complex legal settlements with total professionalism.", name: "ROBERT WILSON", title: "FOUNDER, TECHVENTURES" }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
                  <span className="flex h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                  <span className="text-sm font-medium text-primary-400">Trusted. Professional. Reliable.</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-white">
                  Your Trusted Partner for <br/>
                  <TypewriterText 
                    words={["Corporate Solutions", "Business Setup", "PRO Services", "Legal Translation", "Document Attestation", "Debt Recovery", "Immigration Services"]} 
                    className="text-gradient-premium"
                  /><br/>
                  in Qatar
                </h1>
                <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-10 leading-relaxed max-w-xl">
                  Helping entrepreneurs, startups, SMEs and enterprises establish and grow their business in Qatar through professional, transparent and reliable business services.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                  <Button href="/request-quote" variant="primary" className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 lg:px-8 lg:py-4">Start Your Business Today</Button>
                  <Button href="/contact" variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-6 py-3 lg:px-8 lg:py-4">Free Consultation</Button>
                </div>
              </Reveal>
            </div>

            <div className="relative mt-8 lg:mt-0 lg:h-[600px] flex items-center justify-center">
              <Reveal delay={0.4} width="100%">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/hero.png" 
                    alt="Tuwa Corporate Solutions" 
                    className="relative z-10 w-full h-full object-contain animate-float drop-shadow-2xl"
                  />
                  
                  {/* Floating Elements */}
                  <GlassCard className="absolute top-10 -left-10 p-4 !rounded-xl z-20 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">98% Success Rate</p>
                        <p className="text-xs text-gray-400">In company formations</p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  <GlassCard className="absolute bottom-10 -right-10 p-4 !rounded-xl z-20 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-500/20 p-2 rounded-lg text-primary-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">100% Compliant</p>
                        <p className="text-xs text-gray-400">Government approved</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Counters */}
      <section className="container mx-auto px-6 relative z-10">
        <GlassCard className="!p-0 overflow-hidden border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Businesses Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Reliable Support" }
            ].map((stat, i) => (
              <div key={i} className="p-8 text-center bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                <Reveal delay={i * 0.1}>
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-primary-400 font-medium">{stat.label}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Services Overview */}
      <section id="services" className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-400">Comprehensive corporate solutions designed to simplify your business operations and ensure full compliance in Qatar.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Business Setup", icon: Building2, desc: "End-to-end company formation and registration services." },
            { title: "PRO Services", icon: Users, desc: "Government liaison and documentation processing." },
            { title: "Legal Translation", icon: FileText, desc: "Certified legal translation for all official documents." },
            { title: "Document Attestation", icon: ShieldCheck, desc: "Fast and reliable attestation from relevant ministries." },
            { title: "Debt Recovery", icon: TrendingUp, desc: "Professional and compliant debt clearance services." },
            { title: "Immigration Services", icon: Briefcase, desc: "Visa processing, renewals, and labour services." },
          ].map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="group h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{service.desc}</p>
                <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-white transition-colors mt-auto">
                  Learn More <ArrowRight size={16} />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
           <Button href="/services" variant="outline">View All Services</Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative">
        <div className="absolute inset-0 bg-primary-900/10 border-y border-white/5" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose Tuwa</h2>
                <p className="text-gray-400 mb-8 text-lg">We combine deep local expertise with international standards of professionalism to deliver unmatched corporate services.</p>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Experienced Professionals", "Transparent Pricing", 
                  "Fast Processing", "Reliable Support", 
                  "Government Expertise", "End-to-End Solutions"
                ].map((feature, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent-400 shrink-0" size={20} />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
               {[
                 { title: "Trust", icon: ShieldCheck, delay: 0.2 },
                 { title: "Integrity", icon: Award, delay: 0.3 },
                 { title: "Reliable", icon: CheckCircle2, delay: 0.4 },
                 { title: "Professional", icon: Briefcase, delay: 0.5 }
               ].map((item, i) => (
                 <Reveal key={i} delay={item.delay}>
                   <div className="flex flex-col items-center justify-center p-2 sm:p-6 text-center group cursor-pointer hover:scale-110 transition-transform duration-500">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass mb-3 sm:mb-4 flex items-center justify-center text-primary-400 group-hover:bg-gradient-premium group-hover:text-white group-hover:shadow-glow transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100" />
                        <item.icon size={28} className="relative z-10 sm:w-9 sm:h-9" />
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{item.title}</h3>
                   </div>
                 </Reveal>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantage Mini Section */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Abstract Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="text-left max-w-xl z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border-primary-500/30">
                <span className="text-sm font-medium text-primary-400">Core Advantage</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">The TUWA Difference</h2>
              <p className="text-gray-300 text-lg mb-8">Full Spectrum Compliance. Accelerated Delivery. Zero Hidden Costs.</p>
              <Button href="/core-advantage" variant="primary" className="px-8 py-4 text-lg">Discover Our Advantages</Button>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary-500/30 transition-colors group h-full">
                 <ShieldCheck size={32} className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-bold text-lg">100% Secure</h4>
                 <p className="text-gray-400 text-sm">Legally compliant</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary-500/30 transition-colors group h-full">
                 <Clock size={32} className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-bold text-lg">Fast Track</h4>
                 <p className="text-gray-400 text-sm">Accelerated setup</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary-500/30 transition-colors group h-full">
                 <TrendingUp size={32} className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-bold text-lg">Growth</h4>
                 <p className="text-gray-400 text-sm">Business expansion</p>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-primary-500/30 transition-colors group h-full">
                 <Users size={32} className="text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                 <h4 className="text-white font-bold text-lg">Expert PRO</h4>
                 <p className="text-gray-400 text-sm">Dedicated team</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h4 className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-4">Client Feedback</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">CORPORATE <span className="text-gradient-premium">TRUST</span></h2>
          </Reveal>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="p-8 h-full flex flex-col group hover:border-primary-500/30">
                <div className="flex text-yellow-400 mb-6 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8 flex-grow">"{t.quote}"</p>
                <div>
                  <h4 className="text-white font-bold text-lg uppercase">{t.name}</h4>
                  <p className="text-primary-400 text-sm font-semibold uppercase">{t.title}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <h4 className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-4">Support Hub</h4>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Expert <span className="text-gradient-premium">FAQ</span></h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <FAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* Posters Showcase Section */}
      <Posters />

      {/* CTA Section */}
      <section className="container mx-auto px-6 relative z-10">
        <GlassCard className="!bg-[#070B17] border border-primary-500/20 overflow-hidden relative max-w-6xl mx-auto rounded-3xl shadow-[0_0_50px_rgba(109,76,255,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-2xl">
              <Reveal>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight uppercase leading-none">
                  Ready For
                </h2>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6 lg:mb-8 flex items-center justify-start">
                  <span className="text-gradient-premium">
                    Expansion?
                  </span>
                  <span className="w-1 h-8 sm:h-10 lg:h-14 bg-primary-400 ml-2 animate-pulse" />
                </div>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 leading-relaxed max-w-xl">
                  Connect with our corporate specialists today and take the first step towards a compliant and successful business launch in Doha.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto">
                  <a 
                    href="https://wa.me/97477323214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-premium hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <MessageCircle size={20} />
                    WHATSAPP SUPPORT
                    <ArrowUpRight size={18} />
                  </a>
                  
                  <a 
                    href="tel:+97477323214"
                    className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl border border-primary-500/30 transition-all duration-300 w-full sm:w-auto"
                  >
                    <Phone size={18} className="text-primary-400" />
                    +974 7732 3214
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Side Visual to fill blank space */}
            <div className="hidden lg:flex relative w-72 h-72 items-center justify-center">
              <Reveal delay={0.2}>
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-[80px] animate-pulse" />
                <div className="relative z-10 w-56 h-56 rounded-full border-4 border-primary-500/30 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(109,76,255,0.2)] group hover:scale-105 transition-transform duration-700">
                  <Briefcase size={80} className="text-white group-hover:scale-110 group-hover:text-primary-400 transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                </div>
                {/* Orbital elements */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-primary-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(124,58,237,0.8)]" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-10 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ animationDuration: '2s', animationDelay: '1s' }} />
              </Reveal>
            </div>
          </div>
        </GlassCard>
      </section>

    </div>
  );
}