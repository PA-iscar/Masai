const express = require("express");
const mongoose = require("mongoose");
const MovieModel = require("./schema/movies.schema");

const PORT = 8000;
const DB_URL = "mongodb://127.0.0.1:27017/test";

let app = express();
app.use(express.json());

mongoose.connect(DB_URL, { useNewUrlParser: true });
let db = mongoose.connection;

app.get("/movies", async (req, res) => {
  let movies = await MovieModel.find({});
  res.status(200).json(movies);
});

app.get("/movies/:id", async (req, res) => {
  let movie = await MovieModel.find({ _id: req.params.id });
  res.status(200).json(movie);
});

app.post("/movies", async (req, res) => {
  let movie = new MovieModel(req.body);
  await movie.save();
  res.status(201).json(movie);
});

app.put("/movies/:id", async (req, res) => {
  await MovieModel.updateOne({ _id: req.params.id }, req.body);
  let movie = await MovieModel.find({ _id: req.params.id });
  res.status(200).json(movie);
});

app.delete("/movies/:id", async (req, res) => {
  let movie = await MovieModel.remove({ _id: req.params.id });
  res.status(200).json(movie);
});

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
