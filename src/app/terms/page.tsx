import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#1a1a1a]">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">
            Terms of Service
          </h1>
          <div className="prose prose-gray max-w-none space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><strong>Last Updated:</strong> March 2026</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">1. Service Description</h2>
            <p>AWDTSG Checker provides a subscription-based monitoring service that scans publicly available content to help determine if anyone has posted about you online. We do not access any private or proprietary databases.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">2. Subscription & Billing</h2>
            <p>Upon subscribing, you receive an initial search report. We then continuously monitor for new activity and send you email alerts whenever new posts matching your profile are detected. Subscriptions auto-renew until canceled.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">3. Disclaimer</h2>
            <p>AWDTSG Checker is an independent service and is not affiliated with, endorsed by, or sponsored by any dating app, dating review platform, or social media company. We are a third-party monitoring service only.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">4. Accuracy</h2>
            <p>While we strive for accuracy, we cannot guarantee that all matches are correct. Facial recognition and text matching may produce false positives. Results should be interpreted with judgment.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">5. Contact</h2>
            <p>For questions, contact <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">support@awdtsgchecker.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
