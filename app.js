const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api.router");
app.use(cors());

const mongoDB =
  process.env.MONGODB_URI ||
  "mongodb+srv://dan:N0rthC0ders@cluster0-uasos.mongodb.net/utility_locker?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => console.log("connected to database..."));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  // console.log(err);
  res.status(err.status).send({ msg: err.msg });
});

module.exports = app;
