import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import Divider from "./components/Divider";
import SEO from "./components/SEO";

export default function AccessibilityStatement() {
  return (
    <>
      <SEO
        title="Accessibility Statement | Accessibility Developers of Houston, LLC"
        description="Accessibility Developers of Houston is committed to WCAG 2.1 Level AA compliance. We welcome feedback on any accessibility barriers you encounter on our website."
        keywords="accessibility statement, WCAG compliance, WCAG 2.1 AA, ADA compliance, Accessibility Developers of Houston, accessibility feedback, web accessibility, conformant website"
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
