const express = require("express");
const router = express.Router();
const MakeAdmin = require("../model/MakeAdmin");

// Get all MakeAdmins
router.get("/", async (req, res) => {
  await MakeAdmin.find({}, (err, data) => {
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

// Get single user MakeAdmins
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  await MakeAdmin.find({ email: email }, (err, data) => {
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
  const newData = new MakeAdmin(req.body);
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
