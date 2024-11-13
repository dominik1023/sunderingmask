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
      console.log(`Fetching page content from URL: ${url}`);
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

      console.log("Axe-core successfully injected.");
      res.status(200).json({
        success: true,
        title: window.document.title,
        axeInjected: true,
      });
    } catch (error) {
      console.error("Error during processing:", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
