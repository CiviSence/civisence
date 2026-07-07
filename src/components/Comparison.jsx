import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, Check, ArrowRight } from 'lucide-react';

const globalBullets = [
  'Reported by any registered citizen or user',
  'Visible to all CiviSence users across the Smart City network',
  'Public grievance platform for city roads, sanitation, and streetlights',
  '100% community-wide transparency and open data',
  'Real-time public resolution tracking and SLA monitoring',
];

const orgBullets = [
  'Reported exclusively by verified organization or campus members',
  'Visible only within your private institutional portal',
  'Internal campus issue management and facility maintenance',
  'Managed by internal organization admins and field staff',
  'Private AI-assisted resolution workflow and internal metrics',
];

const Comparison = () => {
  return (
    <section id="issue-types" aria-labelledby="issue-types-heading" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
            Issue Types
          </span>
          <h2 id="issue-types-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Two Types of Issues, One AI Platform
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CiviSence seamlessly handles both open municipal grievances and private institutional campus workflows
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Global Issues Card */}
          <motion.article
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl -ml-6 -mb-6" aria-hidden="true" />
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Global Issues
                  </h3>
                  <p className="text-blue-100 text-sm font-medium mt-0.5">
                    Public &amp; Municipal Civic
                  </p>
                </div>
              </div>
              <p className="text-blue-50 text-sm leading-relaxed relative z-10">
                Visible to everyone on the Smart City platform
              </p>
            </div>

            {/* Card Body */}
            <div className="px-8 py-8 flex-1">
              <ul className="space-y-4">
                {globalBullets.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 font-medium text-[15px] leading-snug">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Card Footer Tag */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100 w-fit">
                <Globe className="w-4 h-4 text-blue-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-blue-600">
                  Open to all citizens
                </span>
              </div>
            </div>
          </motion.article>

          {/* Organization Issues Card */}
          <motion.article
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-br from-primary to-secondary px-8 py-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl -ml-6 -mb-6" aria-hidden="true" />
              <div className="relative z-10 flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Lock className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Organization Issues
                  </h3>
                  <p className="text-purple-100 text-sm font-medium mt-0.5">
                    Private &amp; Institutional
                  </p>
                </div>
              </div>
              <p className="text-purple-50 text-sm leading-relaxed relative z-10">
                Private to your campus or enterprise
              </p>
            </div>

            {/* Card Body */}
            <div className="px-8 py-8 flex-1">
              <ul className="space-y-4">
                {orgBullets.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    </div>
                    <span className="text-gray-700 font-medium text-[15px] leading-snug">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Card Footer Tag */}
            <div className="px-8 pb-8">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 w-fit">
                <Lock className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-semibold text-primary">
                  Members only access
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
