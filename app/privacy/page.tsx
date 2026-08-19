import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-neutral-700 space-y-6">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500">Effective date: 2022-06-21</p>
          <p>
            Welcome to Indore Nursery. Indore Nursery (“us,” “we,” or “our”)
            operates IndoreNursery.com (the “Service”). This Privacy Policy
            governs your visit to IndoreNursery.com and explains how we collect,
            safeguard and disclose information that results from your use of our
            Service.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Our Terms and Conditions, together with
            this Privacy Policy, constitute your agreement with us.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Information we collect
          </h2>
          <p>
            Personal Data may include email address, first and last name, phone
            number, address (country, state, ZIP/postal code, city), cookies and
            usage data. We may also collect usage data such as IP address,
            browser type, pages visited, time spent, and device identifiers.
          </p>
          <p>
            We use cookies and similar tracking technologies, including session,
            preference, security, and advertising cookies. You can refuse cookies
            in your browser; some parts of the Service may not work without them.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            How we use data
          </h2>
          <p>
            We use collected data to provide and maintain the Service, notify you
            of changes, provide customer support, analyse and improve the
            Service, monitor usage, detect technical issues, fulfil contracts
            including billing, send notices about accounts, and share news or
            offers similar to products you have enquired about unless you opt
            out.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Retention, transfer and disclosure
          </h2>
          <p>
            We retain Personal Data only as long as needed for the purposes in
            this policy, legal obligations, disputes, and enforcing agreements.
            If you are located outside India and provide information to us, we
            transfer and process that data in India.
          </p>
          <p>
            We may disclose personal information in a merger or asset sale, to
            affiliates and service providers, to fulfil the purpose you provided
            it for, or if we believe disclosure is necessary to protect rights,
            property, or safety.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Your rights
          </h2>
          <p>
            If you wish to be informed of what Personal Data we hold about you,
            or want it removed, email indorenursery@gmail.com. You may have
            rights to access, update, delete, rectify, object to, restrict, or
            port your data, and to withdraw consent. We honour Do Not Track
            signals.
          </p>
          <p>
            We do not sell or rent your personal information to third parties for
            monetary consideration. Our Services are not intended for children
            under 18.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Contact
          </h2>
          <p>
            Questions about this Privacy Policy: indorenursery@gmail.com. Created
            for IndoreNursery.com on 2022-06-21.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
