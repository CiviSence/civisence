import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Shield, Wrench, Check } from 'lucide-react';

const roles = [
  {
    title: 'Citizen / User',
    icon: UserCircle,
    accent: 'blue',
    headerBg: 'bg-blue-50',
    borderColor: 'border-t-blue-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    checkColor: 'text-blue-500',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-700',
    features: [
      'Report geo-tagged global & campus issues',
      'Join multiple organizations and municipalities',
      'Track real-time resolution progress on live feeds',
      'Verify fixes and rate AI issue resolution quality',
      'Receive instant status alerts and updates',
    ],
  },
  {
    title: 'Admin Dashboard',
    icon: Shield,
    accent: 'primary',
    headerBg: 'bg-primary/10',
    borderColor: 'border-t-primary',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    checkColor: 'text-primary',
    badgeBg: 'bg-primary/10',
    badgeText: 'text-primary-dark',
    features: [
      'Verify & validate reported grievances with AI support',
      'Assign tasks to appropriate municipal or campus staff',
      'Manage organization members and SLA routing',
      'Monitor real-time analytics & performance metrics',
      'Configure custom Smart City workspace settings',
    ],
  },
  {
    title: 'Field Staff',
    icon: Wrench,
    accent: 'emerald',
    headerBg: 'bg-emerald-50',
    borderColor: 'border-t-emerald-500',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    checkColor: 'text-emerald-500',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-700',
    features: [
      'Receive automated priority issue assignments',
      'Update live SLAs with detailed status notes',
      'Upload real-time resolution proof (photos)',
      'Mark civic complaints as resolved',
      'Manage personal task workflows on the mobile app',
    ],
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const Features = () => {
  return (
    <section id="roles" aria-labelledby="roles-heading" className="py-24 bg-white">
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
            Role Overview
          </span>
          <h2 id="roles-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Three Roles, One AI Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every participant in the Smart City and campus community gets specialized tools designed for transparency and speed
          </p>
        </motion.div>

        {/* Role Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role) => {
            const IconComponent = role.icon;

            return (
              <motion.article
                key={role.title}
                variants={cardVariants}
                className={`relative rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-lg shadow-sm 
                  hover:shadow-xl transition-shadow duration-300 overflow-hidden
                  border-t-4 ${role.borderColor}`}
              >
                {/* Card Header */}
                <div className={`${role.headerBg} px-6 pt-8 pb-6`}>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${role.iconBg} flex items-center justify-center`}
                    >
                      <IconComponent className={`w-7 h-7 ${role.iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${role.badgeBg} ${role.badgeText} m-0`}
                      >
                        {role.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Feature List */}
                <motion.ul
                  className="px-6 py-6 space-y-4"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {role.features.map((feature) => (
                    <motion.li
                      key={feature}
                      variants={featureItemVariants}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={`mt-0.5 shrink-0 w-5 h-5 rounded-full ${role.iconBg} flex items-center justify-center`}
                        aria-hidden="true"
                      >
                        <Check
                          className={`w-3 h-3 ${role.checkColor}`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
