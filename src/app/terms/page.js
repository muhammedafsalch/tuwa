import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Terms of Service | Tuwa Business Solutions",
  description: "Terms of Service for Tuwa Business Solutions.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: August 2026</p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <GlassCard className="p-8 lg:p-12 prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">By accessing and using the Tuwa Business Solutions website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">2. Provision of Services</h2>
              <p className="text-gray-300 mb-6">Tuwa Business Solutions is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Tuwa provides may change from time to time without prior notice to you.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">3. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">You expressly understand and agree that Tuwa Business Solutions shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
              <p className="text-gray-300">These Terms shall be governed and construed in accordance with the laws of the State of Qatar, without regard to its conflict of law provisions.</p>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
