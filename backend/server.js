require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const app = express();

const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Routes
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api", testRoutes);
app.use("/api/auth", authRoutes);

// Connect DB then start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Start server ONLY after DB connects
    const PORT = 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });