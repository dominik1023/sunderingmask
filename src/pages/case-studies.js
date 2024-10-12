import Image from "next/image";
import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import SEO from "./components/SEO";
import CaseStudyList from "./components/CaseStudyList";
import caseStudyData from "./components/caseStudies.json";
export default function Home() {
  return (
    <>
      <SEO
        title="Join Our Community | Accessibility Developers of Houston"
        description="Become part of an amazing group of people at Accessibility Developers of Houston. Join now and enjoy exclusive content and offers."
        keywords="community, join, example, exclusive content"
      />
      <LayoutInterior pageTitle={"Case Studies"}>
        <h2 className="text-3xl font-bold">
          Accessibility Remediation Services
        </h2>
        <CaseStudyList caseStudies={caseStudyData.caseStudies} />
      </LayoutInterior>
    </>
  );
}
