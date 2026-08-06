import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateStaticParams() {
  const slugs = [
    "start-a-company-in-qatar",
    "business-licensing-guide",
    "importance-of-certified-translation",
    "document-attestation-process",
    "debt-recovery-solutions",
    "moph-watheq-registration"
  ];
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Tuwa Business Blog`,
    description: `Read the latest insights and expert guides on ${title} in Qatar by Tuwa Business Solutions. Your trusted corporate partner.`,
    keywords: `${title}, Business Setup Qatar, PRO Services Qatar, Company Formation Qatar, Corporate Guide Doha`,
    openGraph: {
      title: `${title} | Tuwa Business Blog`,
      description: `Read the latest insights and expert guides on ${title} in Qatar.`,
      url: `https://tuwabusiness.com/blog/${resolvedParams.slug}`,
    }
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.blog_details;
  const blogContent = dict?.content || {};
  
  const post = blogContent[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "Recent",
    author: "Tuwa Team",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    content: `<p class="lead text-xl text-gray-300">Content for this article is being updated. Please check back later.</p>`
  };

  // Select two random articles for the "You may also like" section
  const allSlugs = Object.keys(blogContent).filter(s => s !== slug);
  const relatedSlugs = allSlugs.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
           <ArrowLeft size={16} /> {dict?.back || "Back to Blog"}
        </Link>
        
        <Reveal>
          <div className="mb-6 flex gap-4 text-sm text-gray-400 border-b border-white/10 pb-6">
             <div className="flex items-center gap-1.5"><Calendar size={16} className="text-primary-400" /> {post.date}</div>
             <div className="flex items-center gap-1.5"><User size={16} className="text-primary-400" /> {post.author}</div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-white">
            {post.title}
          </h1>
        </Reveal>

        {post.image && (
          <Reveal delay={0.1}>
            <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-12 relative border border-white/10">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#070B17] to-transparent opacity-80" />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="prose prose-invert prose-lg lg:prose-xl max-w-none prose-headings:text-white prose-a:text-primary-400 prose-blockquote:border-primary-500 prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:font-normal prose-blockquote:not-italic mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-between items-center py-8 border-t border-b border-white/10 mb-16">
             <div className="text-white font-bold text-xl">{dict?.share || "Share this insight"}</div>
             <div className="flex gap-4">
               <button className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:bg-primary-500 hover:text-white transition-all shadow-[0_0_15px_rgba(109,76,255,0.1)] hover:shadow-[0_0_30px_rgba(109,76,255,0.4)]">
                  <Share2 size={20} />
               </button>
             </div>
          </div>
        </Reveal>

        {/* You may also like */}
        <Reveal delay={0.4}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">{dict?.related || "You may also like this"}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedSlugs.map((relatedSlug) => {
                const relatedPost = blogContent[relatedSlug];
                if (!relatedPost) return null;
                return (
                  <Link href={`/${locale}/blog/${relatedSlug}`} key={relatedSlug} className="block h-full">
                    <GlassCard className="h-full flex flex-col group p-6 cursor-pointer hover:border-primary-500/30 transition-colors">
                      <div className="w-full h-40 rounded-xl overflow-hidden mb-6 relative">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                        <Calendar size={14} /> {relatedPost.date}
                      </div>
                    </GlassCard>
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="text-center bg-primary-900/10 border border-primary-500/20 p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">{dict?.cta_title || "Need help with your business?"}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{dict?.cta_desc || "Get in touch with our experts today for a free consultation and personalized roadmap for your corporate needs in Qatar."}</p>
            <Button href={`/${locale}/request-quote`} variant="primary">{dict?.cta_btn || "Request a Free Consultation"}</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
