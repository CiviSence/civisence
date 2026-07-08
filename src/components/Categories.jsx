import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  Trash2,
  Droplets,
  Zap,
  Trash,
  Building,
  Home,
  Shield,
  Wifi,
  AlertOctagon,
  Car,
  Wind,
  HelpCircle,
} from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Road Damage & Potholes", icon: <AlertTriangle /> },
    { name: "Street Lights", icon: <Lightbulb /> },
    { name: "Garbage & Waste", icon: <Trash2 /> },
    { name: "Drainage & Flooding", icon: <Wind /> },
    { name: "Water Supply", icon: <Droplets /> },
    { name: "Electricity Hazards", icon: <Zap /> },
    { name: "Illegal Dumping", icon: <Trash /> },
    { name: "Campus Maintenance", icon: <Building /> },
    { name: "Hostel Facilities", icon: <Home /> },
    { name: "Security & Safety", icon: <Shield /> },
    { name: "Wi-Fi & Internet", icon: <Wifi /> },
    { name: "Public Property", icon: <AlertOctagon /> },
    { name: "Parking & Traffic", icon: <Car /> },
    { name: "Sanitation & Hygiene", icon: <Wind /> },
    { name: "Other Grievances", icon: <HelpCircle /> },
  ];

  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="py-14 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Civic &amp; Campus Categories
          </span>
          <h2
            id="categories-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight"
          >
            Comprehensive AI Issue Coverage
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Automated AI categorization routes complaints to the exact municipal
            or campus department for faster resolution.
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
          role="list"
          aria-label="Issue categories"
        >
          {categories.map((cat, index) => (
            <motion.article
              key={index}
              role="listitem"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-3.5 sm:p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 cursor-pointer group"
            >
              <div
                className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-full flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-2.5 sm:mb-4 shadow-xs sm:shadow-sm"
                aria-hidden="true"
              >
                {cat.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 text-center m-0 leading-tight">
                {cat.name}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
