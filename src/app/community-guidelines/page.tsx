"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CommunityGuidelinesPage = () => {
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
            Community <span className="text-primary">Guidelines</span>
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
            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800">
              9Lives Community Guidelines
            </h2>
            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Effective Date: July 25, 2025
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Welcome to 9Lives—a productivity-first, community-powered platform
              where users organize their lives, express their goals, and engage
              socially in ways that foster accountability, creativity, and
              personal growth. These Community Guidelines are a comprehensive
              framework designed to help us maintain a healthy, safe,
              respectful, and productive environment for everyone.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              By using 9Lives, you agree to follow these guidelines. Violations
              can result in content removal, suspension, or permanent ban of
              your account. These guidelines apply to all content shared or
              interactions made on the platform.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              1. Our Mission & Platform Values
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives is more than a productivity tool—it&apos;s a social
              environment where users can share their work, life goals,
              progress, events, and projects while being part of a community
              that motivates and inspires each other. We&apos;re built around
              the following core values:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Accountability – We encourage honest goal-setting and tracking.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Support – We create a safe, inclusive, and positive space for
                people striving to better themselves.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Integrity – We expect authentic behavior and responsible use of
                features.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Creativity & Productivity – This is a platform to organize life
                and share your journey—not to harm or mislead others.
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              2. User Safety and Respect
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              You must treat every user with respect, regardless of their
              background, beliefs, or identity. We have a zero-tolerance policy
              for any behavior that threatens, intimidates, or harms other
              users.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Prohibited behaviors include:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Harassment, stalking, bullying, or threats
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Hate speech, slurs, or dehumanizing language
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Discrimination or abuse based on race, gender, sexuality,
                disability, age, nationality, or religion
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Targeting users with coordinated attacks or mass reporting
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Encouraging or glorifying self-harm, suicide, or eating
                disorders
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              If you experience or witness abusive behavior, report it using the
              in-app tools or by contacting support at info@9livesapp.com.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              3. Prohibited Content
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives is not a platform for explicit adult content, shock
              content, or any form of material that contradicts the productive
              and community-oriented spirit of the platform.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Specifically prohibited content includes:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Sexually explicit or pornographic material
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Nudity intended for sexual gratification
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Erotic roleplay or fetish content
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Non-consensual sexual content or simulated non-consent
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Links or references to adult sites or services
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Deepfakes or AI-generated sexual content
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Content that sexually objectifies minors or adults
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Any violations may lead to immediate permanent account
              termination.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              4. Misinformation and Malicious Content
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              We prohibit content that spreads false, misleading, or harmful
              information—especially when it can negatively impact public
              health, safety, elections, or community trust.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Do not share:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Misleading or false claims about medical treatments, vaccines,
                or public health
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Deepfakes, impersonation, or manipulated media intended to
                mislead
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Conspiracy theories that could cause harm
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                False information about 9Lives features or impersonating 9Lives
                staff
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              5. Authenticity & Impersonation
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Your identity and interactions on 9Lives should be genuine.
              Impersonating individuals, brands, or entities is forbidden.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Violations include:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Fake profiles mimicking celebrities, politicians, influencers,
                or real users
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Using someone else&apos;s photo, name, or identity to deceive or
                troll
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Falsely representing yourself as part of the 9Lives team
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Using AI to generate false personas or manipulate real
                identities
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              6. AI Features & User Accountability
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives offers AI-assisted content generation for notes, messages,
              folders, insights, and more. These tools are meant to help you—not
              to remove your responsibility for what you post.
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                AI never sends content automatically. You are always responsible
                for the final message.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Misusing AI to deceive, impersonate, or harass others will
                result in account penalties.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not attempt to bypass these rules by blaming AI outputs.
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              7. Personal & Commercial Transactions
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives does not process any payments. All sales, appointments, and
              events are external to the platform and are the responsibility of
              the involved parties.
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                No financial guarantees. We do not mediate disputes or provide
                refunds.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Use your discretion when engaging in sales, appointments, or
                events.
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not post scams, phishing links, or fraudulent listings.
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              8. Respecting Intellectual Property & Copyright
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Only share content you have the right to post. This includes:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Images, videos, text, and audio you created or have a license to
                share
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Portfolio items you own or have explicit permission to showcase
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Products or services that don&apos;t infringe on other
                companies&apos; trademarks
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              We respond to valid DMCA takedown requests and repeat infringement
              may result in account termination.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              9. Spam, Bots, and Platform Manipulation
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              To preserve the integrity of 9Lives:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not create fake accounts, mass accounts, or bots
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not spam likes, follows, messages, or posts to gain attention
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not run pyramid schemes or unauthorized affiliate promotions
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not use automation tools to mimic engagement or generate fake
                interest
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              10. Marketplace & Shops Guidelines
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives allows users to post physical product listings via personal
              shops or the local marketplace, but all transactions are
              peer-to-peer.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Allowed:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Handcrafted or original goods
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Items you legally own and wish to resell
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Not allowed:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Counterfeit or fake goods
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Weapons, drugs, or dangerous items
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Stolen goods or items obtained fraudulently
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Sexual or adult services/items
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              11. Event & Appointment Etiquette
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Whether you&apos;re attending or hosting, all events and
              appointments should be managed with professionalism, respect, and
              clarity.
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Clearly communicate date, time, and location
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Respect cancellation policies and notify parties promptly
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Keep interactions professional, especially with clients or
                collaborators
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Do not use events to solicit inappropriate behavior
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              12. Challenge, Task, and Goal Posts
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives encourages you to share personal challenges or tasks to
              engage with others.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Do not post challenges that:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Promote dangerous activities (e.g., excessive fasting, stunts)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Encourage hate, exclusion, or ridicule
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Are intended to harass, mock, or bully other users
              </li>
            </ul>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              13. Mental Health & Sensitive Topics
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              You may share experiences related to stress, burnout, mental
              health, or personal growth, but always do so respectfully.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Avoid:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Glorifying self-harm or suicide
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Posting triggering content without warnings
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Dismissing other users&apos; experiences
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              If you or someone you know is in crisis, contact local emergency
              services or a support organization immediately.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              14. Moderation & Enforcement
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              We take moderation seriously to protect our community. Violations
              may result in:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Warnings
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Temporary suspension
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Permanent bans
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Content removal
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                IP/device bans (in extreme cases)
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              You can appeal moderation actions by contacting
              info@9livesapp.com. Repeated or severe violations will not be
              tolerated.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              15. Reporting Tools
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives empowers the community to report violations. You can:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Report content or users from within the app
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Block users to stop communication
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Mute content that makes you uncomfortable
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              All reports are reviewed by a human moderation team. False or
              malicious reporting may result in penalties.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              16. Age Requirement & Parental Controls
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              9Lives is intended for users aged 13 and older. Users under 18
              should use the platform under parental supervision. We do not
              knowingly collect data from children under 13.
            </p>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              Parents or guardians can request account deletion or raise
              concerns at info@9livesapp.com.
            </p>

            <h2 className="text-[16px] lg:text-[24px] font-semibold text-gray-800 mt-8">
              17. Changes to Guidelines
            </h2>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              We reserve the right to update these guidelines as needed to adapt
              to platform evolution and new challenges. We&apos;ll notify users
              of significant changes through:
            </p>

            <ul className="list-disc pl-6 mb-4 mt-2">
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                In-app notifications
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Email updates (for major changes)
              </li>
              <li className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600 mb-2">
                Updates to this page
              </li>
            </ul>

            <p className="text-[12px] lg:text-[14px] font-[300] leading-[140%] tracking-[-3%] text-slate-600">
              By continuing to use 9Lives after any changes to these guidelines,
              you accept the revised terms.
            </p>

            <p className="mt-8 italic text-[12px] lg:text-[14px] font-[300] text-slate-600">
              By using 9Lives, you agree to follow these community guidelines
              and contribute positively to our platform. Failure to comply may
              result in account penalties or termination.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityGuidelinesPage;
