import ContentPage from '@/components/ContentPage';

export default function ShippingPage() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Shipping & Delivery Policy"
      description="Last updated on Aug 28th 2023"
    >
      <div className="space-y-5">
        <p>
          For international buyers, orders are shipped and delivered through
          registered international courier companies and/or International Speed
          Post only. For domestic buyers, orders are shipped through registered
          domestic courier companies and/or Speed Post only.
        </p>
        <p>
          Orders are shipped within 0–2 days or as per the delivery date agreed
          at the time of order confirmation. Delivery of the shipment is subject
          to courier / post office norms.
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
    </ContentPage>
  );
}
