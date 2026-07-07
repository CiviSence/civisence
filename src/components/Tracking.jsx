import React from 'react';
import { motion } from 'framer-motion';

const Tracking = () => {
  const steps = [
    { label: 'Geo-Tagged Report', active: true },
    { label: 'AI Verified', active: true },
    { label: 'Staff Assigned', active: true },
    { label: 'In Progress SLA', active: true, pulse: true },
    { label: 'Resolved Fix', active: false },
    { label: 'Citizen Verified', active: false },
  ];

  return (
    <section id="real-time-tracking" aria-labelledby="tracking-heading" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold tracking-wide uppercase text-sm mb-3">Transparency Timeline</span>
          <h2 id="tracking-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Real-Time Tracking &amp; Live SLA Feeds
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether it is a public municipal grievance or an internal campus facility report, monitor real-time tracking from initial geo-tagged submission to final verified completion.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-inner">
          <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto flex-col md:flex-row gap-8 md:gap-0" role="list" aria-label="Issue tracking milestones">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" aria-hidden="true"></div>
            
            {/* Active connecting line (simulated progress) */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="hidden md:block absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0"
              aria-hidden="true"
            ></motion.div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center" role="listitem">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500
                  ${step.active 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white border-2 border-gray-200 text-gray-400'
                  }
                  ${step.pulse ? 'ring-4 ring-primary/20 animate-pulse' : ''}
                `}>
                  {step.active ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-gray-300" aria-hidden="true"></span>
                  )}
                </div>
                <span className={`font-medium text-sm md:text-base text-center ${step.active ? 'text-gray-900 font-semibold' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;
