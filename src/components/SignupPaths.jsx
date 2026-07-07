import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Check, ArrowRight } from 'lucide-react';

const paths = [
  {
    id: 'individual',
    title: 'For Citizens & Students',
    icon: User,
    tint: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    checkColor: 'text-blue-500',
    checkBg: 'bg-blue-50',
    borderHover: 'hover:border-blue-200',
    buttonBg: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/25',
    bullets: [
      'Sign up once — completely free for all citizens',
      'Report geo-tagged civic complaints with AI photo detection',
      'Join multiple organizations (colleges, societies, municipalities)',
      'Report campus hazards or city-wide public grievances',
      'Track real-time issue resolution from your interactive dashboard',
    ],
    cta: 'Report Issues',
    href: 'https://civisence.web.app/register',
  },
  {
    id: 'organization',
    title: 'For Organizations & Campuses',
    icon: Building2,
    tint: 'purple',
    gradient: 'from-primary to-primary-dark',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    checkColor: 'text-primary',
    checkBg: 'bg-primary/10',
    borderHover: 'hover:border-primary/30',
    buttonBg: 'bg-primary hover:bg-primary-dark shadow-primary/25',
    bullets: [
      'Register your municipality, campus, or enterprise on CiviSence',
      'Create a dedicated Smart City or Campus Issue Management portal',
      'Invite members, assign tasks to staff, and automate SLAs',
      'Utilize AI-assisted issue routing and duplicate detection',
      'Access real-time analytics and resolution performance metrics',
    ],
    cta: 'Join Your Organization',
    href: 'https://civisence.web.app/register',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const SignupPaths = () => {
  return (
    <section id="signup" aria-labelledby="signup-heading" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-blue-400/[0.06] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-primary/[0.06] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <ArrowRight size={16} aria-hidden="true" />
            <span>AI Civic Issue Reporting</span>
          </div>
          <h2 id="signup-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Two Ways to Get Started
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you are a citizen looking for an AI issue tracking software or a municipality seeking a scalable complaint management system — CiviSence empowers your community.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.article
                key={path.id}
                variants={cardVariants}
                className={`group bg-white rounded-3xl border border-gray-100 ${path.borderHover} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col`}
              >
                {/* Gradient header */}
                <div
                  className={`bg-gradient-to-r ${path.gradient} px-8 py-8 relative`}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10" aria-hidden="true">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                      <Icon size={28} className="text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {path.title}
                      </h3>
                      <p className="text-white/70 text-sm mt-0.5">
                        {path.id === 'individual'
                          ? 'Report & track geo-tagged civic issues'
                          : 'Manage campus & municipal workflows'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-8 py-8 flex-1 flex flex-col">
                  <ul className="space-y-4 flex-1">
                    {path.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={bulletVariants}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`${path.checkBg} ${path.checkColor} p-1 rounded-lg mt-0.5 shrink-0`}
                          aria-hidden="true"
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={path.href}
                    className={`mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 ${path.buttonBg} text-white font-medium rounded-xl shadow-lg transition-all duration-300 group/btn focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                    aria-label={`${path.cta} for ${path.title}`}
                  >
                    {path.cta}
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SignupPaths;
