// components/LayoutInterior.js
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";
import HeroContent from "./HeroContent";

export default function LayoutInterior({ children, pageTitle }) {
  return (
    <div>
      <header>
        <div className="hero-container">
          <HeaderNav />
          <HeroContent title={pageTitle} />
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-4 py-8 max-w-4xl mx-auto">
        <ContentWrapper>{children}</ContentWrapper>
      </main>
      <Footer />

      <style jsx>{`
        .hero-container {
          height: 300px; /* Adjust height as necessary */
          background-image: url("/images/office_white.png");
          background-size: cover;
          background-position: center;
          display: flex; /* Flexbox for centering */
          justify-content: center; /* Horizontal centering */
          align-items: center; /* Vertical centering */
          position: relative;
          width: 100%;
        }
        .hero-image {
          background-image: url("/images/office_white.png");
          background-size: cover;
          background-position: center;
          display: flex; /* Flexbox for centering */
          justify-content: center; /* Horizontal centering */
          align-items: center; /* Vertical centering */
          position: relative;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
