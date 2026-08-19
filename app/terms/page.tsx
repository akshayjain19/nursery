import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-warmwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-neutral-700 space-y-6">
          <h1 className="text-4xl font-display font-bold text-charcoal mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-neutral-500">Last updated on Aug 28th 2023</p>
          <p>
            The Website Owner, including subsidiaries and affiliates (“Website”
            or “we” or “us” or “our”) provides the information on this website to
            visitors subject to these terms and conditions, the privacy policy,
            and any other relevant policies.
          </p>
          <p>
            If you continue to browse and use this website you are agreeing to
            comply with and be bound by the following terms and conditions of
            use, which together with our privacy policy govern Indore Nursery’s
            relationship with you in relation to this website.
          </p>
          <p>
            The term ‘Indore Nursery’ or ‘us’ or ‘we’ refers to the owner of the
            website whose registered/operational office is 663/2, Radhakunj
            Colony, LIG Link Road, Indore, Madhya Pradesh 452010. The term ‘you’
            refers to the user or viewer of our website.
          </p>
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Use of this website
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and we
              expressly exclude liability for any such inaccuracies or errors to
              the fullest extent permitted by law.
            </li>
            <li>
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It is
              your responsibility to ensure that any products, services or
              information available through this website meet your specific
              requirements.
            </li>
            <li>
              This website contains material which is owned by or licensed to us,
              including design, layout, look, appearance and graphics.
              Reproduction is prohibited other than in accordance with the
              copyright notice which forms part of these terms.
            </li>
            <li>
              Unauthorised use of this website may give rise to a claim for
              damages and/or be a criminal offence.
            </li>
            <li>
              You may not create a link to this website from another website or
              document without Indore Nursery’s prior written consent.
            </li>
            <li>
              Colours of pots can be changed or delivered subject to
              availability. There will not be any exchange entertained after
              delivery of product; if by any chance then extra charges will be
              applied.
            </li>
            <li>
              Your use of this website and any dispute arising out of such use is
              subject to the laws of India (Indore) or other regulatory
              authority.
            </li>
          </ul>
          <p>
            We as a merchant shall be under no liability whatsoever in respect of
            any loss or damage arising directly or indirectly out of the decline
            of authorisation for any transaction, on account of the cardholder
            having exceeded the preset limit mutually agreed by us with our
            acquiring bank from time to time.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
