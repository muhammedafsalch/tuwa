import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Building2, ShoppingBag, Stethoscope, Laptop, Wrench, Coffee } from "lucide-react";

export const metadata = {
  title: "Industries We Serve | Tuwa Business Solutions",
  description: "Specialized corporate solutions for various industries in Qatar.",
};

const industries = [
  { title: "Real Estate & Construction", icon: Building2, desc: "Navigating complex contracting regulations, engineering classifications, and property management licensing." },
  { title: "Retail & E-Commerce", icon: ShoppingBag, desc: "Securing commercial spaces, import/export licenses, and digital payment gateway approvals." },
  { title: "Healthcare & Medical", icon: Stethoscope, desc: "Managing Ministry of Public Health (MoPH) approvals for clinics, pharmacies, and medical equipment suppliers." },
  { title: "Technology & IT", icon: Laptop, desc: "Setting up software development firms, IT consultancies, and cybersecurity companies in tech-zones." },
  { title: "Manufacturing & Industrial", icon: Wrench, desc: "Assisting with industrial licenses, environmental permits, and factory land allocation in industrial areas." },
  { title: "Hospitality & F&B", icon: Coffee, desc: "Handling food control approvals, municipality permits, and civil defense compliance for restaurants and cafes." },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Industry Expertise</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Industries We <span className="text-gradient-premium">Serve</span>
            </h1>
            <p className="text-lg text-gray-300">
              Qatar's diverse economy requires specialized knowledge. We possess deep regulatory expertise across all major sectors to ensure your business starts on a solid foundation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full p-8 group hover:border-primary-500/50 transition-all hover:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <ind.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{ind.title}</h3>
                <p className="text-gray-400 leading-relaxed">{ind.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
             <GlassCard className="max-w-2xl mx-auto p-10 bg-primary-900/20 border-primary-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Have a unique business model?</h3>
                <p className="text-gray-300 mb-8">We have experience setting up highly specialized and niche companies. Let's discuss your specific requirements.</p>
                <Button href="/contact" variant="primary">Discuss Your Project</Button>
             </GlassCard>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
