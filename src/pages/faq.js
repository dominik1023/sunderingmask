import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <SEO
        title="Join Our Community | Example.com"
        description="Become part of an amazing group of people at Example.com. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior pageTitle={"Frequently Asked Questions"}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ul className="faq">
            <li>
              <h3>Why don’t you collect testimonials?</h3>
              <p>
                We prioritize our clients' privacy above all else. To ensure
                complete confidentiality, we do not collect or share
                testimonials. Instead, we provide anonymized case studies where
                key details are changed to protect client identities.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>How do you ensure client confidentiality?</h3>
              <p>
                We adhere to strict confidentiality protocols, which include
                anonymizing all client information in case studies and not
                disclosing any details that could identify our clients. All data
                is handled with the utmost care to maintain privacy and trust.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>What information is changed in your case studies?</h3>
              <p>
                In our case studies, we modify details such as the company name,
                specific dates, locations, and any other identifiable
                information. The focus remains on the results and processes
                used, without revealing who the client is.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>Can you share the names of your past clients?</h3>
              <p>
                No, we do not disclose the names of our past or current clients
                to anyone. We believe in protecting our clients’ privacy, which
                is why we do not share their identities without explicit
                permission.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>
                How do I know your services are effective if you don’t use
                testimonials?
              </h3>
              <p>
                Our anonymized case studies provide detailed examples of our
                work and the results achieved for our clients, without
                compromising their privacy. These case studies showcase our
                expertise, methodologies, and successful outcomes across various
                industries.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>What guarantees do you provide for privacy protection?</h3>
              <p>
                We provide a strict guarantee that any information shared with
                us will remain confidential. We have robust data protection
                measures in place to ensure that all client information is
                secure and never disclosed to third parties.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>Will my project be included in a case study?</h3>
              <p>
                Only with your explicit consent. If you agree to be featured in
                a case study, all identifying details will be changed to protect
                your privacy. If you prefer complete confidentiality, your
                project will never be referenced publicly.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>How do you handle sensitive data?</h3>
              <p>
                We follow industry-standard data protection protocols, including
                encryption, secure storage, and limited access, to ensure that
                all sensitive data is handled safely and securely.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>
                What steps do you take to ensure compliance with privacy laws?
              </h3>
              <p>
                We stay up-to-date with all relevant privacy laws and
                regulations, such as GDPR and CCPA, and take proactive steps to
                ensure full compliance. This includes obtaining consent for any
                data use, providing transparent privacy policies, and respecting
                client rights regarding their data.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>Can I speak directly with a past client?</h3>
              <p>
                No, we do not connect prospective clients with past clients, as
                this would breach our commitment to confidentiality. We trust
                our anonymized case studies will provide you with the
                information needed to make an informed decision about our
                services.
              </p>
            </li>
          </ul>
          <ul className="faq">
            <li>
              <h3>How do I get started if I’m interested in your services?</h3>
              <p>
                Simply reach out through our “Contact Us” page, and let us know
                how we can help. We will schedule a free, no-obligation
                consultation to discuss your needs and how we can achieve your
                goals while maintaining the highest level of privacy and
                confidentiality.
              </p>
            </li>
          </ul>
        </main>
      </LayoutInterior>
    </>
  );
}
