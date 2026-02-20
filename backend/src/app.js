const express = require("express");
const cors = require("cors");
require("dotenv").config();

const transactionsRoute = require("./routes/transactions");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/transactions", transactionsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
