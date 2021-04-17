const mongoose = require("mongoose");

// Model schema
const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },

  packageDescription: {
    type: String,
    required: true,
  },
  packageId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  payWith: {
    type: String,
    default: "Card",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model using schema
const Order = new mongoose.model("Order", orderSchema);

// Export model
module.exports = Order;
