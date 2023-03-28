const express = require("express");
const cors = require("cors");
const path = require("path");
const cookie_parser = require("cookie-parser");
const connectToMongo = require("./db/database");
const PORT = process.env.PORT || 3001;
const errorHandleMiddleware = require("./middleware/Error");
const companyRouter = require("./routes/companyRoutes");
const userRouter = require("./routes/userRoutes");
const ticketRouter = require("./routes/ticketRoutes");
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
app.use(cookie_parser());

// set env var
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

// connect to db
connectToMongo();

// use routes
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/ticket", ticketRouter);
// app.use("/api/v1", orderRouter);

// error handle middleware
app.use(errorHandleMiddleware);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
// });

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
