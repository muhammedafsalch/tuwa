import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { ShieldCheck, Zap, Receipt, Compass, Award, TrendingUp } from "lucide-react";

export const metadata = {
  title: "The TUWA Difference | Core Advantage",
  description: "Discover the core advantages of partnering with Tuwa Business Solutions for your corporate setup and PRO services in Qatar.",
};

const advantages = [
  { 
    title: "Full Spectrum Compliance", 
    icon: ShieldCheck, 
    desc: "Comprehensive handling of formation, licensing, and ongoing PRO services in Qatar. We ensure your business is 100% compliant with all local regulations." 
  },
  { 
    title: "Accelerated Delivery", 
    icon: Zap, 
    desc: "Proprietary workflows that drastically reduce government processing times for commercial registrations and Certificate Attestation in Qatar." 
  },
  { 
    title: "Zero Hidden Costs", 
    icon: Receipt, 
    desc: "Transparent, upfront pricing with no unexpected service charges, hidden ministry fees, or surprise bills." 
  },
  { 
    title: "Deep Local Insight", 
    icon: Compass, 
    desc: "Over a decade of experience navigating Qatar’s unique legal, economic, and cultural landscape." 
  },
  { 
    title: "Priority Government Access", 
    icon: Award, 
    desc: "Our dedicated PRO team maintains a daily presence in all major ministries and departments, fast-tracking your applications." 
  },
  { 
    title: "Long-term Growth Support", 
    icon: TrendingUp, 
    desc: "Beyond initial setup, we provide the ongoing structural support, visa processing, and translation services needed for sustainable scaling." 
  },
];

export default function CoreAdvantagePage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Core Advantage</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              The <span className="text-gradient-premium">TUWA Difference</span>
            </h1>
            <p className="text-lg text-gray-300">
              We don't just set up companies; we build strong foundations for long-term success. Discover why leading enterprises trust Tuwa Business Solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full p-8 group hover:border-primary-500/50 transition-all hover:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(109,76,255,0.1)] group-hover:shadow-[0_0_30px_rgba(109,76,255,0.4)]">
                  <adv.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{adv.title}</h3>
                <p className="text-gray-400 leading-relaxed">{adv.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
             <GlassCard className="max-w-2xl mx-auto p-10 bg-primary-900/20 border-primary-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Experience the difference today</h3>
                <p className="text-gray-300 mb-8 relative z-10">Partner with the most reliable corporate service provider in Qatar.</p>
                <Button href="/contact" variant="primary">Get Started</Button>
             </GlassCard>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
