const mongoose = require("mongoose");
const { connectDB, databases } = require("../Database/db");

const PortfolioSchema = new mongoose.Schema({
  pdf: {
    data: Buffer,
    contentType: String,
  },
  uploadedAt: { type: Date, default: Date.now },
});

// Ensure database connection before defining the model
let Portfolio;

const initializePortfolioModel = async () => {
  if (!databases.portfolioDB) {
    await connectDB();
  }
  Portfolio = databases.portfolioDB.model("Portfolio", PortfolioSchema);
};

initializePortfolioModel();

module.exports = () => Portfolio;
