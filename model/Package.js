const mongoose = require("mongoose");

// Model schema
const packageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});

// Create model using schema
const Package = new mongoose.model("Package", packageSchema);

// Export model
module.exports = Package;
