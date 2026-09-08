import ContentPage from '@/components/ContentPage';

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Terms & Conditions"
      description="Last updated on Aug 28th 2023"
    >
      <div className="space-y-5">
        <p>
          If you continue to browse and use this website you are agreeing to
          comply with and be bound by the following terms and conditions of use,
          which together with our privacy policy govern Indore Nursery’s
          relationship with you in relation to this website.
        </p>
        <p>
          The term ‘Indore Nursery’ refers to the owner of the website whose
          registered/operational office is 663/2, Radhakunj Colony, LIG Link
          Road, Indore, Madhya Pradesh 452010.
        </p>
        <ul>
          <li>
            The content of the pages of this website is for your general
            information and use only. It is subject to change without notice.
          </li>
          <li>
            Your use of any information or materials on this website is entirely
            at your own risk, for which we shall not be liable.
          </li>
          <li>
            Colours of pots can be changed or delivered subject to availability.
          </li>
          <li>
            Your use of this website and any dispute arising out of such use is
            subject to the laws of India (Indore).
          </li>
        </ul>
      </div>
    </ContentPage>
  );
}
