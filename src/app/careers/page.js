import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Careers | Tuwa Business Solutions",
  description: "Join our team of experts in Qatar. We are looking for talented professionals to grow with us.",
};

const vacancies = [
  {
    title: "Senior Business Consultant",
    department: "Consulting",
    location: "Doha, Qatar",
    type: "Full-Time",
    experience: "5+ Years",
  },
  {
    title: "PRO / Government Liaison Officer",
    department: "Operations",
    location: "Doha, Qatar",
    type: "Full-Time",
    experience: "3+ Years (Qatar experience required)",
  },
  {
    title: "Certified Legal Translator",
    department: "Translation",
    location: "Doha, Qatar",
    type: "Full-Time",
    experience: "5+ Years",
  }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col pb-24 pt-32">
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl text-center mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-primary-500/30">
              <span className="text-sm font-medium text-primary-400">Join Our Team</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Build Your Career with <br />
              <span className="text-gradient-premium">Tuwa Business Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We are always on the lookout for talented, driven, and passionate individuals to join our growing team of corporate experts in Qatar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="container mx-auto px-6 relative z-10">
        <Reveal delay={0.1}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-primary-400" /> Current Openings
          </h2>
        </Reveal>
        
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {vacancies.map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col hover:border-primary-500/30 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{job.title}</h3>
                  <span className="bg-primary-500/20 text-primary-400 text-xs px-3 py-1 rounded-full font-medium">
                    {job.department}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 flex-grow">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} /> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} /> {job.type}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={16} /> {job.experience}
                  </div>
                </div>
                
                <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-sm text-gray-400">Apply below</span>
                  <ArrowRight className="text-gray-500 group-hover:text-white transition-colors" size={20} />
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-6 relative z-10">
        <Reveal delay={0.2}>
          <GlassCard className="max-w-3xl mx-auto p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-6">Submit Your Application</h3>
            <p className="text-gray-400 mb-8 text-sm">Don't see a role that fits? Submit your CV anyway, and we'll keep it on file for future opportunities.</p>
            
            <form className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Full Name *</label>
                  <input type="text" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Email Address *</label>
                  <input type="email" required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Position Applying For</label>
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 appearance-none">
                  <option value="" className="bg-[#070B17]">General Application</option>
                  {vacancies.map(job => (
                    <option key={job.title} className="bg-[#070B17]">{job.title}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">LinkedIn Profile URL</label>
                <input type="url" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Upload CV / Resume *</label>
                <input type="file" accept=".pdf,.doc,.docx" required className="block w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-primary-500/20 file:text-primary-400 hover:file:bg-primary-500/30 cursor-pointer" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Cover Letter</label>
                <textarea rows="4" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 resize-none"></textarea>
              </div>

              <Button variant="primary" type="button" className="mt-4 w-full md:w-auto self-start">
                Submit Application
              </Button>
            </form>
          </GlassCard>
        </Reveal>
      </section>

    </div>
  );
}
