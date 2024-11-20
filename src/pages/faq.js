import Image from "next/image";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";
// import faqData from "./components/data/faq.json";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Privacy and Confidentiality in ADA Compliance Services"
        description="Find answers to common questions about our ADA compliance services. Learn how we protect your privacy, ensure confidentiality, and provide secure solutions."
        keywords="FAQ, ADA compliance, privacy protection, confidentiality, data security, GDPR, CCPA, secure services, anonymized case studies"
      />
      <LayoutInterior pageTitle={"Frequently Asked Questions"}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-3xl font-bold">
            We understand that you may have questions about our services,
            processes, and policies
          </h2>
          <p>
            To provide clarity and address common concerns, we have compiled a
            list of frequently asked questions. If you don&apos;t find the
            answer you&apos;re looking for, feel free to reach out to us
            directly through our <Link href="/contact-us">Contact Us</Link>.
            We&apos;re here to help!
          </p>
        </main>
      </LayoutInterior>
    </>
  );
}
