import puppeteer from "puppeteer";
import { AxePuppeteer } from "axe-puppeteer";
import Redis from "ioredis";

// Initialize Redis client
const redis = new Redis();

// Set this to true for production to enforce the 24-hour restriction
const scan24Lockdown = false;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    try {
      // Get user's IP address
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      // Only check restriction if scan24Lockdown is enabled
      if (scan24Lockdown) {
        const lastScanTime = await redis.get(ip);
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;

        if (lastScanTime && now - lastScanTime < oneDay) {
          // User has scanned within the last 24 hours
          return res
            .status(429)
            .json({ message: "You can only scan once every 24 hours." });
        }
      }

      // Launch a headless browser using Puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Navigate to the provided URL
      await page.goto(url, { waitUntil: "networkidle2" });

      // Try to get the first <h1> tag text
      const h1Text = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        return h1 ? h1.innerText : null;
      });

      // If no <h1> found, fall back to the <title> tag
      const pageTitle = h1Text || (await page.title());

      // Run axe-core analysis on the page
      const results = await new AxePuppeteer(page).analyze();

      // Close the browser after scan
      await browser.close();

      // Only store the current time if scan24Lockdown is enabled
      if (scan24Lockdown) {
        await redis.set(ip, Date.now(), "EX", 86400); // Expire after 24 hours
      }

      // Return the results along with the page title or h1
      res.status(200).json({
        title: pageTitle,
        ...results,
      });
    } catch (error) {
      // If something goes wrong, return an error
      console.error(error);
      res.status(500).json({ error: "Error scanning the URL" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
