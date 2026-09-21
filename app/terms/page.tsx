import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Olethryx AI Systems",
  description: "The terms that apply when you use the Olethryx AI Systems website or engage us for services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-ink min-h-screen pt-24 pb-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="text-blue text-sm no-underline hover:underline">
            ← Back to home
          </Link>

          <h1 className="font-display text-3xl text-bone mt-6 mb-2">Terms &amp; Conditions</h1>
          <p className="font-mono text-xs text-panel-line mb-10">Last updated: 20 September 2026</p>

          <div className="text-sm text-bone leading-relaxed space-y-8">
            <section>
              <h2 className="font-display text-lg text-bone mb-3">1. Introduction</h2>
              <p>These Terms and Conditions explain the terms that apply when you use the Olethryx AI Systems website or engage us for software development and related services.</p>
              <p className="mt-3">By using the website, submitting an enquiry or agreeing to work with us, you agree to these Terms and Conditions.</p>
              <p className="mt-3">Where a specific project has its own proposal, quotation or written agreement, those terms will also apply to that project.</p>
              <p className="mt-3">Nothing in these Terms and Conditions is intended to remove or limit any legal rights that cannot be removed or limited by law.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">2. About Olethryx AI Systems</h2>
              <p>Olethryx AI Systems is the software engineering portfolio and studio of Panagiotis Giouvanas, based in Ireland.</p>
              <p className="mt-3">We provide software engineering, AI engineering and product development services.</p>
              <p className="mt-3">The exact services provided will depend on the requirements and scope agreed for each project.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">3. Using This Website</h2>
              <p>You may use this website for lawful purposes and for your own information.</p>
              <p className="mt-3">You must not use the website in a way that could damage it, interfere with its operation or compromise its security.</p>
              <p className="mt-3">You must not attempt to access systems, information or areas of the website that are not intended to be publicly available.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">4. Enquiries</h2>
              <p>Submitting an enquiry through the website does not create a contract or guarantee that we will provide services.</p>
              <p className="mt-3">We may contact you to discuss your requirements, answer questions and determine whether we are able to take on the work.</p>
              <p className="mt-3">If we agree to work together, the details of the project will be agreed before work begins.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">5. Project Scope</h2>
              <p>Before starting a project, we will agree the work to be carried out, the expected deliverables, the estimated timeline and the applicable fees.</p>
              <p className="mt-3">If you request additional work or changes after the project has started, this may affect the agreed cost or timeline.</p>
              <p className="mt-3">We will discuss significant changes with you before carrying out additional work.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">6. Fees and Payment</h2>
              <p>Project fees and payment arrangements will be agreed before work begins.</p>
              <p className="mt-3">Depending on the project, payment may be made in stages, by agreed milestones or through another arrangement agreed with you.</p>
              <p className="mt-3">You are responsible for making payments by the agreed dates.</p>
              <p className="mt-3">Any additional work outside the agreed scope may result in additional charges where this has been agreed with you.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">7. Your Responsibilities</h2>
              <p>You are responsible for providing the information, content, access and approvals reasonably needed for us to carry out the agreed work.</p>
              <p className="mt-3">You are also responsible for making sure that any material you provide to us can legally be used for the project.</p>
              <p className="mt-3">If required information or approvals are delayed, this may affect the project timeline.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">8. Intellectual Property</h2>
              <p>The ownership of work created for a project will depend on the agreement made for that project.</p>
              <p className="mt-3">Unless otherwise agreed, Olethryx AI Systems retains ownership of its existing tools, reusable code, frameworks, development methods and other materials that were not created specifically for the client.</p>
              <p className="mt-3">Any materials that you provide to us remain yours or belong to their respective owners.</p>
              <p className="mt-3">Where ownership or licensing of work created specifically for a project is transferred to you, this will be set out in the relevant project agreement.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">9. Third Party Services</h2>
              <p>Some projects may use third party services, software, APIs, hosting providers or other technologies.</p>
              <p className="mt-3">These services are operated by their respective providers and are outside our control.</p>
              <p className="mt-3">Changes to those services, including changes to their availability, pricing or functionality, may affect a project.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">10. Changes and Delays</h2>
              <p>Project timelines may change if requirements change, information or approvals are delayed, or circumstances outside our reasonable control affect the work.</p>
              <p className="mt-3">If a significant change affects the project, we will discuss it with you and agree the appropriate next steps.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">11. Software Delivery</h2>
              <p>Software is developed according to the requirements and scope agreed for the project.</p>
              <p className="mt-3">Unless otherwise agreed, completion of a project does not include ongoing maintenance, hosting, support or future development.</p>
              <p className="mt-3">These services can be agreed separately where required.</p>
              <p className="mt-3">We cannot guarantee that software will remain compatible with every future browser, operating system, third party service or technology.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">12. Artificial Intelligence Services</h2>
              <p>Where AI technology is part of a project, the specific tools and services used will depend on the requirements agreed for that project.</p>
              <p className="mt-3">AI systems can produce inaccurate or unexpected results. Where appropriate, AI generated results should be reviewed before being relied upon for important decisions or actions.</p>
              <p className="mt-3">The specific AI technologies used in a project will be discussed as part of the project requirements.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">13. Confidentiality</h2>
              <p>Information shared with us during a project may include confidential business or technical information.</p>
              <p className="mt-3">We will take reasonable steps to keep confidential information secure and will use it only for purposes connected with the agreed work.</p>
              <p className="mt-3">If a project requires additional confidentiality arrangements, these can be agreed separately.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">14. Website Content</h2>
              <p>The information on this website is provided to explain Olethryx AI Systems, our work and the services we offer.</p>
              <p className="mt-3">Projects shown on the website may change as they develop, and information about them may be updated from time to time.</p>
              <p className="mt-3">Nothing on this website guarantees that a particular service, feature or project will be available.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">15. Liability</h2>
              <p>Nothing in these Terms and Conditions excludes or limits liability where doing so would be unlawful.</p>
              <p className="mt-3">Subject to applicable law, we are not responsible for losses caused by circumstances outside our reasonable control or by the failure of third party services.</p>
              <p className="mt-3">Any specific arrangements relating to liability for a particular project may be included in the agreement for that project.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">16. Circumstances Outside Our Control</h2>
              <p>We are not responsible for delays or failures caused by circumstances that are genuinely outside our reasonable control.</p>
              <p className="mt-3">This may include major infrastructure failures, third party service outages, changes to external platforms, natural events or government actions.</p>
              <p className="mt-3">Where something outside our control significantly affects a project, we will communicate with you and work towards a reasonable solution.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">17. Complaints</h2>
              <p>If you have a concern about our services or a project, please contact us as soon as possible so that we have an opportunity to resolve it.</p>
              <p className="mt-3">
                You can contact us at:{" "}
                <a href="mailto:panagiotisgiouvanas@gmail.com" className="text-blue hover:underline">panagiotisgiouvanas@gmail.com</a>
              </p>
              <p className="mt-3">We will make reasonable efforts to understand and resolve complaints fairly.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">18. Legal Rights</h2>
              <p>These Terms and Conditions do not affect any legal or consumer rights that cannot be excluded or restricted by law.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">19. Governing Law</h2>
              <p>These Terms and Conditions are governed by the laws of Ireland, subject to any mandatory legal rights that apply.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">20. Changes to These Terms</h2>
              <p>We may update these Terms and Conditions from time to time to reflect changes to our website, services or legal requirements.</p>
              <p className="mt-3">The latest version will always be published on this website with the date of the most recent update.</p>
            </section>

            <section>
              <h2 className="font-display text-lg text-bone mb-3">21. Contact</h2>
              <p>If you have any questions about these Terms and Conditions or our services, please contact us.</p>
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