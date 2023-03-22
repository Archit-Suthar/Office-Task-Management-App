const express = require("express");
const cors = require("cors");
const path = require("path");

const connectToMongo = require("./db/database");
const PORT = process.env.PORT || 3001;
const errorHandleMiddleware = require("./middleware/Error");
// const cloudinary = require("cloudinary")
// const dotenv = require('dotenv')

const app = express();

//catch unCaughtexception
process.on("uncaughtException", (err) => {
  console.log("Error : " + err);

  server.close(() => {
    process.exit(1);
  });
});

//app.use
app.use(cors());
app.use(express.json());

// set env var
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

// connect to db
connectToMongo();

// use routes
// app.use("/api/v1", productRouter);
// app.use("/api/v1", userRouter);
// app.use("/api/v1", paymentRouter);
// app.use("/api/v1", orderRouter);

// error handle middleware
app.use(errorHandleMiddleware);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

//
//
// listening
const server = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});

//close server automatically on unhandled rejection
process.on("unhandledRejection", (err) => {
  console.log("Error : " + err);
  server.close(() => {
    process.exit(1);
  });
});
