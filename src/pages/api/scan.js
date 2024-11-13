import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "Bad Request: 'url' is required." });
    }

    try {
      console.log("Fetching page content...");
      const response = await axios.get(url);
      console.log("Page content fetched successfully.");
      res.status(200).json({ success: true, html: response.data });
    } catch (error) {
      console.error("Error fetching page content:", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
