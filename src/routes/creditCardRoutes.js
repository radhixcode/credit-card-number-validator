const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

// GET request for list of all credit cards.
router.get("/getall", cardController.allCreditCards);

// POST request to add a new credit card.
router.post("/add", cardController.addCreditCard);

module.exports = router;
