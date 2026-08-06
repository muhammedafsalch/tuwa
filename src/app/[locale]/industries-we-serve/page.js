import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Building2, ShoppingBag, Stethoscope, Laptop, Wrench, Coffee } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['industries-we-serve']?.metadata;
  
  const title = dict?.title || "Industries We Serve | Tuwa Business Solutions";
  const description = dict?.description || "Specialized corporate solutions for various industries in Qatar.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/industries-we-serve`
    }
  };
}

export default async function IndustriesPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.industries;
  
  // Icon mapping
  const iconMap = [Building2, ShoppingBag, Stethoscope, Laptop, Wrench, Coffee];

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.hero?.badge || "Industry Expertise"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.hero?.title_1 || "Industries We"} <span className="text-gradient-premium">{dict?.hero?.title_2 || "Serve"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.hero?.desc || "Qatar's diverse economy requires specialized knowledge. We possess deep regulatory expertise across all major sectors to ensure your business starts on a solid foundation."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(dict?.items || []).map((ind, i) => {
            const Icon = iconMap[i] || Building2;
            return (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full p-8 group hover:border-primary-500/50 transition-all hover:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{ind.title}</h3>
                <p className="text-gray-400 leading-relaxed">{ind.desc}</p>
              </GlassCard>
            </Reveal>
          )})}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
             <GlassCard className="max-w-2xl mx-auto p-10 bg-primary-900/20 border-primary-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">{dict?.cta?.title || "Have a unique business model?"}</h3>
                <p className="text-gray-300 mb-8">{dict?.cta?.desc || "We have experience setting up highly specialized and niche companies. Let's discuss your specific requirements."}</p>
                <Button href={`/${locale}/contact`} variant="primary">{dict?.cta?.btn || "Discuss Your Project"}</Button>
             </GlassCard>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
