// src/components/InfoCard.js

export default function InfoCard({ imgSrc, headline, paragraph, cta }) {
  return (
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
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{headline}</h2>
        <p className="text-gray-700 mb-4">{paragraph}</p>
      </div>

      {/* Call to Action */}
      <div className="mt-auto">
        <a
          href={cta.href}
          className="inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
        >
          {cta.text}
        </a>
      </div>
    </article>
  );
}
