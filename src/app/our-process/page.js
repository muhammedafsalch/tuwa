import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { CheckCircle2, MessageSquare, FileText, Briefcase, Award } from "lucide-react";

export const metadata = {
  title: "Our Process | Tuwa Business Solutions",
  description: "Learn about our streamlined corporate setup process in Qatar.",
};

const processSteps = [
  { title: "Initial Consultation", icon: MessageSquare, description: "We start by understanding your business goals and requirements to recommend the best legal structure and setup plan." },
  { title: "Documentation & Approvals", icon: FileText, description: "Our team handles all paperwork, trade name reservations, and initial approvals from the relevant ministries." },
  { title: "Legal Structuring", icon: Briefcase, description: "We draft the Articles of Association and manage the signing process to ensure legal compliance." },
  { title: "Licensing & Registration", icon: CheckCircle2, description: "Finalizing the Commercial Registration (CR), Trade License, and Computer Card for your new entity." },
  { title: "Post-Setup Support", icon: Award, description: "Ongoing PRO services, visa processing, and corporate support to keep your business running smoothly." },
];

export default function OurProcessPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Streamlined Journey</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Our <span className="text-gradient-premium">Corporate Process</span>
            </h1>
            <p className="text-lg text-gray-300">
              We have simplified the company formation process in Qatar. From the initial idea to full operational readiness, we guide you every step of the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8 relative">
                {index !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-[-2rem] w-[2px] bg-white/10" />
                )}
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary-400 shrink-0 border-primary-500/30 z-10 relative bg-[#070B17]">
                  <step.icon size={28} />
                </div>
                <GlassCard className="p-8 flex-grow group hover:border-primary-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    <span className="text-primary-500 mr-2">{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                </GlassCard>
              </div>
            </Reveal>
          ))}
          
          <Reveal delay={0.6}>
            <div className="mt-16 text-center">
              <Button href="/contact" variant="primary">Start Your Journey With Us</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
