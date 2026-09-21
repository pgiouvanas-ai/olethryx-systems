import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Olethryx AI Systems",
  description: "How Olethryx AI Systems uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="text-blue text-sm no-underline hover:underline">
            ← Back to home
          </Link>

          <h1 className="font-display text-3xl text-bone mt-6 mb-2">Cookie Policy</h1>
          <p className="font-mono text-xs text-panel-line mb-10">Last updated: 21 September 2026</p>

          <div className="text-sm text-bone leading-relaxed space-y-8">
            <section>
              <h2 className="font-display text-lg text-bone mb-3">1. Introduction</h2>
              <p>This Cookie Policy explains how Olethryx AI Systems uses cookies and similar technologies when you visit our website.</p>
              <p className="mt-3">We use cookies to help the website function properly, understand how visitors use the website and improve the experience.</p>
              <p className="mt-3">This policy explains what cookies are, how we use them and how you can manage your preferences.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">2. What Are Cookies?</h2>
              <p>Cookies are small files that are stored on your device when you visit a website.</p>
              <p className="mt-3">They allow a website to remember certain information and can be used for things such as essential website functions, preferences and analytics.</p>
              <p className="mt-3">We may also use similar technologies that work in a similar way to cookies.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">3. How We Use Cookies</h2>
              <p>We use cookies for different purposes depending on what they are needed for.</p>
              <p className="mt-3 text-bone font-semibold">Necessary cookies</p>
              <p>Some cookies are needed for the website to work properly. They may support essential functions such as security, navigation and website functionality.</p>
              <p className="mt-3">These cookies do not require consent where they are strictly necessary for the website to provide a service you have requested.</p>
              <p className="mt-3 text-bone font-semibold">Analytics cookies</p>
              <p>We use analytics cookies to understand how visitors use our website.</p>
              <p className="mt-3">This may include information about the pages people visit, how they interact with the website and general usage patterns.</p>
              <p className="mt-3">Analytics cookies are only used where the required consent has been provided.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">4. Google Analytics</h2>
              <p>We use Google Analytics to understand how visitors use the website and to help us improve its content, structure and performance.</p>
              <p className="mt-3">Google Analytics may use cookies and similar technologies to collect information about website usage.</p>
              <p className="mt-3">Analytics cookies will only be used where the required consent has been provided through our cookie settings.</p>
              <p className="mt-3">For more information about how Google handles information, you can visit Google&rsquo;s privacy information.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">5. Your Cookie Choices</h2>
              <p>When you first visit the website, you will be given the opportunity to choose whether to allow non essential cookies.</p>
              <p className="mt-3">You do not need to accept analytics cookies in order to use the website.</p>
              <p className="mt-3">Where consent is required, these cookies will not be used before you provide consent.</p>
              <p className="mt-3">You can change or withdraw your cookie preferences at any time.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">6. Managing Cookies</h2>
              <p>You can also manage or delete cookies through your browser settings.</p>
              <p className="mt-3">Most browsers allow you to control cookies, including blocking them or deleting cookies that have already been stored on your device.</p>
              <p className="mt-3">Please be aware that blocking certain cookies may affect some website functionality.</p>
              <p className="mt-3">Where available, you can also use the cookie settings on our website to change your preferences.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">7. Third Party Services</h2>
              <p>Some services used by the website may involve third party technologies.</p>
              <p className="mt-3">These may include Google Analytics and other services required to operate, secure or improve the website.</p>
              <p className="mt-3">Third party services may use their own cookies or similar technologies where applicable.</p>
              <p className="mt-3">These services are operated by their respective providers and may have their own privacy and cookie policies.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">8. How Long Cookies Remain</h2>
              <p>The length of time a cookie remains on your device depends on its purpose and how the relevant service is configured.</p>
              <p className="mt-3">Some cookies are temporary and are removed when you close your browser. Others may remain for a longer period.</p>
              <p className="mt-3">The cookies used on the website may change as we update the website or the services we use.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">9. Changes to This Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes to the website, the services we use or our legal requirements.</p>
              <p className="mt-3">When we make changes, we will update the date shown at the top of this policy.</p>
              <p className="mt-3">We recommend checking this page from time to time for the latest version.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">10. Contact</h2>
              <p>If you have any questions about this Cookie Policy or how cookies are used on our website, please contact us.</p>
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