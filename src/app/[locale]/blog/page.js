import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['blog']?.metadata;
  
  const title = dict?.title || "Blog | Tuwa Business Solutions";
  const description = dict?.description || "Insights, guides, and news about business setup, PRO services, and corporate landscape in Qatar.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/blog`
    }
  };
}

export default async function BlogListingPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.blog;

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.badge || "Knowledge Base"}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {dict?.title_1 || "Latest"} <span className="text-gradient-premium">{dict?.title_2 || "Insights & News"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.desc || "Expert advice, updates, and comprehensive guides on navigating the corporate landscape in Qatar."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(dict?.posts || []).map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link href={`/${locale}/blog/${post.slug}`} className="block h-full">
                <GlassCard className="h-full flex flex-col group p-6 cursor-pointer hover:border-primary-500/30 transition-colors">
                  <div className="mb-6 flex justify-between items-center">
                     <span className="bg-primary-500/20 text-primary-400 text-xs px-3 py-1 rounded-full font-medium">
                       {post.category}
                     </span>
                     <div className="flex items-center gap-1.5 text-xs text-gray-500">
                       <Calendar size={14} /> {post.date}
                     </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <User size={14} /> {post.author}
                    </div>
                    <div className="text-primary-400 group-hover:text-white transition-colors">
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
           <Button variant="outline">{dict?.load_more || "Load More Articles"}</Button>
        </div>
      </section>
    </div>
  );
}
