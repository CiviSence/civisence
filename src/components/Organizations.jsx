import React from 'react';

const Organizations = () => {
  const orgs = [
    "Smart Cities", "Universities", "College Hostels", 
    "Residential Societies", "Municipal Bodies", 
    "Civic NGOs", "Corporate Campuses"
  ];

  return (
    <section id="trusted-organizations" aria-labelledby="trusted-orgs-heading" className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <h2 id="trusted-orgs-heading" className="sr-only">Trusted by Organizations Across All Sectors</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p aria-hidden="true" className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by smart campuses and municipalities across all sectors
        </p>
        
        {/* Marquee effect */}
        <div className="relative flex overflow-x-hidden" role="list" aria-label="Partner sectors">
          <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-24">
            {orgs.map((org, i) => (
              <span key={i} role="listitem" className="text-xl md:text-2xl font-bold text-gray-300">
                {org}
              </span>
            ))}
            {/* Repeat for seamless loop */}
            {orgs.map((org, i) => (
              <span key={`dup-${i}`} aria-hidden="true" className="text-xl md:text-2xl font-bold text-gray-300">
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Organizations;
