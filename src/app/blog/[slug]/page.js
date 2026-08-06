import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";

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

const blogContent = {
  "start-a-company-in-qatar": {
    title: "How to Start a Company in Qatar: A Comprehensive Guide",
    date: "October 12, 2026",
    author: "Business Setup Team",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">Setting up a business in Qatar is a strategic move for any entrepreneur looking to tap into a rapidly growing economy, bolstered by massive infrastructure projects and a strategic location in the Middle East. This comprehensive guide covers the essential steps, documentation, and regulatory landscape required to launch your enterprise successfully.</p>
        
        <h2>1. Understand the Economic Landscape and Legal Framework</h2>
        <p>Qatar's economy is highly dynamic, transitioning rapidly from a hydrocarbon-dependent state to a diversified, knowledge-based economy aligned with the Qatar National Vision 2030. Before initiating the setup process, it's crucial to understand the Foreign Capital Investment Law, which recently underwent significant reforms. While historically, foreign investors were restricted to a maximum 49% stake in a Qatari company, recent legislative updates now allow up to 100% foreign ownership in various sectors including agriculture, manufacturing, health, education, and tourism. This opens unparalleled opportunities for 100% foreign-owned LLCs.</p>
        
        <h2>2. Choose Your Business Activity</h2>
        <p>The foundation of your company formation lies in deciding exactly what commercial activities your business will undertake. The Ministry of Commerce and Industry (MOCI) dictates a comprehensive, standardized list of approved activities. Selecting the correct activity is not just an administrative formality; it dictates your required share capital, the type of premises you must lease, and whether you require additional approvals from secondary ministries (such as the Ministry of Public Health or the Ministry of Education). Multiple activities can be listed under one commercial registration provided they are somewhat related.</p>
        
        <h2>3. Select the Optimal Legal Structure</h2>
        <p>Your choice of corporate structure impacts your liability, tax obligations, and operational flexibility. The most common structures include:</p>
        <ul>
           <li><strong>Limited Liability Company (LLC):</strong> The most popular vehicle for SMEs and foreign investors. It limits the liability of the partners to the extent of their share capital, safeguarding personal assets.</li>
           <li><strong>Branch of a Foreign Company:</strong> Ideal for international corporations executing a specific government contract in Qatar. This structure does not require a local Qatari partner but is strictly limited to the scope of the awarded contract.</li>
           <li><strong>Trade Representative Office:</strong> Used solely for market research and marketing. It cannot engage in direct sales or commercial transactions within Qatar, acting as a "shop window" for the parent company.</li>
           <li><strong>Qatar Financial Centre (QFC) Entity:</strong> Offers a distinct legal and tax environment operating under English Common Law, ideal for financial, professional, and business service firms looking for 100% foreign ownership and repatriation of profits.</li>
        </ul>

        <h2>4. Trade Name Reservation & Commercial Registration (CR)</h2>
        <p>Once your activity and structure are finalized, you must reserve a unique trade name. The name must comply with MOCI guidelines—it cannot contain religious references, names of countries, or inappropriate language. Upon approval, you will draft the Articles of Association (AOA), which must be printed, reviewed, and signed by all partners before the Ministry of Justice. Following this, the MOCI will issue your Commercial Registration (CR). This document acts as the official birth certificate of your company in Qatar, detailing the shareholders, authorized signatories, and approved activities.</p>
        
        <blockquote>"Partnering with an experienced corporate service provider like Tuwa Business Solutions accelerates the CR process significantly, ensuring all Arabic documentation is perfectly translated, formatted, and submitted without delay, avoiding costly rejections."</blockquote>

        <h2>5. Secure Commercial Premises and the Trade License</h2>
        <p>Unlike some jurisdictions offering "virtual offices", Qatar requires physical office space for almost all business types. You must secure a commercial lease that is attested by the Ministry of Municipality (Baladiya). A civil defense certificate is also mandatory, ensuring the premises meet strict fire and safety regulations. Only after these are secured can you obtain your final Trade License, permitting you to officially commence operations and put up your company signage.</p>
        
        <h2>6. The Establishment Card (Computer Card)</h2>
        <p>Issued by the Ministry of Interior, the Computer Card (or Establishment Card) grants your company the authority to act as an official sponsor in Qatar. This is a mandatory requirement if you intend to hire staff, issue residency visas, or import/export goods. Without it, your company exists legally but cannot function administratively in terms of human resources.</p>

        <h2>Conclusion: Navigating with Experts</h2>
        <p>While the process is highly structured, navigating the nuances of Qatari ministries requires profound local expertise, Arabic language proficiency, and an understanding of unwritten procedural nuances. Delays often stem from incorrectly translated documents or choosing the wrong business activity codes. Contact Tuwa Business Solutions today to streamline your company formation and ensure your business is built on a compliant, solid foundation designed for sustainable growth.</p>
      </>
    )
  },
  "business-licensing-guide": {
    title: "Qatar Business Licensing Guide",
    date: "October 05, 2026",
    author: "PRO Department",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">Obtaining the right licenses is critical to operating legally in Qatar. While securing a Commercial Registration (CR) is a massive milestone, it is just the beginning. True operational readiness requires municipal, immigration, and sector-specific approvals. This guide breaks down the licensing landscape in Qatar.</p>
        
        <h2>The Foundational Licenses</h2>
        <p>Every standard business in Qatar requires three foundational documents to be considered fully operational. Missing any of these will result in an inability to trade, hire, or even open a corporate bank account.</p>
        <ul>
          <li><strong>The Commercial Registration (CR):</strong> Issued by MOCI. This establishes the legal entity.</li>
          <li><strong>The Trade License (Baladiya):</strong> Issued by the Ministry of Municipality. This licenses the physical premises you operate from. It confirms your office meets zoning laws and safety standards.</li>
          <li><strong>The Establishment Card:</strong> Issued by the Ministry of Interior. This registers your company with Immigration, allowing you to sponsor expat visas.</li>
        </ul>

        <h2>Sector-Specific Approvals: The Real Challenge</h2>
        <p>Depending on your industry, you will almost certainly need additional approvals from specialized government bodies. This is where the licensing process becomes highly complex and requires expert PRO navigation.</p>
        
        <h3>Healthcare & Medical</h3>
        <p>Opening a clinic, pharmacy, or importing medical equipment requires rigorous approval from the Ministry of Public Health (MoPH). You must register through the Watheq portal, have your floor plans approved by health engineers, and ensure your Medical Director holds a valid QCHP license.</p>
        
        <h3>Education & Training</h3>
        <p>Schools, nurseries, and professional training centers must be vetted and licensed by the Ministry of Education and Higher Education. Curriculums must be approved, and the physical premises face some of the strictest safety and zoning requirements in the country.</p>

        <h3>F&B and Hospitality</h3>
        <p>Restaurants, cafes, and hotels require specialized food safety clearances, hygiene certifications for staff, and strict Civil Defense (Fire Department) approvals for commercial kitchens.</p>

        <h2>Maintaining Compliance: Renewals and Fines</h2>
        <p>Licenses in Qatar are not indefinite. CRs and Trade Licenses typically require annual renewal. The Ministry of Interior is incredibly strict regarding expired Computer Cards. Failure to renew on time results in immediate automated fines, blocks on your company file (preventing you from renewing staff visas), and potential legal action against the authorized signatories.</p>
        
        <blockquote>"The biggest mistake foreign investors make is assuming licensing is a one-time event. Corporate compliance in Qatar requires a dedicated, year-round PRO strategy to track expirations and manage renewals before penalties hit."</blockquote>

        <h2>Conclusion</h2>
        <p>Navigating the licensing matrix in Qatar demands absolute precision. Utilizing an outsourced PRO service like Tuwa Business Solutions ensures your licenses are obtained swiftly and maintained proactively, keeping your business 100% compliant and penalty-free.</p>
      </>
    )
  },
  "importance-of-certified-translation": {
    title: "The Importance of Certified Legal Translation in Qatar",
    date: "September 28, 2026",
    author: "Translation Desk",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">In Qatar, Arabic is the sole official language for all government, municipal, and judicial transactions. Therefore, highly accurate, certified legal translation is not just a convenient option—it is a strict, non-negotiable mandatory requirement for doing business and living in the country.</p>
        
        <h2>What Exactly is Certified Translation?</h2>
        <p>A certified translation in Qatar must be performed by a translator or agency that is officially recognized, tested, and approved by the Ministry of Justice and the Qatar Chamber of Commerce. The final translated document must bear a specific, registered stamp and signature confirming that the translation is a true, accurate, and legally binding reflection of the original document. Unofficial translations, no matter how accurate, are instantly rejected by government portals.</p>
        
        <h2>When Do You Need Certified Translation?</h2>
        <p>The applications for certified translation span almost every aspect of corporate and personal life for expats in Qatar:</p>
        <ul>
          <li><strong>Corporate Setup:</strong> Articles of Association, Board Resolutions, Powers of Attorney, and parent company incorporation certificates must all be translated into Arabic before the Ministry of Commerce and Industry will issue a Commercial Registration.</li>
          <li><strong>Judicial and Court Proceedings:</strong> Any evidence, contract, or communication submitted to Qatari courts must be accompanied by an official Arabic translation. Judges will not review documents in English.</li>
          <li><strong>HR and Labor Contracts:</strong> While employment contracts can be bilingual, the Arabic text always takes precedence in the event of a labor dispute at the Ministry of Labour (MADLSA).</li>
          <li><strong>Immigration and Visas:</strong> Personal documents such as marriage certificates, university degrees, and police clearance certificates (PCC) must be translated and attested before residency visas are granted.</li>
        </ul>

        <h2>The Disastrous Risks of Poor Translation</h2>
        <p>Legal translation is not literal translation. It requires an intimate understanding of both legal frameworks (the origin country and Qatar). A mistranslated legal term in a commercial contract can completely alter liability clauses, leading to severe financial losses, loss of intellectual property rights, or instant dismissal of a court case. Even a misspelled name on a translated birth certificate will halt the visa process entirely, forcing you to restart the attestation chain.</p>

        <h2>Why Choose Tuwa for Translation?</h2>
        <p>Our Translation Desk at Tuwa Business Solutions employs certified linguists who specialize strictly in legal, medical, and technical translation. We guarantee acceptance by all Qatari ministries, embassies, and courts, delivering flawless documents with incredibly rapid turnaround times.</p>
      </>
    )
  },
  "document-attestation-process": {
    title: "Demystifying the Document Attestation Process",
    date: "September 20, 2026",
    author: "Operations Team",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">Document attestation is the rigorous process of authenticating a document so it can be legally recognized by the Qatari government. Because Qatar is not a member of the Hague Apostille Convention, the attestation process is complex, involving multiple manual verifications across different jurisdictions.</p>
        
        <h2>Understanding the Attestation Chain</h2>
        <p>For a document issued outside of Qatar (such as a UK university degree or a US corporate board resolution) to be accepted inside Qatar, it must go through a strict, sequential chain of authentication. Skipping a step means the document is invalid.</p>
        
        <ol>
          <li><strong>Notary Public:</strong> The document must first be notarized by a registered public notary in the country where it was issued.</li>
          <li><strong>Ministry of Foreign Affairs (Home Country):</strong> The notarized document is then authenticated by the foreign affairs department of the issuing country (e.g., the State Department in the US, or the FCDO in the UK).</li>
          <li><strong>Qatar Embassy (Home Country):</strong> The document must then be presented to the Embassy of the State of Qatar in that specific country. The embassy verifies the home country's foreign affairs stamp and adds its own consular seal.</li>
          <li><strong>Ministry of Foreign Affairs (Qatar):</strong> Finally, the document is brought into Qatar and physically submitted to the MOFA in Doha. MOFA verifies the Qatar Embassy stamp from the home country. Only then is the document fully attested and legal for use.</li>
        </ol>

        <h2>Documents that Mandate Attestation</h2>
        <p>The attestation chain applies to both commercial and personal documents. Common examples include:</p>
        <ul>
          <li><strong>Educational Certificates:</strong> Degrees and diplomas are required by the Ministry of Labour to secure managerial or specialized visa titles.</li>
          <li><strong>Civil Documents:</strong> Marriage and birth certificates are required to sponsor families for residency.</li>
          <li><strong>Corporate Documents:</strong> Certificates of Incorporation, Memorandums of Association, and Powers of Attorney are required when a foreign company wishes to open a branch or establish a joint venture in Qatar.</li>
        </ul>

        <blockquote>"A single missing stamp, or even a stamp placed on the wrong page of a document bundle, will result in immediate rejection at the final stage in Qatar, costing businesses thousands of dollars and months of lost time."</blockquote>

        <h2>The Tuwa Solution</h2>
        <p>Managing this chain across international borders is a logistical nightmare. Tuwa Business Solutions manages the entire end-to-end attestation process. Through our global network of couriers and legal agents, we collect your documents, navigate the international ministries and embassies, and deliver the final MOFA-attested documents directly to your desk in Doha.</p>
      </>
    )
  },
  "debt-recovery-solutions": {
    title: "Effective Debt Recovery Solutions for SMEs",
    date: "September 15, 2026",
    author: "Legal Advisors",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">Unpaid invoices and delayed payments can severely cripple cash flow, threatening the survival of Small and Medium Enterprises (SMEs) in Qatar. In a fast-paced market, having a robust, legally sound debt recovery strategy is absolutely essential.</p>
        
        <h2>The Qatari Context</h2>
        <p>Debt recovery in Qatar requires tact, cultural understanding, and a firm grasp of the commercial legal code. Maintaining professional relationships is highly valued in the local business culture, meaning aggressive litigation should rarely be the first step. However, businesses must know how to escalate matters effectively when debtors act in bad faith.</p>
        
        <h2>Phase 1: Amicable Settlement and Mediation</h2>
        <p>We always advise clients to attempt an amicable settlement first. This involves outsourcing the collection to a professional third party (like Tuwa's legal team). The psychological impact of a debtor receiving a formal call from a corporate services firm often prompts immediate payment.</p>
        <ul>
          <li><strong>Skip-Tracing:</strong> Locating the debtor if they have absconded or changed offices.</li>
          <li><strong>Formal Demand Letters:</strong> Drafting robust legal notices in both Arabic and English, outlining the debt and giving a final deadline before legal action.</li>
          <li><strong>Negotiated Settlements:</strong> Structuring realistic payment plans if the debtor is facing genuine financial hardship, secured by post-dated cheques.</li>
        </ul>

        <h2>Phase 2: Navigating the Qatari Legal System</h2>
        <p>If amicable settlement fails, filing a civil or commercial case in the Qatari courts is the next step. Having properly drafted contracts is your biggest asset here. Furthermore, in Qatar, issuing a cheque that bounces due to insufficient funds is a criminal offense, not just a civil one. A bounced cheque gives creditors massive leverage, as it can lead to travel bans and prosecution against the signatory.</p>
        
        <h2>Prevention is Better than Cure</h2>
        <p>The best debt recovery strategy is preventing bad debt in the first place. SME owners must prioritize:</p>
        <ol>
          <li><strong>Ironclad Contracts:</strong> Ensure payment terms, late fees, and jurisdiction clauses are clearly defined and translated into Arabic.</li>
          <li><strong>Due Diligence:</strong> Conduct background checks and request CR copies of new clients before extending credit limits.</li>
          <li><strong>Documentation:</strong> Always secure signed delivery notes (LPOs) and stamped invoices. A verbal agreement is incredibly difficult to enforce in court.</li>
        </ol>

        <p>Tuwa Business Solutions offers comprehensive debt recovery services, operating strictly within ethical frameworks and Qatari law to restore your cash flow efficiently.</p>
      </>
    )
  },
  "moph-watheq-registration": {
    title: "MOPH Watheq Registration Guide for Medical Facilities",
    date: "September 02, 2026",
    author: "Healthcare Setup Team",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-300">The healthcare sector in Qatar is experiencing explosive growth, heavily regulated to ensure world-class patient safety and medical standards. Any medical facility—from a small dental clinic to a massive multi-specialty hospital—must successfully navigate the Ministry of Public Health (MoPH) approval processes to operate.</p>
        
        <h2>What is the Watheq Portal?</h2>
        <p>Watheq is the digital platform launched by the MoPH to streamline, digitize, and centralize the registration, licensing, and renewal of all healthcare facilities and medical professionals in Qatar. All applications, document uploads, and tracking are done exclusively through this system.</p>
        
        <h2>Phase 1: Pre-Requisites and Preliminary Approvals</h2>
        <p>Before you even touch the Watheq portal, significant groundwork is required. You must secure preliminary commercial approvals and locate a physical premise. The premises cannot be chosen randomly; it must conform to strict MoPH zoning and architectural guidelines. Furthermore, every medical facility must appoint a Medical Director who holds an active, unrestricted license from the Qatar Council for Healthcare Practitioners (QCHP).</p>
        
        <h2>Phase 2: The Watheq Registration Journey</h2>
        <p>The actual licensing process involves several strict checkpoints:</p>
        <ul>
          <li><strong>Architectural Review:</strong> Submitting detailed engineering floor plans for MoPH approval. They will check for proper ventilation, waste management routing, disabled access, and specific room dimensions depending on the specialty.</li>
          <li><strong>Civil Defense Clearance:</strong> Securing specialized fire and safety approvals for medical facilities, which are more stringent than standard office spaces.</li>
          <li><strong>Staff Credentialing:</strong> Uploading all corporate documents and verifying the medical credentials (Dataflow) of all doctors and nurses to the Watheq portal.</li>
          <li><strong>Final Inspection:</strong> Once the facility is built out according to the approved plans and staffed, MoPH officials will conduct a rigorous physical inspection. Only upon passing this is the final operating license granted.</li>
        </ul>

        <h2>The Cost of Inexperience</h2>
        <p>The MoPH standards are uncompromising. Submitting floor plans with incorrect dimensions or failing to properly classify a medical device will result in immediate rejection, forcing redesigns and costing months of rent for an unopened facility. Engaging Tuwa's specialized healthcare PRO team ensures your Watheq application is flawless, moving your clinic from concept to opening day without costly delays.</p>
      </>
    )
  }
};

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const post = blogContent[slug] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "Recent",
    author: "Tuwa Team",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    content: <p className="lead text-xl text-gray-300">Content for this article is being updated. Please check back later.</p>
  };

  // Select two random articles for the "You may also like" section
  const allSlugs = Object.keys(blogContent).filter(s => s !== slug);
  const relatedSlugs = allSlugs.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
           <ArrowLeft size={16} /> Back to Blog
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
          <div className="prose prose-invert prose-lg lg:prose-xl max-w-none prose-headings:text-white prose-a:text-primary-400 prose-blockquote:border-primary-500 prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:font-normal prose-blockquote:not-italic mb-16">
            {post.content}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex justify-between items-center py-8 border-t border-b border-white/10 mb-16">
             <div className="text-white font-bold text-xl">Share this insight</div>
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
            <h3 className="text-2xl font-bold text-white mb-8">You may also like this</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedSlugs.map((relatedSlug) => {
                const relatedPost = blogContent[relatedSlug];
                return (
                  <Link href={`/blog/${relatedSlug}`} key={relatedSlug} className="block h-full">
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
            <h3 className="text-3xl font-bold text-white mb-4">Need help with your business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get in touch with our experts today for a free consultation and personalized roadmap for your corporate needs in Qatar.</p>
            <Button href="/request-quote" variant="primary">Request a Free Consultation</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
