import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Privacy Policy | Tuwa Business Solutions",
  description: "Privacy Policy for Tuwa Business Solutions.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-12">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: August 2026</p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <GlassCard className="p-8 lg:p-12 prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-6">We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested, delivery notes, and other information you choose to provide.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">We may use the information we collect about you to provide, maintain, and improve our services, such as to facilitate payments, send receipts, provide products and services you request, and develop new features.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
              <p className="text-gray-300 mb-6">We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: With third party Service Providers; in response to a request for information by a competent authority if we believe disclosure is in accordance with, or is otherwise required by, any applicable law, regulation, or legal process.</p>
              
              <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
              <p className="text-gray-300">If you have any questions about this Privacy Policy, please contact us at tuwatranslations@gmail.com.</p>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
