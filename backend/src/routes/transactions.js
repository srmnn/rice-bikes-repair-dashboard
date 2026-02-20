const express = require("express");
const router = express.Router();
const { getAllTransactions } = require("../services/transactionsService");

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await getAllTransactions();
    res.json(transactions);
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
