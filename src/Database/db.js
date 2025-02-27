const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("DEBUG CREDENTIALS: ✅ ", process.env.MONGO_CONNECTION_PWEB);

  if (!process.env.MONGO_CONNECTION_PWEB) {
    console.error("❌ ERROR: MONGO_CONNECTION_PWEB is missing in .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_PWEB, {
      serverSelectionTimeoutMS: 5000, // Prevents long startup delays
    });

    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
