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
            title="Sourdough Bread, from the Homestead"
            paragraph="Three ingredients - organic flour, clean water, and the best salt on Earth"
          />
        </div>
      </header>
      <section>
        <ContentWrapperHome>{children}</ContentWrapperHome>
      </section>
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
