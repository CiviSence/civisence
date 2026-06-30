import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Smartphone,
  Camera,
  ClipboardCheck,
  Wrench,
  Star,
  ChevronRight,
} from 'lucide-react';

const steps = [
  {
    tag: 'The Problem',
    description: 'Rahul notices a broken AC in his college library',
    icon: AlertTriangle,
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    tagColor: 'bg-red-100 text-red-600',
    ringColor: 'ring-red-200',
  },
  {
    tag: 'Report',
    description: 'He opens CiviSence and selects his college organization',
    icon: Smartphone,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    tagColor: 'bg-blue-100 text-blue-600',
    ringColor: 'ring-blue-200',
  },
  {
    tag: 'Details',
    description: 'He submits the issue with a photo and location',
    icon: Camera,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    tagColor: 'bg-indigo-100 text-indigo-600',
    ringColor: 'ring-indigo-200',
  },
  {
    tag: 'Admin Action',
    description: 'The college admin reviews and assigns it to maintenance staff',
    icon: ClipboardCheck,
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    tagColor: 'bg-purple-100 text-purple-600',
    ringColor: 'ring-purple-200',
  },
  {
    tag: 'Resolution',
    description: 'Maintenance staff fixes the AC and uploads proof',
    icon: Wrench,
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    tagColor: 'bg-amber-100 text-amber-600',
    ringColor: 'ring-amber-200',
  },
  {
    tag: 'Verified!',
    description: 'Rahul gets notified, verifies the fix, and gives 5 stars',
    icon: Star,
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    tagColor: 'bg-green-100 text-green-600',
    ringColor: 'ring-green-200',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const WorkflowExample = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Star className="w-4 h-4" />
            Real-World Scenario
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A real-world example: How a student resolves a campus issue
          </p>
        </motion.div>

        {/* Flowing progress line — visible only on large screens behind the grid */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <motion.div
            className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-red-300 via-purple-300 to-green-300 rounded-full z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Cards — horizontal scroll on mobile, 6-col grid on desktop */}
          <motion.div
            className="flex lg:grid lg:grid-cols-6 gap-6 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.tag}>
                  <motion.div
                    className="min-w-[240px] lg:min-w-0 snap-center flex flex-col items-center text-center"
                    variants={cardVariants}
                  >
                    {/* Step number */}
                    <span className="text-xs font-semibold text-gray-400 mb-2 tracking-widest uppercase">
                      Step {index + 1}
                    </span>

                    {/* Icon circle */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${step.color} ring-4 ${step.ringColor} flex items-center justify-center mb-4 shadow-sm`}
                    >
                      <Icon className={`w-7 h-7 ${step.iconColor}`} />
                    </div>

                    {/* Card body */}
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm w-full">
                      {/* Tag badge */}
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${step.tagColor} mb-3`}
                      >
                        {step.tag}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow separator between cards — mobile only */}
                  {index < steps.length - 1 && (
                    <div className="flex lg:hidden items-center justify-center min-w-[24px] shrink-0 self-center pt-6">
                      <ChevronRight className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowExample;
