const mongoose = require("mongoose");

// Model schema
const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  packageId: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model using schema
const Review = new mongoose.model("Review", reviewSchema);

// Export model
module.exports = Review;
