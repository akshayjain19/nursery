import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-neutral-700">
            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Introduction
              </h2>
              <p>
                At Nursery, we are committed to protecting your privacy and
                ensuring you have a positive experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                We may collect information about you when you use our website,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information via WhatsApp</li>
                <li>Information about products you browse</li>
                <li>Technical information about your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                How We Use Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries</li>
                <li>Improve our website and services</li>
                <li>Send you updates about products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please
                contact us at hello@nursery.com or through WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
