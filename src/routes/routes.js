const express = require("express");
const creditCardRoutes = require("./creditCardRoutes");
const router = express.Router();

// GET home page.
router.get("/", (req, res, next) => {
  res.send("Welcome to your bank");
});

// All request related to credit card (start with '/credit-card').
router.use("/credit-card", creditCardRoutes);

// Invalid GET requests.
router.get("*", (req, res, next) => {
  res.send("Page not found");
});

module.exports = router;
