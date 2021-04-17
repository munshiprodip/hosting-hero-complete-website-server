const express = require("express");
const router = express.Router();
const Package = require("../model/Package");

// Post single data
router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const newData = new Package(req.body);
  newData.save((err) => {
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

// Get all data
router.get("/", (req, res) => {
  Package.find({ status: "active" }, (err, data) => {
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

// Get single data
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Package.find({ _id: id }, (err, data) => {
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

// Delete single Product
router.delete("/:id", async (req, res) => {
  await Package.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "Ops.... Somthing else. ",
      });
    } else {
      res.status(200).json({
        messages: "Product deleted successfully",
      });
    }
  });
});

module.exports = router;
