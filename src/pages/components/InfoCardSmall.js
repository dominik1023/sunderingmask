import { useMediaQuery } from "react-responsive";
import Link from "next/link";

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
  // Default values for props to prevent undefined errors
  const safeImageSrc = imageSrc || "/placeholder.png"; // Fallback image
  const safeHeadline = headline || "Default Headline";
  const safeParagraph = paragraph || "Default paragraph text goes here.";
  const safeCtaText = ctaText || "Learn More";
  const safeCtaLink = ctaLink || "#"; // Fallback CTA link
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
          <img
            src={safeImageSrc}
            alt={safeHeadline}
            className="infocard-image"
          />
        </div>
        <div className="text-content">
          <h2 className="headline">{safeHeadline}</h2>
          <p className="paragraph">{safeParagraph}</p>
          {safeCtaLink ? (
            <Link href={safeCtaLink}>
              <a className="cta-button">{safeCtaText}</a>
            </Link>
          ) : (
            <div className="cta-button disabled">No CTA Available</div>
          )}
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
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 8px;
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

        .cta-button.disabled {
          background-color: #e5e5e5;
          color: #aaa;
          cursor: not-allowed;
        }

        .reverse-colors .cta-button {
          background-color: white;
          color: #0070f3;
        }

        .cta-button:hover:not(.disabled) {
          background-color: #005bb5;
        }

        .reverse-colors .cta-button:hover:not(.disabled) {
          background-color: #e5e5e5;
        }

        .arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
        }

        .right {
          transform: rotate(0deg);
        }

        .down {
          position: static;
          margin-top: 20px;
          transform: rotate(90deg);
        }
      `}</style>
    </>
  );
}
