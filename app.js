"use strict";

const express = require("express");
const app = express();

const itemsRoutes = require("./itemsRoutes.js");

app.use(express.json());
app.use("/items", itemsRoutes);

module.exports = app;
