import "dotenv/config";

import express from "express";
import cors from "cors";
import scrapContent from "./services/contentScrap.js";
import summarizeContent from "./services/aiSummarize.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/summarize', async (req, res) => {
  console.log("new req recieved")
  const url = req.body.url;
  console.log("recived:", url);
  if (!url) {
    console.log("hello")
    return res.status(400).json({ message: "cant find the query param" });
  }
  try {
    const scrapData = await scrapContent(url);
    const summarizedContent = await summarizeContent(scrapData);
    console.log(summarizedContent);
    return res.status(200).json({ content: summarizedContent, message: "summarized successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "failed to scrap" })
  }
})

app.get('/', (req, res) => {
  console.log("hello buddy")
  res.status(200).json({ status: "ok" })
})

app.listen(3000, () => {
  console.log("server is live at 3000")
});
