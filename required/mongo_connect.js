const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/mynewdb",
    {
      useNewURLParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("connected");
      } else {
        console.log(err);
      }
    }
  );
};
module.exports = { connectDB };
