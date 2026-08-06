import Reveal from "@/components/animations/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { getDictionary } from "@/i18n/getDictionary";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj['contact']?.metadata;
  
  const title = dict?.title || "Contact Us | Tuwa Business Solutions";
  const description = dict?.description || "Get in touch with Tuwa Business Solutions for expert corporate setup and PRO services in Qatar.";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tuwabusiness.com/${locale}/contact`
    }
  };
}

export default async function ContactPage({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const dictObj = await getDictionary(locale);
  const dict = dictObj.contact;

  return (
    <div className="flex flex-col pb-24 pt-32">
      {/* Header */}
      <section className="container mx-auto px-6 relative z-10 mb-16">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {dict?.hero?.title_1 || "Let's Start a"} <br />
              <span className="text-gradient-premium">{dict?.hero?.title_2 || "Conversation"}</span>
            </h1>
            <p className="text-lg text-gray-300">
              {dict?.hero?.desc || "Whether you need to set up a new company, require PRO services, or have a question about legal translation, our team is ready to assist you."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-8">{dict?.info?.title || "Contact Information"}</h3>
                
                <div className="flex flex-col gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{dict?.info?.office || "Our Office"}</h4>
                      <p className="text-gray-400 text-sm">{dict?.info?.office_val || "Matar Qadeem Street, Doha, State of Qatar"}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{dict?.info?.phone || "Phone & WhatsApp"}</h4>
                      <p className="text-gray-400 text-sm">+974 7732 3214</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{dict?.info?.email || "Email Us"}</h4>
                      <p className="text-gray-400 text-sm">info@tuwabusiness.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{dict?.info?.hours || "Working Hours"}</h4>
                      <p className="text-gray-400 text-sm">{dict?.info?.hours_val_1 || "Sat - Thu: 8:00 AM - 6:00 PM"}<br/>{dict?.info?.hours_val_2 || "Friday: Closed"}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.2}>
              <GlassCard className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="text-primary-400" size={24} />
                  <h3 className="text-2xl font-bold text-white">{dict?.form?.title || "Send us a Message"}</h3>
                </div>
                
                <form className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">{dict?.form?.name || "Full Name"}</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-colors"
                        placeholder={dict?.form?.name_ph || "John Doe"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">{dict?.form?.phone || "Phone Number"}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-colors"
                        placeholder="+974 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">{dict?.form?.email || "Email Address"}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-300">{dict?.form?.service || "Interested Service"}</label>
                    <select 
                      id="service" 
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-colors appearance-none"
                    >
                      <option className="bg-[#070B17]">{dict?.form?.s1 || "Business Setup"}</option>
                      <option className="bg-[#070B17]">{dict?.form?.s2 || "PRO Services"}</option>
                      <option className="bg-[#070B17]">{dict?.form?.s3 || "Legal Translation"}</option>
                      <option className="bg-[#070B17]">{dict?.form?.s4 || "Document Attestation"}</option>
                      <option className="bg-[#070B17]">{dict?.form?.s5 || "Other Services"}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">{dict?.form?.message || "Your Message"}</label>
                    <textarea 
                      id="message" 
                      rows="5"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-colors resize-none"
                      placeholder={dict?.form?.message_ph || "How can we help you?"}
                    ></textarea>
                  </div>

                  <Button variant="primary" type="button" className="mt-2">
                    {dict?.form?.btn || "Send Message"}
                  </Button>
                </form>
              </GlassCard>
            </Reveal>
          </div>

        </div>
      </section>
      
      {/* Google Maps Placeholder */}
      <section className="container mx-auto px-6 relative z-10 mt-16">
        <Reveal delay={0.3}>
          <GlassCard className="!p-2 h-[400px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-white/5 rounded-xl flex items-center justify-center flex-col gap-4">
               <MapPin className="text-gray-500" size={48} />
               <p className="text-gray-500 font-medium">{dict?.map || "Interactive Map Integration Placeholder"}</p>
            </div>
          </GlassCard>
        </Reveal>
      </section>

    </div>
  );
}
