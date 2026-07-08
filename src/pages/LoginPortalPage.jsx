import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase, Building2, ShieldCheck, ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import Logo from '../components/Logo';

// In dev, the actual auth app is at civisence.in. The portal links there directly.
const AUTH_BASE = 'https://civisence.in';

const loginTypes = [
  {
    id: 'user',
    title: 'Citizen / User Login',
    subtitle: 'Report & track civic issues',
    description:
      'Log in as a citizen or student to report geo-tagged civic complaints, track resolution status, and interact with your community dashboard.',
    icon: User,
    gradient: 'from-blue-500 to-blue-600',
    glowColor: 'rgba(59,130,246,0.18)',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-600',
    borderHover: 'hover:border-blue-300',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/30',
    href: `${AUTH_BASE}/login?role=user`,
  },
  {
    id: 'staff',
    title: 'Staff Login',
    subtitle: 'Manage & resolve assigned issues',
    description:
      `Log in as staff or field officer to view your assigned complaints, update issue statuses, and collaborate with your organization's admin team.`,
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16,185,129,0.18)',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-600',
    borderHover: 'hover:border-emerald-300',
    buttonStyle: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30',
    href: `${AUTH_BASE}/login?role=staff`,
  },
  {
    id: 'organization',
    title: 'Organization Login',
    subtitle: 'Manage your organization portal',
    description:
      'Log in to your municipality, campus, or enterprise portal to oversee issue routing, staff management, SLA tracking, and analytics.',
    icon: Building2,
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'rgba(139,92,246,0.18)',
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-600',
    borderHover: 'hover:border-violet-300',
    buttonStyle: 'bg-violet-600 hover:bg-violet-700 shadow-violet-600/30',
    href: `${AUTH_BASE}/login?role=organization`,
  },
  {
    id: 'admin',
    title: 'Admin Login',
    subtitle: 'Platform-wide administration',
    description:
      'Log in as a platform administrator to manage organizations, oversee all system operations, configure settings, and access advanced analytics.',
    icon: ShieldCheck,
    gradient: 'from-rose-500 to-red-600',
    glowColor: 'rgba(244,63,94,0.18)',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-600',
    borderHover: 'hover:border-rose-300',
    buttonStyle: 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30',
    href: `${AUTH_BASE}/login?role=admin`,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const LoginPortalPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
        aria-hidden="true"
      />

      {/* Top nav bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/30 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Back to CiviSence Home"
          >
            <div className="text-primary">
              <Logo className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">CiviSence</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-medium text-sm px-3 py-2 rounded-full hover:bg-primary/5"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-5">
              <Lock size={15} aria-hidden="true" />
              <span>Secure Login Portal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Welcome Back to{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C63FF, #7C3AED)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CiviSence
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              Select your account type below to securely log in to your dashboard.
            </p>
          </motion.div>

          {/* Login type cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {loginTypes.map((type) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  variants={cardVariants}
                  className={`group bg-white rounded-3xl border border-gray-100 ${type.borderHover} shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden`}
                  style={{ '--glow': type.glowColor }}
                >
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-br ${type.gradient} p-7 relative`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      aria-hidden="true"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <div className="relative">
                      <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Icon size={26} className="text-white" aria-hidden="true" />
                      </div>
                      <h2 className="text-lg font-bold text-white leading-snug">{type.title}</h2>
                      <p className="text-white/70 text-xs mt-1 font-medium">{type.subtitle}</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{type.description}</p>

                    <a
                      href={type.href}
                      rel="noopener noreferrer"
                      className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 ${type.buttonStyle} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 group/btn text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                      aria-label={`Login as ${type.title}`}
                    >
                      Login
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:text-primary-dark font-medium underline underline-offset-2 transition-colors">
                Sign up for free
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LoginPortalPage;
