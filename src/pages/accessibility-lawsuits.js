import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <SEO
        title="Join Our Community | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior pageTitle={"Accessibility Lawsuits"}>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <article>
            <h2 className="text-3xl font-bold">
              Domino's Pizza Lawsuit: A Landmark Case in Website Accessibility
            </h2>
            <p>
              Domino’s Pizza faced a high-profile lawsuit in 2019 when a blind
              customer, Guillermo Robles, sued the company for not providing an
              accessible website and mobile app. The case claimed that the
              platform was not compatible with screen reader technology, making
              it impossible to place an order. The U.S. Supreme Court allowed
              the lawsuit to proceed, reinforcing the responsibility of
              businesses to ensure digital accessibility. While Domino’s argued
              that the ADA did not apply to digital platforms, the courts
              disagreed.
              <br />
              <br />
              <strong>Outcome: </strong>Domino’s eventually settled the case,
              and the outcome further solidified that websites must comply with
              ADA standards.
            </p>
          </article>
          <Divider />
          <article>
            <h2>Ashley Furniture Sued for Inaccessible Website Features</h2>
            <p>
              In December 2020, Ashley Furniture was sued in Florida federal
              court by a visually impaired customer, Aishia Petersen, due to its
              website’s lack of accessibility features, including missing alt
              text and confusing navigation.
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
          <article>
            <h2>
              Walmart's Accessibility Challenges: A Wake-Up Call for Retail
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
          <article>
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
          <article>
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
          <article>
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
          <article>
            <h2>
              Bagatelle Bakery Lawsuit: ADA Compliance in Small Businesses
            </h2>
            <p>
              Bagatelle Bakery, a small Kansas bakery, was sued for its
              website’s inaccessibility, which prevented visually impaired
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
          <article>
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
          <article>
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
          <article>
            <h2>
              Joe’s Pizza: The Consequences of Inaccessible Online Ordering
            </h2>
            <p>
              Joe’s Pizza was sued for failing to provide an accessible online
              ordering system for visually impaired customers. The lawsuit
              alleged that the website was incompatible with screen reader
              technology.
              <br />
              <br />
              <strong>Outcome: </strong>
              Joe’s Pizza resolved the case by updating its website to comply
              with ADA standards, ensuring a more inclusive online ordering
              experience.
            </p>
          </article>
        </main>
      </LayoutInterior>
    </>
  );
}
