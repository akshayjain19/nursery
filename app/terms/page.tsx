import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-neutral-700">
            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p>
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on our website for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>
                  Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>Attempting to decompile or reverse engineer any software</li>
                <li>Removing any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Product Information
              </h2>
              <p>
                We make every effort to provide accurate product information.
                However, we do not warrant that product descriptions, pricing,
                or other content of any materials is accurate, complete,
                reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Disclaimer
              </h2>
              <p>
                The materials on our website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-charcoal mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at hello@nursery.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
