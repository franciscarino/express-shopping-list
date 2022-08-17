"use strict";

const express = require("express");

const { items, Item } = require("./fakeDb");
const router = new express.Router();

router.get("/", function (req, res) {
  debugger;
  return res.json(items);
});

router.post("/", function (req, res) {
  const newItem = new Item(req.body.name, req.body.price);

  newItem.add();

  return res.json({ added: newItem });
});

// router.post("/", function (req, res, next) {
//   const newCat = { name: req.body.name };
//   db.Cat.add(newCat);
//   res.status(201).json({ cat: newCat });
// });

// router.get("/:name", function)

// router.patch("/:name", function)

// router.delete("/:name", function)

module.exports = router;
