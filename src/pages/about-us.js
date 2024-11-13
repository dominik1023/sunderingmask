import Image from "next/image";
import Link from "next/link";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";

export default function AboutUs() {
  return (
    <>
      <SEO
        title="Why is Accessibility Important? | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior pageTitle={"About Us"}>
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p>
          Welcome to Accessibility Developers of Houston, your trusted partner
          in making the digital world accessible and inclusive. As leaders in
          website accessibility, we help businesses across Houston and beyond
          ensure their online presence complies with ADA and WCAG standards
          while delivering a seamless experience for all users.
        </p>
        <h3>Our Mission</h3>
        <p>
          At Accessibility Developers of Houston, our mission is to bridge the
          gap between technology and inclusivity. We are passionate about
          empowering businesses to connect with a broader audience by
          eliminating barriers and creating websites that are intuitive,
          engaging, and compliant.
        </p>
        <h3>What We Do</h3>
        <p>
          We offer comprehensive accessibility services tailored to your needs:
        </p>
        <ul>
          <li>
            <strong>Accessibility Scanning:</strong> Identify and document
            potential accessibility issues with precision.
          </li>
          <li>
            <strong>Remediation Services:</strong> Fix compliance violations to
            meet WCAG 2.1 and ADA standards.
          </li>
          <li>
            <strong>On-Demand Monitoring:</strong> Get proactive insights and
            updates to maintain your website’s accessibility over time.
          </li>
          <li>
            <strong>Custom Solutions:</strong> From accessible web design to
            tailored user experiences, we craft solutions that engage and
            convert.
          </li>
        </ul>
        <h3>Why Choose Accessibility Developers of Houston?</h3>
        <ul>
          <li>
            <strong>Local Expertise:</strong> Serving businesses in Houston and
            surrounding areas, we understand the unique needs of our community.
          </li>
          <li>
            <strong>Decades of Experience:</strong> With over 20 years in
            neuromarketing and accessibility, we ensure your website engages
            users while meeting legal requirements.
          </li>
          <li>
            <strong>Results That Matter:</strong> Our accessibility solutions
            don’t just comply—they amplify your reach, improve usability, and
            enhance user satisfaction.
          </li>
        </ul>
        <h3>Results That Matter:</h3>
        <p>Results That Matter:</p>
      </LayoutInterior>
    </>
  );
}
