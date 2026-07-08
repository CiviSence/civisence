import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  Activity,
  Users,
  ShieldCheck,
  PlaySquareIcon,
  Download,
} from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="min-h-screen relative pb-20 pt-40 lg:pb-32 overflow-hidden bg-linear-to-b from-gray-50 to-white"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Logo className="w-5 h-5" />
              <span>Smart Civic Issue Management Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Civic Issue Management <br /> with <br className="lg:hidden" />
              <span className="text-primary text-6xl lg:text-7xl">
                {" "}
                CiviSence
              </span>
            </h1>

            <p className="text-md lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering citizens, campuses, municipalities, and organizations
              to report complaints and issues, and track real-time resolution
              with 100% transparency.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=app.web.civisence.twa&pcampaignid=web_share"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                aria-label="Get Started Free with CiviSence"
              >
                <Download size={20} aria-hidden="true" />
                Download CiviSence
              </a>
              <a
                href="/organizations"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl font-medium transition-all flex items-center justify-center gap-2 text-lg focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                aria-label="Explore Features of CiviSence"
              >
                <Building2 size={20} aria-hidden="true" />
                Register Organization
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Trusted by modern municipalities, college campuses, and smart
              organizations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Abstract Platform base */}
              <div
                className="absolute bottom-10 w-3/4 h-16 bg-linear-to-r from-gray-100 to-gray-200 rounded-[100%] blur-sm border-b border-gray-300"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-14 w-2/3 h-12 bg-white rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
                aria-hidden="true"
              ></div>

              {/* Giant floating logo */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative z-10 text-primary w-64 h-64 drop-shadow-2xl"
              >
                <Logo className="w-full h-full" />
              </motion.div>

              {/* Faint background logo graphic */}
              <div
                className="absolute text-gray-100 w-[140%] h-[140%] -z-10 flex items-center justify-center opacity-10"
                aria-hidden="true"
              >
                <Logo className="w-full h-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
