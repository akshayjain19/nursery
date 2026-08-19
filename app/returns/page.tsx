import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReturnsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-neutral-700 space-y-6">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-2">
            Refund and Returns Policy
          </h1>
          <p className="text-sm text-neutral-500">Last updated date: 12-07-2022</p>
          <p>
            Thank you for purchasing with us. If you are not completely satisfied
            with your purchase, you may return the item to us for a full refund
            only, subject to the terms below.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Returns
          </h2>
          <p>
            All returns must be postmarked within ten days of the purchase date.
            All returned items must be in new and unused condition, with all
            original tags and labels attached.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Return process
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Email customer service at info@indorenursery.com to obtain a RAM
              (Return Merchandise Authorisation) number. After receiving the
              email, return the package to our delivery person.
            </li>
            <li>
              We shall not be responsible for items sent for return/replacement
              without our confirmation.
            </li>
            <li>
              Once the return request is accepted, we will pick up the products
              within 4–7 days of receiving your request.
            </li>
            <li>
              Refund or replacement starts only if products are received in
              original packaging with seals, labels and barcodes intact.
            </li>
            <li>
              Approved refunds reflect in your account within 5–7 days, with a
              confirmation email.
            </li>
            <li>
              Replacements are subject to stock. If a replacement is not
              available and you have already paid, we will refund the full
              amount.
            </li>
          </ul>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Exceptions
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              Products damaged during shipment or improper packaging do not
              qualify for refund or return.
            </li>
            <li>
              Images are for reference purposes only. The actual product may vary
              in shape or appearance based on climate, age, height, etc. Some
              plants are delicate and a few leaves may break in transit. We do
              not consider these as damages.
            </li>
            <li>A detailed email with shipment information needs to be provided.</li>
            <li>
              If you buy with any discount, offer, or coupon, this refund and
              return policy will not apply to that product.
            </li>
          </ul>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            How will I get the refund?
          </h2>
          <p>
            The refund is processed within 5–7 days from when products have been
            received and verified at our warehouse. For card or net-banking
            payments, the refund goes to the same account and may take an extra
            2–3 days to appear.
          </p>
          <p>
            For queries, contact +91-8305449559. We will address the same on a
            case-by-case basis.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
