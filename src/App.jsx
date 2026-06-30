import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignupPaths from './components/SignupPaths';
import HowItWorks from './components/HowItWorks';
import HowItWorksOrg from './components/HowItWorksOrg';
import MultiOrg from './components/MultiOrg';
import Comparison from './components/Comparison';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import OrgFeatures from './components/OrgFeatures';
import Tracking from './components/Tracking';
import Analytics from './components/Analytics';
import WorkflowExample from './components/WorkflowExample';
import DownloadApp from './components/DownloadApp';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SignupPaths />
      <HowItWorks />
      <HowItWorksOrg />
      <MultiOrg />
      <Comparison />
      <Features />
      <DashboardPreview />
      <OrgFeatures />
      <Tracking />
      <Analytics />
      <WorkflowExample />
      <DownloadApp />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
