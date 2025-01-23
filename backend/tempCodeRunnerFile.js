const express = require("express"); // Import Express.js
const mongoose = require("mongoose"); // Import Mongoose for MongoDB
const cors = require("cors"); // Import CORS to handle cross-origin requests
const bodyParser = require("body-parser"); // Import Body Parser for JSON parsing
const User = require("./models/userModel"); // Import User model

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/cookie_clicker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes

// 1. Create a New User
app.post("/user", async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({ username }); // Create a new user
    await newUser.save(); // Save the user to MongoDB
    res.json(newUser); // Send the created user back as the response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Increment User Score and Apply Reward Logic
app.post("/increment", async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await User.findById(userId); // Find the user by ID
    if (!user) return res.status(404).json({ error: "User not found" });

    user.score += 1; // Increment the score

    // Reward logic
    if (Math.random() < 0.5) user.score += 10; // 50% chance to add 10 points
    if (Math.random() < 0.25) user.prizes += 1; // 25% chance to add a prize

    await user.save(); // Save changes to MongoDB
    res.json(user); // Send the updated user data as the response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the Express server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
