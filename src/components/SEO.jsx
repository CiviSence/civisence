import React, { useEffect } from 'react';

const SEO = ({
  title = "CiviSence | AI Powered Civic Issue Reporting & Management Platform",
  description = "CiviSence helps citizens, campuses, and organizations report, track, and resolve civic issues using AI, geolocation, analytics, and smart workflows.",
  keywords = "AI Civic Issue Reporting, Campus Issue Management, Complaint Management System, Smart City Platform, Issue Tracking Software, Geo-tagged Reporting, Organization Issue Management, Municipal Complaint System, Public Grievance Platform, Issue Resolution Dashboard",
  canonical = "https://civisence-community.vercel.app/",
  ogImage = "https://civisence-community.vercel.app/CSM-logo.png",
  ogType = "website"
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update or Create Meta Tags helper
    const updateMetaTag = (name, attribute, value) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    updateMetaTag('description', 'name', description);
    updateMetaTag('keywords', 'name', keywords);
    
    // Open Graph
    updateMetaTag('og:title', 'property', title);
    updateMetaTag('og:description', 'property', description);
    updateMetaTag('og:type', 'property', ogType);
    updateMetaTag('og:url', 'property', canonical);
    updateMetaTag('og:image', 'property', ogImage);

    // Twitter Card
    updateMetaTag('twitter:title', 'name', title);
    updateMetaTag('twitter:description', 'name', description);
    updateMetaTag('twitter:image', 'name', ogImage);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

  }, [title, description, keywords, canonical, ogImage, ogType]);

  return null;
};

export default SEO;
