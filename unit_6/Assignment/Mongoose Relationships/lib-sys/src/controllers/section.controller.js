const express = require("express");
const Book = require("../models/book.model");
const Section = require("../models/section.model");
const crudController = require("./crud.controller");
const router = express.Router();

const controller = crudController(Section);

//* Create
router.post("/", controller.post);

//* Read Many
router.get("/", controller.getAll);

//* Read One
router.get("/:id", controller.getOne);

//* Read Books in a section ID
router.get("/:id/books", async (req, res) => {
  const { isCheckedOut } = req.query;
  let criteria = { section: req.params.id };
  if (isCheckedOut) {
    criteria.isCheckedOut = isCheckedOut;
  }
  const items = await Book.find(criteria);
  res.status(200).json(items);
});

//* Update
router.patch("/:id", controller.updateOne);

//* Delete
router.delete("/:id", controller.deleteOne);

module.exports = router;
