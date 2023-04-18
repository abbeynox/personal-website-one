const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: String,
  url: String,
  icon: String,
  toColor: String,
  fromColor: String,
  viaColor: String,
});

module.exports = mongoose.model("Link", linkSchema);
