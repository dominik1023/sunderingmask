import puppeteer from "puppeteer";
import { AxePuppeteer } from "axe-puppeteer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    try {
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
