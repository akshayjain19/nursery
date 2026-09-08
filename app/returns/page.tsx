import ContentPage from '@/components/ContentPage';

export default function ReturnsPage() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Refund and Returns Policy"
      description="Last updated date: 12-07-2022"
    >
      <div className="space-y-6">
        <p>
          Thank you for purchasing with us. If you are not completely satisfied
          with your purchase, you may return the item to us for a full refund
          only, subject to the terms below.
        </p>
        <section>
          <h2>Returns</h2>
          <p>
            All returns must be postmarked within ten days of the purchase date.
            All returned items must be in new and unused condition, with all
            original tags and labels attached.
          </p>
        </section>
        <section>
          <h2>Return process</h2>
          <ul>
            <li>
              Email customer service at info@indorenursery.com to obtain a RAM
              number.
            </li>
            <li>
              Once accepted, we will pick up the products within 4–7 days of
              receiving your request.
            </li>
            <li>
              Approved refunds reflect in your account within 5–7 days.
            </li>
          </ul>
        </section>
        <p>
          For queries, contact +91-8305449559. We will address the same on a
          case-by-case basis.
        </p>
      </div>
    </ContentPage>
  );
}
