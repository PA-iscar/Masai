const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");
const router = express.Router();

const controller = crudController(Book)

//* Create
router.post("/", controller.post);

//* Read Many
router.get("/", controller.getAll);

//* Read One
router.get("/:id", controller.getOne);

//* Update
router.patch("/:id", controller.updateOne);

//* Delete
router.delete("/:id", controller.deleteOne);

module.exports = router;
