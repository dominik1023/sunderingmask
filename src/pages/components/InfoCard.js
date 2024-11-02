// src/components/InfoCard.js
import Link from "next/link";
export default function InfoCard({ imgSrc, headline, paragraph, cta }) {
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
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "contain",
            backgroundColor: "rgba(255,255,255)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Headline and Paragraph */}
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {headline}
          </h2>
          <p className="text-gray-700 mb-4">{paragraph}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-auto">
          <Link href={cta.href} className="cta-button">
            {cta.text}
          </Link>
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
