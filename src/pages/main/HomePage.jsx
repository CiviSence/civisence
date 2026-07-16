import React, { Suspense, lazy } from "react";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Benefits from "../../components/sections/Benefits";
import Categories from "../../components/sections/Categories";

// Code splitting with React.lazy for performance optimization (Core Web Vitals)
const SignupPaths = lazy(() => import("../../components/organization/SignupPaths"));
const HowItWorks = lazy(() => import("../../components/sections/HowItWorks"));
const HowItWorksOrg = lazy(() => import("../../components/organization/HowItWorksOrg"));
const MultiOrg = lazy(() => import("../../components/organization/MultiOrg"));
const Comparison = lazy(() => import("../../components/features/Comparison"));
const Features = lazy(() => import("../../components/features/Features"));
const DashboardPreview = lazy(() => import("../../components/features/DashboardPreview"));
const OrgFeatures = lazy(() => import("../../components/organization/OrgFeatures"));
const Tracking = lazy(() => import("../../components/features/Tracking"));
const Analytics = lazy(() => import("../../components/features/Analytics"));
const WorkflowExample = lazy(() => import("../../components/organization/WorkflowExample"));
const DownloadApp = lazy(() => import("../../components/features/DownloadApp"));
const Testimonials = lazy(() => import("../../components/sections/Testimonials"));
const FAQ = lazy(() => import("../../components/sections/FAQ"));
const Contact = lazy(() => import("../../components/sections/Contact"));
const CTA = lazy(() => import("../../components/sections/CTA"));
const Footer = lazy(() => import("../../components/layout/Footer"));

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MultiOrg />
      <Analytics />
      <Categories />
      <DashboardPreview />
      <Comparison />
      <Contact />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
