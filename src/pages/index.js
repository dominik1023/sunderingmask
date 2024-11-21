import Image from "next/image";
import Link from "next/link";
import LayoutHome from "./components/LayoutHome";
import localFont from "next/font/local";
import InfoCard from "./components/InfoCard";
import InfoCardSmall from "./components/InfoCardSmall";
import HorizontalCTA from "./components/HorizontalCTA";
import { useMediaQuery } from "react-responsive";

import SEO from "./components/SEO";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <SEO
        title="ADA Compliance for Houston Businesses | Accessibility Experts"
        description="Get ADA compliant with our Houston website accessibility solutions. We provide scanning, reporting, and WCAG 2.1 remediation to avoid costly lawsuits."
        keywords="Houston ADA compliance, website accessibility, WCAG 2.1 standards, ADA website audit Houston, accessibility solutions, ADA remediation, avoid lawsuits Houston, ADA compliance services"
      />
      <LayoutHome>
        <main className="flex flex-col items-center sm:items-start">
          <div className="container max-w-screen-xl mx-auto px-4 hero-content text-center">
            <h1 className="text-4xl font-bold text-center text-gray-900 mt-8">
              Your Trusted Partner in Accessibility Compliance
            </h1>
            <div className="text-left">
              <h2>You don&apos;t have to stress over ADA compliance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                <InfoCard
                  imgSrc="/images/usability.png"
                  headline="Organic Flour"
                  paragraph="Give all users, including those with disabilities, a seamless browsing experience. By improving accessibility, you'll make your site easier to navigate, creating a better experience that keeps visitors engaged and loyal. The result? More satisfied users and higher conversion rates."
                  cta={{ href: "/services", text: "Learn More" }}
                />
                <InfoCard
                  imgSrc="/images/law.png"
                  headline="Celtic Salt"
                  paragraph="Protect your business by avoiding costly lawsuits with our ADA compliance services. We ensure your website meets WCAG 2.1 guidelines, helping you avoid legal risks and costly fines. You can focus on growing your business, knowing that your compliance is covered."
                  cta={{ href: "/legal-compliance", text: "Ensure Compliance" }}
                />
                <InfoCard
                  imgSrc="/images/edge.png"
                  headline="Filtered Water"
                  paragraph="Set yourself apart from competitors by making your site accessible to everyone. A compliant website not only increases your reach but also positions you as an inclusive brand. Let accessibility be your secret to winning more customers and standing out in your industry."
                  cta={{ href: "/contact-us", text: "Get Started" }}
                />
              </div>
              <p>
                With our <strong>personalized solutions</strong>, you&apos;ll
                quickly meet <strong>WCAG 2.1</strong>
                standards while ensuring your website is user-friendly for
                everyone. Let us handle the details so you can focus on your
                business, with full peace of mind.
              </p>
              <h3>
                Why trust us with your accessibility compliance? It&apos;s
                simple:
              </h3>
              <ul className="list-disc">
                <li>
                  <strong>Real world, practical experience</strong> - we have
                  catered to the accessibility needs of many companies, of all
                  sizes and industries. See our{" "}
                  <Link href="/case-studies">Case Studies</Link> for more
                  information.
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

            <br />
            <br />

            <h3>Find your solution with us</h3>

            <p>
              Ready to make your website accessible, compliant, and
              user-friendly? Partner with us to ensure your site meets all ADA
              and WCAG 2.1 standards, protecting your business and enhancing the
              user experience for everyone. With our expertise, you can focus on
              what matters most—growing your business—while we take care of the
              compliance details. Let&apos;s create a more inclusive digital
              world, one accessible website at a time.
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
          {/* <HorizontalCTA
            headline="Find Your Solution With Us..."
            paragraph="...see what we offer"
            ctaText="Get Started"
            ctaLink="/services"
            reverseColors={false}
          /> */}
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
