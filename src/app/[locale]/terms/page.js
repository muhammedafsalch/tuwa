import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['terms']?.metadata;
  
  const title = dict?.title || "Terms of Service | Tuwa Business Solutions";
  const description = dict?.description || "Terms of Service for Tuwa Business Solutions.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/terms`
    }
  };
}

export default async function TermsPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.terms;

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">{dict?.title || "Terms of Service"}</h1>
            <p className="text-gray-400 mb-8">{dict?.last_updated || "Last updated: August 2026"}</p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <GlassCard className="p-8 lg:p-12 prose prose-invert max-w-none">
              {(dict?.sections || []).map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  <p className="text-gray-300 mb-6">{section.desc}</p>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
