const express = require("express");
const router = express.Router();
const Link = require("../models/link");

router.get("/", async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
