import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student, Delhi University',
    quote:
      'I joined my college on CiviSence and reported a broken water cooler. It was fixed within 2 days! The tracking feature kept me updated every step of the way.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Rajesh Patel',
    role: 'President, Green Valley Society',
    quote:
      'Registering our residential society was seamless. Now all 200+ residents report issues through CiviSence and our maintenance team resolves them efficiently.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Ananya Gupta',
    role: 'Campus Admin, IIT Patna',
    quote:
      'As an admin, I can verify reports and assign them to the right staff instantly. The analytics dashboard helps me track our team performance beautifully.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    name: 'Vikram Singh',
    role: 'Maintenance Staff, Metro Housing',
    quote:
      'I receive clear assignments with photos and locations. Updating progress and uploading proof of resolution is incredibly simple.',
    avatar: 'https://i.pravatar.cc/150?img=12',
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

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
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
            <Quote className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Loved by Communities
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people who use CiviSence every day to make their
            communities better.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              className="bg-gray-50 rounded-3xl border border-gray-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed text-[15px] mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
