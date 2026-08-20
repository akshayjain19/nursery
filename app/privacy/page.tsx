import ContentPage from '@/components/ContentPage';

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Policies"
      title="Privacy Policy"
      description="Effective date: 2022-06-21"
    >
      <div className="space-y-5 text-stone leading-relaxed">
        <p>
          Welcome to Indore Nursery. Indore Nursery operates IndoreNursery.com
          (the “Service”). This Privacy Policy governs your visit and explains
          how we collect, safeguard and disclose information that results from
          your use of our Service.
        </p>
        <p>
          Personal Data may include email address, first and last name, phone
          number, address, cookies and usage data. We use cookies and similar
          tracking technologies, including session, preference, security, and
          advertising cookies.
        </p>
        <p>
          We use collected data to provide and maintain the Service, notify you
          of changes, provide customer support, analyse and improve the Service,
          monitor usage, detect technical issues, and fulfil contracts including
          billing.
        </p>
        <p>
          If you wish to be informed of what Personal Data we hold about you, or
          want it removed, email indorenursery@gmail.com. Our Services are not
          intended for children under 18.
        </p>
      </div>
    </ContentPage>
  );
}
