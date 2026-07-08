import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  Briefcase,
  Heart,
  Building,
  Building2,
  User,
  ArrowLeftRight,
  LayoutDashboard,
  Layers,
} from "lucide-react";

const organizations = [
  {
    name: "University Campus",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    dotColor: "border-blue-300",
    angle: 0,
  },
  {
    name: "Residential Society",
    icon: Home,
    color: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    dotColor: "border-emerald-300",
    angle: 60,
  },
  {
    name: "Corporate Office",
    icon: Briefcase,
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    dotColor: "border-amber-300",
    angle: 120,
  },
  {
    name: "NGO Community",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    accent: "bg-rose-50 text-rose-600 border-rose-100",
    dotColor: "border-rose-300",
    angle: 180,
  },
  {
    name: "Local Municipality",
    icon: Building,
    color: "from-purple-500 to-purple-600",
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    dotColor: "border-purple-300",
    angle: 240,
  },
  {
    name: "Apartment Complex",
    icon: Building2,
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-50 text-cyan-600 border-cyan-100",
    dotColor: "border-cyan-300",
    angle: 300,
  },
];

const featurePoints = [
  {
    icon: ArrowLeftRight,
    text: "Switch instantly between campus and city orgs",
  },
  {
    icon: Layers,
    text: "Dedicated issue feeds per community",
  },
  {
    icon: LayoutDashboard,
    text: "One unified Issue Resolution Dashboard",
  },
];

const MultiOrg = () => {
  const radius = 220;

  return (
    <section
      id="organizations-network"
      aria-labelledby="multi-org-heading"
      className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm mb-4 sm:mb-6">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            Organization Issue Management
          </span>
          <h2
            id="multi-org-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4 sm:mb-6"
          >
            One Citizen Account, Multiple Communities
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
            Whether managing campus maintenance, residential society repairs, or
            municipal grievances — seamlessly switch between all your
            organizations with zero friction.
          </p>
        </motion.div>

        {/* Mobile View (< 640px): Compact Hub Grid */}
        <div className="block sm:hidden mb-12">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg flex flex-col items-center justify-center text-white">
              <User className="w-7 h-7 mb-0.5" />
              <span className="text-[10px] font-semibold tracking-wide uppercase">
                You
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {organizations.map((org) => {
                const Icon = org.icon;
                return (
                  <div
                    key={org.name}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border bg-white shadow-xs ${org.accent}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg bg-gradient-to-br ${org.color} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-800 leading-tight">
                      {org.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet View (>= 640px): Orbiting Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:block relative mx-auto mb-20"
          style={{ width: "100%", maxWidth: 600, height: 520 }}
          aria-hidden="true"
        >
          {/* Dotted circle orbit path */}
          <div
            className="absolute border-2 border-dashed border-gray-200 rounded-full"
            style={{
              width: radius * 2,
              height: radius * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Connecting lines to center */}
          <svg
            className="absolute z-0 pointer-events-none"
            style={{
              width: radius * 2,
              height: radius * 2,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "visible",
            }}
          >
            {organizations.map((org) => {
              const angleRad = (org.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;
              return (
                <line
                  key={`line-${org.name}`}
                  x1={radius}
                  y1={radius}
                  x2={radius + x}
                  y2={radius + y}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="text-gray-200"
                />
              );
            })}
          </svg>

          {/* Central user card */}
          <div
            className="absolute z-20"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-xl shadow-primary/25 flex flex-col items-center justify-center text-white">
                <User className="w-8 h-8 mb-1" />
                <span className="text-[10px] font-semibold tracking-wide uppercase">
                  You
                </span>
              </div>
            </motion.div>
          </div>

          {/* Organization cards */}
          {organizations.map((org, index) => {
            const angleRad = (org.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            const Icon = org.icon;

            return (
              <div
                key={org.name}
                className="absolute z-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    {/* Org card */}
                    <div
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border bg-white shadow-lg shadow-gray-100/50 whitespace-nowrap ${org.accent}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${org.color} flex items-center justify-center shrink-0`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {org.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Feature Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {featurePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 border border-gray-100"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon
                    className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 m-0 leading-snug">
                  {point.text}
                </h3>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MultiOrg;
