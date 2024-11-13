import puppeteer from "puppeteer";
import { AxePuppeteer } from "axe-puppeteer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      console.error("Error: Missing 'url' in the request body.");
      return res.status(400).json({ error: "Bad Request: 'url' is required." });
    }

    try {
      console.log("Launching Puppeteer...");
      const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const page = await browser.newPage();
      console.log(`Navigating to: ${url}`);
      await page.goto(url, { waitUntil: "networkidle2" });

      console.log("Running axe-core analysis...");
      const results = await new AxePuppeteer(page).analyze();

      console.log("Closing browser...");
      await browser.close();

      console.log("Scan completed successfully.");
      res.status(200).json(results);
    } catch (error) {
      console.error("Error during scan:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  } else {
    console.error("Invalid HTTP method:", req.method);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
