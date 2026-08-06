import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Briefcase, Building2, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Tuwa Business Solutions",
  description: "Comprehensive corporate services in Qatar including business setup, PRO services, legal translation, and document attestation.",
};

const allServices = [
  {
    slug: "business-setup",
    title: "Business Setup in Qatar",
    description: "End-to-end assistance for establishing your company, from selecting the right legal structure to acquiring commercial registrations and trade licenses.",
    icon: Building2
  },
  {
    slug: "pro-services",
    title: "PRO & Government Liaison",
    description: "Expert handling of all government-related paperwork, visas, labor quotas, and immigration processes to keep your business fully compliant.",
    icon: Briefcase
  },
  {
    slug: "legal-translation",
    title: "Certified Legal Translation",
    description: "Accurate, court-approved translation services for contracts, official documents, and legal certificates in multiple languages.",
    icon: FileText
  },
  {
    slug: "document-attestation",
    title: "Document Attestation",
    description: "Streamlined attestation for educational, personal, and commercial documents from relevant ministries and embassies.",
    icon: CheckCircle2
  },
  {
    slug: "debt-recovery",
    title: "Debt Recovery Solutions",
    description: "Professional and ethical debt collection services to help you recover outstanding payments and improve your cash flow.",
    icon: ShieldCheck
  },
  {
    slug: "immigration-services",
    title: "Immigration & Visa Services",
    description: "Comprehensive support for family visas, work permits, and investor residencies in the State of Qatar.",
    icon: Building2
  }
];

export default function ServicesListingPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Our Expertise</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Comprehensive <span className="text-gradient-premium">Corporate Solutions</span>
            </h1>
            <p className="text-lg text-gray-300">
              From initial company formation to ongoing compliance and legal support, we provide everything your business needs to succeed in Qatar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col group p-8 cursor-pointer hover:border-primary-500/30 hover:bg-white/[0.03]">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-gradient-premium group-hover:text-white transition-all duration-300">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-auto border-t border-white/5 pt-6">
                  <Link href={`/services/${service.slug}`} className="flex items-center gap-2 text-primary-400 font-medium group-hover:text-white transition-colors">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>
      
      <section className="container mx-auto px-6 relative z-10 mt-24">
        <Reveal>
          <GlassCard className="bg-primary-900/20 border-primary-500/30 text-center py-12 px-6">
             <h2 className="text-3xl font-bold text-white mb-4">Don't see what you're looking for?</h2>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Our team of experts can provide custom corporate solutions tailored to your unique requirements.</p>
             <Button href="/contact" variant="primary">Contact Us for Custom Requests</Button>
          </GlassCard>
        </Reveal>
      </section>
    </div>
  );
}
