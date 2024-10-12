// components/LayoutInterior.js
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import ContentWrapper from "./ContentWrapper";

export default function LayoutInterior({ children, pageTitle }) {
  return (
    <div>
      <header>
        <div className="hero-container">
          <HeaderNav />
          <div>
            <h1>{pageTitle}</h1>
          </div>
        </div>
      </header>

      <main>
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
