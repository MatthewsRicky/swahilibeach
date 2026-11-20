import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | Swahili Beach Resort",
  description:
    "Read Swahili Beach Resort's Privacy & Data Protection Policy to understand how we collect, use, store, and protect your personal information.",
};

const principles = [
  "We only collect personal information that is necessary and relevant.",
  "We use personal information only for legitimate business purposes.",
  "We process personal data lawfully, fairly, and transparently.",
  "We keep personal information accurate and up to date.",
  "We protect personal information using appropriate security measures.",
  "We respect your rights regarding your personal data.",
];

const activeInformation = [
  "Create an online account",
  "Make a reservation through our Website or booking engine",
  "Subscribe to newsletters or marketing communications",
  "Complete forms on our Website or at our resort",
  "Participate in events, trade fairs, surveys, or competitions",
  "Register for our loyalty program",
  "Contact us via phone, email, chat, or other communication channels",
  "Submit feedback, reviews, testimonials, or service requests",
];

const passiveInformation = [
  "IP or server address",
  "Date and time of visit",
  "Duration of visit",
  "Pages viewed and files downloaded",
  "Referring website",
  "Device type and browser used",
  "Language preference",
  "Other analytical and technical data",
];

const informationUses = [
  "Managing reservations, bookings, and guest accounts",
  "Processing payments and issuing invoices",
  "Communicating with you regarding reservations, services, or enquiries",
  "Providing customer support and responding to requests",
  "Sending service-related communications",
  "Sending marketing communications and promotions (where consent is provided or permitted by law)",
  "Conducting surveys and analyzing guest feedback",
  "Improving our services, facilities, and guest experience",
  "Ensuring website security and performance",
  "Complying with legal, regulatory, and contractual obligations",
  "Resolving disputes and enforcing our terms and policies",
];

const thirdParties = [
  "Payment processors and banks",
  "Booking engine and loyalty program providers",
  "Marketing and advertising service providers",
  "IT and system support providers",
  "Legal or regulatory authorities where required by law",
];

const cookieTypes = [
  {
    title: "Session cookies",
    description: "Deleted when you close your browser.",
  },
  {
    title: "Persistent cookies",
    description: "Remain on your device until deleted or expired.",
  },
  {
    title: "First-party cookies",
    description: "Set by our Website to personalize your experience.",
  },
  {
    title: "Third-party cookies",
    description: "Used for analytics, advertising, and enhanced functionality.",
  },
];

const sections = [
  { number: "01", title: "Introduction", id: "introduction" },
  {
    number: "02",
    title: "Our Data Protection Principles",
    id: "principles",
  },
  {
    number: "03",
    title: "Exercise of Your Privacy Rights",
    id: "privacy-rights",
  },
  { number: "04", title: "Use of Cookies", id: "cookies" },
  {
    number: "05",
    title: "Information We Collect",
    id: "information",
  },
  {
    number: "06",
    title: "How We Use Your Personal Information",
    id: "use-of-information",
  },
  {
    number: "07",
    title: "Third-Party Websites",
    id: "third-party-websites",
  },
  {
    number: "08",
    title: "Disclosure of Personal Information",
    id: "disclosure",
  },
  {
    number: "09",
    title: "Sale of Business or Assets",
    id: "sale-of-business",
  },
  { number: "10", title: "Data Security", id: "security" },
  { number: "11", title: "Changes to This Policy", id: "changes" },
  { number: "12", title: "Contact Us", id: "contact" },
];

const sectionHeading =
  "font-display text-2xl leading-tight text-ocean sm:text-3xl";

const subsectionHeading = "mt-8 font-display text-xl text-ocean sm:text-2xl";

const bodyText = "mt-4 text-sm leading-8 text-charcoal/70 sm:text-base";

const listClass =
  "mt-5 space-y-3 pl-5 text-sm leading-7 text-charcoal/70 sm:text-base";

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="bg-ivory">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ocean py-24 text-white sm:py-32">
        <div className="container relative z-10 mx-auto">
          <div className="max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-3 text-xs tracking-wide text-white/50"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-gold">Privacy Policy</span>
            </nav>

            <p className="text-eyebrow text-gold">Your privacy matters</p>

            <h1 className="mt-6 font-display text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Privacy &amp; Data
              <br />
              Protection Policy
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              We value the trust you place in us. Learn how Swahili Beach Resort
              collects, uses, and protects your personal information.
            </p>

            <div className="mt-10 h-px w-20 bg-gold" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 size-[320px] rounded-full border border-white/10"
        />
      </section>

      {/* Policy content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">
            {/* Contents navigation */}
            <aside className="h-fit lg:sticky lg:top-32">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                On this page
              </p>

              <nav
                aria-label="Privacy policy sections"
                className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-1"
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 text-xs leading-5 text-charcoal/60 transition-colors hover:text-ocean"
                  >
                    <span className="font-medium tabular-nums text-gold">
                      {section.number}
                    </span>

                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-10 hidden border-t border-ocean/10 pt-6 lg:block">
                <p className="text-xs leading-6 text-charcoal/50">
                  Questions about your personal data?
                </p>

                <a
                  href="mailto:dpo@swahilibeach.com"
                  className="mt-2 inline-block text-sm text-ocean underline decoration-gold underline-offset-4"
                >
                  Contact our data protection team
                </a>
              </div>
            </aside>

            {/* Policy */}
            <article className="min-w-0">
              <div className="mb-14 border-b border-ocean/10 pb-10">
                <p className="text-eyebrow text-gold">Swahili Beach Resort</p>

                <p className={bodyText}>
                  This Privacy &amp; Data Protection Policy explains how we
                  collect, use, store, share, and protect your personal data
                  when you interact with us.
                </p>
              </div>

              {/* 01 Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">01.</span>
                  Introduction
                </h2>

                <p className={bodyText}>
                  Swahili Beach Resort (“we”, “us”, “our”) values your privacy
                  and is committed to protecting your personal information. This
                  Privacy &amp; Data Protection Policy explains how we collect,
                  use, store, share, and protect your personal data when you
                  interact with us.
                </p>

                <p className={bodyText}>
                  This policy applies to visitors and users of{" "}
                  <a
                    href="https://www.swahilibeach.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocean underline decoration-gold underline-offset-4"
                  >
                    www.swahilibeach.com
                  </a>{" "}
                  (the “Website”), our mobile applications, and to personal data
                  collected through our resort operations, reservations, events,
                  and communications.
                </p>

                <p className={bodyText}>
                  By accessing or using our Website or services, you acknowledge
                  that you have read and understood this Privacy Policy. Where
                  required by applicable law, we will request your explicit
                  consent before collecting or processing your personal
                  information.
                </p>

                <p className={bodyText}>
                  If you do not agree with this Privacy Policy, you may choose
                  not to provide personal information through the Website or
                  discontinue its use.
                </p>
              </section>

              {/* 02 Principles */}
              <section
                id="principles"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">02.</span>
                  Our Data Protection Principles
                </h2>

                <p className={bodyText}>
                  We are committed to the following principles when handling
                  personal data:
                </p>

                <ul className={listClass}>
                  {principles.map((principle) => (
                    <li key={principle} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {principle}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 03 Privacy rights */}
              <section
                id="privacy-rights"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">03.</span>
                  Exercise of Your Privacy Rights
                </h2>

                <p className={bodyText}>
                  You have the right to request access to, correction of,
                  deletion of, or restriction of processing of your personal
                  data, subject to applicable law. You may also withdraw your
                  consent at any time where processing is based on consent.
                </p>

                <p className={bodyText}>
                  Requests can be made using the contact details provided at the
                  end of this policy.
                </p>
              </section>

              {/* 04 Cookies */}
              <section
                id="cookies"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">04.</span>
                  Use of Cookies
                </h2>

                <h3 className={subsectionHeading}>4.1 What Are Cookies?</h3>

                <p className={bodyText}>
                  Cookies are small text files sent by a web server to your
                  browser and stored on your device. They help websites function
                  efficiently and improve user experience.
                </p>

                <h3 className={subsectionHeading}>4.2 How We Use Cookies</h3>

                <p className={bodyText}>We use cookies to:</p>

                <ul className={listClass}>
                  {[
                    "Recognize returning visitors",
                    "Remember preferences",
                    "Improve website performance and usability",
                    "Provide customized content and services",
                    "Analyze website traffic and usage",
                  ].map((item) => (
                    <li key={item} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className={subsectionHeading}>
                  4.3 Types of Cookies We Use
                </h3>

                <div className="mt-6 divide-y divide-ocean/10 border-y border-ocean/10">
                  {cookieTypes.map((cookie) => (
                    <div
                      key={cookie.title}
                      className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
                    >
                      <h4 className="text-sm font-medium text-ocean">
                        {cookie.title}
                      </h4>

                      <p className="text-sm leading-7 text-charcoal/65">
                        {cookie.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className={bodyText}>
                  We use{" "}
                  <strong className="font-medium text-ocean">
                    Google Analytics
                  </strong>{" "}
                  to generate statistical information about website usage
                  through cookies. Our payment providers, booking engine
                  providers, loyalty program partners, advertising partners, and
                  third-party plug-ins may also place cookies on your device.
                </p>

                <p className={bodyText}>
                  We do not control third-party cookies, and their use is
                  governed by their respective privacy policies.
                </p>

                <h3 className={subsectionHeading}>4.4 Managing Cookies</h3>

                <p className={bodyText}>
                  By continuing to use the Website or by accepting cookies
                  through our cookie banner or browser settings, you consent to
                  our use of cookies as described in this policy. You may manage
                  or disable cookies through your browser settings, though this
                  may affect Website functionality.
                </p>
              </section>

              {/* 05 Information collected */}
              <section
                id="information"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">05.</span>
                  Information We Collect
                </h2>

                <h3 className={subsectionHeading}>
                  5.1 Active Information (Information You Provide Voluntarily)
                </h3>

                <p className={bodyText}>
                  We may collect personal information when you:
                </p>

                <ul className={listClass}>
                  {activeInformation.map((item) => (
                    <li key={item} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={bodyText}>
                  This information may include your name, contact details,
                  payment information, preferences, and other details relevant
                  to your interaction with us.
                </p>

                <h3 className={subsectionHeading}>
                  5.2 Passive Information (Collected Automatically)
                </h3>

                <p className={bodyText}>
                  When you visit our Website, we automatically collect certain
                  non-identifying information, including:
                </p>

                <ul className={listClass}>
                  {passiveInformation.map((item) => (
                    <li key={item} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={bodyText}>
                  This information is used for statistical analysis and to
                  improve our Website and services.
                </p>
              </section>

              {/* 06 Use of information */}
              <section
                id="use-of-information"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">06.</span>
                  How We Use Your Personal Information
                </h2>

                <p className={bodyText}>
                  We process personal information for legitimate business
                  purposes, including:
                </p>

                <ul className={listClass}>
                  {informationUses.map((item) => (
                    <li key={item} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={bodyText}>
                  You may opt out of marketing communications at any time by
                  following the unsubscribe instructions or contacting us
                  directly.
                </p>
              </section>

              {/* 07 Third-party websites */}
              <section
                id="third-party-websites"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">07.</span>
                  Third-Party Websites
                </h2>

                <p className={bodyText}>
                  Our Website may contain links to third-party websites or
                  content. This Privacy Policy does not apply to those
                  third-party sites. We do not control or endorse their content
                  or privacy practices and are not responsible for their
                  policies.
                </p>

                <p className={bodyText}>
                  We encourage you to review the privacy policies of any
                  external websites before providing personal information.
                </p>
              </section>

              {/* 08 Disclosure */}
              <section
                id="disclosure"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">08.</span>
                  Disclosure of Personal Information
                </h2>

                <p className={bodyText}>
                  We do not sell your personal information for third-party
                  marketing purposes.
                </p>

                <p className={bodyText}>
                  We may share your personal information with trusted third
                  parties only where necessary, including:
                </p>

                <ul className={listClass}>
                  {thirdParties.map((item) => (
                    <li key={item} className="relative pl-3">
                      <span className="absolute left-[-1.25rem] top-3 size-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className={bodyText}>
                  All such parties are required to handle your information
                  securely and in accordance with applicable data protection
                  laws.
                </p>
              </section>

              {/* 09 Sale of business */}
              <section
                id="sale-of-business"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">09.</span>
                  Sale of Business or Assets
                </h2>

                <p className={bodyText}>
                  In the event of a merger, sale, restructuring, liquidation, or
                  transfer of assets, your personal information may be
                  transferred to a third party, provided that the recipient
                  agrees to comply with the terms of this Privacy Policy.
                </p>
              </section>

              {/* 10 Security */}
              <section
                id="security"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">10.</span>
                  Data Security
                </h2>

                <p className={bodyText}>
                  We take reasonable and appropriate technical and
                  organizational measures to protect your personal information
                  against loss, misuse, unauthorized access, disclosure,
                  alteration, or destruction.
                </p>

                <p className={bodyText}>
                  While we use industry-standard security measures such as
                  encryption, access controls, and monitoring systems, no method
                  of transmission over the Internet is completely secure. We
                  cannot guarantee absolute security but remain committed to
                  safeguarding your data.
                </p>
              </section>

              {/* 11 Changes */}
              <section
                id="changes"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">11.</span>
                  Changes to This Policy
                </h2>

                <p className={bodyText}>
                  We may update this Privacy &amp; Data Protection Policy from
                  time to time to reflect changes in law, technology, or our
                  business practices. Any updates will be posted on this page
                  with the revised effective date.
                </p>
              </section>

              {/* 12 Contact */}
              <section
                id="contact"
                className="mt-16 scroll-mt-32 border-t border-ocean/10 pt-12"
              >
                <h2 className={sectionHeading}>
                  <span className="mr-3 text-gold">12.</span>
                  Contact Us
                </h2>

                <p className={bodyText}>
                  If you have any questions about this Privacy &amp; Data
                  Protection Policy or how we handle your personal information,
                  please contact us:
                </p>

                <div className="mt-8 border border-ocean/10 bg-white p-7 sm:p-9">
                  <p className="font-display text-2xl text-ocean">
                    Swahili Beach Resort
                  </p>

                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                        Email
                      </p>

                      <a
                        href="mailto:dpo@swahilibeach.com"
                        className="mt-2 inline-block text-sm text-ocean transition-colors hover:text-gold"
                      >
                        dpo@swahilibeach.com
                      </a>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-gold">
                        Phone
                      </p>

                      <a
                        href="tel:+254111050140"
                        className="mt-2 inline-block text-sm text-ocean transition-colors hover:text-gold"
                      >
                        +254 111 050 140
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Back to top */}
              <div className="mt-14 border-t border-ocean/10 pt-8">
                <a
                  href="#top"
                  className="text-xs uppercase tracking-[0.16em] text-ocean transition-colors hover:text-gold"
                >
                  Back to top ↑
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
