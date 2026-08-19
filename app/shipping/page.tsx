import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-neutral-700 space-y-6">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-2">
            Shipping & Delivery Policy
          </h1>
          <p className="text-sm text-neutral-500">Last updated on Aug 28th 2023</p>
          <p>
            For international buyers, orders are shipped and delivered through
            registered international courier companies and/or International Speed
            Post only. For domestic buyers, orders are shipped through registered
            domestic courier companies and/or Speed Post only.
          </p>
          <p>
            Orders are shipped within 0–2 days or as per the delivery date agreed
            at the time of order confirmation. Delivery of the shipment is subject
            to courier / post office norms. Indore Nursery is not liable for any
            delay in delivery by the courier company or postal authorities and
            only guarantees to hand over the consignment to the courier or postal
            authorities within 0–2 days from the date of the order and payment, or
            as per the agreed delivery date.
          </p>
          <p>
            Delivery of all orders will be to the address provided by the buyer.
            Delivery of our services will be confirmed on the email ID specified
            during registration.
          </p>
          <p>
            If any change in colour of pots is there then it cannot be exchanged,
            and if agreed by any chance then extra delivery charges will be
            applied.
          </p>
          <p>
            Delivery charges may change if the address is farther than 10 km from
            the warehouse at 663/2 LIG Link Road, Radhakunj Colony, Indore, MP. If
            the products weigh more than 30 kg then extra charges will apply
            anywhere in Indore regardless of distance.
          </p>
          <p>
            For any issues, contact our helpdesk on 8305449559 or
            indorenursery@gmail.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
