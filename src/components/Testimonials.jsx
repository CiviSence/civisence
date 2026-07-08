import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student, Delhi University",
    quote:
      "I joined my college campus portal on CiviSence and reported a broken water cooler with AI photo detection. It was fixed within 24 hours! Real-time tracking kept me updated every step of the way.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rajesh Patel",
    role: "President, Green Valley Society",
    quote:
      "Registering our residential municipality organization was seamless. Now all 200+ citizens report geo-tagged complaints through CiviSence and our SLA dashboard resolves them efficiently.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Ananya Gupta",
    role: "Campus Admin, IIT Patna",
    quote:
      "As an admin, AI routing helps me verify public grievances and assign them to the right maintenance staff instantly. Our campus issue management has never been more transparent.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Vikram Singh",
    role: "Field Technician, Smart City Housing",
    quote:
      "I receive clear automated priority assignments with GPS locations and photos. Updating live SLAs and uploading photo proof of resolution is incredibly simple on the mobile app.",
    avatar: "https://i.pravatar.cc/150?img=12",
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            Citizen &amp; Campus Feedback
          </span>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Trusted by Smart Cities &amp; Campuses
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See how municipalities, colleges, and organizations leverage
            CiviSence for transparent civic issue resolution.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          role="list"
          aria-label="Testimonials"
        >
          {testimonials.map((t) => (
            <motion.article
              key={t.name}
              role="listitem"
              className="bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-8 flex flex-col justify-between shadow-xs sm:shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
            >
              {/* Stars */}
              <div
                className="flex gap-1 mb-3 sm:mb-5"
                aria-label="5 out of 5 stars rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic leading-relaxed text-xs sm:text-[15px] mb-6 sm:mb-8 flex-1 m-0">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={t.avatar}
                  alt={`${t.name} - ${t.role} using CiviSence`}
                  width="48"
                  height="48"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-primary/20 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm m-0">
                    {t.name}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs m-0">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
