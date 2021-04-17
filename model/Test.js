const mongoose = require("mongoose");

// Model schema
const testSchema = mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model using schema
const Test = new mongoose.model("Test", testSchema);

// Export model
module.exports = Test;
