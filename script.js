// Set up dotenv to load environment variables
require("dotenv").config();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// Fetch MongoDB connection string from environment variables
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
}
