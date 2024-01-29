const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);

// handle the connection events
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("Failed to connect to MongoDB", error);
});
db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
