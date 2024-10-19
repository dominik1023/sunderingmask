import Image from "next/image";
import LayoutHome from "./components/LayoutHome";
import localFont from "next/font/local";
import InfoCard from "./components/InfoCard";
import InfoCardSmall from "./components/InfoCardSmall";
import HorizontalCTA from "./components/HorizontalCTA";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <SEO
        title="Join Our Community | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutHome>
        <main className="flex flex-col items-center sm:items-start">
          <div className="container max-w-screen-xl mx-auto px-4 hero-content text-center">
            <h1 className="text-4xl font-bold text-center text-gray-900 mt-8">
              Your Trusted Partner in Accessibility Compliance
            </h1>
            <div className="text-left">
              <h2>scan and remediate with us! Why trust us? Read below!</h2>
              <div
                className={`infocard-wrapper ${
                  isMobile ? "flex-col" : "flex-row"
                }`}
              >
                <div className="infocard-wrapper">
                  <InfoCardSmall
                    imageSrc="/images/find-glass-magnifier-search-seo-svgrepo-com.svg"
                    headline="Scan"
                    paragraph="Comprehensive, non-intrusive website scan to identify ADA compliance issues."
                    ctaText="Learn More"
                    ctaLink="/scan"
                    showArrow={true}
                    // svgArrow={<RightArrow />}
                  />
                  <InfoCardSmall
                    imageSrc="/images/delete-remove-uncheck-svgrepo-com.svg"
                    headline="Report"
                    paragraph="Clear, actionable reports highlighting compliance issues and prioritized solutions."
                    ctaText="See Sample Report"
                    ctaLink="/report"
                    showArrow={true}
                    // svgArrow={<RightArrow />}
                  />
                  <InfoCardSmall
                    imageSrc="/images/check-mark-button-svgrepo-com.svg"
                    headline="Remediate"
                    paragraph="Personalized remediation to meet WCAG 2.1 standards, ensuring lasting compliance."
                    ctaText="Get Started"
                    ctaLink="/remediate"
                  />
                </div>
              </div>
              <p>
                <strong>You don't have to stress over ADA compliance. </strong>
                With our personalized solutions, you’ll quickly meet WCAG 2.1
                standards while ensuring your website is user-friendly for
                everyone. Let us handle the details so you can focus on your
                business, with full peace of mind.
              </p>
              <h2>
                Why trust us with your accessibility compliance? It's simple:
              </h2>
              <ul className="list-disc">
                <li>
                  <strong>Real world, practical experience</strong> - we have
                  catered to the accessibility needs of many companies, of all
                  sizes and industries. See our{" "}
                  <a href="/case-studies">Case Studies</a> for more information.
                </li>
                <li>
                  <strong>Experience across multiple systems</strong> -
                  SalesForce, HubSpot, React.js, Wordpress, Java-based systems,
                  and quite a few more.
                </li>
                <li>
                  <strong>We have over 20 years of experience</strong> - We have
                  been providing accessibility compliance services since ADA
                  Compliance was in its infancy, starting with simple 508
                  compliance, and now WCAG 2.1.
                </li>
              </ul>
              <h2>
                What we do for you: Audit and Reporting, Remediation, (Optional)
                Monitoring, (Optional) Training
              </h2>
            </div>

            <br />
            <br />
            <h2>The benefits of having an accessible website are clear:</h2>
            {/* Updated InfoCard layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <InfoCard
                imgSrc="/images/usability.png"
                headline="Enhance Your Website’s Usability"
                paragraph="Give all users, including those with disabilities, a seamless browsing experience. By improving accessibility, you’ll make your site easier to navigate, creating a better experience that keeps visitors engaged and loyal. The result? More satisfied users and higher conversion rates."
                cta={{ href: "/services", text: "Learn More" }}
              />
              <InfoCard
                imgSrc="/images/law.png"
                headline="Stay Safe from Lawsuits"
                paragraph="Protect your business by avoiding costly lawsuits with our ADA compliance services. We ensure your website meets WCAG 2.1 guidelines, helping you avoid legal risks and costly fines. You can focus on growing your business, knowing that your compliance is covered."
                cta={{ href: "/legal-compliance", text: "Ensure Compliance" }}
              />
              <InfoCard
                imgSrc="/images/edge.png"
                headline="Gain a Competitive Edge"
                paragraph="Set yourself apart from competitors by making your site accessible to everyone. A compliant website not only increases your reach but also positions you as an inclusive brand. Let accessibility be your secret to winning more customers and standing out in your industry."
                cta={{ href: "/competition", text: "Get Started" }}
              />
            </div>
            <p>
              user experience, legal risk avoidance, stand out from your
              competition
            </p>
            <p>remediation, monitoring, training</p>
            <p>solutions - web components</p>
          </div>
          <HorizontalCTA
            headline="Before You Find Your Solution With Us..."
            paragraph="...see what we offer before you decide."
            ctaText="Find Out More"
            ctaLink="/services"
            reverseColors={false}
          />
        </main>
      </LayoutHome>
      <style jsx>{`
        .infocard-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 20px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .infocard-wrapper {
            grid-template-columns: 1fr; /* Stack vertically on mobile */
          }
        }
      `}</style>
    </>
  );
}
