const express = require("express");
const router = express.Router();
const { getAllTransactions } = require("../services/transactionsService");

router.get("/", async (req, res) => {
  try {
    const transactions = await getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
