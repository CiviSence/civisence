import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is CiviSence?',
    answer:
      'CiviSence is an AI-powered civic issue reporting and management platform. It empowers citizens to report geo-tagged public grievances with AI photo verification, and enables municipalities, smart campuses, residential societies, and enterprises to resolve civic complaints through transparent SLA tracking dashboards.',
  },
  {
    question: 'What is the difference between Global and Organization issues?',
    answer:
      'Global issues are public municipal grievances visible to everyone on the smart city network — such as potholes, broken streetlights, or sanitation hazards. Organization issues are private and visible only to verified institutional members — such as campus library maintenance, Wi-Fi repairs, or residential society plumbing.',
  },
  {
    question: 'How do I join an organization or campus portal?',
    answer:
      'Organizations and municipalities share secure invitation links with their members. Simply click the link on your mobile device or desktop, and you will be added to your institutional workspace instantly. You can also search for verified organizations within the app.',
  },
  {
    question: 'Can I be part of multiple organizations?',
    answer:
      'Yes! With one citizen account, you can join multiple organizations — your college campus, residential society, workplace, and local municipality. You can seamlessly switch between their dedicated issue feeds from your dashboard with zero friction.',
  },
  {
    question: 'How does the automated AI issue resolution workflow work?',
    answer:
      'A user reports a geo-tagged complaint with photo proof → AI assists in verifying category and priority → admin reviews and assigns the task to field technicians → staff resolve the issue and upload live photo proof → the citizen verifies the fix and awards a rating.',
  },
  {
    question: 'What roles exist inside a CiviSence organization?',
    answer:
      'There are three specialized roles: Citizens/Users (submit geo-tagged reports and verify resolution), Admins (monitor real-time SLA analytics, verify complaints, and route workflows), and Field Staff (receive mobile assignments, update live SLAs, and upload resolution photos).',
  },
  {
    question: 'Is my civic reporting data secure?',
    answer:
      'Absolutely. Organization and campus data is completely private and isolated to verified members. We enforce industry-standard encryption, role-based governance, and open data transparency standards where applicable.',
  },
  {
    question: 'Is CiviSence free to use?',
    answer:
      'Yes! CiviSence is 100% free for citizens and students. Campuses, municipalities, and organizations can register and manage their community workflows at no cost during our open early access period.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 bg-gray-50">
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
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Got Questions?
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about AI civic issue reporting, smart campus workflows, and municipal grievance management.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4" role="list" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.article
                key={index}
                role="listitem"
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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <h3
                    className={`text-base md:text-lg font-semibold transition-colors duration-300 m-0 ${
                      isOpen ? 'text-primary' : 'text-gray-900'
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white rotate-0'
                        : 'bg-gray-100 text-gray-500 rotate-0'
                    }`}
                    aria-hidden="true"
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
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-12 h-0.5 bg-primary/20 rounded-full mb-4" aria-hidden="true" />
                        <p className="text-gray-600 leading-relaxed text-[15px] m-0">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
