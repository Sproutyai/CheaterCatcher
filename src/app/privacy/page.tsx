import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#1a1a1a]">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">
            Privacy Policy
          </h1>
          <div className="prose prose-gray max-w-none space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><strong>Last Updated:</strong> March 2026</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">1. Information We Collect</h2>
            <p>When you use AWDTSG Checker, we may collect: your name, email address, location (city), uploaded photos, and payment information. Payment information is processed securely by Stripe and never stored on our servers.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">2. How We Use Your Information</h2>
            <p>We use your information to: perform searches across AWDTSG groups, process payments, send search results and monitoring alerts, and improve our services.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">3. Facial Recognition</h2>
            <p>If you upload a photo, we use AI-powered facial recognition to compare it against images in our database. Photos are processed securely and are not shared with third parties.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">4. Data Retention</h2>
            <p>We retain your search data for the duration of your subscription. Upon cancellation, your data is deleted within 30 days.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">5. Children&apos;s Privacy</h2>
            <p>AWDTSG Checker is not intended for anyone under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

            <h2 className="text-lg font-bold text-[#1a1a1a] mt-6">6. Contact</h2>
            <p>For privacy questions, contact us at <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">support@awdtsgchecker.com</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
