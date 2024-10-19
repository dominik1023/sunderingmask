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
      {report && (
        <div>
          <h3>Scan Report:</h3>
          <pre>{JSON.stringify(report, null, 2)}</pre>
        </div>
      )}

      <style jsx>{`
        .scanner-form {
          margin-top: 20px;
          text-align: center;
          border: 1px dashed red;
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
      `}</style>
    </div>
  );
}
