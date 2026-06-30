import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is CiviSence?',
    answer:
      'CiviSence is a complete civic issue management ecosystem. It allows individual users to report public civic issues and join organizations like colleges, residential societies, and offices to manage internal issues through a transparent workflow of reporting, verification, assignment, and resolution.',
  },
  {
    question: 'What is the difference between Global and Organization issues?',
    answer:
      'Global issues are visible to everyone on the platform — these are civic problems like road damage or broken streetlights. Organization issues are private and visible only to members of that specific organization — like a broken AC in your college or a plumbing issue in your residential society.',
  },
  {
    question: 'How do I join an organization?',
    answer:
      'Organizations share invitation links with their members. Simply click the link, and you will be added to the organization. You can also search for organizations within the app.',
  },
  {
    question: 'Can I be part of multiple organizations?',
    answer:
      'Yes! You can join as many organizations as you want — your college, your residential society, your office, etc. You can seamlessly switch between them from your dashboard, just like switching between groups on social media.',
  },
  {
    question: 'How does the organization workflow work?',
    answer:
      'An organization registers on CiviSence → creates its workspace → invites members, admins, and staff → members report issues → admins verify and assign to staff → staff resolve and upload proof → members verify the fix and provide feedback.',
  },
  {
    question: 'What roles exist inside an organization?',
    answer:
      'There are three roles: Users (report issues and verify fixes), Admins (verify reports, assign staff, manage members, view analytics), and Staff (receive assignments, update progress, upload resolution proof).',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. Organization data is completely private and visible only to its members. We use industry-standard encryption and security practices to protect all user data.',
  },
  {
    question: 'Is CiviSence free to use?',
    answer:
      'Yes, CiviSence is free for individual users. Organizations can register and manage their communities at no cost during our early access period.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about CiviSence and how it works for individuals and organizations.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary/50 shadow-md bg-white'
                    : 'border-gray-100 shadow-sm bg-white hover:border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span
                    className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                      isOpen ? 'text-primary' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white rotate-0'
                        : 'bg-gray-100 text-gray-500 rotate-0'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Answer with AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-12 h-0.5 bg-primary/20 rounded-full mb-4" />
                        <p className="text-gray-600 leading-relaxed text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
