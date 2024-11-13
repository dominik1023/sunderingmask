// import axios from "axios";
// import { JSDOM } from "jsdom";
// import axe from "axe-core";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { url } = req.body;

//     if (!url) {
//       return res.status(400).json({ error: "Bad Request: 'url' is required." });
//     }

//     try {
//       console.log(`Fetching page content from URL: ${url}`);
//       const response = await axios.get(url, {
//         headers: {
//           "User-Agent":
//             "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//         },
//       });

//       const html = response.data;
//       console.log("Page content fetched successfully.");
//       console.log(`HTML length: ${html.length} characters`);

//       console.log("Setting up JSDOM...");
//       const dom = new JSDOM(html, {
//         url,
//         contentType: "text/html",
//         pretendToBeVisual: true,
//         runScripts: "dangerously", // Allow all scripts to run
//         resources: "usable", // Allow external resources to be loaded
//       });

//       const { window } = dom;

//       console.log("Waiting for the page to load...");
//       // Wait for the window's load event to ensure all scripts and resources are loaded
//       await new Promise((resolve, reject) => {
//         window.addEventListener("load", resolve);
//         setTimeout(
//           () => reject(new Error("Timeout waiting for page load")),
//           10000
//         ); // 10-second timeout
//       });

//       console.log("Injecting and executing axe-core...");
//       // Execute the axe-core source code in the window context
//       window.eval(axe.source);

//       console.log("Configuring axe-core...");
//       window.axe.configure({
//         reporter: "v2",
//         // Add other configurations here if needed
//       });

//       console.log("Running axe-core analysis...");
//       const results = await window.axe.run();

//       console.log("Scan completed successfully.");
//       res.status(200).json(results); // Return scan results
//     } catch (error) {
//       console.error("Error during scan:", error.message);
//       console.error("Stack Trace:", error.stack);
//       res
//         .status(500)
//         .json({ error: error.message || "Failed to perform scan" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

import axios from "axios";
import { JSDOM } from "jsdom";
import axe from "axe-core";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Bad Request: 'url' is required." });
    }

    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
        },
      });

      const html = response.data;

      const dom = new JSDOM(html, {
        url,
        contentType: "text/html",
        pretendToBeVisual: true,
        runScripts: "dangerously",
        resources: "usable",
      });

      const { window } = dom;

      await new Promise((resolve, reject) => {
        window.addEventListener("load", resolve);
        setTimeout(
          () => reject(new Error("Timeout waiting for page load")),
          10000
        );
      });

      window.eval(axe.source);

      const results = await window.axe.run();

      res.status(200).json(results);
    } catch (error) {
      res
        .status(500)
        .json({ error: error.message || "Failed to perform scan" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
