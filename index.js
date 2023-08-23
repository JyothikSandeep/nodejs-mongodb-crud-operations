//database connection
const mongo = require("./required/mongo_connect");
mongo.connectDB();

//express connection
const express = require("express");
const app = express();
app.use(express.json());

//controllers
//to post the data post method
const post = require("./controller/post");
app.use(post);

//get all data
const getAll = require("./controller/getAll");
app.use(getAll);

//get single data first one
const getOne = require("./controller/getOne");
app.use(getOne);

//delete by name
const deleteOne = require("./controller/deleteOne");
app.use(deleteOne);

//delete all by one field
const deleteAll = require("./controller/deleteAll");
app.use(deleteAll);

//updateOne
const updateOne = require("./controller/updateOne");
app.use(updateOne);

//updateMany
const updateMany = require("./controller/updateAll");
app.use(updateMany);

app.listen(3000, () => {
  console.log("on port 3000");
});
