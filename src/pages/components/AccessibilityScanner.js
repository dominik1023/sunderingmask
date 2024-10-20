import { useState } from "react";

export default function AccessibilityScanner() {
  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setReport(data);
    setLoading(false);
  };

  const formatReport = () => {
    if (!report) return null;

    const categories = {
      critical: [],
      serious: [],
      moderate: [],
      minor: [],
    };
    const categoryMessages = {
      critical: {
        withViolations:
          "Critical violations have the most severe impact on accessibility. These must be fixed immediately.",
        noViolations:
          "No critical violations found. This means your website is free of the most severe accessibility issues.",
      },
      serious: {
        withViolations:
          "Serious violations significantly affect accessibility. These should be addressed to meet compliance standards.",
        noViolations:
          "No serious violations found. This indicates your website has fewer major issues that impact accessibility.",
      },
      moderate: {
        withViolations:
          "Moderate violations can noticeably impact accessibility. These should be fixed to enhance accessibility.",
        noViolations:
          "No moderate violations found. Your website seems free from moderate-level accessibility concerns.",
      },
      minor: {
        withViolations:
          "Minor violations have minimal impact but should still be resolved for optimal accessibility.",
        noViolations:
          "No minor violations found. Your website doesn't have small issues affecting accessibility.",
      },
    };
    // Organize violations by impact category
    report.violations?.forEach((violation) => {
      if (categories[violation.impact]) {
        categories[violation.impact].push(violation);
      }
    });

    report.incomplete?.forEach((incomplete) => {
      if (categories[incomplete.impact]) {
        categories[incomplete.impact].push(incomplete);
      }
    });

    // Format output with violation details
    return (
      <div
        className="report-output"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          borderRadius: "10px",
          width: "90%",
          margin: "auto",
          boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 className="report-title">
          Your scan report for this page: {report.title}
        </h3>
        <div className="report-disclaimer">
          <p></p>
        </div>
        {Object.values(categories).flat().length === 0 ? (
          <p>No violations found.</p>
        ) : (
          <ul
            style={{
              textAlign: "left",
              listStyle: "none",
              padding: 0,
            }}
          >
            {Object.entries(categories).map(([key, violations]) => (
              <li key={key} style={{ marginBottom: "20px" }}>
                <h4 className={`violations_header ${key}`}>
                  {violations.length > 0
                    ? `${violations.reduce(
                        (total, violation) => total + violation.nodes.length,
                        0
                      )} ${key} ${
                        violations.reduce(
                          (total, violation) => total + violation.nodes.length,
                          0
                        ) === 1
                          ? "violation"
                          : "violations"
                      }`
                    : `No ${key} violations found`}
                </h4>

                {violations.length > 0 ? (
                  <>
                    <p className="category-explanation">
                      {categoryMessages[key].withViolations}
                    </p>
                    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
                      {violations.map((violation, index) => (
                        <li key={index}>
                          <strong>{violation.description}</strong> <br />
                          <a
                            href={violation.helpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More Info
                          </a>
                          <ul>
                            {violation.nodes.map((node, i) => (
                              <li key={i}>
                                <strong>Element:</strong>{" "}
                                {node.target.join(", ")} <br />
                                <strong>Issue:</strong> {node.failureSummary}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>{categoryMessages[key].noViolations}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // const formatReport = () => {
  //   if (!report) return null;

  //   const categories = {
  //     critical: [],
  //     serious: [],
  //     moderate: [],
  //     minor: [],
  //   };

  //   // Group violations by impact
  //   report.violations?.forEach((violation) => {
  //     if (categories[violation.impact] !== undefined) {
  //       categories[violation.impact].push({
  //         description: violation.description,
  //         help: violation.help,
  //         nodes: violation.nodes.map((node) => node.failureSummary).join(", "),
  //       });
  //     }
  //   });

  //   report.incomplete?.forEach((incomplete) => {
  //     if (categories[incomplete.impact] !== undefined) {
  //       categories[incomplete.impact].push({
  //         description: incomplete.description,
  //         help: incomplete.help,
  //         nodes: incomplete.nodes.map((node) => node.failureSummary).join(", "),
  //       });
  //     }
  //   });

  //   return (
  //     <div
  //       className="report-output"
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         padding: "20px",
  //         borderRadius: "10px",
  //         backgroundColor: "#f0f0f0",
  //       }}
  //     >
  //       <h3>Scan Report:</h3>
  //       {Object.keys(categories).every(
  //         (key) => categories[key].length === 0
  //       ) ? (
  //         <p>No violations found.</p>
  //       ) : (
  //         Object.entries(categories).map(([key, violations]) => (
  //           <div key={key} className="category-report">
  //             <h4>
  //               {violations.length} {key}{" "}
  //               {violations.length === 1 ? "violation" : "violations"}
  //             </h4>
  //             {violations.length > 0 && (
  //               <ul>
  //                 {violations.map((violation, index) => (
  //                   <li key={index}>
  //                     <strong>Description:</strong> {violation.description}
  //                     <br />
  //                     <strong>How to fix:</strong> {violation.help}
  //                     <br />
  //                     <strong>Details:</strong> {violation.nodes}
  //                   </li>
  //                 ))}
  //               </ul>
  //             )}
  //           </div>
  //         ))
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div className="scanner-form">
      <div className="scanner-form__container">
        <form onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: "-10px" }}>
            How accessible is your website?
          </h3>
          <div className="scanform">
            {/* <label className="scanform_label" htmlFor="url">
              Website URL
            </label> */}
            <input
              placeholder="Enter your URL to scan for accessibility violations"
              type="text"
              className="scanform_input"
              id="url"
              value={url}
              aria-label="Website URL"
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button type="submit">Scan</button>
          </div>
        </form>
      </div>

      {loading && <p>Scanning...</p>}
      {report && formatReport()}

      <style jsx>{`
        :global(.report-title) {
          font-size: 1.2rem;
        }
        :global(.violations_header) {
          font-size: 1.1rem;
          font-weight: bold;
        }

        :global(.violations_header.critical) {
          color: #b22222; /* Firebrick - dark red for better contrast */
        }

        :global(.violations_header.serious) {
          color: #ff4500; /* Dark orange for strong contrast */
        }

        :global(.violations_header.moderate) {
          color: #daa520; /* Goldenrod - darker yellow for readability */
        }

        :global(.violations_header.minor) {
          color: #228b22; /* ForestGreen - dark green for good contrast */
        }

        .category-explanation {
          font-style: italic;
          margin-bottom: 1rem;
        }

        .scanner-form__container {
          padding: 1rem 0;
        }
        .report-output {
          border: 2px solid #555;
          padding: 10px;
          margin-top: 20px;
          border-radius: 5px;
        }
        .scanner-form {
          margin-top: 20px;
          text-align: center;
          margin: 0 auto;
          width: auto;
        }
        .scanform {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .scanform_label {
          text-wrap: nowrap;
          display: inline-block;
        }
        .scanform_input {
          margin-left: 10px;
          margin-right: 10px;
          border: 2px solid #999;
          border-radius: 5px;
          width: 80%;
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          padding: 10px;
          margin: 10px 0;
          width: 80%;
          max-width: 400px;
        }
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        .report-output {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
