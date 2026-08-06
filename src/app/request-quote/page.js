import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { UploadCloud, Calendar, Clock, FileText } from "lucide-react";

export const metadata = {
  title: "Request a Quote | Tuwa Business Solutions",
  description: "Request a customized quote for business setup, PRO services, or document attestation in Qatar.",
};

export default function RequestQuotePage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Request a <span className="text-gradient-premium">Custom Quote</span>
            </h1>
            <p className="text-lg text-gray-300">
              Provide us with some details about your requirements, and our team will get back to you with a comprehensive proposal and transparent pricing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <Reveal delay={0.1}>
          <GlassCard className="max-w-4xl mx-auto p-8 lg:p-12">
            <form className="flex flex-col gap-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-sm">1</span>
                  Your Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input type="text" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Company Name (Optional)</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                    <input type="tel" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Email Address *</label>
                    <input type="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-sm">2</span>
                  Service Requirements
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Primary Service *</label>
                    <select defaultValue="" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 appearance-none">
                      <option value="" disabled className="bg-[#070B17]">Select a service</option>
                      <option className="bg-[#070B17]">Business Setup</option>
                      <option className="bg-[#070B17]">PRO Services</option>
                      <option className="bg-[#070B17]">Translation Services</option>
                      <option className="bg-[#070B17]">Document Attestation</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Project Description *</label>
                    <textarea rows="4" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 resize-none"></textarea>
                  </div>
                </div>
              </div>

              {/* Document Upload (Design only) */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-sm">3</span>
                  Supporting Documents (Optional)
                </h3>
                <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-colors cursor-pointer bg-white/[0.02]">
                  <UploadCloud className="mx-auto text-primary-400 mb-4" size={32} />
                  <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-400">PDF, JPG, PNG (Max 5MB)</p>
                </div>
              </div>

              {/* Consultation Preference */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center text-sm">4</span>
                  Consultation Preference (Optional)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-sm font-medium text-gray-300">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button variant="primary" type="button" className="w-full md:w-auto">
                  Submit Request
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service. Your information is kept strictly confidential.
                </p>
              </div>

            </form>
          </GlassCard>
        </Reveal>
      </section>
    </div>
  );
}
