const { Router } = require("express");
const app = Router();
const mongoose = require("mongoose");
//defining models required
const momodel = require("../model/rest");
app.post("/post", async (req, res) => {
  console.log("inside post function");
  const data = new momodel({
    name: req.body.name,
    email: req.body.email,
    id: req.body.id,
  });
  const val = await data.save();
  res.send("posted");
});

module.exports = app;
