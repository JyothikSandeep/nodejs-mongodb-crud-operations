const mongoose = require("mongoose");
const schema = {
  name: String,
  email: String,
  id: Number,
};
module.exports = mongoose.model("NEWCOL", schema);
