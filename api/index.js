require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const linksRouter = require("./routes/links");

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use("/api/links", linksRouter);

module.exports = app;
