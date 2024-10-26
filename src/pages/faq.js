import Image from "next/image";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";
import faqData from "./components/data/faq.json";
import Link from "next/link";

export default function FAQ() {
  const parseLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; // Regex to match [text](url)
    const parts = [];
    let lastIndex = 0;
    let match;

    // Find all links and split the text
    while ((match = linkRegex.exec(text)) !== null) {
      // Push the text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      // Push the link as a React component without <a> tag
      parts.push(
        <Link key={match.index} href={match[2]}>
          {match[1]}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    // Push remaining text after the last link
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };
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
            list of frequently asked questions. If you don't find the answer
            you're looking for, feel free to reach out to us directly through
            our <a href="/contact-us">Contact Us</a>. We're here to help!
          </p>
          <ul className="faq-list">
            {faqData.faqa.map((faq, index) => (
              <li key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{parseLinks(faq.answer)}</p>
              </li>
            ))}
          </ul>
        </main>
      </LayoutInterior>
    </>
  );
}
