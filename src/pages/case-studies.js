import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";
import CaseStudyList from "./components/CaseStudyList";
import caseStudyData from "./components/data/caseStudies.json";
export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | ADA Compliance and Accessibility Remediation Services"
        description="Explore our case studies showcasing ADA compliance and accessibility remediation services for various industries, including cryptocurrency, legal, education, and more."
        keywords="ADA compliance case studies, accessibility remediation, WCAG compliance, cryptocurrency accessibility, furniture retailer compliance, ReactJS accessibility, WordPress accessibility"
      />
      <LayoutInterior pageTitle={"Case Studies"}>
        <h2 className="text-3xl font-bold">
          Accessibility Remediation Services
        </h2>
        {/* <CaseStudyList caseStudies={caseStudyData.caseStudies} /> */}
      </LayoutInterior>
    </>
  );
}
