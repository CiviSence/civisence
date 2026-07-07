import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('citizen');

  const tabs = [
    { id: 'citizen', label: 'Citizen View' },
    { id: 'admin', label: 'Admin Dashboard' },
    { id: 'staff', label: 'Staff Portal' },
  ];

  return (
    <section id="dashboard" aria-labelledby="dashboard-heading" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] z-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-light font-semibold tracking-wide uppercase text-sm mb-3">Platform Preview</span>
          <h2 id="dashboard-heading" className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            AI-Powered Issue Resolution Dashboard
          </h2>
          <p className="text-lg text-gray-400">
            An intuitive, responsive interface for citizens reporting geo-tagged complaints, municipalities monitoring SLA analytics, and staff resolving field tasks.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12" role="tablist" aria-label="Dashboard Views">
          <div className="inline-flex p-1 bg-gray-800 rounded-full border border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all focus:outline-hidden focus:ring-2 focus:ring-primary ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative mx-auto max-w-5xl" role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          <div className="bg-gray-800 rounded-t-2xl border-t border-x border-gray-700 p-3 flex items-center gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="mx-auto bg-gray-900 rounded-md px-4 py-1 text-xs text-gray-500 font-mono">
              www.civisence.web.app/dashboard
            </div>
          </div>
          
          <div className="bg-white rounded-b-2xl overflow-hidden aspect-16/10 shadow-2xl relative border-b border-x border-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col"
              >
                {/* Simplified CSS Mockups based on active tab */}
                {activeTab === 'citizen' && (
                  <div className="flex-1 bg-gray-50 p-6 flex flex-col gap-6" aria-label="Citizen Issue Feed Preview">
                    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                      <div className="font-bold text-lg text-gray-800">My Geo-Tagged Reports</div>
                      <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">+ New Report</div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100" aria-hidden="true">
                          <div className="h-32 bg-gray-200" />
                          <div className="p-4 space-y-3">
                            <div className="w-2/3 h-4 bg-gray-200 rounded" />
                            <div className="w-full h-3 bg-gray-100 rounded" />
                            <div className="flex justify-between items-center pt-2">
                              <div className="w-1/3 h-3 bg-green-100 rounded" />
                              <div className="w-6 h-6 rounded-full bg-gray-200" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'admin' && (
                  <div className="flex-1 flex h-full" aria-label="Admin Resolution Dashboard Preview">
                    <div className="w-64 bg-gray-900 p-4 space-y-4" aria-hidden="true">
                      <div className="w-32 h-6 bg-gray-800 rounded mb-8" />
                      {[1,2,3,4].map(i => <div key={i} className="w-full h-8 bg-gray-800 rounded" />)}
                    </div>
                    <div className="flex-1 bg-gray-100 p-6 space-y-6" aria-hidden="true">
                      <div className="grid grid-cols-4 gap-4">
                        {[1,2,3,4].map(i => <div key={i} className="bg-white p-4 rounded-xl shadow-sm h-24" />)}
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-2 bg-white rounded-xl shadow-sm h-64 p-4">
                           <div className="w-1/4 h-4 bg-gray-200 rounded mb-4" />
                           <div className="w-full h-48 bg-gray-50 rounded" />
                        </div>
                        <div className="col-span-1 bg-white rounded-xl shadow-sm h-64 p-4">
                           <div className="w-1/2 h-4 bg-gray-200 rounded mb-4" />
                           <div className="space-y-3 mt-4">
                             {[1,2,3,4,5].map(i => <div key={i} className="w-full h-6 bg-gray-50 rounded" />)}
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'staff' && (
                  <div className="flex-1 bg-gray-50 p-4 sm:p-8 flex justify-center" aria-label="Field Staff Mobile Portal Preview">
                    {/* Mobile App Mockup */}
                    <div className="w-80 bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden relative flex flex-col" aria-hidden="true">
                      <div className="bg-primary text-white p-6 pt-10 pb-8 rounded-b-3xl">
                        <div className="text-sm opacity-80">Field Task SLA</div>
                        <div className="text-xl font-bold mt-1">Assigned Workflows</div>
                      </div>
                      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 shrink-0" />
                            <div className="space-y-2 flex-1">
                              <div className="w-3/4 h-3 bg-gray-300 rounded" />
                              <div className="w-1/2 h-2 bg-gray-200 rounded" />
                              <div className="w-full h-8 bg-primary/10 rounded-lg mt-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
