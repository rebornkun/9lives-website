"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TermsPage = () => {
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
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-[12px] lg:text-[16px]  font-[400] leading-[140%] tracking-[-3%] text-slate-600">
            Last Updated: July 25, 2025
          </p>
        </div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="bg-white rounded-2xl p-6 md:p-8 bg-white/30 backdrop-blur-[4px] border-[2px] border-slate-200/50"
        >
          <div className="prose prose-slate max-w-none">
            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800">
              9Lives Terms of Use
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Effective Date: July 25, 2025
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Welcome to 9Lives, a productivity-driven social media platform
              that blends personal task management with community engagement.
              These Terms of Use (&apos;Terms&apos;) constitute a legally
              binding agreement between you (&apos;user,&apos; &apos;you,&apos;
              or &apos;your&apos;) and 9Lives (&apos;9Lives,&apos;
              &apos;we,&apos; &apos;us,&apos; or &apos;our&apos;). By accessing
              or using any part of the 9Lives platform, including our mobile
              application, website, and any associated features (collectively,
              the &apos;Service&apos;), you confirm that you have read,
              understood, and agreed to be bound by these Terms.
            </p>

            <p className="font-[600] text-[14px] lg:text-[16px] leading-[140%] tracking-[-3%] ">
              If you do not agree with these Terms, you may not access or use
              the Service.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              1. Overview of the 9Lives Platform
            </h2>
            <p className="text-[14px] lg:text-[16px] font-[400] leading-[140%] tracking-[-3%] text-black">
              9Lives is a unique digital ecosystem combining personal
              productivity tools with social sharing, gamification, and
              AI-driven features. Our users use the platform to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Create and track personal folders, goals, and tasks
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Share progress updates with their community
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Post user-generated content, including text, images, challenges,
                events, and services
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                List physical product items in a personal shop or local
                marketplace (no payment processing)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Schedule and manage appointments (without in-app payment)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Host or join community events
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Display portfolios or achievements
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Use optional AI-powered tools for productivity and content
                generation
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We aim to support positive habit-building, accountability, and
              collaboration in a respectful and secure environment.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              2. Eligibility & Account Registration
            </h2>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              2.1 Eligibility
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              To use 9Lives, you must:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Be at least 13 years old
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Not be prohibited from using the platform under applicable laws
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Have full authority to enter into these Terms
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              If you are under 18, you confirm that you have parental or
              guardian permission.
            </p>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              2.2 Account Creation
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              To access certain features, you must register an account by
              providing accurate, complete information including a valid email
              address. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Maintain updated and truthful account information
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Not impersonate any person or entity
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Keep your login credentials confidential
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Notify us immediately if you suspect unauthorized access
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We reserve the right to suspend or terminate accounts that are
              incomplete, misleading, or fraudulent.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              3. Acceptable Use Policy
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You agree to use 9Lives in accordance with our Community
              Guidelines and applicable laws. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Post or distribute harmful, illegal, or abusive content
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Use AI tools to impersonate, harass, or deceive others
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Engage in hate speech, explicit content, threats, or violence
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Post content that infringes upon intellectual property rights
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Upload malware, phishing links, or attempt to hack the platform
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Use bots or automation to manipulate interactions or engagement
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Your access may be suspended or terminated for violations of this
              section.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              4. User Content and Conduct
            </h2>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              4.1 User-Generated Content
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You retain full ownership of any content you submit to 9Lives,
              including but not limited to text, images, media, links,
              achievements, posts, folders, marketplace listings, and events
              (collectively, &apos;User Content&apos;). By submitting User
              Content, you grant us a worldwide, non-exclusive, royalty-free,
              sublicensable, and transferable license to use, reproduce,
              distribute, adapt, display, and perform such content in connection
              with the Service.
            </p>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              4.2 User Responsibilities
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                The content you create, share, or promote on 9Lives
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Ensuring your content complies with our Community Guidelines
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Resolving disputes with other users related to appointments,
                product listings, or collaborations
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We do not claim ownership over User Content, but we reserve the
              right to remove or restrict access to any content that violates
              our policies.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              5. AI-Powered Features
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives includes productivity-enhancing tools powered by artificial
              intelligence (&apos;AI&apos;) to assist users in organizing tasks,
              generating posts, analyzing workspace behavior, and more. By using
              these tools, you understand and agree that:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI features are optional and can be disabled at any time
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI suggestions are not guaranteed to be accurate or complete
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                You are responsible for reviewing and approving any AI-generated
                content
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                No AI tool will automatically post, message, or interact on your
                behalf
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI misuse (e.g., deepfakes, impersonation, spam) is a violation
                of these Terms
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              6. Privacy & Data Usage
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Your privacy is important to us. Please review our Privacy Policy
              for full details.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              By using 9Lives, you consent to the collection and use of your
              information as described. Key practices include:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We do not sell your data to third parties
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We use encryption and secure storage methods
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI analysis of your workspace is opt-in and can be revoked
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Data shared in public posts is visible to other users
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We comply with applicable data protection regulations including
                GDPR and CCPA
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              7. Marketplace, Appointments, and Events
            </h2>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              7.1 Transactions Disclaimer
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives does not process payments or provide escrow services. All
              transactions between users (appointments, product sales, or event
              coordination) occur off-platform.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We are not a party to any transaction and bear no liability for:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Fraudulent products or sellers
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Missed appointments
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Payment disputes
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Event cancellations
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Quality of service or goods
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Always use your own discretion and take appropriate precautions
              when engaging with others.
            </p>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              7.2 Prohibited Marketplace Listings
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may not list or promote:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Weapons, drugs, or hazardous goods
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Counterfeit, stolen, or pirated items
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Adult or sexual services or products
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Financial or investment schemes
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Products you do not legally own
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              8. Events & Appointments Etiquette
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may use 9Lives to create or join social, educational, or
              professional events. When doing so:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Clearly state event details (time, date, location)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Honor RSVPs and respect participant time
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Avoid promoting misleading, unsafe, or exploitative events
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Cancel in a timely and courteous manner when needed
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives is not responsible for user experiences, no-shows, or
              interpersonal conflicts related to such events.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              9. Subscription Plans and Premium Features
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives offers free and premium plans. Premium features may
              include:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Unlimited folders and workspace customization
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI-enhanced analytics and insights
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Advanced profile customization and verification
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Ad-free browsing and priority support
              </li>
            </ul>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              9.1 Billing
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              If you subscribe to a paid plan:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                You agree to recurring billing unless canceled
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                All payments are processed via third-party providers
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We do not store your payment details on our servers
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may cancel your subscription at any time. Canceling prevents
              future charges but does not refund past payments unless required
              by law.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              10. Intellectual Property
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              All materials on the 9Lives platform, excluding User Content, are
              owned by or licensed to 9Lives. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Logos, trademarks, and brand assets
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Visual design, UI/UX components
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Platform structure and software architecture
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI algorithms and productivity templates
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You may not use our branding or materials without explicit written
              permission. Any unauthorized use may result in legal action.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              11. Account Suspension or Termination
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We reserve the right to suspend, restrict, or terminate your
              access to 9Lives for:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Breaching these Terms or Community Guidelines
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Engaging in harassment, abuse, or fraud
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Attempting to bypass moderation systems
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Misuse of AI tools or automation
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Violation of applicable laws or third-party rights
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              If your account is terminated, you may lose access to all your
              data, content, and settings. Repeated violations or egregious
              misconduct may result in a permanent ban.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              12. Disclaimers and Limitations of Liability
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                9Lives is provided &apos;as-is&apos; and
                &apos;as-available&apos; without warranties of any kind
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We make no guarantees about the availability, performance, or
                error-free operation of the platform
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We do not guarantee results, outcomes, or success for any
                productivity features
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                We are not liable for user disputes, third-party conduct, or
                transaction issues
              </li>
            </ul>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              In no event shall 9Lives be liable for any indirect, incidental,
              or consequential damages resulting from your use or inability to
              use the Service.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              13. Indemnification
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              You agree to indemnify, defend, and hold harmless 9Lives, its
              affiliates, officers, and employees from any claim, demand, loss,
              or damages arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Your use of the platform
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Your violation of these Terms or Community Guidelines
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Any content you submit or interactions you initiate
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Your breach of any applicable law
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              14. Third-Party Links & Integrations
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              9Lives may contain links to third-party websites, tools, or
              integrations. We are not responsible for the practices or content
              of these third parties. Use them at your own risk.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Examples may include:
            </p>
            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Stripe (for payment verification)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Calendars (Google Calendar sync)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI services (for content generation or analytics)
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              15. Dispute Resolution & Governing Law
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States, without regard
              to conflict of laws principles.
            </p>

            <h3 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-4">
              15.1 Dispute Resolution
            </h3>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              In the event of a dispute, you agree to first attempt to resolve
              it informally by contacting us at legal@9livesapp.com. If
              unresolved, both parties agree to binding arbitration in Delaware.
            </p>
            <p>Class actions and jury trials are waived.</p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              16. Changes to These Terms
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              We may modify these Terms periodically. If material changes are
              made, we will notify users via email, app notifications, or
              prominent announcements.
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Your continued use of 9Lives after any update indicates acceptance
              of the revised Terms.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              17. Entire Agreement & Severability
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              These Terms, along with our Privacy Policy and Community
              Guidelines, constitute the entire agreement between you and 9Lives
              regarding your use of the Service. If any provision is found
              unenforceable, the remainder of the Terms shall remain in full
              force.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              18. Contact Us
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              For questions, feedback, complaints, or legal concerns, contact:
            </p>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mt-2">
              Email: info@9livesapp.com
              <br />
              Legal Inquiries: legal@9livesapp.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
