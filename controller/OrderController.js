const express = require("express");
const router = express.Router();
const Order = require("../model/Order");

// Get all Orders
router.get("/", async (req, res) => {
  await Order.find({}, (err, data) => {
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

// Get single user Orders
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  await Order.find({ email: email }, (err, data) => {
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
  const newData = new Order(req.body);
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

// Update single data
router.put("/:id", (req, res) => {
  Order.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: req.body.status,
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "Ops.... Somthing else. ",
        });
      } else {
        res.status(200).json({
          messages: "Order updated successfully",
        });
      }
    }
  );
});

module.exports = router;
