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

      const browser = await puppeteer.launch(
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

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });

      const h1Text = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        return h1 ? h1.innerText : null;
      });

      const pageTitle = h1Text || (await page.title());

      const results = await new AxePuppeteer(page).analyze();

      await browser.close();

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

      res.status(500).json({ error: "Error scanning the URL" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
