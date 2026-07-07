import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" aria-labelledby="cta-heading" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary to-secondary px-6 py-20 sm:px-12 md:px-20 md:py-28"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white font-medium text-sm mb-8 backdrop-blur-sm border border-white/20"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              AI Civic Issue Resolution Platform
            </motion.span>

            <motion.h2
              id="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl"
            >
              Ready to Transform Your Smart City or Campus?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              Whether you are a citizen reporting local grievances or an institution managing campus maintenance workflows, CiviSence empowers you to resolve civic issues faster.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="https://civisence-community.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-semibold text-base shadow-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Get Started Free on CiviSence AI Issue Resolution Platform"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href="https://civisence-community.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold text-base border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Join Your Organization on CiviSence Campus and Municipal Portal"
              >
                Join Your Organization
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Trust text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-sm text-white/80 font-medium"
            >
              Free to use&nbsp; •&nbsp; No credit card required&nbsp; •&nbsp; AI-powered SLA tracking
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
