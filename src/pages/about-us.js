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
        <h2 className="text-3xl font-bold">x</h2>
        <p>x</p>
      </LayoutInterior>
    </>
  );
}
