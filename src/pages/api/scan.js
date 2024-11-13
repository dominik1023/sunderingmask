import axios from "axios";
import { JSDOM } from "jsdom";
import axe from "axe-core";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    // Check if URL is provided
    if (!url) {
      console.error("Error: Missing 'url' in the request body.");
      return res.status(400).json({ error: "Bad Request: 'url' is required." });
    }

    try {
      console.log("Fetching page content from:", url);

      // Fetch the HTML content of the page
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });

      const html = response.data;
      console.log("Page content fetched successfully.");

      console.log("Setting up JSDOM...");
      const dom = new JSDOM(html, { url });
      const { window } = dom;

      console.log("Injecting axe-core...");
      // Attach axe-core to the JSDOM window
      window.axe = axe;

      console.log("Running axe-core analysis...");
      // Run the accessibility scan
      const results = await window.axe.run(window.document);

      console.log("Scan completed successfully.");
      res.status(200).json(results); // Return the scan results
    } catch (error) {
      console.error("Error during scan:", error.message);
      console.error("Stack Trace:", error.stack);
      res
        .status(500)
        .json({ error: error.message || "Failed to perform scan" });
    }
  } else {
    console.error("Invalid HTTP method:", req.method);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
