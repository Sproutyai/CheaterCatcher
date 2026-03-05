export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <a href="/" className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</a>
      </div>

      <main className="px-4 py-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h1 className="text-xl font-black text-[#1a1a1a] mb-1">Privacy Policy</h1>
          <p className="text-xs text-gray-400 mb-6">Last Updated: March 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                1. Information We Collect
              </h2>
              <p className="mb-2">
                When you use AWDTSG Checker, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Search data:</strong> Names, ages, and cities you enter when performing searches.</li>
                <li><strong>Photos:</strong> Images you upload for facial recognition matching.</li>
                <li><strong>Email address:</strong> Provided during account creation or checkout.</li>
                <li><strong>Payment information:</strong> Credit card details processed securely through Stripe. We do not store card numbers on our servers.</li>
                <li><strong>Device &amp; usage data:</strong> IP address, browser type, pages visited, and interaction data collected via cookies and analytics tools.</li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Perform searches across AWDTSG groups, social media platforms, and public databases.</li>
                <li>Process payments and manage subscriptions.</li>
                <li>Send search results, monitoring alerts, and service updates via email.</li>
                <li>Improve our services, algorithms, and user experience.</li>
                <li>Prevent fraud, abuse, and unauthorized access.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                3. Facial Recognition &amp; Biometric Data
              </h2>
              <p className="mb-2">
                If you upload a photo, our AI-powered facial recognition technology creates a
                temporary biometric template to compare against images found in AWDTSG posts
                and social media profiles.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Biometric data is processed in memory and is <strong>not permanently stored</strong> on our servers.</li>
                <li>Facial templates are automatically deleted after search processing is complete.</li>
                <li>We do not sell, lease, or share biometric data with third parties.</li>
                <li>By uploading a photo, you consent to the creation and use of biometric identifiers for the purpose of providing our search service.</li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                <strong>Illinois BIPA Notice:</strong> If you reside in Illinois, you have
                specific rights regarding biometric data under the Biometric Information
                Privacy Act (740 ILCS 14). Contact us for more information.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                4. Data Retention &amp; Deletion
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Search data and reports are retained for the duration of your active subscription.</li>
                <li>Upon cancellation, your data is deleted within 30 days.</li>
                <li>Uploaded photos are deleted immediately after facial recognition processing.</li>
                <li>You may request deletion of all your data at any time by emailing us.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                5. Third-Party Services
              </h2>
              <p className="mb-2">We use the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Stripe:</strong> Payment processing. Subject to <a href="https://stripe.com/privacy" className="text-[#1877f2] hover:underline" target="_blank" rel="noopener noreferrer">Stripe&rsquo;s Privacy Policy</a>.</li>
                <li><strong>Google Analytics:</strong> Usage tracking and site improvement.</li>
                <li><strong>Vercel:</strong> Hosting and infrastructure.</li>
              </ul>
              <p className="mt-1">
                We do not sell your personal data to third parties.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                6. Your Rights
              </h2>
              <p className="mb-2">
                Depending on your location, you may have the following rights:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-[#1a1a1a]">California Residents (CCPA)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Right to know what personal information we collect.</li>
                    <li>Right to request deletion of your personal information.</li>
                    <li>Right to opt out of the sale of personal information (we do not sell data).</li>
                    <li>Right to non-discrimination for exercising your rights.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">EU/EEA Residents (GDPR)</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Right to access, rectify, or erase your personal data.</li>
                    <li>Right to restrict or object to processing.</li>
                    <li>Right to data portability.</li>
                    <li>Right to withdraw consent at any time.</li>
                    <li>Right to lodge a complaint with a supervisory authority.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                7. Cookies
              </h2>
              <p>
                We use essential cookies to maintain your session and optional analytics
                cookies to understand how our service is used. You can disable non-essential
                cookies in your browser settings.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                8. Children&rsquo;s Privacy
              </h2>
              <p>
                AWDTSG Checker is not intended for anyone under 18 years of age. We do not
                knowingly collect personal information from children under 18. If we discover
                that we have collected data from a minor, we will delete it immediately.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                material changes via email or a notice on our website. Your continued use of
                the service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                10. Contact Us
              </h2>
              <p>
                For privacy questions, data requests, or concerns, contact us at:{' '}
                <a
                  href="mailto:support@awdtsgchecker.com"
                  className="text-[#1877f2] hover:underline"
                >
                  support@awdtsgchecker.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Footer links */}
        <div className="text-center text-xs text-gray-400 py-6 space-x-3">
          <a href="/terms" className="hover:underline">Terms</a>
          <span>•</span>
          <a href="/refund" className="hover:underline">Refund</a>
          <span>•</span>
          <a href="/cancel" className="hover:underline">Cancel</a>
        </div>
      </main>
    </div>
  );
}
