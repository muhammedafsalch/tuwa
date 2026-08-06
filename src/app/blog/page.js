import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Tuwa Business Solutions",
  description: "Insights, guides, and news about business setup, PRO services, and corporate landscape in Qatar.",
};

const blogPosts = [
  {
    slug: "start-a-company-in-qatar",
    title: "How to Start a Company in Qatar: A Comprehensive Guide",
    excerpt: "Learn the step-by-step process, requirements, and legal structures available for setting up a new business in Qatar.",
    date: "October 12, 2026",
    author: "Business Setup Team",
    category: "Business Setup"
  },
  {
    slug: "business-licensing-guide",
    title: "Qatar Business Licensing Guide",
    excerpt: "Navigate the complex landscape of commercial registrations, trade licenses, and ministry approvals with ease.",
    date: "October 05, 2026",
    author: "PRO Department",
    category: "Licensing"
  },
  {
    slug: "importance-of-certified-translation",
    title: "The Importance of Certified Legal Translation in Qatar",
    excerpt: "Why professional and certified translation is crucial for your official documents, contracts, and government submissions.",
    date: "September 28, 2026",
    author: "Translation Desk",
    category: "Translation"
  },
  {
    slug: "document-attestation-process",
    title: "Demystifying the Document Attestation Process",
    excerpt: "A clear timeline and roadmap for getting your educational and commercial documents attested in Qatar.",
    date: "September 20, 2026",
    author: "Operations Team",
    category: "Attestation"
  },
  {
    slug: "debt-recovery-solutions",
    title: "Effective Debt Recovery Solutions for SMEs",
    excerpt: "Strategies and legal avenues for businesses to recover outstanding debts while maintaining professional relationships.",
    date: "September 15, 2026",
    author: "Legal Advisors",
    category: "Finance"
  },
  {
    slug: "moph-registration-guide",
    title: "MOPH Watheq Registration Guide for Medical Facilities",
    excerpt: "What clinics, pharmacies, and medical centers need to know about Ministry of Public Health compliance.",
    date: "September 02, 2026",
    author: "Healthcare Setup Team",
    category: "Healthcare"
  }
];

export default function BlogListingPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Knowledge Base</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Latest <span className="text-gradient-premium">Insights & News</span>
            </h1>
            <p className="text-lg text-gray-300">
              Expert advice, updates, and comprehensive guides on navigating the corporate landscape in Qatar.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
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
           <Button variant="outline">Load More Articles</Button>
        </div>
      </section>
    </div>
  );
}
