// app/privacy-policy/page.tsx (for Next.js App Router)
// or pages/privacy-policy.tsx (for Pages Router)

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen mt-[-160px] pt-56 bg-white text-black px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-2 text-lg font-bold">Last Updated On 25-Aug-2025</p>
        <p className="mb-6 text-lg font-bold">Effective Date 25-Aug-2025</p>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            This Privacy Policy describes the policies of <b>Bixeltek</b>, a
            digital marketing company based in Hyderabad, India, on the
            collection, use and disclosure of your information that we collect
            when you use our website (the “Service”). By accessing or using the
            Service, you are consenting to the collection, use and disclosure of
            your information in accordance with this Privacy Policy. If you do
            not consent to the same, please do not access or use the Service.
          </p>

          <p>
            We may modify this Privacy Policy at any time without prior notice
            and will post the revised Privacy Policy on the Service. The revised
            Policy will be effective 180 days from the date it is posted in the
            Service, and your continued access to or use of the Service after
            such time will constitute your acceptance of the revised Privacy
            Policy. We therefore recommend that you periodically review this
            page.
          </p>

          {/* Info Collection */}
          <h2 className="text-2xl font-semibold mt-8 font-poppins">Information We Collect</h2>
          <p>We will collect and process the following personal information about you:</p>
          <ul className="list-disc list-inside font-bold text-base">
            <li>Name</li>
            <li>Email</li>
            <li>Mobile</li>
            <li>Work Address</li>
          </ul>

          {/* Usage */}
          <h2 className="text-2xl font-semibold mt-8 font-poppins">How We Use Your Information</h2>
          <p>We will use the information that we collect about you for:</p>
          <ul className="list-disc list-inside font-bold text-base">
            <li>Marketing/Promotional</li>
            <li>Support</li>
          </ul>
          <p>
            If we want to use your information for any other purpose, we will
            ask you for consent and only use it for the purpose(s) you grant
            consent for, unless required otherwise by law.
          </p>

          {/* Sharing */}
          <h2 className="text-2xl font-semibold mt-8 font-poppins">How We Share Your Information</h2>
          <p>
            We will not transfer your personal information to any third party
            without seeking your consent, except in limited circumstances such
            as:
          </p>
          <ul className="list-disc list-inside font-bold text-base">
            <li>Ad services</li>
            <li>Sponsors</li>
            <li>Marketing agencies</li>
            <li>Analytics</li>
            <li>Data collection & process</li>
          </ul>
          <p>
            We require such third parties to use the personal information only
            for the purpose it was transferred and not to retain it longer than
            required. We may also disclose personal information to comply with
            laws, enforce agreements, respond to claims, or in case of merger or
            acquisition.
          </p>

          {/* Expanded Bottom Sections */}
          <h2 className="text-2xl font-semibold mt-8 font-poppins">Retention of Your Information</h2>
          <p>
            We will retain your personal information for 90 days to 2 years after
            users terminate their accounts, or as long as needed to fulfill the
            purposes outlined in this Privacy Policy. Certain information may be
            retained longer as required by law, dispute resolution, fraud
            prevention, audit purposes, or enforcement of legal rights.
          </p>
          <p>
            Once the retention period expires, your personal information will be
            securely deleted or anonymized so that it can no longer be associated
            with you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Text Message Communications</h2>
          <p>
            We use text messaging (SMS/WhatsApp/other channels) to communicate
            about your Service — such as account updates, reminders, or
            security alerts. Standard rates may apply.
          </p>
          <p>
            No mobile information will ever be shared with third parties or
            affiliates for marketing/promotional purposes without your consent.
            You may opt out at any time by replying with STOP or contacting our
            support team. However, some service-related communications may
            continue even after opting out (e.g., critical security messages).
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Your Rights</h2>
          <p>
            Depending on applicable laws, you may have rights to:
          </p>
          <ul className="list-disc list-inside text-base font-bold">
            <li>Access and obtain a copy of your personal data</li>
            <li>Rectify inaccuracies in your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Restrict or object to the processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            You can exercise these rights by writing to us at{" "}
            <span className="underline">privacy@bixeltek.com</span>. We may need
            to verify your identity before fulfilling such requests.
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance user
            experience, analyze site performance, and deliver personalized
            content or ads. These may include session cookies (which expire when
            you close your browser) and persistent cookies (which remain until
            deleted).
          </p>
          <p>
            You can manage or disable cookies through your browser settings.
            Please note that disabling cookies may impact functionality of
            certain features of the Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Security</h2>
          <p>
            The security of your information is very important to us. We employ
            technical, administrative, and physical safeguards designed to
            protect against unauthorized access, use, or disclosure.
          </p>
          <p>
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use reasonable
            means to protect your personal data, we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Third-Party Links</h2>
          <p>
            Our Service may contain links to other websites or services that are
            not operated or controlled by us. We are not responsible for the
            content, policies, or practices of such third-party sites.
          </p>
          <p>
            We strongly advise you to review the privacy policies of any third
            parties you interact with, as their data collection and usage may
            differ from ours.
          </p>

          <h2 className="text-2xl font-semibold mt-8 font-poppins">Grievance / Data Protection Officer</h2>
          <p>
            If you have any questions, concerns, or complaints about this
            Privacy Policy or our data handling practices, you may contact our
            Grievance / Data Protection Officer at{" "}
            <span className="underline">hello@bixeltek.com</span>.
          </p>
          <p>
            We will investigate your concerns promptly and in accordance with
            applicable data protection laws. In certain jurisdictions, you may
            also have the right to lodge a complaint with your local data
            protection authority.
          </p>
        </div>
      </div>
    </div>
  );
}
