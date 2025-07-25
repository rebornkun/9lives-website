"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PrivacyPolicyPage = () => {
  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    // Animate header
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );

    // Animate content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
    );
  }, []);

  return (
    <main className="min-h-screen pt-[180px] pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="font-schibsted text-[36px] md:text-[48px] leading-[118%] font-bold mb-4 text-gray-800">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-[12px] lg:text-[16px] font-[400] leading-[140%] tracking-[-3%] text-slate-600">
            Last Updated: July 25, 2025
          </p>
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="bg-white rounded-2xl p-6 md:p-8 bg-white/30 backdrop-blur-[4px] border-[2px] border-slate-200/50"
        >
          <div className="prose prose-slate max-w-none">
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Welcome to 9Lives, a productivity-first social media platform
              where users organize their lives, share their journeys, and engage
              with their communities. This Privacy Policy outlines how we
              collect, use, protect, and disclose information about you when you
              use the 9Lives platform (&apos;Service&apos;), including our
              mobile app, website, and associated tools.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Your privacy is critically important to us. We are committed to
              transparency, data integrity, and security. We do not sell your
              data. We do not share your data with third parties for advertising
              purposes. All data is used solely to enhance your experience on
              9Lives.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              1. Who This Policy Applies To
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              This Privacy Policy applies to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                All users of the 9Lives mobile app or website
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Visitors who browse or interact with our public content
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Anyone who communicates with us (support, feedback, etc.)
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              By using 9Lives, you agree to the practices described in this
              Privacy Policy.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              2. Information We Collect
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We collect the following types of data:
            </p>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              2.1 Information You Provide Directly
            </h3>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Account Information: Name, username, email, password, profile
                photo
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Profile Details: Bio, website link, interests, location (if
                added by user)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                User-Generated Content: Posts, folders, tasks, images, links,
                event information, shop items, portfolios, achievements,
                comments, messages
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Feedback & Support Requests: If you contact us, we collect your
                name, email, and any details provided in the message
              </li>
            </ul>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              2.2 Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Device Information: Type, operating system, browser type,
                language
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Usage Data: Logins, clicks, interactions with posts, tabs
                visited, time spent, and feature usage
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                App Activity: When you create a challenge, update a folder, use
                AI features, or invite users
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Crash Reports: Device type, OS version, and logs (sent
                automatically when a crash occurs)
              </li>
            </ul>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              2.3 Optional Data (If You Choose to Enable)
            </h3>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Location Data: For posts tagged with location, &apos;For
                You&apos; feed customization, or event discovery
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Calendar Access: To sync appointments (optional)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI Workspace Analysis: To generate personalized insights and
                summaries based on your activity (opt-in only)
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We do not require access to your microphone, camera, or contacts
              unless you explicitly use a feature that requires it (e.g.,
              uploading a profile photo).
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We use your information only to provide and improve your
              experience with 9Lives.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Specifically, we use data to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Create and manage your account
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Display your posts, tasks, and portfolio to your followers or
                the public (based on your settings)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Generate your feed (e.g., &apos;For You&apos;,
                &apos;Following&apos;, &apos;Mixer&apos;)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Power AI features like productivity summaries, smart folder
                suggestions, and generated posts (when enabled)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Help you discover relevant content, events, or users nearby (if
                location is enabled)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Provide notifications and reminders
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Offer support and respond to inquiries
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Monitor usage trends and platform health
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Detect and address fraud, abuse, or policy violations
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              4. AI & Personalization
            </h2>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              4.1 How AI Works on 9Lives
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              AI is used in a variety of ways to make your experience more
              efficient, personalized, and inspiring. Examples include:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Suggesting folder names, goals, or structure
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Generating post captions, daily reflections, or to-do lists
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Analyzing workspace activity to surface insights
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Enhancing quiz, flashcard, or productivity game suggestions
              </li>
            </ul>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              4.2 AI Limitations & Responsibility
            </h3>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI never acts on your behalf without your confirmation
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                You are always in control of what is published
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                You may disable AI suggestions at any time
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                All AI features process your data locally or via encrypted calls
                to our AI provider, and we do not retain your personal prompt
                history longer than necessary for the feature to function
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We do not sell, rent, or share your personal data with any third
              parties for advertising or marketing purposes.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We may only share your information:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                With your explicit consent (e.g., when you connect a third-party
                calendar or service)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                With service providers under strict data processing agreements
                (e.g., analytics or hosting)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                If required by law, regulation, legal process, or government
                request
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                To enforce our Terms of Use or protect the rights, safety, or
                security of 9Lives, our users, or the public
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We ensure all third-party processors are GDPR and/or CCPA
              compliant and only process data as instructed by us.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We use cookies and similar technologies (e.g., local storage,
              session tokens) to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Keep you logged in
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Remember your preferences
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Secure your session
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Analyze performance and improve the platform
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may disable cookies in your browser, but this may limit some
              functionality.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We do not use third-party advertising cookies or tracking pixels.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              7. Your Privacy Rights
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Access, download, or request deletion of your data
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Update inaccurate information
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Object to or limit certain types of data use
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Withdraw consent for optional data features (e.g., AI, location)
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may request access or deletion at any time by emailing
              privacy@9livesapp.com.
            </p>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              7.1 Data Portability
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We will provide your data in a machine-readable format upon
              request.
            </p>

            <h3 className="text-[14px] lg:text-[20px] font-semibold text-gray-800 mt-4">
              7.2 Account Deletion
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may request permanent deletion of your account at any time.
              This will:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Remove your posts, folders, and profile from public view
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Delete most of your stored data within 30 days (excluding data
                we must retain for legal or security reasons)
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              8. Children&apos;s Privacy
            </h2>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                9Lives is intended for users age 13 and above.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We do not knowingly collect data from children under 13
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Users under 18 should use 9Lives with parental guidance
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Parents may request deletion of minor accounts at
                privacy@9livesapp.com
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              9. Data Security
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We use modern security practices to protect your data, including:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Encrypted storage for sensitive information
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Secure transmission using HTTPS and TLS
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Limited access by employees on a need-to-know basis
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Regular security audits and threat monitoring
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Despite best efforts, no system is 100% secure. In the event of a
              data breach, we will notify affected users promptly.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              10. International Data Transfers
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives is operated in the United States but may be accessed
              worldwide. By using the service, you consent to transferring and
              processing your data in the United States.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              If you are in the EU, UK, or other regions with data protection
              laws, we rely on:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Standard contractual clauses
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Data processing agreements
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Encrypted and secure infrastructure
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              11. Data Retention
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We retain your data as long as your account is active and for a
              reasonable time thereafter to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Provide customer support
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Improve platform performance
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Comply with legal obligations
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Detect and prevent abuse
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              When data is no longer needed, we securely delete or anonymize it.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              12. Third-Party Services
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We may integrate with third-party tools like:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Stripe (for identity verification or payment-related metadata)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                OpenAI or similar services (for AI processing)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Firebase, Supabase, or AWS (for hosting and infrastructure)
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We carefully vet all partners and ensure they uphold strong
              privacy practices.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We may update this Privacy Policy from time to time to reflect new
              features, legal requirements, or improvements in our privacy
              practices.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              When changes are material, we will:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Post a notice in the app
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Notify users via email or in-app message
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Your continued use of 9Lives after updates constitutes acceptance
              of the new policy.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              14. Contact Us
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We welcome your questions, feedback, or concerns.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Privacy & Data Inquiries:
              <br />
              Email: privacy@9livesapp.com
              <br />
              Mailing Address: 9Lives, c/o Benekan Technologies
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              For legal matters or requests under applicable data laws:
              <br />
              Legal Contact: legal@9livesapp.com
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Thank you for trusting 9Lives. We&apos;re committed to protecting
              your privacy while building a platform that supports creativity,
              productivity, and community.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
