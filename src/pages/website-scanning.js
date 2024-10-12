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
        title="Join Our Community | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior
        pageTitle={"Comprehensive Accessibility Scanning and Reporting"}
      >
        <div
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] 

      min-h-screen font-[family-name:var(--font-geist-sans)]`}
        >
          <main
            className="flex flex-col items-center sm:items-start"
            style={{
              border: "1px dashed red",
            }}
          >
            <div className="container max-w-screen-lg mx-auto px-4 hero-content">
              <h2 className="text-3xl font-bold">
                Your company should be fully ADA compliant
              </h2>
              <p>
                <strong>The first step is an accessibility audit. </strong>Get a
                detailed view of your website’s accessibility performance with
                in-depth scans and actionable reports, designed to meet WCAG and
                ADA standards.
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
                recommendations on how to fix them. You’ll get a full breakdown
                of areas like:
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
                Whether you're a developer, business owner, or marketer, our
                reports are designed to be easy to follow. We offer both
                technical and non-technical reports, so you can share them with
                your team, stakeholders, or compliance experts. Our goal is to
                provide immediate, actionable insights that save you time and
                help you meet legal requirements quickly and efficiently.
              </p>
              <h2>
                Why Accessibility Matters Subheader: "Protect Your Business and
                Expand Your Reach
              </h2>
              <p></p>
              Not only does website accessibility protect you from costly legal
              risks, but it also opens your site to a broader audience. By
              improving accessibility, you're ensuring that everyone—including
              those with disabilities—can engage with your brand. This creates a
              more inclusive, user-friendly experience that increases loyalty,
              trust, and potential conversions. The benefits are clear:
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
              <h2>How It Works - From Scan to Solution - without effort</h2>
              Our process is simple and effective, delivering results quickly so
              you can focus on running your business. Initial Scan: We perform a
              deep scan of your entire website, flagging any accessibility
              issues based on WCAG 2.1 standards. Detailed Report: You receive a
              comprehensive report with all findings, clearly categorized by
              severity and impact. Recommendations: We provide actionable
              recommendations for each issue, guiding your team on exactly what
              to fix. Rescanning and Verification: After implementing changes,
              we’ll rescan your site to ensure full compliance and issue a
              certification of accessibility.
              <h2>Why Choose Us - Proven Results, Confidential Solutions</h2>
              At Accessibility Developers of Houston, we combine cutting-edge
              technology with expert human review to ensure your accessibility
              scans are accurate and actionable. Our clients trust us for our
              confidentiality, reliability, and dedication to providing
              long-term accessibility solutions. With years of experience
              helping businesses just like yours, we’re your trusted partner in
              building a compliant, user-friendly web presence.
              <br />
              <br />
              CTA Section: Headline: "Ready to Scan Your Site for
              Accessibility?" Content: Don’t wait for a problem to arise—ensure
              your website is accessible to everyone and compliant with legal
              requirements. Start with a comprehensive accessibility scan today.
              CTA Button: "Request Your Free Scan Now"
            </div>
          </main>
        </div>

        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/faq.ja
            </code>
            .
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}
      </LayoutInterior>
    </>
  );
}
