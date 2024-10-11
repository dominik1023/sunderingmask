// components/LayoutHome.js
import Image from "next/image";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import ContentWrapper from "./ContentWrapper";
export default function LayoutHome({ children }) {
  return (
    <div>
      <header>
        <div className="hero-container">
          <HeaderNav />
          <div className="hero-content bg-white/30 backdrop-blur-lg p-4 rounded-lg inline-block">
            <h1
              className="text-black text-4xl font-bold text-center"
              style={{ marginTop: "1rem !important", marginBottom: "1rem" }}
            >
              Compliance. Confidence. Anonymity.
            </h1>
            <p className="text-black text-xl text-center">
              Rest assured in a well-executed accessibility compliance program
              <br />
            </p>
          </div>
        </div>
      </header>
      <main>
        <ContentWrapper>{children}</ContentWrapper>
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
        .hero-content {
          color: #000;
          font-size: 3rem;
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          padding: 16px 80px;
        }
      `}</style>
    </div>
  );
}
