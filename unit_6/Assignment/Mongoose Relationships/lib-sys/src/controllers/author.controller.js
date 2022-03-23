const express = require("express");
const Author = require("../models/author.model");
const router = express.Router();

//* Create
router.post("", async (req, res) => {
  const createdAuthor = await Author.create(req.body);
  res.status(201).json(createdAuthor);
});

//* Read Many
router.get("", async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
});

//* Read One
router.get("/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.status(200).json(author);
});

//* Update
router.patch("/:id", async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedAuthor);
});

//* Delete
router.delete("/:id", async (req, res) => {
  const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedAuthor);
});

module.exports = router;
