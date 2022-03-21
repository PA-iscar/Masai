const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: String,
  movie_genre: String,
  production_year: Number,
  budget: Number,
});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;
