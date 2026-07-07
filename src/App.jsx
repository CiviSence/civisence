import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';

// Code splitting with React.lazy for performance optimization (Core Web Vitals)
const SignupPaths = lazy(() => import('./components/SignupPaths'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const HowItWorksOrg = lazy(() => import('./components/HowItWorksOrg'));
const MultiOrg = lazy(() => import('./components/MultiOrg'));
const Comparison = lazy(() => import('./components/Comparison'));
const Features = lazy(() => import('./components/Features'));
const DashboardPreview = lazy(() => import('./components/DashboardPreview'));
const OrgFeatures = lazy(() => import('./components/OrgFeatures'));
const Tracking = lazy(() => import('./components/Tracking'));
const Analytics = lazy(() => import('./components/Analytics'));
const WorkflowExample = lazy(() => import('./components/WorkflowExample'));
const DownloadApp = lazy(() => import('./components/DownloadApp'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const CTA = lazy(() => import('./components/CTA'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const handleUrlNavigation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      const routeMap = {
        '/features': '#roles',
        '/how-it-works': '#how-it-works',
        '/organizations': '#for-organizations',
        '/analytics': '#dashboard',
        '/faq': '#faq',
        '/contact': '#contact',
        '/login': 'https://civisence-community.vercel.app/login',
        '/signup': 'https://civisence-community.vercel.app/register'
      };

      if (routeMap[path]) {
        if (path === '/login' || path === '/signup') {
          window.location.href = routeMap[path];
          return;
        }
        const targetId = routeMap[path].replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    };

    handleUrlNavigation();
    window.addEventListener('popstate', handleUrlNavigation);
    return () => window.removeEventListener('popstate', handleUrlNavigation);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <main id="main-content" aria-label="Main Content">
        <Hero />
        <Suspense fallback={<div className="py-12 flex justify-center items-center text-gray-400" aria-live="polite">Loading content...</div>}>
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
        </Suspense>
      </main>
    </div>
  );
}

export default App;
