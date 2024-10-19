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
        <h3>Your scan report for this page: {report.title}</h3>
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
                <h4>
                  {violations.length > 0
                    ? `${violations.length} ${key} ${
                        violations.length === 1 ? "violation" : "violations"
                      }`
                    : `No ${key} violations`}
                </h4>
                {violations.length > 0 && (
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
                              <strong>Element:</strong> {node.target.join(", ")}{" "}
                              <br />
                              <strong>Issue:</strong> {node.failureSummary}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
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
      <form onSubmit={handleSubmit}>
        <div className="scanform">
          <label className="scanform_label" htmlFor="url">
            Website URL
          </label>
          <input
            placeholder="Enter your URL to scan for accessibility violations"
            type="text"
            className="scanform_input"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit">Scan</button>
        </div>
      </form>
      {loading && <p>Scanning...</p>}
      {report && formatReport()}

      <style jsx>{`
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
