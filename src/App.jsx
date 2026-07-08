import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import About from "./components/About";

// Lazy-loaded portal pages
const LoginPortalPage = lazy(() => import("./pages/LoginPortalPage"));
const SignupPortalPage = lazy(() => import("./pages/SignupPortalPage"));

// Lazy-loaded standalone section pages
const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const OrganizationsPage = lazy(() => import("./pages/OrganizationsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

// Lazy-loaded legal + footer
const LegalPage = lazy(() => import("./pages/LegalPage"));
const Footer = lazy(() => import("./components/Footer"));

const legalRoutes = [
  "/privacy",
  "/terms",
  "/security",
  "/accessibility",
  "/cookies",
  "/acceptable-use",
  "/ai-transparency",
  "/childrens-privacy",
  "/community-guidelines",
  "/contact-support",
  "/content-moderation",
  "/copyright-ip",
  "/data-deletion",
];

// ─── Layout wrappers ────────────────────────────────────────────────────────

// Standard page layout: Navbar + content + Footer
const PageLayout = ({ children, seoTitle, seoDescription }) => (
  <>
    {seoTitle && <SEO title={seoTitle} description={seoDescription} />}
    <Navbar />
    <main id="main-content" aria-label="Main Content">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-gray-400">
            Loading...
          </div>
        }
      >
        {children}
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

// Legal page layout
const LegalPageWrapper = ({ path }) => (
  <PageLayout
    seoTitle="CiviSence | Legal Documentation"
    seoDescription="Review the CiviSence privacy, security, accessibility, terms, and cookie policies."
  >
    <LegalPage currentPath={path} />
  </PageLayout>
);

// ─── Scroll-to-top on route change ──────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

// ─── App ────────────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* ── Home ── */}
        <Route
          path="/"
          element={
            <>
              <SEO />
              <Navbar />
              <main id="main-content" aria-label="Main Content">
                <HomePage />
              </main>
            </>
          }
        />

        {/* ── Auth portals (no extra Navbar — they have their own header) ── */}
        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center text-gray-400">
                  Loading...
                </div>
              }
            >
              <LoginPortalPage />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center text-gray-400">
                  Loading...
                </div>
              }
            >
              <SignupPortalPage />
            </Suspense>
          }
        />

        {/* ── Standalone section pages ── */}
        <Route
          path="/features"
          element={
            <PageLayout
              seoTitle="Features | CiviSence"
              seoDescription="Explore CiviSence features for citizens, staff, and organizations."
            >
              <FeaturesPage />
            </PageLayout>
          }
        />
        <Route
          path="/organizations"
          element={
            <PageLayout
              seoTitle="Organizations | CiviSence"
              seoDescription="CiviSence for municipalities, campuses, and enterprises."
            >
              <OrganizationsPage />
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout
              seoTitle="Contact Us | CiviSence"
              seoDescription="Get in touch with the CiviSence team."
            >
              <ContactPage />
            </PageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PageLayout
              seoTitle="About | CiviSence"
              seoDescription="details about civisence"
            >
              <About />
            </PageLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <PageLayout
              seoTitle="FAQ | CiviSence"
              seoDescription="Frequently asked questions about CiviSence."
            >
              <FAQPage />
            </PageLayout>
          }
        />

        {/* ── Legal routes ── */}
        {legalRoutes.map((path) => (
          <Route
            key={path}
            path={path}
            element={<LegalPageWrapper path={path} />}
          />
        ))}

        {/* ── Catch-all ── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <VercelAnalytics />
    </>
  );
}

export default App;
