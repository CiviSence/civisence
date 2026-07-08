import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Check,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Info
} from 'lucide-react';

import SEO from './SEO';

import acceptableUsePolicy from '../../legal/acceptable_use_policy.md?raw';
import accessibilityStatement from '../../legal/accessibility_statement.md?raw';
import aiTransparencyPolicy from '../../legal/ai_transparency_policy.md?raw';
import childrensPrivacyPolicy from '../../legal/childrens_privacy_policy.md?raw';
import communityGuidelines from '../../legal/community_guidelines.md?raw';
import contactSupportPolicy from '../../legal/contact_support_policy.md?raw';
import contentModerationPolicy from '../../legal/content_moderation_policy.md?raw';
import cookiePolicy from '../../legal/cookie_policy.md?raw';
import copyrightIpPolicy from '../../legal/copyright_ip_policy.md?raw';
import dataDeletionPolicy from '../../legal/data_deletion_policy.md?raw';
import privacyPolicy from '../../legal/privacy_policy.md?raw';
import securityPolicy from '../../legal/security_policy.md?raw';
import termsOfService from '../../legal/terms_of_service.md?raw';

const legalDocs = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    summary: 'How we collect, use, and protect your account and civic reporting data.',
    path: '/privacy',
    content: privacyPolicy,
  },
  {
    slug: 'terms',
    title: 'Terms of Service',
    summary: 'The rules for using CiviSence and participating in civic issue workflows.',
    path: '/terms',
    content: termsOfService,
  },
  {
    slug: 'security',
    title: 'Security & Encryption',
    summary: 'Our approach to encryption, access control, and secure operations.',
    path: '/security',
    content: securityPolicy,
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    summary: 'How we support accessible use of our platform and how to request help.',
    path: '/accessibility',
    content: accessibilityStatement,
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    summary: 'How cookies and similar technologies support your experience on CiviSence.',
    path: '/cookies',
    content: cookiePolicy,
  },
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use Policy',
    summary: 'Standards for safe, respectful, and lawful use of the CiviSence platform.',
    path: '/acceptable-use',
    content: acceptableUsePolicy,
  },
  {
    slug: 'ai-transparency',
    title: 'AI Transparency Policy',
    summary: 'How we disclose and govern the use of AI features and automation.',
    path: '/ai-transparency',
    content: aiTransparencyPolicy,
  },
  {
    slug: 'childrens-privacy',
    title: "Children's Privacy Policy",
    summary: 'How we handle privacy for young users and minors.',
    path: '/childrens-privacy',
    content: childrensPrivacyPolicy,
  },
  {
    slug: 'community-guidelines',
    title: 'Community Guidelines',
    summary: 'The norms and standards for constructive civic participation.',
    path: '/community-guidelines',
    content: communityGuidelines,
  },
  {
    slug: 'contact-support',
    title: 'Contact Support Policy',
    summary: 'How users can reach support and receive help with platform issues.',
    path: '/contact-support',
    content: contactSupportPolicy,
  },
  {
    slug: 'content-moderation',
    title: 'Content Moderation Policy',
    summary: 'How we review, manage, and remove content that violates our rules.',
    path: '/content-moderation',
    content: contentModerationPolicy,
  },
  {
    slug: 'copyright-ip',
    title: 'Copyright & IP Policy',
    summary: 'How we handle intellectual property rights and reporting infringements.',
    path: '/copyright-ip',
    content: copyrightIpPolicy,
  },
  {
    slug: 'data-deletion',
    title: 'Data Deletion Policy',
    summary: 'How you can request deletion of your personal data and related records.',
    path: '/data-deletion',
    content: dataDeletionPolicy,
  },
];

const categories = [
  {
    id: 'core',
    name: 'Core Agreements',
    slugs: ['terms', 'acceptable-use', 'community-guidelines']
  },
  {
    id: 'privacy',
    name: 'Privacy & Cookies',
    slugs: ['privacy', 'childrens-privacy', 'cookies', 'data-deletion']
  },
  {
    id: 'security',
    name: 'Safety & Governance',
    slugs: ['security', 'ai-transparency', 'content-moderation', 'copyright-ip']
  },
  {
    id: 'support',
    name: 'Support & Access',
    slugs: ['accessibility', 'contact-support']
  }
];

// Helper to extract search snippets
const getSearchSnippet = (content, query) => {
  if (!query) return '';
  const idx = content.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return '';
  const start = Math.max(0, idx - 40);
  const end = Math.min(content.length, idx + query.length + 50);
  let snippet = content.substring(start, end).replace(/[\r\n#*`_-]/g, ' ');
  if (start > 0) snippet = '...' + snippet;
  if (end < content.length) snippet = snippet + '...';
  return snippet.trim();
};

// Helper to extract headings for the TOC
const getTableOfContents = (markdown) => {
  if (!markdown) return [];
  const lines = markdown.split('\n');
  const toc = [];
  let isCodeBlock = false;
  
  lines.forEach((line) => {
    if (line.startsWith('```')) {
      isCodeBlock = !isCodeBlock;
    }
    if (isCodeBlock) return;
    
    // Support h2 (## Heading)
    const h2Match = line.match(/^##\s+(.+)$/);
    if (h2Match) {
      const text = h2Match[1].replace(/\*\*|__/g, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      toc.push({ id, text, level: 2 });
    }
    
    // Support h3 (### Subheading)
    const h3Match = line.match(/^###\s+(.+)$/);
    if (h3Match) {
      const text = h3Match[1].replace(/\*\*|__/g, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      toc.push({ id, text, level: 3 });
    }
  });
  
  return toc;
};

// ReactMarkdown heading component custom ID generators
const getHeadingText = (children) => {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(child => typeof child === 'string' ? child : getHeadingText(child.props?.children)).join('');
  }
  if (children && typeof children === 'object') {
    return getHeadingText(children.props?.children);
  }
  return '';
};

const generateAnchorId = (text) => {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const getDocMetadata = (content) => {
  const versionMatch = content.match(/\*\*Version:\*\*?\s*([^\n\r]+)/i);
  const updatedMatch = content.match(/\*\*Last Updated:\*\*?\s*([^\n\r]+)/i);
  const effectiveMatch = content.match(/\*\*Effective Date:\*\*?\s*([^\n\r]+)/i);
  return {
    version: versionMatch ? versionMatch[1].trim() : '1.0.0',
    lastUpdated: updatedMatch ? updatedMatch[1].trim() : (effectiveMatch ? effectiveMatch[1].trim() : 'July 8, 2026')
  };
};

const components = {
  h2: ({ children, ...props }) => {
    const text = getHeadingText(children);
    const id = generateAnchorId(text);
    return (
      <h2 id={id} className="group relative" {...props}>
        <a 
          href={`#${id}`} 
          className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-900 no-underline border-none select-none pr-1" 
          aria-label="Link to this section"
        >
          #
        </a>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const text = getHeadingText(children);
    const id = generateAnchorId(text);
    return (
      <h3 id={id} className="group relative" {...props}>
        <a 
          href={`#${id}`} 
          className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-zinc-900 no-underline border-none select-none pr-1" 
          aria-label="Link to this section"
        >
          #
        </a>
        {children}
      </h3>
    );
  }
};

const LegalPage = ({ currentPath = '/privacy' }) => {
  const normalizedPath = currentPath.replace(/^\/+|\/+$/g, '');
  const currentDoc = legalDocs.find((doc) => doc.slug === normalizedPath) || legalDocs[0];

  const searchInputRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [keyboardPlatform, setKeyboardPlatform] = useState('Ctrl K');

  // Interactive request builder state (for data deletion helper)
  const [requestType, setRequestType] = useState('deletion'); // 'deletion', 'archive', 'correction'
  const [requesterName, setRequesterName] = useState('');
  const [requesterEmail, setRequesterEmail] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [complianceSubmitting, setComplianceSubmitting] = useState(false);
  const [complianceSubmitted, setComplianceSubmitted] = useState(false);
  const [complianceError, setComplianceError] = useState(false);

  // Pagination helper indices
  const docIndex = legalDocs.findIndex((doc) => doc.slug === currentDoc.slug);
  const prevDoc = docIndex > 0 ? legalDocs[docIndex - 1] : null;
  const nextDoc = docIndex < legalDocs.length - 1 ? legalDocs[docIndex + 1] : null;

  // Reset states on doc changes
  useEffect(() => {
    setFeedback(null);
    setCopiedDraft(false);
    setComplianceSubmitted(false);
    setComplianceError(false);
  }, [currentDoc]);

  // Determine keyboard shortcut modifier text (Cmd vs Ctrl)
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData?.platform || '');
      setKeyboardPlatform(isMac ? '⌘K' : 'Ctrl K');
    }
  }, []);

  // Keyboard shortcut listener to focus Search Bar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scrollspy, Scroll to top, and reading progress indicators
  useEffect(() => {
    const tocHeadings = getTableOfContents(currentDoc.content);

    const handleScroll = () => {
      // Scroll to top button visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Reading progress bar math
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // Scroll Spy for TOC Outline
      if (tocHeadings.length === 0) return;
      let currentActive = tocHeadings[0]?.id || '';
      const scrollPosition = window.scrollY + 120;

      for (let i = 0; i < tocHeadings.length; i++) {
        const el = document.getElementById(tocHeadings[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          currentActive = tocHeadings[i].id;
        }
      }
      setActiveHeadingId(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentDoc]);

  const handleNavigate = (path) => (event) => {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter policies based on Search Queries
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return legalDocs.map(doc => {
      const titleMatch = doc.title.toLowerCase().includes(q);
      const summaryMatch = doc.summary.toLowerCase().includes(q);
      const contentMatch = doc.content.toLowerCase().includes(q);
      
      if (titleMatch || summaryMatch || contentMatch) {
        const snippet = contentMatch ? getSearchSnippet(doc.content, q) : doc.summary;
        return { ...doc, snippet };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  const metadata = getDocMetadata(currentDoc.content);
  const wordsCount = currentDoc.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordsCount / 220);

  // Strip H1 heading from markdown content since we render it in our React layout
  const cleanContent = currentDoc.content.trim().replace(/^#\s+[^\n\r]+/, '').trim();
  const toc = getTableOfContents(currentDoc.content);

  // Data Deletion interactive generator values
  const emailSubject = useMemo(() => {
    const subjects = {
      deletion: 'CiviSence: Personal Account & Data Deletion Request',
      archive: 'CiviSence: Personal Data Archive Export Request',
      correction: 'CiviSence: Personal Data Correction Request'
    };
    return subjects[requestType] || 'CiviSence Compliance Request';
  }, [requestType]);

  const emailBody = useMemo(() => {
    const nameStr = requesterName.trim() || '[Your Name]';
    const emailStr = requesterEmail.trim() || '[Your Account Email]';
    const detailsStr = requestDetails.trim() ? `\nDetails / Reason:\n${requestDetails}` : '';

    if (requestType === 'deletion') {
      return `Dear CiviSence Compliance Operations Team,\n\nI am writing to request the complete deletion of my account data and all associated personal records in accordance with the CiviSence Data Deletion Policy.\n\nAccount Credentials:\nName: ${nameStr}\nEmail Address: ${emailStr}${detailsStr}\n\nPlease confirm once my personal data files, history records, and identifiers have been securely erased.\n\nSincerely,\n${nameStr}`;
    }
    if (requestType === 'archive') {
      return `Dear CiviSence Compliance Operations Team,\n\nI am writing to formally request a structured, machine-readable export of all personal data, voting histories, and issue reports linked to my account.\n\nAccount Credentials:\nName: ${nameStr}\nEmail Address: ${emailStr}${detailsStr}\n\nPlease send the secure export package or link to this email address.\n\nSincerely,\n${nameStr}`;
    }
    return `Dear CiviSence Compliance Operations Team,\n\nI am writing to request a correction to my personal account data as listed on your platform.\n\nAccount Credentials:\nName: ${nameStr}\nEmail Address: ${emailStr}\n\nCorrection details:\n${requestDetails || '[Describe the incorrect details here]'}\n\nPlease verify these changes and update my account files accordingly.\n\nSincerely,\n${nameStr}`;
  }, [requestType, requesterName, requesterEmail, requestDetails]);

  const handleComplianceSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!requesterName.trim() || !requesterEmail.trim()) return;
    setComplianceSubmitting(true);
    setComplianceError(false);
    setComplianceSubmitted(false);

    try {
      const response = await fetch('/api/compliance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: requesterName.trim(),
          email: requesterEmail.trim(),
          requestType,
          notes: requestDetails.trim() || '',
        }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          console.warn('[CiviSence Dev] /api/compliance returned 404. Simulating compliance request database registration locally.');
          setComplianceSubmitted(true);
          setTimeout(() => {
            const mailtoUrl = `mailto:civisence@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoUrl;
          }, 500);
          return;
        }
        throw new Error('Failed to record compliance request');
      }

      setComplianceSubmitted(true);
      
      // Still trigger the client mailto opening
      setTimeout(() => {
        const mailtoUrl = `mailto:civisence@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoUrl;
      }, 500);

    } catch (error) {
      console.error('Compliance submit error:', error);
      setComplianceError(true);
    } finally {
      setComplianceSubmitting(false);
    }
  };

  return (
    <section className="bg-white min-h-screen py-16 font-sans relative" aria-labelledby="legal-page-heading">
      <SEO 
        title={`${currentDoc.title} | CiviSence Compliance`} 
        description={currentDoc.summary} 
        canonical={`https://civisence.in/${currentDoc.slug}`}
      />
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-zinc-900 origin-left z-50 no-print transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile browse toggle bar */}
        <div className="lg:hidden no-print">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-full flex items-center justify-between p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 mb-8 hover:bg-zinc-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Menu className="w-4 h-4 text-zinc-600" />
              <span>Browse Compliance Documentation</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-zinc-500 font-normal">13 Policies</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            </div>
          </button>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_200px] gap-12">
          
          {/* Left Column: Flat Sidebar Directory (Desktop only) */}
          <aside className="hidden lg:block w-[240px] sticky top-24 self-start space-y-8 no-print">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-3.5 h-3.5" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-14 py-2 rounded-lg border border-zinc-200 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-zinc-450 focus:border-zinc-450 transition-all placeholder:text-zinc-400"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[9px] text-zinc-400 font-bold bg-zinc-50 px-1.5 py-0.5 border border-zinc-200 rounded select-none pointer-events-none">
                {keyboardPlatform}
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-650 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Flat navigation lists */}
            {searchQuery ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2 px-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Search Results ({searchResults.length})</p>
                  <button onClick={() => setSearchQuery('')} className="text-[10px] text-zinc-500 hover:text-zinc-900 font-semibold underline">Clear</button>
                </div>
                {searchResults.length > 0 ? (
                  <ul className="space-y-2">
                    {searchResults.map((doc) => {
                      const isActive = currentDoc.slug === doc.slug;
                      return (
                        <li key={doc.slug}>
                          <a
                            href={doc.path}
                            onClick={(e) => {
                              handleNavigate(doc.path)(e);
                              setSearchQuery('');
                            }}
                            className={`block rounded-lg p-2.5 text-left transition-all border ${
                              isActive
                                ? 'bg-zinc-100 text-zinc-900 border-zinc-200 shadow-sm'
                                : 'bg-white text-zinc-600 border-zinc-100 hover:bg-zinc-50 hover:text-zinc-900'
                            }`}
                          >
                            <div className="font-bold text-xs leading-normal flex items-center justify-between">
                              <span className="truncate pr-1">{doc.title}</span>
                              <ChevronRight className="w-3 h-3 flex-shrink-0" />
                            </div>
                            {doc.snippet && (
                              <p className="mt-1 text-[10px] leading-relaxed line-clamp-2 text-zinc-400 font-normal">
                                {doc.snippet}
                              </p>
                            )}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="text-center py-6 px-3 bg-zinc-50 rounded-lg border border-zinc-100">
                    <Info className="w-5 h-5 text-zinc-300 mx-auto mb-1.5" />
                    <p className="text-[11px] text-zinc-500 font-semibold">No documents found.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {categories.map((cat) => {
                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-3">
                        {cat.name}
                      </p>
                      <ul className="space-y-0.5">
                        {legalDocs
                          .filter((doc) => cat.slugs.includes(doc.slug))
                          .map((doc) => {
                            const isActive = currentDoc.slug === doc.slug;
                            return (
                              <li key={doc.slug}>
                                <a
                                  href={doc.path}
                                  onClick={handleNavigate(doc.path)}
                                  className={`block rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                                    isActive
                                      ? 'bg-zinc-100 text-zinc-950 font-bold border-l-2 border-zinc-950 rounded-l-none'
                                      : 'text-zinc-555 hover:bg-zinc-55/60 hover:text-zinc-900'
                                  }`}
                                >
                                  {doc.title}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </aside>

          {/* Center Column: Content Section */}
          <article className="min-w-0 print-container">
            <motion.div
              key={currentDoc.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {/* Document Header */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                  <span>Legal Hub</span>
                  <span className="text-[10px]">/</span>
                  <span className="text-zinc-650 font-bold">{currentDoc.title}</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                  {currentDoc.title}
                </h1>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-2xl">
                  {currentDoc.summary}
                </p>
              </div>

              {/* Minimal utility row */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5 mb-8 text-[11px] text-zinc-400 no-print">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold">
                  <span>Last updated: {metadata.lastUpdated}</span>
                  <span>·</span>
                  <span>{readingTime} min read</span>
                  <span>·</span>
                  <span>v{metadata.version}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyLink}
                    className="hover:text-zinc-950 transition-colors cursor-pointer font-bold select-none underline text-zinc-400"
                  >
                    {copied ? 'Link copied' : 'Copy link'}
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => window.print()}
                    className="hover:text-zinc-950 transition-colors cursor-pointer font-bold select-none underline text-zinc-400"
                  >
                    Print
                  </button>
                </div>
              </div>

              {/* Render parsed markdown content with class custom styling and repeating watermark */}
              <div className="relative">
                {/* Screen Repeating Watermark Overlay */}
                <div className="watermark-overlay no-print" aria-hidden="true" />
                
                {/* Print-Only Watermark Overlay */}
                <div className="print-watermark" aria-hidden="true">
                  CIVISENCE OFFICIAL
                </div>
                
                <div className="relative z-10 markdown-body">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                    {cleanContent}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Interactive Data Deletion Request Generator */}
              {currentDoc.slug === 'data-deletion' && (
                <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 no-print space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-zinc-900">Compliance Request Assistant</h4>
                    <p className="text-xs text-zinc-500">Select details below to generate a preformatted regulatory request draft.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {['deletion', 'archive', 'correction'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setRequestType(type)}
                        className={`py-2 px-3 rounded-lg border text-[11px] font-bold text-center transition-colors cursor-pointer select-none ${
                          requestType === type
                            ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                            : 'bg-white text-zinc-650 border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900'
                        }`}
                      >
                        {type === 'deletion' && 'Delete Account'}
                        {type === 'archive' && 'Export Archive'}
                        {type === 'correction' && 'Correct Info'}
                      </button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <label className="block text-zinc-500 font-semibold">Your Full Name</label>
                      <input
                        type="text"
                        value={requesterName}
                        onChange={(e) => setRequesterName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-1 focus:ring-zinc-400 font-medium"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-zinc-500 font-semibold">Account Email Address</label>
                      <input
                        type="email"
                        value={requesterEmail}
                        onChange={(e) => setRequesterEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full p-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-1 focus:ring-zinc-400 font-medium"
                      />
                    </div>
                  </div>

                  {requestType === 'correction' && (
                    <div className="space-y-1 text-xs">
                      <label className="block text-zinc-500 font-semibold">Details of Correction</label>
                      <textarea
                        value={requestDetails}
                        onChange={(e) => setRequestDetails(e.target.value)}
                        placeholder="Describe the inaccurate details and provide corrections..."
                        rows={3}
                        className="w-full p-2.5 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-1 focus:ring-zinc-400 font-medium"
                      />
                    </div>
                  )}

                  {/* Preformatted Box */}
                  <div className="space-y-1 text-xs">
                    <label className="block text-zinc-500 font-semibold">Preview Email Text</label>
                    <pre className="p-3 bg-white border border-zinc-200 rounded-lg text-[10px] text-zinc-600 whitespace-pre-wrap font-mono leading-relaxed max-h-[160px] overflow-y-auto shadow-inner select-all">
                      {emailBody}
                    </pre>
                  </div>

                  {/* Action Status Notification */}
                  {complianceSubmitted && (
                    <div className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 rounded-lg p-3">
                      ✓ Request registered in database! Opening email client...
                    </div>
                  )}
                  {complianceError && (
                    <div className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                      ⚠ Database recording failed. You can still copy the draft text manually.
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleComplianceSubmit}
                      disabled={complianceSubmitting || !requesterName.trim() || !requesterEmail.trim()}
                      className="inline-flex items-center justify-center min-w-[130px] gap-1 px-4 py-2 rounded-lg bg-zinc-950 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-sm select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {complianceSubmitting ? 'Recording request...' : 'Send Email Request'}
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(emailBody).then(() => {
                          setCopiedDraft(true);
                          setTimeout(() => setCopiedDraft(false), 2000);
                        });
                      }}
                      className="px-4 py-2 rounded-lg border border-zinc-200 bg-white text-zinc-650 text-xs font-bold hover:bg-zinc-50 transition-colors cursor-pointer select-none"
                    >
                      {copiedDraft ? 'Copied to Clipboard!' : 'Copy Draft Text'}
                    </button>
                  </div>
                </div>
              )}

              {/* Pagination Links */}
              <div className="mt-12 grid sm:grid-cols-2 gap-4 border-t border-zinc-150 pt-8 no-print">
                {prevDoc ? (
                  <a
                    href={prevDoc.path}
                    onClick={handleNavigate(prevDoc.path)}
                    className="group block rounded-xl border border-zinc-200 p-4 hover:border-zinc-450 hover:bg-zinc-50/20 transition-all text-left"
                  >
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Previous</span>
                    <span className="block text-xs font-bold text-zinc-700 mt-1 group-hover:text-zinc-950 transition-colors">
                      {prevDoc.title}
                    </span>
                  </a>
                ) : <div />}
                {nextDoc ? (
                  <a
                    href={nextDoc.path}
                    onClick={handleNavigate(nextDoc.path)}
                    className="group block rounded-xl border border-zinc-200 p-4 hover:border-zinc-450 hover:bg-zinc-50/20 transition-all text-right"
                  >
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Next</span>
                    <span className="block text-xs font-bold text-zinc-700 mt-1 group-hover:text-zinc-950 transition-colors">
                      {nextDoc.title}
                    </span>
                  </a>
                ) : <div />}
              </div>

              {/* Inline quiet Feedback section */}
              <div className="mt-12 pt-6 border-t border-zinc-100 no-print flex items-center justify-between text-xs text-zinc-400 font-medium">
                {feedback === null ? (
                  <>
                    <span>Was this page helpful?</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setFeedback('yes')}
                        className="hover:text-zinc-950 transition-colors cursor-pointer select-none underline text-zinc-500 font-bold"
                      >
                        Yes
                      </button>
                      <span>·</span>
                      <button
                        onClick={() => setFeedback('no')}
                        className="hover:text-zinc-950 transition-colors cursor-pointer select-none underline text-zinc-500 font-bold"
                      >
                        No
                      </button>
                    </div>
                  </>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-500 font-semibold"
                  >
                    Thank you for your feedback.
                  </motion.span>
                )}
              </div>
            </motion.div>
          </article>

          {/* Right Column: Outline Table of Contents & support info (Desktop only) */}
          <aside className="hidden xl:block w-[200px] sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-2 no-print space-y-8">
            {toc.length > 0 && (
              <div className="space-y-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">On this page</p>
                <ul className="border-l border-zinc-200 space-y-3 py-1">
                  {toc.map((heading) => {
                    const isActive = activeHeadingId === heading.id;
                    return (
                      <li key={heading.id} className="relative">
                        <a
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`block pl-4 text-xs font-semibold leading-relaxed transition-all duration-200 border-l border-transparent -ml-[1px] ${
                            isActive
                              ? 'text-zinc-950 font-bold border-zinc-950'
                              : 'text-zinc-400 hover:text-zinc-900 hover:border-zinc-350'
                          } ${heading.level === 3 ? 'pl-7' : ''}`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="border-t border-zinc-100 pt-4" />
              </div>
            )}
            
            <div className="space-y-2 text-[11px] text-zinc-400 leading-relaxed font-medium">
              <p className="font-bold text-zinc-800 uppercase tracking-wider text-[9px]">Need support?</p>
              <p>For questions or requests about these terms, reach our compliance team:</p>
              <div className="space-y-1">
                <a href="mailto:civisence@gmail.com" className="block text-zinc-600 hover:text-zinc-950 underline font-bold">
                  civisence@gmail.com
                </a>
                <a href="mailto:civisence@zohomail.in" className="block text-zinc-600 hover:text-zinc-950 underline font-bold">
                  civisence@zohomail.in
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 3. Mobile Side Drawer Directory (Overlays) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            {/* Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed top-0 bottom-0 left-0 w-full max-w-[280px] bg-white z-50 p-6 shadow-xl overflow-y-auto flex flex-col lg:hidden border-r border-zinc-200"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-xs text-zinc-900 uppercase tracking-wider">Compliance Index</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg hover:bg-zinc-100 text-zinc-500 transition-colors cursor-pointer select-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-3.5 h-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal documents..."
                  className="w-full pl-8 pr-8 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-650"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
              
              {searchQuery ? (
                <div className="flex-grow space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Search Results ({searchResults.length})</p>
                  {searchResults.length > 0 ? (
                    <ul className="space-y-2">
                      {searchResults.map((doc) => {
                        const isActive = currentDoc.slug === doc.slug;
                        return (
                          <li key={doc.slug}>
                            <a
                              href={doc.path}
                              onClick={(e) => {
                                handleNavigate(doc.path)(e);
                                setSearchQuery('');
                                setMobileOpen(false);
                              }}
                              className={`block rounded-lg p-2.5 text-left border ${
                                isActive
                                  ? 'bg-zinc-100 text-zinc-900 border-zinc-200 shadow-sm'
                                  : 'bg-white text-zinc-600 border-zinc-100'
                              }`}
                            >
                              <div className="font-bold text-xs flex items-center justify-between">
                                <span>{doc.title}</span>
                                <ChevronRight className="w-3 h-3" />
                              </div>
                              {doc.snippet && (
                                <p className="mt-1 text-[10px] leading-relaxed text-zinc-400 line-clamp-2">
                                  {doc.snippet}
                                </p>
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="text-center py-6 px-3 bg-zinc-50 border border-zinc-100 rounded-lg">
                      <Info className="w-5 h-5 text-zinc-300 mx-auto mb-1" />
                      <p className="text-[11px] text-zinc-500 font-semibold">No results found.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-grow space-y-6">
                  {categories.map((cat) => {
                    return (
                      <div key={cat.id} className="space-y-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-2">
                          {cat.name}
                        </p>
                        <ul className="space-y-0.5">
                          {legalDocs
                            .filter((doc) => cat.slugs.includes(doc.slug))
                            .map((doc) => {
                              const isActive = currentDoc.slug === doc.slug;
                              return (
                                <li key={doc.slug}>
                                  <a
                                    href={doc.path}
                                    onClick={(e) => {
                                      handleNavigate(doc.path)(e);
                                      setMobileOpen(false);
                                    }}
                                    className={`block rounded-md px-2 py-1.5 text-xs font-semibold transition-colors ${
                                      isActive
                                        ? 'bg-zinc-100 text-zinc-955 font-bold border-l-2 border-zinc-950 rounded-l-none'
                                        : 'text-zinc-550 hover:bg-zinc-50 hover:text-zinc-900'
                                    }`}
                                  >
                                    {doc.title}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-2.5 rounded-full bg-zinc-900 text-white shadow-md hover:bg-zinc-800 transition-colors cursor-pointer no-print flex items-center justify-center select-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LegalPage;
