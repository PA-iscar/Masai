const express = require("express");
const connect = require("./configs/db");
const ShortUrl = require("./models/shortUrl");
const shortId = require("shortid"); //? Library to create short ids
require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  await ShortUrl.deleteMany({ expires: { $lte: Date.now() } });
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  let shortID = shortId.generate();
  let date = new Date();
  const expiry = new Date(date.getTime() + (req.body.expiry || 60) * 60000); //* valid for 1 hour by default
  await ShortUrl.create({
    full: req.body.fullUrl,
    short: req.body.shortUrl || shortID,
    expires: expiry,
  });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (!shortUrl) {
    return res.sendStatus(404);
  }
  shortUrl.clicks++;
  shortUrl.save();
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`Listening to port: ${process.env.PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
