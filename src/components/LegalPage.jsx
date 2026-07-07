import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

const LegalPage = ({ currentPath = '/privacy' }) => {
  const normalizedPath = currentPath.replace(/^\/+|\/+$/g, '');
  const currentDoc = legalDocs.find((doc) => doc.slug === normalizedPath) || legalDocs[0];

  const handleNavigate = (path) => (event) => {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section className="py-24 bg-white" aria-labelledby="legal-page-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10">
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Legal documentation</p>
              <h1 id="legal-page-heading" className="mt-3 text-2xl font-bold text-gray-900">
                CiviSence policies
              </h1>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Review the policies that govern privacy, terms, security, accessibility, and cookie usage.
              </p>

              <ul className="mt-6 space-y-2">
                {legalDocs.map((doc) => {
                  const isActive = currentDoc.slug === doc.slug;
                  return (
                    <li key={doc.slug}>
                      <a
                        href={doc.path}
                        onClick={handleNavigate(doc.path)}
                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary'
                        }`}
                      >
                        {doc.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <article className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{currentDoc.title}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              {currentDoc.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{currentDoc.summary}</p>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-4 md:p-6">
              <div className="prose prose-sm max-w-none text-gray-700">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentDoc.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LegalPage;
