import React from 'react';
import { motion } from 'framer-motion';
import { Building, Settings, UserPlus, FileEdit, ClipboardCheck, Wrench, ThumbsUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Register Organization',
    desc: 'Sign up your college campus, municipality, or enterprise on CiviSence',
    icon: Building,
    color: 'purple',
  },
  {
    id: 2,
    title: 'Set Up Workspace',
    desc: 'Configure your custom Smart City or campus complaint management portal',
    icon: Settings,
    color: 'violet',
  },
  {
    id: 3,
    title: 'Invite Members',
    desc: 'Share secure invitation links for citizens, students, admins, and field staff',
    icon: UserPlus,
    color: 'indigo',
  },
  {
    id: 4,
    title: 'Members Report Issues',
    desc: 'Organization members submit geo-tagged complaints with AI photo proof',
    icon: FileEdit,
    color: 'blue',
  },
  {
    id: 5,
    title: 'Admins Verify & Assign',
    desc: 'AI routes priorities while admins review reports and assign staff workflows',
    icon: ClipboardCheck,
    color: 'amber',
  },
  {
    id: 6,
    title: 'Staff Resolve Issues',
    desc: 'Staff update resolution SLAs and upload live verification photos',
    icon: Wrench,
    color: 'emerald',
  },
  {
    id: 7,
    title: 'Users Verify Fix',
    desc: 'Citizens receive automated alerts, confirm resolution, and rate feedback',
    icon: ThumbsUp,
    color: 'green',
  },
];

const colorMap = {
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
    dot: 'bg-purple-500',
    shadow: 'shadow-purple-100',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
    dot: 'bg-violet-500',
    shadow: 'shadow-violet-100',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-200',
    dot: 'bg-indigo-500',
    shadow: 'shadow-indigo-100',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    dot: 'bg-blue-500',
    shadow: 'shadow-blue-100',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    shadow: 'shadow-amber-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
    shadow: 'shadow-emerald-100',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-200',
    dot: 'bg-green-500',
    shadow: 'shadow-green-100',
  },
};

const HowItWorksOrg = () => {
  return (
    <section id="for-organizations" aria-labelledby="for-orgs-heading" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
            <Building className="w-4 h-4" aria-hidden="true" />
            Organization &amp; Campus Workflow
          </span>
          <h2 id="for-orgs-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            How It Works —{' '}
            <span className="bg-gradient-to-r from-purple-600 to-emerald-500 bg-clip-text text-transparent">
              For Organizations
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            From municipal registration to AI issue resolution, the complete Smart City workflow
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central vertical gradient line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-b from-purple-400 via-indigo-400 via-amber-300 to-green-400 rounded-full opacity-30" />
          </div>

          {/* Central vertical gradient line — mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 rounded-full" aria-hidden="true">
            <div className="w-full h-full bg-gradient-to-b from-purple-400 via-indigo-400 to-green-400 rounded-full opacity-30" />
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
                      {/* Step label */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${colors.bg} ${colors.text} ${
                          isLeft ? 'md:ml-auto md:flex' : ''
                        }`}
                      >
                        Step {step.id}
                      </div>

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

                      {/* Role indicator for steps 4-7 */}
                      {step.id >= 4 && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium ${colors.text}`}>
                            {step.id === 4 && '👤 Citizens & Members'}
                            {step.id === 5 && '🛡️ Admins & AI Routing'}
                            {step.id === 6 && '🔧 Staff Resolution'}
                            {step.id === 7 && '👤 Citizen Verification'}
                          </span>
                        </div>
                      )}

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
                      <div
                        className={`absolute inset-0 w-12 h-12 rounded-full ${colors.dot} opacity-20 animate-ping`}
                        style={{ animationDuration: '3s' }}
                      />
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
            transition={{ type: 'spring', stiffness: 200, delay: 0.9 }}
            className="hidden md:flex items-center justify-center mt-8"
            aria-hidden="true"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-green-500 shadow-lg ring-4 ring-white" />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://civisence.web.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Join Your Organization on CiviSence"
          >
            <Building className="w-5 h-5" aria-hidden="true" />
            Join Your Organization
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksOrg;
