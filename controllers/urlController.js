import { nanoid } from "nanoid";
import { url } from "../model/url.js";

export const generateShortId = async (req, res) => {
  const body = await req.body;
  if (!body.url) {
    return res.status(400).json({ error: "Url is required" });
  }

  const shortUrl = nanoid();
  await url.create({
    shortUrl,
    redirectUrl: body.url,
    visitedHistory: [],
  });

  res
    .status(200)
    .json({ shortUrl: shortUrl, message: "ShortUrl Successfully Generated" });
};

export const getOriginalUrl = async (req, res) => {
  const shortId = req.params.id;
  // console.log(shortId);

  const data = await url.findOneAndUpdate(
    { shortUrl: shortId },
    { $push: { visitedHistory: { timestamps: Date.now() } } }
  );
  console.log(data);
  return res.redirect(data.redirectUrl);
};

export const getNumberOfVisits = async (req, res) => {
  const shortId = req.params.id;
  const data = await url.findOne({ shortUrl: shortId });
  return res
    .status(200)
    .json({
      totalClicks: data.visitedHistory.length,
      analytics: data.visitedHistory,
    });
};

//url/analytics/:id
