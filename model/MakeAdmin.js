const mongoose = require("mongoose");

// Model schema
const makeAdminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create model using schema
const MakeAdmin = new mongoose.model("MakeAdmin", makeAdminSchema);

// Export model
module.exports = MakeAdmin;
