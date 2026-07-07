import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  const stats = [
    { value: "15,000+", label: "Geo-Tagged Complaints Reported" },
    { value: "98%", label: "AI Issue Resolution Rate" },
    { value: "4 Hours", label: "Average SLA Assignment Time" },
    { value: "92%", label: "Citizen & Student Satisfaction" },
    { value: "120+", label: "Smart Campuses & Municipalities" },
    { value: "450+", label: "Active Field Staff" }
  ];

  return (
    <section id="analytics" aria-labelledby="analytics-heading" className="py-24 bg-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-white/80 font-semibold tracking-wide uppercase text-sm mb-3">Smart City Analytics</span>
          <h2 id="analytics-heading" className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Real-Time Resolution Impact in Numbers
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Our data-driven Issue Resolution Dashboard delivers measurable transparency and speed for smart cities, campuses, and organizations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10" role="list" aria-label="Key performance indicators">
          {stats.map((stat, idx) => (
            <motion.article
              key={idx}
              role="listitem"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8 rounded-3xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/90 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
