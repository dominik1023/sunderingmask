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
            Sourdough Baking - The True Taste of Tradition
            </h1>
            <p>Crafted with care, our organic sourdough bread brings together time-honored methods and the finest natural ingredients. Taste the difference that Celtic salt, filtered water, and organic flour make in every bite.
            </p>

            <div className="text-left">
              <h2>Why Choose Our Organic Sourdough Bread</h2>
              <h3>Bread Made with Integrity</h3>
              <ul>
                <li><strong>Organic Ingredients:</strong> Free from harmful additives and chemicals.</li>
                <li><strong>Timeless Methods:</strong> Slow fermentation for superior flavor and nutrition.</li>
                <li><strong>Sustainably Crafted:</strong> Supporting the planet with every loaf.</li>
              </ul>
              
              
              
              

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                <InfoCard
                  imgSrc="/images/flour_card.png"
                  headline="Organic Flour"
                  paragraph="The Soul of Every Loaf - 
                  We source our organic flour from trusted farms that value sustainability and quality. By avoiding pesticides and chemical treatments, organic flour retains its natural nutrients and flavor, making it the perfect foundation for our sourdough. Each bite is a celebration of purity and care."
                  cta={{ href: "/services", text: "Learn More" }}
                />
                <InfoCard
                  imgSrc="/images/salt.png"
                  headline="Celtic Salt"
                  paragraph="Where Flavor Meets Nutrition - Celtic salt is unrefined, mineral-rich, and sustainably harvested from pristine coastal waters. Unlike processed salts, it retains over 80 essential minerals that enhance the flavor and nutritional profile of our bread. Every sprinkle brings a natural complexity to the taste you won’t find in mass-produced bread."
                  cta={{ href: "/legal-compliance", text: "Ensure Compliance" }}
                />
                <InfoCard
                  imgSrc="/images/water_card.png"
                  headline="Filtered Water"
                  paragraph="Purity in Every Drop - 
                  Water is the lifeblood of sourdough, and we use only the purest filtered water in our dough. Free from impurities and chemicals, our water ensures that the fermentation process is clean and natural, producing a better-tasting and healthier loaf."
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
