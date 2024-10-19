import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
import SEO from "./components/SEO";

export default function AccessibilityStatement() {
  return (
    <>
      <SEO
        title="Join Our Community | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior pageTitle={"Accessibility Statement"}>
        <main className="flex flex-col row-start-2 items-center sm:items-start">
          <h2>
            This is an accessibility statement from Accessibility Developers of
            Houston, LLC.
          </h2>

          <h3>Conformance status </h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements
            for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A,
            Level AA, and Level AAA. Accessibility Developers of Houston is
            partially conformant with WCAG 2.1 level AA. Partially conformant
            means that some parts of the content do not fully conform to the
            accessibility standard.
          </p>
          <h3>Feedback</h3>
          <p>
            We welcome your feedback on the accessibility of Accessibility
            Developers of Houston. Please let us know if you encounter
            accessibility barriers on Accessibility Developers of Houston:
          </p>
          <ul>
            <li>Phone: 888.888.8888</li>
            <li>E-mail: accessibility@example.org</li>
          </ul>
          <p>We try to respond to feedback within 2 business days.</p>
        </main>
      </LayoutInterior>
    </>
  );
}
