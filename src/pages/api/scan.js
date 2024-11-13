import puppeteer from "puppeteer";
import { AxePuppeteer } from "axe-puppeteer";
// import Redis from "ioredis"; // Commented out Redis for future use
import chromium from "chrome-aws-lambda";

// const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;

// if (redis) {
//   redis.on("error", (err) => {
//     console.error("[Redis Error]", err);
//   });
// }

// const scan24Lockdown = false;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    try {
      // const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      // if (scan24Lockdown && redis) {
      //   const lastScanTime = await redis.get(ip);
      //   const now = Date.now();
      //   const oneDay = 24 * 60 * 60 * 1000;

      //   if (lastScanTime && now - lastScanTime < oneDay) {
      //     return res
      //       .status(429)
      //       .json({ message: "You can only scan once every 24 hours." });
      //   }
      // }

      console.log("Received URL:", url);

      let browser;
      try {
        console.log("Launching Puppeteer...");
        browser = await puppeteer.launch(
          process.env.VERCEL_ENV === "production"
            ? {
                args: chromium.args,
                executablePath: await chromium.executablePath,
                headless: chromium.headless,
                defaultViewport: chromium.defaultViewport,
              }
            : {
                headless: true,
                args: ["--no-sandbox", "--disable-setuid-sandbox"],
              }
        );
        console.log("Puppeteer launched successfully.");
      } catch (launchError) {
        console.error("Puppeteer launch error:", launchError);
        throw new Error("Failed to launch Puppeteer");
      }

      const page = await browser.newPage();

      // Block chrome-extension:// requests to avoid resource loading issues
      try {
        console.log("Setting up request interception...");
        await page.setRequestInterception(true);
        page.on("request", (request) => {
          if (request.url().startsWith("chrome-extension://")) {
            console.log("Blocked resource:", request.url());
            request.abort(); // Block requests to chrome-extension:// URLs
          } else {
            request.continue(); // Allow other requests
          }
        });
        console.log("Request interception set up successfully.");
      } catch (interceptionError) {
        console.error(
          "Error setting up request interception:",
          interceptionError
        );
        throw new Error("Failed to set up request interception");
      }

      try {
        console.log("Navigating to URL:", url);
        await page.goto(url, { waitUntil: "networkidle2" });
        console.log("Page loaded successfully.");
      } catch (navigationError) {
        console.error("Navigation error:", navigationError);
        throw new Error("Failed to load the provided URL");
      }

      let pageTitle;
      try {
        console.log("Extracting page title or h1...");
        const h1Text = await page.evaluate(() => {
          const h1 = document.querySelector("h1");
          return h1 ? h1.innerText : null;
        });
        pageTitle = h1Text || (await page.title());
        console.log("Page title extracted:", pageTitle);
      } catch (titleError) {
        console.error("Error extracting page title or h1:", titleError);
        throw new Error("Failed to extract page details");
      }

      let results;
      try {
        console.log("Running axe-core analysis...");
        results = await new AxePuppeteer(page).analyze();
        console.log("Accessibility scan completed.");
      } catch (axeError) {
        console.error("Axe-core analysis error:", axeError);
        throw new Error("Failed to perform accessibility scan");
      }

      await browser.close();
      console.log("Puppeteer closed successfully.");

      // if (scan24Lockdown && redis) {
      //   await redis.set(ip, Date.now(), "EX", 86400);
      // }

      // if (redis) await redis.quit();

      res.status(200).json({
        title: pageTitle,
        ...results,
      });
    } catch (error) {
      console.error("Error during scan:", error);

      // if (redis) await redis.quit();

      res
        .status(500)
        .json({ error: error.message || "Error scanning the URL" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
