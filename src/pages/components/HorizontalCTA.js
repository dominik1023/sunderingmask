export default function HorizontalCTA({
  headline,
  paragraph,
  ctaText,
  ctaLink,
  reverseColors = false,
}) {
  return (
    <>
      <div className={`cta-container ${reverseColors ? "reverse-colors" : ""}`}>
        <div className="text-content">
          <h2 className="headline">{headline}</h2>
          {paragraph && <p className="paragraph">{paragraph}</p>}
        </div>
        <a href={ctaLink} className="cta-button">
          {ctaText}
        </a>
      </div>

      <style jsx>{`
        .cta-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%; /* Stretch across content width */
          padding: 20px 40px;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px; /* Adds space between content and CTA */
        }

        .reverse-colors {
          background-color: #0070f3;
          color: white;
        }

        .headline {
          font-size: 2rem;
          font-weight: bold;
          margin-right: 20px;
        }

        .paragraph {
          font-size: 1.2rem;
          margin: 0;
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
      `}</style>
    </>
  );
}
