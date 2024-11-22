import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
import SEO from "./components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="ADA Compliance for Houston Businesses | Accessibility Experts"
        description=""
        keywords=""
      />
      <LayoutInterior pageTitle={"Privacy Policy"}>
        <main className="flex flex-col  row-start-2 items-center sm:items-start">
          <h2 className="text-3xl font-bold">How we use your data:</h2>
          <p>
            At The White White House Bakery of Baytown, LLC, we value your privacy
            and are committed to protecting your personal data. This policy
            outlines how we handle your information, ensuring transparency and
            security.
          </p>
          <p className="font-bold">1. Information We Collect</p>
          <p>
            We do not collect customer data for any purpose beyond direct
            communication related to the project at hand.
          </p>
          <p className="font-bold">2. Use of Your Contact Information</p>
          <p>Your contact information is only used for:</p>
          <ul>
            <li>Communicating with you during the project.</li>
            <li>
              Inquiring about the status of your website post-project, if
              necessary.
            </li>
          </ul>
          <p>
            We do not use your information for marketing purposes or any other
            unrelated activity.
          </p>
          <p className="font-bold">3. Data Retention and Deletion</p>
          <p>
            You have the right to request the deletion of any personal data we
            hold about you after the completion of the project. Upon receiving
            such a request, we will securely delete all relevant data.
          </p>
          <p className="font-bold">4. Data Sharing</p>
          <p>
            We do not share, sell, or distribute your personal data to third
            parties under any circumstances, unless:
          </p>
          <ul>
            <li>We are legally required to do so by court order.</li>
          </ul>
          <p className="font-bold">5. Your Rights</p>
          <p>You retain full control over your data and have the right to:</p>
          <ul>
            <li>Request access to the data we have about you.</li>
            <li>Request corrections or deletions of your data.</li>
          </ul>
          <p className="font-bold">6. Contact Us</p>
          <p>
            If you have any concerns or questions regarding this Privacy Policy
            or your data, please contact us at [Your Contact Email].
          </p>
        </main>
      </LayoutInterior>
    </>
  );
}
