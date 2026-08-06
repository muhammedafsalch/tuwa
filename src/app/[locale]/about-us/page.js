import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { CheckCircle2, Target, Eye, ShieldCheck, Users, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['about']?.metadata;
  
  const title = dict?.title || "About Us";
  const description = dict?.description || "Learn more about Tuwa Business Solutions, Qatar";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/about-us`
    }
  };
}

export default async function AboutPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.about;

  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-24 pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">{dict?.hero?.badge || "About Our Company"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.hero?.title_1 || "Your Trusted Partner for"} <br />
              <span className="text-gradient-premium">{dict?.hero?.title_2 || "Business Success"}</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {dict?.hero?.desc || "At Tuwa Business Solutions, we are dedicated to simplifying the complex process of business setup and corporate compliance in Qatar. With over 10 years of experience, we provide expert guidance and reliable services to entrepreneurs, SMEs, and large enterprises."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <GlassCard className="h-full p-10 flex flex-col items-start bg-primary-900/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-premium flex items-center justify-center text-white mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict?.mission?.title || "Our Mission"}</h3>
              <p className="text-gray-400 leading-relaxed">
                {dict?.mission?.desc || "To empower businesses and individuals by providing seamless, transparent, and efficient corporate solutions. We strive to handle the bureaucracy and administrative hurdles so our clients can focus on what they do best: growing their business."}
              </p>
            </GlassCard>
          </Reveal>
          
          <Reveal delay={0.2}>
            <GlassCard className="h-full p-10 flex flex-col items-start bg-accent-900/10 border-accent-500/20">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent-400 mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{dict?.vision?.title || "Our Vision"}</h3>
              <p className="text-gray-400 leading-relaxed">
                {dict?.vision?.desc || "To be the leading and most trusted corporate service provider in Qatar, recognized for our uncompromising integrity, innovative solutions, and exceptional client satisfaction across all industries."}
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative">
        <div className="absolute inset-0 bg-white/[0.02] border-y border-white/5" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">{dict?.values?.title || "Our Core Values"}</h2>
              <p className="text-gray-400">{dict?.values?.desc || "The principles that guide our everyday operations and relationships with clients."}</p>
            </Reveal>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: dict?.values?.v1 || "Trust", icon: ShieldCheck },
              { title: dict?.values?.v2 || "Professionalism", icon: Briefcase },
              { title: dict?.values?.v3 || "Reliability", icon: CheckCircle2 },
              { title: dict?.values?.v4 || "Integrity", icon: Award },
              { title: dict?.values?.v5 || "Satisfaction", icon: Users },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <GlassCard className="text-center p-6 hover:bg-white/5 transition-colors h-full flex flex-col items-center justify-center gap-4">
                  <value.icon className="text-primary-400" size={32} />
                  <h4 className="font-bold text-white">{value.title}</h4>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Structure */}
      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{dict?.team?.title || "Meet the Team Behind Your Success"}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {dict?.team?.desc_1 || "At Tuwa Business Solutions, our dedicated team of experienced professionals is committed to delivering reliable, efficient, and customer-focused services. We work together to simplify business processes and provide practical solutions for individuals, entrepreneurs, and companies across Qatar."}
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {dict?.team?.desc_2 || "Our team is driven by professionalism, integrity, and excellence. We understand the importance of timely service and accurate documentation, ensuring every client receives personalized support from consultation to completion."}
              </p>
              <Button href={`/${locale}/contact`} variant="primary">{dict?.team?.btn || "Work With Us"}</Button>
            </Reveal>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {(dict?.team?.roles || [
              "Business Setup Consultants",
              "PRO & Government Specialists",
              "Certified Legal Translators",
              "Document Attestation Experts",
              "Debt Recovery Consultants",
              "Customer Service Executives",
              "Operations Team"
            ]).map((role, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass rounded-xl p-4 border border-white/5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-400" />
                  <span className="text-sm font-semibold text-gray-200">{role}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 relative z-10">
        <GlassCard className="bg-primary-900/40 border-primary-500/30 text-center py-16 px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-6">{dict?.cta?.title || "Experience the Tuwa Difference"}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {dict?.cta?.desc || "Join hundreds of satisfied businesses who have trusted us with their corporate needs in Qatar."}
            </p>
            <Button href={`/${locale}/request-quote`} variant="primary">{dict?.cta?.btn || "Get Started Now"}</Button>
          </Reveal>
        </GlassCard>
      </section>
    </div>
  );
}
