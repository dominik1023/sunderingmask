import axios from "axios";
import { JSDOM } from "jsdom";
import axe from "axe-core";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Bad Request: 'url' is required." });
    }

    // Array to collect logs
    const logs = [];

    // Override console methods to collect logs
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (...args) => {
      logs.push({ type: "log", message: args.join(" ") });
      originalConsoleLog(...args);
    };

    console.error = (...args) => {
      logs.push({ type: "error", message: args.join(" ") });
      originalConsoleError(...args);
    };

    try {
      console.log(`Fetching page content from URL: ${url}`);
      const response = await axios.get(url, {
        timeout: 5000, // Set a timeout to prevent hanging
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      });

      const html = response.data;
      console.log("Page content fetched successfully.");
      console.log(`HTML length: ${html.length} characters`);

      console.log("Setting up JSDOM...");
      const dom = new JSDOM(html, {
        url,
        contentType: "text/html",
        pretendToBeVisual: true,
        runScripts: "dangerously", // Allow scripts to run
        resources: "usable",
      });

      const { window } = dom;

      console.log("Waiting for the page to load...");
      await new Promise((resolve, reject) => {
        window.addEventListener("load", resolve);
        setTimeout(
          () => reject(new Error("Timeout waiting for page load")),
          10000
        );
      });

      console.log("Injecting and executing axe-core...");
      window.eval(axe.source);

      console.log("Configuring axe-core...");
      window.axe.configure({
        reporter: "v2",
        // Add other configurations here if needed
      });

      console.log("Running axe-core analysis...");
      const results = await window.axe.run();

      console.log("Scan completed successfully.");

      // Restore original console methods
      console.log = originalConsoleLog;
      console.error = originalConsoleError;

      // Return results and logs
      res.status(200).json({ results, logs });
    } catch (error) {
      console.error("Error during scan:", error.message);
      console.error("Stack Trace:", error.stack);

      // Restore original console methods
      console.log = originalConsoleLog;
      console.error = originalConsoleError;

      // Return error and logs
      res.status(500).json({
        error: error.message || "Failed to perform scan",
        logs,
      });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
