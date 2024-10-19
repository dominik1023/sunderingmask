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
      <h2>Enter a URL to scan for accessibility violations:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Website URL</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Scan</button>
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
