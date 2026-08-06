import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, FileText, CheckSquare } from "lucide-react";

export async function generateStaticParams() {
  const services = [
    "business-setup",
    "pro-services",
    "legal-translation",
    "document-attestation",
    "debt-recovery",
    "immigration-services"
  ];
  return services.map((service) => ({
    service: service,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const title = resolvedParams.service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} Services`,
    description: `Expert ${title} services in Qatar by Tuwa Business Solutions. We provide end-to-end corporate solutions, ensuring 100% compliance and accelerated delivery.`,
    keywords: `${title} Qatar, ${title} Services Doha, Best ${title} Agency Qatar, Tuwa Business Solutions, Corporate Services Qatar`,
    openGraph: {
      title: `${title} Services in Qatar | Tuwa Business Solutions`,
      description: `Expert ${title} services in Qatar. We provide end-to-end corporate solutions, ensuring 100% compliance.`,
      url: `https://tuwabusiness.com/services/${resolvedParams.service}`,
    }
  };
}

export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const { service } = resolvedParams;
  const title = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <Link href="/#services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
           <ArrowLeft size={16} /> Back to Services
        </Link>
        
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Our Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-premium">{title}</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional, reliable, and expedited {title.toLowerCase()} tailored to your specific business requirements in Qatar. Let our experts handle the complexities so you can focus on growth.
            </p>
            <div className="flex gap-4">
              <Button href="/request-quote" variant="primary">Get a Quote</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 flex flex-col gap-12">
            <Reveal delay={0.1}>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Service Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Navigating the corporate landscape in Qatar requires deep understanding of local laws, ministry regulations, and correct documentation. Our {title.toLowerCase()} are designed to provide you with a seamless experience, ensuring 100% compliance at every step.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We assign a dedicated consultant to your case who will act as your single point of contact, providing transparent updates and rapid processing times.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.2}>
              <GlassCard className="p-8 bg-primary-900/10">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "100% Legal Compliance", 
                    "Dedicated Account Manager", 
                    "Fast-tracked Processing", 
                    "Transparent Pricing Structure",
                    "End-to-End Handling",
                    "Multilingual Support"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary-400 mt-1 shrink-0" size={18} />
                      <span className="text-gray-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.3}>
              <GlassCard className="p-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="text-primary-400" size={20} /> Requirements
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><CheckSquare className="text-gray-500 mt-0.5 shrink-0" size={14} /> Valid Passport / QID Copies</li>
                  <li className="flex items-start gap-2"><CheckSquare className="text-gray-500 mt-0.5 shrink-0" size={14} /> Commercial Registration (if applicable)</li>
                  <li className="flex items-start gap-2"><CheckSquare className="text-gray-500 mt-0.5 shrink-0" size={14} /> Completed Application Forms</li>
                  <li className="flex items-start gap-2"><CheckSquare className="text-gray-500 mt-0.5 shrink-0" size={14} /> Power of Attorney (if required)</li>
                </ul>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.4}>
              <GlassCard className="p-6 bg-accent-900/10 border-accent-500/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="text-accent-400" size={20} /> Processing Time
                </h4>
                <div className="text-3xl font-bold text-white mb-2">3-5 <span className="text-lg text-gray-400 font-normal">Business Days</span></div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  *Estimated time based on standard ministry processing. Some complex cases may require additional time.
                </p>
              </GlassCard>
            </Reveal>
            
            <Reveal delay={0.5}>
               <div className="mt-4">
                  <Button href="/contact" variant="outline" className="w-full">Contact Support</Button>
               </div>
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
}
