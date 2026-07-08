import React from "react";
import { motion } from "framer-motion";
import { Globe, Lock, Check, ArrowRight } from "lucide-react";

const globalBullets = [
  "Reported by any registered citizen or user",
  "Visible to all CiviSence users across the Smart City network",
  "Public grievance platform for city roads, sanitation, and streetlights",
  "100% community-wide transparency and open data",
  "Real-time public resolution tracking and SLA monitoring",
];

const orgBullets = [
  "Reported exclusively by verified organization or campus members",
  "Visible only within your private institutional portal",
  "Internal campus issue management and facility maintenance",
  "Managed by internal organization admins and field staff",
  "Private resolution workflow and internal metrics",
];

const Comparison = () => {
  return (
    <section
      id="issue-types"
      aria-labelledby="issue-types-heading"
      className="py-14 sm:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            <ArrowRight
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              aria-hidden="true"
            />
            Issue Types
          </span>
          <h2
            id="issue-types-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-6"
          >
            Two Types of Issues, One AI Platform
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
            CiviSence seamlessly handles both open municipal grievances and
            private institutional campus workflows
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* Global Issues Card */}
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-linear-to-br from-blue-500 to-blue-600 px-5 sm:px-8 py-6 sm:py-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl -ml-6 -mb-6"
                aria-hidden="true"
              />
              <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Globe
                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Global Issues
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm font-medium mt-0.5">
                    Public &amp; Municipal Civic
                  </p>
                </div>
              </div>
              <p className="text-blue-50 text-xs sm:text-sm leading-relaxed relative z-10">
                Visible to everyone on the Smart City platform
              </p>
            </div>

            {/* Card Body */}
            <div className="px-5 sm:px-8 py-6 sm:py-8 flex-1">
              <ul className="space-y-3 sm:space-y-4">
                {globalBullets.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-xs sm:text-[15px] leading-snug">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Card Footer Tag */}
            <div className="px-5 sm:px-8 pb-6 sm:pb-8">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-blue-50 border border-blue-100 w-fit">
                <Globe
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-semibold text-blue-600">
                  Open community ledger
                </span>
              </div>
            </div>
          </motion.article>

          {/* Organization Issues Card */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl overflow-hidden flex flex-col"
          >
            {/* Card Header */}
            <div className="bg-linear-to-br from-primary to-secondary px-5 sm:px-8 py-6 sm:py-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl -ml-6 -mb-6"
                aria-hidden="true"
              />
              <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Lock
                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    Organization Issues
                  </h3>
                  <p className="text-purple-100 text-xs sm:text-sm font-medium mt-0.5">
                    Private &amp; Institutional
                  </p>
                </div>
              </div>
              <p className="text-purple-50 text-xs sm:text-sm leading-relaxed relative z-10">
                Private to your campus or enterprise
              </p>
            </div>

            {/* Card Body */}
            <div className="px-5 sm:px-8 py-6 sm:py-8 flex-1">
              <ul className="space-y-3 sm:space-y-4">
                {orgBullets.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-xs sm:text-[15px] leading-snug">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Card Footer Tag */}
            <div className="px-5 sm:px-8 pb-6 sm:pb-8">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-primary/10 border border-primary/20 w-fit">
                <Lock
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-semibold text-primary">
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
