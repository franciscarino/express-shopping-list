"use strict";

const express = require("express");
const { request } = require("./app");

const { items, Item } = require("./fakeDb");
const router = new express.Router();

router.get("/", function (req, res) {
  debugger;
  return res.json(items);
});

router.post("/", function (req, res) {
  const newItem = new Item(req.body.name, req.body.price);

  items.push(newItem);
  return res.json({ added: newItem });
});

// router.post("/", function (req, res, next) {
//   const newCat = { name: req.body.name };
//   db.Cat.add(newCat);
//   res.status(201).json({ cat: newCat });
// });

router.get("/:name", function (req, res) {
  // const item = items.find((i) => i["name"] === req.params.name);
  // console.log(item)
  for (let item of items) {
    if (item["name"] === req.params.name) {
      return res.json(item);
    }
  }
  return res.json("not here");
});


// router.patch("/:name", function)

// router.delete("/:name", function)

module.exports = router;
