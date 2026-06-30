import React from 'react';
import { motion } from 'framer-motion';

const Tracking = () => {
  const steps = [
    { label: 'Reported', active: true },
    { label: 'Verified', active: true },
    { label: 'Assigned', active: true },
    { label: 'In Progress', active: true, pulse: true },
    { label: 'Resolved', active: false },
    { label: 'Completed', active: false },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Transparency Timeline</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Real-Time Tracking
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether it's a global civic issue or an internal organization report, track every step from submission to resolution.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-inner">
          <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto flex-col md:flex-row gap-8 md:gap-0">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {/* Active connecting line (simulated progress) */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="hidden md:block absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0"
            ></motion.div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-500
                  ${step.active 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white border-2 border-gray-200 text-gray-400'
                  }
                  ${step.pulse ? 'ring-4 ring-primary/20 animate-pulse' : ''}
                `}>
                  {step.active ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  )}
                </div>
                <span className={`font-medium text-sm md:text-base ${step.active ? 'text-gray-900' : 'text-gray-400'}`}>
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
