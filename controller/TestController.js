const express = require("express");
const router = express.Router();
const Test = require("../model/Test");

// Get single data
router.get("/:id", async (req, res) => {
  await Test.find({ id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        data: data,
        messages: "Success",
      });
    }
  });
});

// Post single data
router.post("/", async (req, res) => {
  const newData = new Test(req.body);
  await newData.save((err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Data added successfully",
      });
    }
  });
});

module.exports = router;
