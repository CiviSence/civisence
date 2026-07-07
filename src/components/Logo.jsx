import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => (
  <img 
    src="/CSM-logo.png" 
    alt="CiviSence AI Civic Issue Reporting and Complaint Management System Logo" 
    width="40" 
    height="40" 
    className={className} 
    loading="eager"
  />
);

export default Logo;
