// src/components/InfoCard.js
import Link from "next/link";

export default function InfoCard({ imgSrc, headline, paragraph, cta }) {
  // Default values for props to prevent undefined errors
  const safeImgSrc = imgSrc || "/placeholder.png"; // Fallback image
  const safeHeadline = headline || "Default Headline";
  const safeParagraph = paragraph || "Default paragraph text goes here.";
  const safeCta = cta || { href: "#", text: "Learn More" }; // Fallback CTA

  return (
    <>
      <article
        tabIndex="0"
        className="bg-gray-100 border border-gray-200 rounded-lg shadow-lg p-6 max-w-xs sm:max-w-sm mx-auto flex flex-col justify-between h-full min-h-[400px]"
      >
        {/* Background Image Container */}
        <div
          className="bg-cover bg-center h-48 mb-4 rounded-lg"
          style={{
            backgroundImage: `url(${safeImgSrc})`,
            backgroundSize: "contain",
            backgroundColor: "rgba(255,255,255)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Headline and Paragraph */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {safeHeadline}
          </h2>
          <p className="text-gray-700 mb-4">{safeParagraph}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-auto">
          {safeCta.href ? (
            <Link href={safeCta.href}>
              <a className="cta-button">{safeCta.text}</a>
            </Link>
          ) : (
            <div className="cta-button disabled">No CTA Available</div>
          )}
        </div>
      </article>

      <style jsx>{`
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
      `}</style>
    </>
  );
}
