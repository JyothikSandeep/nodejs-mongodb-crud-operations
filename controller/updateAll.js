const { Router } = require("express");
const app = Router();
const mongoose = require("mongoose");
//defining models required
const momodel = require("../model/rest");
app.post("/updateAll", async (req, res) => {
  console.log("inside update function");
  var myquery = { name: req.body.name };
  var newVlaues = { $set: { email: req.body.email } };
  momodel.updateMany(myquery, newVlaues, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send("Updated");
      console.log(req.body.name);
    }
  });
});

module.exports = app;
