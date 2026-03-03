import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RefundPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-[#1a1a1a]">
          <h1 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">
            Refund Policy
          </h1>
          <div className="prose prose-gray max-w-none space-y-4 text-sm text-gray-700 leading-relaxed">
            <p><strong>Last Updated:</strong> March 2026</p>
            <p>Due to the nature of our digital search service, all sales are final once a search report has been generated. However, we want you to be satisfied:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If you experience technical issues preventing you from viewing your report, contact us for a full refund.</li>
              <li>If you believe your results are significantly inaccurate, contact us within 24 hours.</li>
              <li>Subscription cancellations take effect at the end of the current billing period.</li>
            </ul>
            <p>Contact <a href="mailto:support@awdtsgchecker.com" className="text-[#1877f2] hover:underline">support@awdtsgchecker.com</a> for refund requests.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
