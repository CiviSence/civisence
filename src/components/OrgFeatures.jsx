import React from 'react';
import { motion } from 'framer-motion';
import {
  Lock,
  UserPlus,
  ShieldCheck,
  BarChart3,
  GitBranch,
  Tags,
} from 'lucide-react';

const features = [
  {
    title: 'Private Workspace',
    description:
      'Each organization gets its own secure, isolated workspace',
    icon: Lock,
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    title: 'Member Invitations',
    description:
      'Share invite links and onboard members, admins, and staff easily',
    icon: UserPlus,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Role-Based Access',
    description:
      'Define who can report, verify, assign, and resolve issues',
    icon: ShieldCheck,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Internal Analytics',
    description:
      'Track resolution rates, response times, and team performance',
    icon: BarChart3,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Issue Assignment Pipeline',
    description:
      'Route issues from report to assignment to resolution seamlessly',
    icon: GitBranch,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    title: 'Custom Categories',
    description:
      "Define issue categories specific to your organization's needs",
    icon: Tags,
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const OrgFeatures = () => {
  return (
    <section id="org-features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Organization Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Powerful Tools for Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage civic issues within your community
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl border border-gray-100 p-8
                  hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`w-7 h-7 ${feature.iconColor}`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OrgFeatures;
