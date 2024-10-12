// components/LayoutHome.js
import Image from "next/image";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import ContentWrapperHome from "./ContentWrapperHome"; //
import HeroContent from "./HeroContent";

export default function LayoutHome({ children }) {
  return (
    <div>
      <header>
        <div className="hero-container">
          <HeaderNav />
          <HeroContent
            title="Compliance. Confidence. Anonymity."
            paragraph="Rest assured in a well-executed accessibility compliance program."
          />
        </div>
      </header>
      <main>
        <ContentWrapperHome>{children}</ContentWrapperHome>
      </main>
      <Footer />

      <style jsx>{`
        .hero-container {
          height: 400px; /* Adjust height as necessary */
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
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
