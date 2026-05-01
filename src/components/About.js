'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: <Award className="w-6 h-6" /> },
    { label: 'Successful Setups', value: '500+', icon: <Users className="w-6 h-6" /> },
    { label: 'Client Retention', value: '98%', icon: <Target className="w-6 h-6" /> },
    { label: 'Expert Consultants', value: '25+', icon: <Eye className="w-6 h-6" /> },
  ];

  return (
    <section id="about-us" className="py-24 bg-primary relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">Corporate Profile</h2>
              <h3 className="text-4xl sm:text-7xl font-extrabold text-white mb-8 uppercase tracking-tight leading-tight">
                Driving Business <br /> <span className="text-secondary">Growth in Qatar</span>
              </h3>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                TUWA Business Services is a premier corporate consultancy firm based in Doha, Qatar. We specialize in empowering international investors and local entrepreneurs by providing seamless <strong>Company formation qatar</strong>, elite <strong>Pro services qatar</strong>, and certified <strong>Translation services qatar</strong>.
              </p>

              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-secondary transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-black text-xl mb-3 uppercase tracking-tight">Our Mission</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">To accelerate the success of businesses in Qatar through transparent, efficient, and expert corporate solutions.</p>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-secondary transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-black text-xl mb-3 uppercase tracking-tight">Our Vision</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">To be the most trusted strategic partner for corporate expansion and legal excellence in the Middle East.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-secondary">{stat.icon}</div>
                    <div>
                      <p className="text-2xl font-black text-white leading-none mb-1">{stat.value}</p>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square sm:aspect-auto sm:h-[700px] rounded-[4rem] overflow-hidden border border-white/10 group shadow-premium"
            >
              <Image 
                src="/images/image1.jpeg" 
                alt="TUWA Leadership" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass-dark p-10 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                   <p className="text-white text-2xl font-black uppercase tracking-tight leading-tight mb-4">
                     "Your success is our strategic priority."
                   </p>
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary font-black">TTS</div>
                      <div>
                        <p className="text-white font-black uppercase tracking-widest text-sm">Corporate Leadership</p>
                        <p className="text-secondary font-bold uppercase tracking-[0.2em] text-[10px]">TUWA Business Services</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
