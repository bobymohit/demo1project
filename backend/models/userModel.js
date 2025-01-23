const mongoose = require("mongoose");

// Define a schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  score: { type: Number, default: 0 },
  prizes: { type: Number, default: 0 },
});

// Create a model
module.exports = mongoose.model("User", userSchema);
