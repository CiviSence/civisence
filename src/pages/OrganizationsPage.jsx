import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  Tag,
  AlertCircle,
  Loader2,
  Search,
  ExternalLink,
} from 'lucide-react';
import { getOrganizations } from '../api/organization/org.api.js';

// ─── Status pill ────────────────────────────────────────────────────────────
const StatusBadge = ({ status, isActive }) => {
  const active = isActive && status === 'active';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
        active
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-red-50 text-red-500'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-emerald-500' : 'bg-red-400'}`} />
      {active ? 'Active' : 'Inactive'}
    </span>
  );
};

// ─── Plan pill ───────────────────────────────────────────────────────────────
const PlanBadge = ({ plan }) => {
  const styles = {
    basic:      'bg-blue-50 text-blue-600',
    pro:        'bg-violet-50 text-violet-600',
    enterprise: 'bg-amber-50 text-amber-600',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${styles[plan] || styles.basic}`}>
      <Tag size={10} />
      {plan || 'basic'}
    </span>
  );
};

// ─── Skeleton card ───────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 p-6 animate-pulse">
    <div className="flex items-start gap-4 mb-5">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-3 bg-gray-100 rounded w-full" />
      <div className="h-3 bg-gray-100 rounded w-5/6" />
    </div>
    <div className="mt-5 flex gap-2">
      <div className="h-6 w-16 bg-gray-100 rounded-full" />
      <div className="h-6 w-12 bg-gray-100 rounded-full" />
    </div>
  </div>
);

// ─── Organization card ───────────────────────────────────────────────────────
const OrgCard = ({ org, index }) => {
  const initials = org.name
    .split(/[\s,]+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-violet-500 to-purple-600',
    'from-emerald-500 to-teal-600',
    'from-rose-500 to-pink-600',
    'from-amber-500 to-orange-600',
    'from-cyan-500 to-blue-600',
  ];
  const grad = gradients[index % gradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      className="group bg-white rounded-3xl border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 flex items-start gap-4">
        {/* Avatar */}
        <div className={`bg-gradient-to-br ${grad} w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md`}>
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-snug truncate group-hover:text-primary transition-colors">
            {org.name}
          </h3>
          {org.code && (
            <p className="text-xs text-gray-400 font-mono mt-0.5">{org.code}</p>
          )}
          {org.domain && (
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
              <ExternalLink size={10} />
              {org.domain}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pb-4 flex-1 space-y-3">
        {org.description && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {org.description}
          </p>
        )}

        <ul className="space-y-1.5 text-xs text-gray-500">
          {org.address && (
            <li className="flex items-start gap-2">
              <MapPin size={12} className="shrink-0 mt-0.5 text-gray-400" />
              <span className="line-clamp-2">{org.address}</span>
            </li>
          )}
          {org.phone && (
            <li className="flex items-center gap-2">
              <Phone size={12} className="shrink-0 text-gray-400" />
              <span>{org.phone}</span>
            </li>
          )}
          {org.official_email && (
            <li className="flex items-center gap-2">
              <Mail size={12} className="shrink-0 text-gray-400" />
              <span className="truncate">{org.official_email}</span>
            </li>
          )}
        </ul>
      </div>

      {/* Footer */}
      <div className="px-6 pb-5 pt-2 flex items-center gap-2 border-t border-gray-50">
        <StatusBadge status={org.status} isActive={org.is_active} />
        <PlanBadge plan={org.plan_type} />
        {org.is_active && (
          <span className="ml-auto text-primary" aria-label="Verified">
            <BadgeCheck size={16} />
          </span>
        )}
      </div>
    </motion.article>
  );
};

// ─── Main page ───────────────────────────────────────────────────────────────
const OrganizationsPage = () => {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let cancelled = false;
    const fetchOrgs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getOrganizations();
        if (!cancelled) setOrgs(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load organizations.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchOrgs();
    return () => { cancelled = true; };
  }, []);

  const filtered = orgs.filter((o) =>
    [o.name, o.description, o.address, o.code, o.domain]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Organizations listed on{' '}
              <span style={{ backgroundImage: 'linear-gradient(135deg,#6C63FF,#7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                CiviSence
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Municipalities, campuses, and enterprises using CiviSence to manage civic issues at scale.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search organizations…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 bg-white shadow-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Loading skeletons */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                <AlertCircle size={28} className="text-red-400" />
              </div>
              <h2 className="text-lg font-semibold text-gray-700">Could not load organizations</h2>
              <p className="text-gray-400 text-sm max-w-sm">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-dark transition"
              >
                Retry
              </button>
            </motion.div>
          )}

          {/* Empty / no-results state */}
          {!loading && !error && filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 text-center gap-3"
            >
              <Building2 size={40} className="text-gray-200" />
              <h2 className="text-lg font-semibold text-gray-400">
                {search ? 'No organizations match your search' : 'No organizations found'}
              </h2>
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="text-primary text-sm underline underline-offset-2"
                >
                  Clear search
                </button>
              )}
            </motion.div>
          )}

          {/* Organization grid */}
          {!loading && !error && filtered.length > 0 && (
            <>
              <p className="text-sm text-gray-400 mb-6">
                {filtered.length} organization{filtered.length !== 1 ? 's' : ''} found
                {search && ` for "${search}"`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filtered.map((org, i) => (
                    <OrgCard key={org.id} org={org} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default OrganizationsPage;
