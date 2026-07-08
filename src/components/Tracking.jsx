import React from "react";
import { motion } from "framer-motion";

const Tracking = () => {
  const steps = [
    { label: "Geo-Tagged Report", active: true },
    { label: "AI Verified", active: true },
    { label: "Staff Assigned", active: true },
    { label: "In Progress SLA", active: true, pulse: true },
    { label: "Resolved Fix", active: false },
    { label: "Citizen Verified", active: false },
  ];

  return (
    <section
      id="real-time-tracking"
      aria-labelledby="tracking-heading"
      className="py-14 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Transparency Timeline
          </span>
          <h2
            id="tracking-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight"
          >
            Real-Time Tracking &amp; Live SLA Feeds
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Whether it is a public municipal grievance or an internal campus
            facility report, monitor real-time tracking from initial geo-tagged
            submission to final verified completion.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-gray-100 shadow-inner">
          <div
            className="relative flex justify-between items-start md:items-center w-full max-w-4xl mx-auto flex-col md:flex-row gap-6 md:gap-0"
            role="list"
            aria-label="Issue tracking milestones"
          >
            {/* Connecting line Desktop */}
            <div
              className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"
              aria-hidden="true"
            ></div>

            {/* Connecting line Mobile */}
            <div
              className="block md:hidden absolute top-0 left-5 w-0.5 h-full bg-gray-200 z-0"
              aria-hidden="true"
            ></div>

            {/* Active connecting line Desktop */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="hidden md:block absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0"
              aria-hidden="true"
            ></motion.div>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex md:flex-col items-center gap-3.5 md:gap-0"
                role="listitem"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center md:mb-4 transition-colors duration-500 shrink-0
                  ${
                    step.active
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-white border-2 border-gray-200 text-gray-400"
                  }
                  ${step.pulse ? "ring-4 ring-primary/20 animate-pulse" : ""}
                `}
                >
                  {step.active ? (
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <span
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"
                      aria-hidden="true"
                    ></span>
                  )}
                </div>
                <span
                  className={`font-medium text-xs sm:text-sm md:text-base text-left md:text-center ${step.active ? "text-gray-900 font-semibold" : "text-gray-400"}`}
                >
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
