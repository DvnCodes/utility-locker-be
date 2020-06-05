const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api.router");

const mongoDB =
  "mongodb+srv://dan:N0rthC0ders@cluster0-uasos.mongodb.net/utility_locker?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once("open", () => console.log("connected to database..."));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

module.exports = app;
