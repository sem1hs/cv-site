// Modules
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// Dotenv
const dotenv = require("dotenv");
dotenv.config();

// For Response
app.use(express.json());

// Routes
app.use("/api/v1", userRoute);
module.exports = app;
