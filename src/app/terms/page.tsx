export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <a href="/" className="text-lg font-bold text-[#1a1a1a]">🔍 AWDTSG Checker</a>
      </div>

      <main className="px-4 py-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h1 className="text-xl font-black text-[#1a1a1a] mb-1">Terms of Service</h1>
          <p className="text-xs text-gray-400 mb-6">Last Updated: March 2026</p>

          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                1. Service Description
              </h2>
              <p>
                AWDTSG Checker (&ldquo;the Service&rdquo;) is a subscription-based online
                monitoring platform that searches publicly accessible content — including
                &ldquo;Are We Dating the Same Guy?&rdquo; (AWDTSG) Facebook groups, Instagram,
                Twitter/X, and other public sources — to help users determine if they have
                been mentioned or posted about online. The Service also offers AI-powered
                facial recognition matching and optional post removal assistance.
              </p>
              <p className="mt-2">
                AWDTSG Checker is an independent service and is <strong>not affiliated with,
                endorsed by, or sponsored by</strong> any dating app, social media company,
                or the AWDTSG Facebook groups themselves.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                2. User Eligibility
              </h2>
              <p>
                You must be at least <strong>18 years of age</strong> to use this Service.
                By using AWDTSG Checker, you represent and warrant that you are at least 18
                years old and have the legal capacity to agree to these Terms. If you are
                using the Service on behalf of another person, you represent that you have
                their authorization to do so.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                3. Acceptable Use
              </h2>
              <p className="mb-2">You agree to use the Service only for lawful purposes. You may NOT:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the Service to harass, stalk, threaten, or intimidate any person.</li>
                <li>Search for individuals with the intent to cause harm or distress.</li>
                <li>Upload photos of minors or individuals without a legitimate reason.</li>
                <li>Attempt to reverse-engineer, scrape, or interfere with the Service.</li>
                <li>Resell, redistribute, or commercially exploit search results.</li>
                <li>Create multiple accounts to circumvent usage limits or bans.</li>
              </ul>
              <p className="mt-2">
                We reserve the right to suspend or terminate accounts that violate these terms
                without notice or refund.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                4. Subscription &amp; Billing
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Single Report ($4.99):</strong> A one-time purchase granting access
                  to one search report. No recurring charges.
                </li>
                <li>
                  <strong>Weekly Plan ($9.99/week):</strong> Provides unlimited searches.
                  Automatically renews every 7 days until canceled.
                </li>
                <li>
                  <strong>Monthly Plan ($17.99/month):</strong> Provides unlimited searches
                  with priority scanning. First month at promotional rate; renews at
                  $35.98/month unless canceled before the renewal date.
                </li>
              </ul>
              <p className="mt-2">
                All payments are processed securely through Stripe. You authorize us to charge
                your selected payment method on a recurring basis according to your chosen
                plan until you cancel.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                5. Refund Policy
              </h2>
              <p>
                We offer a <strong>7-day money-back guarantee</strong> from the date of your
                initial purchase. If you are not satisfied with the Service, you may request
                a full refund within 7 days by contacting us at{' '}
                <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">
                  support@awdtsgchecker.com
                </a>{' '}
                or visiting our{' '}
                <a href="/refund" className="text-[#1877f2] hover:underline">Refund page</a>.
                After the 7-day window, all sales are final. Subscription cancellations take
                effect at the end of the current billing period.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                6. Disclaimer of Accuracy
              </h2>
              <p>
                While we strive for accuracy, <strong>we cannot guarantee that all search
                results are correct or complete</strong>. Our Service relies on publicly
                available information, AI-powered text matching, and facial recognition
                technology, all of which may produce false positives or miss relevant content.
              </p>
              <p className="mt-2">
                Search results should be interpreted with personal judgment. A match does not
                constitute proof of any wrongdoing, and a lack of results does not guarantee
                the absence of posts. We are not responsible for decisions made based on
                search results.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AWDTSG CHECKER AND ITS OPERATORS,
                EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO
                LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY
                TO USE THE SERVICE.
              </p>
              <p className="mt-2">
                Our total liability to you for any claim arising from the Service shall not
                exceed the amount you paid us in the 30 days preceding the claim.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless AWDTSG Checker and its
                operators from any claims, damages, losses, liabilities, and expenses
                (including reasonable attorney&rsquo;s fees) arising from: (a) your use of
                the Service; (b) your violation of these Terms; (c) your violation of any
                third-party rights; or (d) any content you submit to the Service.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                9. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the Service — including text,
                graphics, logos, and software — are the property of AWDTSG Checker and are
                protected by intellectual property laws. You may not copy, modify, distribute,
                or create derivative works without our prior written consent.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                the State of Florida, United States, without regard to its conflict of law
                principles. Any disputes arising under these Terms shall be resolved in the
                state or federal courts located in Miami-Dade County, Florida.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                11. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will
                be communicated via email or a notice on the website. Your continued use of
                the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-bold text-[#1a1a1a] text-base mb-2">
                12. Contact Information
              </h2>
              <p>
                For questions about these Terms, contact us at:{' '}
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
          <a href="/privacy" className="hover:underline">Privacy</a>
          <span>•</span>
          <a href="/refund" className="hover:underline">Refund</a>
          <span>•</span>
          <a href="/cancel" className="hover:underline">Cancel</a>
        </div>
      </main>
    </div>
  );
}
