import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
import HorizontalCTA from "./components/HorizontalCTA";

import SEO from "./components/SEO";

export default function Services() {
  return (
    <>
      <SEO
        title="Accessibility Services | ADA Compliance Audits by Accessibility Developers of Houston"
        description="Ensure ADA compliance with fast, accurate accessibility audits. Our expert reports highlight key issues and provide actionable insights to enhance accessibility and user experience."
        keywords="accessibility services, ADA compliance, WCAG audits, accessibility audit, website accessibility, accessibility reports, SEO advantage, legal compliance, user-friendly website"
      />
      <LayoutInterior pageTitle={"Accessibility Services"}>
        <div
          className={` grid grid-rows-[20px_1fr_20px] 

      min-h-screen font-[family-name:var(--font-geist-sans)]`}
        >
          <main className="flex flex-col items-center sm:items-start">
            <div className="container max-w-screen-lg mx-auto px-4 hero-content">
              <h2 className="text-3xl font-bold">
                Why Choose Us? - Proven Results, Confidential Solutions
              </h2>
              <p>
                At Accessibility Developers of Houston, we combine cutting-edge
                technology with expert human review to ensure your accessibility
                scans are accurate and actionable. Our clients trust us for our
                confidentiality, reliability, and dedication to providing
                long-term accessibility solutions. With years of experience
                helping businesses just like yours, we&apos;re your trusted
                partner in building a compliant, user-friendly web presence.
              </p>
              <p>
                <strong>The first step is an accessibility audit. </strong>Get a
                detailed view of your website&apos;s accessibility performance
                with in-depth scans and actionable reports, designed to meet
                WCAG and ADA standards.
              </p>
              <h2>How It Works - From Scan to Solution</h2>
              <h3>As easy as pushing a button</h3>
              <p>
                Our process is simple and effective, delivering results quickly
                so you can focus on running your business. Initial Scan: We
                perform a deep scan of your entire website, flagging any
                accessibility issues based on WCAG 2.1 standards. Detailed
                Report: You receive a comprehensive report with all findings,
                clearly categorized by severity and impact. Recommendations: We
                provide actionable recommendations for each issue, guiding your
                team on exactly what to fix. Rescanning and Verification: After
                implementing changes, we&apos;ll rescan your site to ensure full
                compliance and issue a certification of accessibility.
              </p>
              <h3>
                What We Offer - Fast, Accurate, and Reliable Accessibility
                Audits
              </h3>
              <p>
                Our state-of-the-art scanning technology quickly identifies
                accessibility barriers on your website, helping you stay
                compliant with ADA and WCAG guidelines. Each audit generates a
                detailed, easy-to-understand report highlighting any issues that
                may impact user experience and accessibility, along with clear
                recommendations on how to fix them. You&apos;ll get a full
                breakdown of areas like:
              </p>
              <ul>
                <li>Color contrast and accessibility</li>
                <li>Screen reader compatibility</li>
                <li>Keyboard navigation</li>
                <li>Form and media accessibility</li>
              </ul>
              <h2>Expertly Crafted Reports</h2>
              <p>
                Our reports are designed to be both comprehensive and
                user-friendly. We take the guesswork out of compliance, ensuring
                your website is fully accessible to all users.
              </p>
              <h2>
                Tailored Reporting for Your Business - Clear, Actionable
                Insights
              </h2>
              <p>
                Whether you&apos;re a developer, business owner, or marketer,
                our reports are designed to be easy to follow. We offer both
                technical and non-technical reports, so you can share them with
                your team, stakeholders, or compliance experts. Our goal is to
                provide immediate, actionable insights that save you time and
                help you meet legal requirements quickly and efficiently.
              </p>
              <h2>
                Why Accessibility Matters - Protect Your Business and Expand
                Your Reach
              </h2>
              <p>
                Not only does website accessibility protect you from costly
                legal risks, but it also opens your site to a broader audience.
                By improving accessibility, you&apos;re ensuring that
                everyone—including those with disabilities—can engage with your
                brand. This creates a more inclusive, user-friendly experience
                that increases loyalty, trust, and potential conversions. The
                benefits are clear:
              </p>

              <ul>
                <li>
                  Better User Experience: Accessible websites are easier to
                  navigate for everyone, not just those with disabilities.
                </li>
                <li>
                  SEO Advantage: Accessibility improvements often enhance your
                  SEO ranking, giving your website a competitive edge.
                </li>
                <li>
                  Legal Compliance: Avoid lawsuits and fines with a fully
                  compliant site.
                </li>
                <li>
                  Increased Market Reach: Serve a broader, more diverse audience
                  by removing barriers to entry.
                </li>
              </ul>
              <br />
              <br />
              {/* <HorizontalCTA
                headline="Find Your Solution With Us..."
                paragraph="...see what we offer"
                ctaText="Get Started"
                ctaLink="/accessibility-services"
                reverseColors={false}
              /> */}
              <br />
              <br />
            </div>
          </main>
        </div>
      </LayoutInterior>
    </>
  );
}
