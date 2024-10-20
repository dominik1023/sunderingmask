export default function CaseStudy({
  title,
  industry,
  businessSize,
  duration,
  technology,
  objective,
  background,
  approach,
  results,
  technologies,
  image,
  imageAlt,
}) {
  return (
    <>
      <article tabIndex="0" className="case-study-container">
        <div className="image-container">
          <img src={image} alt={imageAlt} className="case-study-image" />
        </div>

        <div className="case-study-content">
          <h3 className="title">{title}</h3>
          <p className="meta">
            <strong>Industry:</strong> {industry} |{" "}
            <strong>Business Size:</strong> {businessSize}
          </p>
          <p className="meta">
            <strong>Duration:</strong> {duration} | <strong>Technology:</strong>{" "}
            {technology}
          </p>

          <h4>Objective</h4>
          <p>{objective}</p>

          <h4>Background</h4>
          <p>{background}</p>

          <h4>Approach</h4>
          <ul>
            {approach.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Results</h4>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Technologies/Tools</h4>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </article>

      <style jsx>{`
        .case-study-container {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .image-container {
          text-align: center;
        }

        .case-study-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .case-study-content {
          padding: 20px;
        }

        .title {
          font-size: 1.6rem;
          font-weight: bold;
          margin-bottom: 32px;
        }

        .meta {
          font-size: 1rem;
          color: #111;
          margin-bottom: 10px;
        }

        h3 {
          margin-top: 24px;
        }
        h4 {
          font-size: 1.1rem;
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: bold;
        }
        ul {
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
