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
      <div className="case-study-container">
        <div className="image-container">
          <img src={image} alt={imageAlt} className="case-study-image" />
        </div>

        <div className="case-study-content">
          <h2 className="title">{title}</h2>
          <p className="meta">
            <strong>Industry:</strong> {industry} |{" "}
            <strong>Business Size:</strong> {businessSize}
          </p>
          <p className="meta">
            <strong>Duration:</strong> {duration} | <strong>Technology:</strong>{" "}
            {technology}
          </p>

          <h3>Objective</h3>
          <p>{objective}</p>

          <h3>Background</h3>
          <p>{background}</p>

          <h3>Approach</h3>
          <ul>
            {approach.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Results</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Technologies/Tools</h3>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

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
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .meta {
          font-size: 1rem;
          color: #666;
          margin-bottom: 10px;
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 20px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        ul {
          padding-left: 20px;
        }

        ul li {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
