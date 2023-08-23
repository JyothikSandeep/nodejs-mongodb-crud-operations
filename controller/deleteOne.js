const { Router } = require("express");
const app = Router();
const mongoose = require("mongoose");
const momodel = require("../model/rest");
app.post("/delete", async (req, res) => {
  console.log("inside post function");
  momodel.deleteOne(req.body, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
      console.log(req.body.name);
    }
  });
  //   const val = await data.save();
  //   res.send("posted");
});

module.exports = app;
