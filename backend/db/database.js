const mongoose = require("mongoose");

const connectToMongo = async () => {
  // try {
  mongoose
    .connect(process.env.DB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to Mongo"));
};

module.exports = connectToMongo;
