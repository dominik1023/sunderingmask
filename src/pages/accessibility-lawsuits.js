import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
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

export default function AccessibilityLawsuits() {
  return (
    <>
      <SEO
        title="ADA Accessibility Lawsuits | Real-World Examples and Legal Risks"
        description="Learn how businesses like Domino's and Walmart faced costly ADA accessibility lawsuits. Avoid legal risks by ensuring your website is compliant with WCAG standards."
        keywords="ADA lawsuits, website accessibility lawsuits, Domino's ADA case, WCAG compliance, digital accessibility, legal risks, ADA compliance, accessible websites, business lawsuits"
      />
      <LayoutInterior pageTitle={"Accessibility Lawsuits"}>
        <main className="flex flex-col  row-start-2 items-center sm:items-start">
          <h2 className="text-3xl font-bold">
            Don&apos;t let your business become the next case study
          </h2>
          <p>
            Imagine your business facing a lawsuit—not because of poor service,
            faulty products, or any operational failure—but because your website
            wasn&apos;t accessible to everyone. It happens more often than you
            think, and the consequences are real. Lawsuits related to ADA
            (Americans with Disabilities Act) violations are on the rise,
            costing companies millions of dollars, tarnishing reputations, and
            eroding customer trust.
          </p>
          <p>
            These legal cases reveal the true cost of neglecting digital
            accessibility. But what if you could prevent it? In this section, we
            explore real-world examples of companies that faced hefty fines and
            settlements due to inaccessible digital experiences. You&apos;ll
            discover how small changes in your website can not only help you
            avoid these costly mistakes but also show your customers that you
            genuinely care about their experience.
          </p>
          <article tabIndex="0">
            <h2>
              Domino&apos;s Pizza Lawsuit: A Landmark Case in Website
              Accessibility
            </h2>
            <p>
              Domino&apos;s Pizza faced a high-profile lawsuit in 2019 when a
              blind customer, Guillermo Robles, sued the company for not
              providing an accessible website and mobile app. The case claimed
              that the platform was not compatible with screen reader
              technology, making it impossible to place an order. The U.S.
              Supreme Court allowed the lawsuit to proceed, reinforcing the
              responsibility of businesses to ensure digital accessibility.
              While Domino&apos;s argued that the ADA did not apply to digital
              platforms, the courts disagreed.
              <br />
              <br />
              <strong>Outcome: </strong>Domino&apos;s eventually settled the
              case, and the outcome further solidified that websites must comply
              with ADA standards.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>Ashley Furniture Sued for Inaccessible Website Features</h2>
            <p>
              In December 2020, Ashley Furniture was sued in Florida federal
              court by a visually impaired customer, Aishia Petersen, due to its
              website&apos;s lack of accessibility features, including missing
              alt text and confusing navigation.
              <br />
              <br />
              <strong>Outcome: </strong>
              The case was settled, and Ashley Furniture agreed to improve the
              accessibility of its website by updating its design to follow WCAG
              standards. This case emphasized the legal risks for companies that
              do not ensure accessible websites.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Walmart&apos;s Accessibility Challenges: A Wake-Up Call for Retail
              Giants
            </h2>
            <p>
              Walmart faced multiple lawsuits related to the accessibility of
              its website for users with disabilities. In these cases,
              plaintiffs argued that the website did not accommodate assistive
              technologies like screen readers.
              <br />
              <br />
              <strong>Outcome: </strong>
              Walmart agreed to settle the cases out of court, committing to
              improving the accessibility of its online shopping platform by
              implementing WCAG guidelines. These settlements reinforced the
              importance of ADA compliance, especially for major retailers with
              extensive e-commerce operations.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Sweetgreen Lawsuit: The Need for Digital Accessibility in the
              Restaurant Industry
            </h2>
            <p>
              Sweetgreen, a popular salad chain, was sued in 2021 for having an
              inaccessible website that did not work with assistive
              technologies, such as screen readers.
              <br />
              <br />
              <strong>Outcome: </strong>
              The case was settled, and Sweetgreen agreed to improve the
              accessibility of its website by implementing WCAG guidelines. This
              case underscores the need for restaurants to provide accessible
              online ordering systems to avoid legal challenges and ensure
              compliance with ADA standards.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Foot Locker: Digital Accessibility and Class Action Lawsuits
            </h2>
            <p>
              In 2019, Foot Locker faced a class action lawsuit alleging that
              its website was not accessible to visually impaired users.
              Plaintiffs cited issues such as product descriptions being
              incompatible with screen readers.
              <br />
              <br />
              <strong>Outcome: </strong>
              Foot Locker settled the case, agreeing to bring its website into
              compliance with ADA regulations and improve the digital experience
              for all users. This lawsuit serves as a reminder for all
              e-commerce businesses to meet accessibility standards to avoid
              legal risks.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Moots Cycles: The Importance of Web Accessibility for Mid-Sized
              Businesses
            </h2>
            <p>
              Moots Cycles, a mid-sized bicycle manufacturer, was sued for
              non-compliance with web accessibility standards in 2020. The
              lawsuit highlighted the difficulties visually impaired customers
              faced when navigating the website.
              <br />
              <br />
              <strong>Outcome: </strong>
              Moots settled the lawsuit and agreed to make their website
              compliant with WCAG standards. This case underscores that
              mid-sized companies must prioritize digital accessibility to avoid
              similar legal actions.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Bagatelle Bakery Lawsuit: ADA Compliance in Small Businesses
            </h2>
            <p>
              Bagatelle Bakery, a small Kansas bakery, was sued for its
              website&apos;s inaccessibility, which prevented visually impaired
              customers from using screen readers to access the menu or place
              orders online.
              <br />
              <br />
              <strong>Outcome: </strong>
              The case was settled out of court, with the bakery agreeing to
              update its website to meet WCAG standards. This lawsuit highlights
              that small businesses are not exempt from ADA regulations.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>Stargazer Boutique: E-Commerce Accessibility Challenges</h2>
            <p>
              Stargazer Boutique, a small California-based e-commerce site, was
              sued in 2023 due to its failure to meet web accessibility
              standards. The complaint focused on missing alt text and
              improperly labeled forms, which prevented screen reader users from
              navigating the site.
              <br />
              <br />
              <strong>Outcome: </strong>
              The case was settled, and Stargazer Boutique agreed to implement
              accessibility features in line with WCAG standards. This case
              serves as a reminder for e-commerce businesses to prioritize
              accessibility, regardless of size.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>Stargazer Boutique: E-Commerce Accessibility Challenges</h2>
            <p>
              Stargazer Boutique, a small California-based e-commerce site, was
              sued in 2023 due to its failure to meet web accessibility
              standards. The complaint focused on missing alt text and
              improperly labeled forms, which prevented screen reader users from
              navigating the site.
              <br />
              <br />
              <strong>Outcome: </strong>
              The case was settled, and Stargazer Boutique agreed to implement
              accessibility features in line with WCAG standards. This case
              serves as a reminder for e-commerce businesses to prioritize
              accessibility, regardless of size.
            </p>
          </article>
          <Divider />
          <article tabIndex="0">
            <h2>
              Joe&apos;s Pizza: The Consequences of Inaccessible Online Ordering
            </h2>
            <p>
              Joe&apos;s Pizza was sued for failing to provide an accessible
              online ordering system for visually impaired customers. The
              lawsuit alleged that the website was incompatible with screen
              reader technology.
              <br />
              <br />
              <strong>Outcome: </strong>
              Joe&apos;s Pizza resolved the case by updating its website to
              comply with ADA standards, ensuring a more inclusive online
              ordering experience.
            </p>
          </article>
        </main>
      </LayoutInterior>
    </>
  );
}
