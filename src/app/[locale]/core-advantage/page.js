import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { ShieldCheck, Zap, Receipt, Compass, Award, TrendingUp } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['core-advantage']?.metadata;
  
  const title = dict?.title || "The TUWA Difference | Core Advantage";
  const description = dict?.description || "Discover the core advantages of partnering with Tuwa Business Solutions for your corporate setup and PRO services in Qatar.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/core-advantage`
    }
  };
}

export default async function CoreAdvantagePage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.core_advantage;
  
  // Icon mapping
  const iconMap = [ShieldCheck, Zap, Receipt, Compass, Award, TrendingUp];

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.hero?.badge || "Core Advantage"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.hero?.title_1 || "The"} <span className="text-gradient-premium">{dict?.hero?.title_2 || "TUWA Difference"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.hero?.desc || "We don't just set up companies; we build strong foundations for long-term success. Discover why leading enterprises trust Tuwa Business Solutions."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(dict?.advantages || []).map((adv, i) => {
            const Icon = iconMap[i] || ShieldCheck;
            return (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full p-8 group hover:border-primary-500/50 transition-all hover:bg-white/[0.02]">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(109,76,255,0.1)] group-hover:shadow-[0_0_30px_rgba(109,76,255,0.4)]">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">{adv.title}</h3>
                <p className="text-gray-400 leading-relaxed">{adv.desc}</p>
              </GlassCard>
            </Reveal>
          )})}
        </div>
        
        <Reveal delay={0.4}>
          <div className="mt-16 text-center">
             <GlassCard className="max-w-2xl mx-auto p-10 bg-primary-900/20 border-primary-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{dict?.cta?.title || "Experience the difference today"}</h3>
                <p className="text-gray-300 mb-8 relative z-10">{dict?.cta?.desc || "Partner with the most reliable corporate service provider in Qatar."}</p>
                <Button href={`/${locale}/contact`} variant="primary">{dict?.cta?.btn || "Get Started"}</Button>
             </GlassCard>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
