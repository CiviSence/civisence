import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Globe, Building2, FileEdit, Activity, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Sign Up Free',
    desc: 'Create your citizen or campus user account in seconds with zero friction',
    icon: UserPlus,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Report Geo-Tagged Issues',
    desc: 'Report civic problems with automatic GPS location detection and AI photo support',
    icon: Globe,
    color: 'indigo',
  },
  {
    id: 3,
    title: 'Join Organizations',
    desc: 'Connect directly with your college campus, society, municipality, or workplace',
    icon: Building2,
    color: 'purple',
  },
  {
    id: 4,
    title: 'Report Org Issues',
    desc: 'Raise campus hazards or department complaints visible only to authorized personnel',
    icon: FileEdit,
    color: 'fuchsia',
  },
  {
    id: 5,
    title: 'Real-Time Tracking',
    desc: 'Follow every issue from submission to verification with live progress feeds',
    icon: Activity,
    color: 'emerald',
  },
  {
    id: 6,
    title: 'Verify & Feedback',
    desc: 'Confirm the resolution quality and ensure transparent public accountability',
    icon: CheckCircle,
    color: 'green',
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    ring: 'ring-blue-100',
    gradientFrom: 'from-blue-500',
    dot: 'bg-blue-500',
    shadow: 'shadow-blue-100',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    ring: 'ring-indigo-100',
    gradientFrom: 'from-indigo-500',
    dot: 'bg-indigo-500',
    shadow: 'shadow-indigo-100',
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
    ring: 'ring-purple-100',
    gradientFrom: 'from-purple-500',
    dot: 'bg-purple-500',
    shadow: 'shadow-purple-100',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    text: 'text-fuchsia-600',
    border: 'border-fuchsia-200',
    ring: 'ring-fuchsia-100',
    gradientFrom: 'from-fuchsia-500',
    dot: 'bg-fuchsia-500',
    shadow: 'shadow-fuchsia-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    ring: 'ring-emerald-100',
    gradientFrom: 'from-emerald-500',
    dot: 'bg-emerald-500',
    shadow: 'shadow-emerald-100',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    ring: 'ring-green-100',
    gradientFrom: 'from-green-500',
    dot: 'bg-green-500',
    shadow: 'shadow-green-100',
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Activity className="w-4 h-4" aria-hidden="true" />
            Citizen &amp; Student Workflow
          </span>
          <h2 id="how-it-works-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            How It Works —{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              For Citizens
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Your seamless journey from AI issue reporting to verified civic resolution
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical gradient line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 via-fuchsia-400 to-green-400 rounded-full opacity-30" />
          </div>

          {/* Central vertical gradient line — mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 rounded-full" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full opacity-30" />
          </div>

          <div className="relative space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const colors = colorMap[step.color];
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start md:items-center w-full md:mb-16 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card side */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`group p-6 bg-white rounded-2xl border ${colors.border} shadow-sm hover:shadow-xl hover:${colors.shadow} transition-all duration-300 relative`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colors.bg} ${colors.text} ${
                          isLeft ? 'md:ml-auto' : ''
                        }`}
                      >
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>

                      {/* Connector arrow — desktop only */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border ${colors.border} rotate-45 ${
                          isLeft ? '-right-1.5 border-l-0 border-b-0' : '-left-1.5 border-r-0 border-t-0'
                        }`}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-0 md:relative md:left-auto flex items-center justify-center md:w-2/12" aria-hidden="true">
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: index * 0.1 + 0.2 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${colors.dot} text-white font-bold text-lg shadow-lg ring-4 ring-white`}
                      >
                        {step.id}
                      </motion.div>
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 w-12 h-12 rounded-full ${colors.dot} opacity-20 animate-ping`} style={{ animationDuration: '3s' }} />
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block md:w-5/12" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.8 }}
            className="hidden md:flex items-center justify-center mt-8"
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg ring-4 ring-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
