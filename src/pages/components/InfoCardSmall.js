import { useMediaQuery } from "react-responsive";

export default function InfoCardSmall({
  imageSrc,
  headline,
  paragraph,
  ctaText,
  ctaLink,
  reverseColors = false,
  showArrow = false,
  svgArrow,
}) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <article
        tabIndex="0"
        className={`infocard-container ${
          reverseColors ? "reverse-colors" : ""
        }`}
      >
        <div className="image-container">
          <img src={imageSrc} alt={headline} className="infocard-image" />
        </div>
        <div className="text-content">
          <h2 className="headline">{headline}</h2>
          <p className="paragraph">{paragraph}</p>
          <a href={ctaLink} className="cta-button">
            {ctaText}
          </a>
        </div>
        {showArrow && svgArrow && (
          <div className={`arrow ${isMobile ? "down" : "right"}`}>
            {svgArrow}
          </div>
        )}
      </article>

      <style jsx>{`
        .infocard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          position: relative;
        }

        .reverse-colors {
          background-color: #0070f3;
          color: white;
        }

        .image-container {
          width: 100%;
          position: relative;
          height: 150px;
        }

        .infocard-image {
          width: 50%;
          height: 50%;
          position: absolute; /* Allows positioning relative to .image-container */
          left: 50%; /* Horizontally centers the image */
          top: 50%; /* Vertically centers the image */
          transform: translate(
            -50%,
            -50%
          ); /* Offsets the element by 50% of its width and height for true centering */
          border-radius: 8px; /* Keeps the rounded corners */
        }

        .text-content {
          text-align: center;
          padding: 20px 0;
        }

        .headline {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .paragraph {
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .cta-button {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .reverse-colors .cta-button {
          background-color: white;
          color: #0070f3;
        }

        .cta-button:hover {
          background-color: #005bb5;
        }

        .reverse-colors .cta-button:hover {
          background-color: #e5e5e5;
        }

        .arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: -30px; /* Positioned arrow to the right */
          top: 50%;
          transform: translateY(-50%);
        }

        .right {
          transform: rotate(0deg);
        }

        .down {
          position: static;
          margin-top: 20px;
          transform: rotate(90deg); /* Arrow pointing down on mobile */
        }
      `}</style>
    </>
  );
}
