import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { CheckCircle2, MessageSquare, FileText, Briefcase, Award } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['our-process']?.metadata;
  
  const title = dict?.title || "Our Process | Tuwa Business Solutions";
  const description = dict?.description || "Learn about our streamlined corporate setup process in Qatar.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/our-process`
    }
  };
}

export default async function OurProcessPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.our_process;
  
  // Icon mapping
  const iconMap = [MessageSquare, FileText, Briefcase, CheckCircle2, Award];

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.hero?.badge || "Streamlined Journey"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.hero?.title_1 || "Our"} <span className="text-gradient-premium">{dict?.hero?.title_2 || "Corporate Process"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.hero?.desc || "We have simplified the company formation process in Qatar. From the initial idea to full operational readiness, we guide you every step of the way."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {(dict?.steps || []).map((step, index) => {
            const Icon = iconMap[index] || MessageSquare;
            return (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8 relative">
                {index !== (dict?.steps?.length || 5) - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-[-2rem] w-[2px] bg-white/10" />
                )}
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary-400 shrink-0 border-primary-500/30 z-10 relative bg-[#070B17]">
                  <Icon size={28} />
                </div>
                <GlassCard className="p-8 flex-grow group hover:border-primary-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    <span className="text-primary-500 mr-2">{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </GlassCard>
              </div>
            </Reveal>
          )})}
          
          <Reveal delay={0.6}>
            <div className="mt-16 text-center">
              <Button href={`/${locale}/contact`} variant="primary">{dict?.btn || "Start Your Journey With Us"}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
