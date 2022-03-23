const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();

const controller = crudController(Book);

//* Create
router.post("/", controller.post);

//* Read Many
router.get("/", async (req, res) => {
  const { isCheckedOut,section, authors } = req.query;
  let criteria = {};
  if (isCheckedOut) {
    criteria.isCheckedOut = isCheckedOut;
  }
  if (authors) {
    criteria.authors = authors;
  }
  if (section) {
    criteria.section = section;
  }
  const items = await Book.find(criteria);
  res.status(200).json(items);
});

//* Read One
router.get("/:id", controller.getOne);

//* Update
router.patch("/:id", controller.updateOne);

//* Delete
router.delete("/:id", controller.deleteOne);

module.exports = router;
