import React from 'react';
import { Smartphone, Download } from 'lucide-react';

import Logo from './Logo';

const DownloadApp = () => {
  return (
    <section id="download" aria-labelledby="download-heading" className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-20 -mb-20" aria-hidden="true"></div>

          <div className="md:w-1/2 relative z-10 text-center md:text-left mb-12 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 font-medium text-sm mb-6 border border-green-100">
                <Smartphone size={16} aria-hidden="true" />
                <span>Now Available on Android</span>
              </div>
              <Logo className="w-16 h-16 text-primary mb-6" />
            </div>
            
            <h2 id="download-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Take AI Civic Issue Reporting <br className="hidden md:block" />
              anywhere you go
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Submit geo-tagged complaints on the spot with AI photo detection, track live SLA progress, and stay connected with your municipality or campus straight from your mobile device.
            </p>
            
            <a 
              href="https://play.google.com/store/apps/details?id=app.web.civisence.twa&pcampaignid=web_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:-translate-y-1 focus:outline-hidden focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="Download CiviSence AI Civic Issue Reporting Android App from Google Play Store"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get CiviSence AI Civic Issue Reporting app on Google Play Store" 
                width="180"
                height="70"
                loading="lazy"
                className="h-16 md:h-20 w-auto"
              />
            </a>
          </div>

          <div className="md:w-5/12 relative z-10 flex justify-center" aria-hidden="true">
             <div className="w-64 h-[500px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-gray-900 overflow-hidden relative flex flex-col transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-primary text-white p-6 pt-10 pb-8 rounded-b-3xl">
                  <div className="text-sm opacity-80">Hello, Citizen</div>
                  <div className="text-xl font-bold mt-1">Report an Issue</div>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="w-3/4 h-3 bg-gray-300 rounded" />
                      <div className="w-1/2 h-2 bg-gray-200 rounded" />
                    </div>
                  </div>
                  <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <Download className="text-gray-400" />
                  </div>
                  <div className="w-full h-10 bg-primary/20 rounded-xl mt-4" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
