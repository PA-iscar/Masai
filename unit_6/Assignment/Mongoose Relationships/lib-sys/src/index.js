const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authorController = require("./controllers/author.controller");
const sectionController = require("./controllers/section.controller");
const bookController = require("./controllers/book.controller");

const PORT = 8000;
const DB_URL =
  "mongodb+srv://abhishek:something@practicecluster.n755z.mongodb.net/libraryDatabase?retryWrites=true&w=majority";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/authors", authorController);
app.use("/sections", sectionController);
app.use("/books", bookController);

const connect = () => {
  return mongoose.connect(DB_URL);
};

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening to port: ", PORT);
  } catch (err) {
    console.log(err.message);
  }
});
