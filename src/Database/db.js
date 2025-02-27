const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Asynchronously connects to the MongoDB database using the connection string
 * provided in the environment variable `MONGO_CONNECTION_PWEB`.
 * 
 * Logs the connection status to the console. If the connection string is missing
 * or the connection fails, logs an error message and exits the process.
 * 
 * @async
 * @function connectDB
 * @throws Will throw an error if `MONGO_CONNECTION_PWEB` is not defined in the environment variables.
 * @throws Will throw an error if the connection to MongoDB fails.
 */
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
