import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Olethryx AI Systems",
  description: "How Olethryx AI Systems collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-200 mx-auto">
          <Link href="/" className="text-blue text-sm no-underline hover:underline">
            ← Back to home
          </Link>

          <h1 className="font-display text-3xl text-bone mt-6 mb-2">Privacy Policy</h1>
          <p className="font-mono text-xs text-panel-line mb-10">Last updated: 20 September 2026</p>

          <div className="text-sm text-bone leading-relaxed space-y-8">
            <section>
              <h2 className="font-display text-lg text-bone mb-3">1. Introduction</h2>
              <p>This Privacy Policy explains how Olethryx AI Systems collects, uses and protects personal information when you visit our website or contact us through it. We respect your privacy and aim to be clear about what information we collect, why we collect it and how it is used. This policy applies to information collected through the Olethryx AI Systems website and its contact forms.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">2. Who We Are</h2>
              <p>Olethryx AI Systems is the software engineering portfolio and studio of Panagiotis Giouvanas, based in Ireland. For data protection purposes, Panagiotis Giouvanas is responsible for the personal information processed through this website.</p>
              <p className="mt-3">
                If you have any questions about how your information is handled, you can contact us at:{" "}
                <a href="mailto:panagiotisgiouvanas@gmail.com" className="text-blue hover:underline">panagiotisgiouvanas@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">3. Information We Collect</h2>
              <p>We may collect information that you choose to provide when you contact us through the website. This may include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Whether your enquiry relates to hiring Olethryx or collaborating</li>
                <li>The message or other information you include in your enquiry</li>
              </ul>
              <p className="mt-3">We may also collect limited technical information when you visit the website, such as information about your device, browser, approximate location and how you use the website. This information may be collected through Google Analytics where you have provided the required consent.</p>
              <p className="mt-3">We do not intentionally collect sensitive personal information through the website.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">4. How We Use Your Information</h2>
              <p>We use personal information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Respond to enquiries and requests submitted through the website</li>
                <li>Discuss potential projects, services or collaborations</li>
                <li>Communicate with you about an enquiry</li>
                <li>Provide and maintain the website</li>
                <li>Understand how visitors use the website and improve its content and performance</li>
                <li>Protect the security and proper operation of the website</li>
                <li>Meet applicable legal and regulatory obligations</li>
              </ul>
              <p className="mt-3">We will not use your information for purposes that are incompatible with the reason it was originally collected.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">5. Legal Basis for Processing</h2>
              <p>Depending on the circumstances, we process personal information under the following legal bases.</p>
              <p className="mt-3 text-bone font-semibold">Legitimate interests</p>
              <p>We may process information submitted through the contact form where this is necessary to respond to an enquiry, communicate with potential clients or collaborators, and manage our business activities, provided that these interests do not override your rights and freedoms.</p>
              <p className="mt-3 text-bone font-semibold">Consent</p>
              <p>We rely on your consent where consent is required, including for non essential cookies and analytics technologies. You can withdraw your consent at any time. Withdrawing consent does not affect the lawfulness of processing that took place before you withdrew it.</p>
              <p className="mt-3 text-bone font-semibold">Legal obligations</p>
              <p>We may process information where this is necessary to comply with a legal obligation.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">6. Contact Form and Resend</h2>
              <p>When you submit the contact form, the information you provide is used to respond to your enquiry. We use Resend as our email delivery service to send communications associated with enquiries submitted through the website. Your information may therefore be processed by Resend as part of delivering these communications.</p>
              <p className="mt-3">We only provide third party service providers with the information they need to provide their services, and we expect them to handle personal information in accordance with applicable data protection requirements.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">7. Google Analytics</h2>
              <p>We use Google Analytics to understand how visitors use the website. This helps us understand things such as website traffic, the pages people visit and general usage patterns, allowing us to improve the website and its content.</p>
              <p className="mt-3">Analytics technologies that require consent will only be used after you have provided the required consent through our cookie settings. You can change or withdraw your cookie preferences at any time.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">8. Cookies</h2>
              <p>The website uses cookies and similar technologies. Some cookies may be strictly necessary for the website to function. Other cookies, including analytics cookies, may only be used where you have provided the required consent.</p>
              <p className="mt-3">When consent is required, you will be given the opportunity to choose whether to allow these cookies. You can change or withdraw your cookie preferences at any time through the cookie settings provided on the website.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">9. Third Party Services</h2>
              <p>We use selected third party services to operate and improve the website and provide its functionality. These may include:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Resend, for email delivery</li>
                <li>Google Analytics, for website analytics</li>
                <li>Website hosting and infrastructure providers required to operate the website</li>
              </ul>
              <p className="mt-3">Where these providers process personal information on our behalf, we take reasonable steps to ensure that appropriate data protection measures are in place. Some third party providers may process information outside the European Economic Area. Where this occurs, appropriate safeguards will be used where required by applicable data protection law.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">10. How Long We Keep Your Information</h2>
              <p>We keep personal information only for as long as it is reasonably necessary for the purpose for which it was collected. Information submitted through the contact form will generally be retained for as long as necessary to deal with your enquiry and any resulting business relationship.</p>
              <p className="mt-3">We may retain certain information for longer where this is necessary to comply with legal, accounting or other regulatory requirements. Analytics information is retained according to the settings of the analytics service in use.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">11. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share information with service providers that help us operate the website and provide its services, such as email delivery, analytics, hosting and infrastructure providers.</p>
              <p className="mt-3">We may also disclose information where this is required by law, legal proceedings or a lawful request from a competent authority.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">12. Your Data Protection Rights</h2>
              <p>Depending on the circumstances, you may have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Request access to the personal information we hold about you</li>
                <li>Ask us to correct inaccurate or incomplete information</li>
                <li>Ask us to delete your personal information</li>
                <li>Ask us to restrict how we process your information</li>
                <li>Object to certain types of processing</li>
                <li>Request a copy of your information in a portable format where applicable</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-3">
                You can exercise these rights by contacting us at:{" "}
                <a href="mailto:panagiotisgiouvanas@gmail.com" className="text-blue hover:underline">panagiotisgiouvanas@gmail.com</a>
              </p>
              <p className="mt-3">We may need to verify your identity before responding to certain requests.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">13. Complaints</h2>
              <p>If you have concerns about how we handle your personal information, we encourage you to contact us first so that we can try to resolve the issue.</p>
              <p className="mt-3">You also have the right to make a complaint to the Irish Data Protection Commission if you believe that your personal information has not been handled in accordance with applicable data protection law.</p>
              <p className="mt-3">
                Data Protection Commission<br />
                21 Fitzwilliam Square South<br />
                Dublin 2<br />
                D02 RD28<br />
                Ireland
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">14. Third Party Websites</h2>
              <p>The website may contain links to third party websites, including websites such as GitHub, LinkedIn or websites belonging to projects featured by Olethryx AI Systems. We are not responsible for the privacy practices or content of third party websites. We recommend reading the privacy policies of those websites before providing them with personal information.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">15. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes to the website, the services we use or our data processing practices. When we make changes, we will update the date shown at the top of this policy. We recommend checking this page periodically for the latest version.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">16. Contact</h2>
              <p>If you have any questions about this Privacy Policy or how your personal information is handled, please contact us.</p>
              <p className="mt-3">
                Panagiotis Giouvanas<br />
                Olethryx AI Systems<br />
                Email: <a href="mailto:panagiotisgiouvanas@gmail.com" className="text-blue hover:underline">panagiotisgiouvanas@gmail.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}