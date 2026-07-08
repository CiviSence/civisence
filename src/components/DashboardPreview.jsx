import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userDashboardImg from "../assets/dashboard/user-dashboard.png";
import adminDashboardImg from "../assets/dashboard/admin-dashboard.png";
import staffDashboardImg from "../assets/dashboard/staff-dashboard.png";

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState("citizen");

  const tabs = [
    {
      id: "citizen",
      label: "Citizen View",
      img: userDashboardImg,
      alt: "Citizen Issue Reporting & Tracking Dashboard",
    },
    {
      id: "admin",
      label: "Admin Dashboard",
      img: adminDashboardImg,
      alt: "Admin Resolution & SLA Monitoring Dashboard",
    },
    {
      id: "staff",
      label: "Staff Portal",
      img: staffDashboardImg,
      alt: "Field Staff Resolution Portal",
    },
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-heading"
      className="py-14 sm:py-20 lg:py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Decorative background gradients */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-primary-light font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Platform Preview
          </span>
          <h2
            id="dashboard-heading"
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 tracking-tight"
          >
            Issue Resolution Dashboard
          </h2>
          <p className="text-sm sm:text-lg text-gray-400">
            An intuitive, responsive interface for citizens reporting geo-tagged
            complaints, municipalities monitoring SLA analytics, and staff
            resolving field tasks.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center mb-6 sm:mb-10"
          role="tablist"
          aria-label="Dashboard Views"
        >
          <div className="inline-flex p-1 bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-700/80 shadow-inner max-w-full overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup Container */}
        <div
          className="relative mx-auto max-w-5xl"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          {/* Browser Window Header */}
          <div
            className="bg-gray-800/90 rounded-t-2xl border-t border-x border-gray-700/80 p-3.5 flex items-center gap-2 backdrop-blur-sm"
            aria-hidden="true"
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto bg-gray-900/80 rounded-lg px-6 py-1 text-xs text-gray-400 font-mono tracking-wide border border-gray-700/50">
              {activeTab === "citizen" && "app.civisence.in"}
              {activeTab === "admin" && "admin.civisence.in"}
              {activeTab === "staff" && "staff.civisence.in"}
            </div>
          </div>

          {/* Actual Image Render */}
          <div className="bg-gray-950 rounded-b-2xl overflow-hidden shadow-2xl relative border-b border-x border-gray-700/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.99, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center bg-gray-900/50"
              >
                <img
                  src={activeTabData.img}
                  alt={activeTabData.alt}
                  className="w-full h-auto max-h-[700px] object-cover object-top block"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
