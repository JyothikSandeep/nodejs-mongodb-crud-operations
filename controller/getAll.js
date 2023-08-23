const { Router } = require("express");
const app = Router();
const mongoose = require("mongoose");
//defining models required
const momodel = require("../model/rest");
app.get("/getAll", async (req, res) => {
  console.log("inside get function");
  momodel.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data).status(200);
    }
  });
});

module.exports = app;

//
