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
  for (let item of items) {
    if (item["name"] === req.params.name) {
      return res.json(item);
    }
  }
  return res.json("not here");
});


router.patch("/:name", function (req, res) {

  for (let item of items) {
    if (item["name"] === req.params.name) {
      item["name"] = req.body.name;
      item["price"] = req.body.price;
      return res.json(item);
    }
  }
  return res.json("not here");
});




router.delete("/:name", function (req, res) {
  // items.filter(function (ele) {
  //   ele["name"] !== req.params.name;
  // });
  debugger
  let itemIndex = items.indexOf(["req.params.name"])
  items.splice(itemIndex, 1)
  return res.json({ message: "Deleted" });
});



module.exports = router;
