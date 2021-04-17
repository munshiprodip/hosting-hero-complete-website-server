const express = require("express");
const router = express.Router();
const Review = require("../model/Review");

// Get all Reviews
router.get("/", async (req, res) => {
  await Review.find({}, (err, data) => {
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

// Get single user Reviews
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  await Review.find({ email: email }, (err, data) => {
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
  const newData = new Review(req.body);
  await newData.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        messages: "Data added successfully",
      });
    }
  });
});

module.exports = router;
