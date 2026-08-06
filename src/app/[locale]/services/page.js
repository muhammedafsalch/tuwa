import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Briefcase, Building2, FileText, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['services']?.metadata;
  
  const title = dict?.title || "Our Services | Tuwa Business Solutions";
  const description = dict?.description || "Comprehensive corporate services in Qatar including business setup, PRO services, legal translation, and document attestation.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/services`
    }
  };
}

const iconsMap = {
  "business-setup": Building2,
  "pro-services": Briefcase,
  "legal-translation": FileText,
  "document-attestation": CheckCircle2,
  "debt-recovery": ShieldCheck,
  "immigration-services": Building2
};

export default async function ServicesListingPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.services_overview;

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.badge || "Our Expertise"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.title_1 || "Comprehensive"} <span className="text-gradient-premium">{dict?.title_2 || "Corporate Solutions"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.desc || "From initial company formation to ongoing compliance and legal support, we provide everything your business needs to succeed in Qatar."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict?.services?.map((service, i) => {
            const Icon = iconsMap[service.slug];
            return (
              <Reveal key={service.slug} delay={i * 0.1}>
                <GlassCard className="h-full flex flex-col group p-8 cursor-pointer hover:border-primary-500/30 hover:bg-white/[0.03]">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-gradient-premium group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto border-t border-white/5 pt-6">
                    <Link href={`/${locale}/services/${service.slug}`} className="flex items-center gap-2 text-primary-400 font-medium group-hover:text-white transition-colors">
                      {dict?.learn_more || "Learn More"} <ArrowRight size={16} />
                    </Link>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </section>
      
      <section className="container mx-auto px-6 relative z-10 mt-24">
        <Reveal>
          <GlassCard className="bg-primary-900/20 border-primary-500/30 text-center py-12 px-6">
             <h2 className="text-3xl font-bold text-white mb-4">{dict?.custom_title || "Don't see what you're looking for?"}</h2>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{dict?.custom_desc || "Our team of experts can provide custom corporate solutions tailored to your unique requirements."}</p>
             <Button href={`/${locale}/contact`} variant="primary">{dict?.custom_btn || "Contact Us for Custom Requests"}</Button>
          </GlassCard>
        </Reveal>
      </section>
    </div>
  );
}
