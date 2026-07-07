import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, Activity, Users, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="home" aria-label="Hero Section" className="relative pt-30 pb-20 lg:pt-30 lg:pb-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Building2 size={16} aria-hidden="true" />
              <span>AI-Powered Smart City &amp; Campus Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              AI-Powered Civic Issue Management with <br />
              <span className="text-primary">CiviSence</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering citizens, campuses, municipalities, and organizations to report geo-tagged complaints, automate workflows with AI, and track real-time resolution with 100% transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="https://civisence-community.vercel.app/register" 
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                aria-label="Get Started Free with CiviSence"
              >
                <Users size={20} aria-hidden="true" />
                Get Started Free
              </a>
              <a 
                href="#roles" 
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-lg focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Explore Features of CiviSence"
              >
                <Building2 size={20} aria-hidden="true" />
                Explore Features
              </a>
            </div>
            
            <p className="text-sm text-gray-500">Trusted by modern municipalities, college campuses, and smart organizations.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Abstract Platform base */}
              <div className="absolute bottom-10 w-3/4 h-16 bg-linear-to-r from-gray-100 to-gray-200 rounded-[100%] blur-sm border-b border-gray-300" aria-hidden="true"></div>
              <div className="absolute bottom-14 w-2/3 h-12 bg-white rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100" aria-hidden="true"></div>
              
              {/* Giant floating logo */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative z-10 text-primary w-64 h-64 drop-shadow-2xl"
              >
                <Logo className="w-full h-full" />
              </motion.div>
              
              {/* Faint background logo graphic */}
              <div className="absolute text-gray-100 w-[140%] h-[140%] -z-10 flex items-center justify-center opacity-10" aria-hidden="true">
                 <Logo className="w-full h-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Below Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 relative z-20">
          {[
            { icon: <FileText className="w-6 h-6 text-primary" aria-hidden="true" />, title: 'Geo-Tagged Reporting', desc: 'Report complaints instantly with GPS location and image auto-detection.' },
            { icon: <Activity className="w-6 h-6 text-primary" aria-hidden="true" />, title: 'AI-Assisted Workflows', desc: 'Smart routing, duplicate detection, and automated priority assignments.' },
            { icon: <Users className="w-6 h-6 text-primary" aria-hidden="true" />, title: 'Real-Time Tracking', desc: 'Monitor resolution SLAs and live progress feeds from start to finish.' },
            { icon: <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />, title: 'Smart City Analytics', desc: 'Data-driven issue resolution dashboards for campuses and municipalities.' },
          ].map((feature, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 hover:shadow-lg transition-shadow border border-white/50"
            >
              <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-1">{feature.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
