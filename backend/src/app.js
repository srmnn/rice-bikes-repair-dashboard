const express = require("express");
const transactionsRouter = require("./routes/transactions");
const cors = require("cors"); 


const app = express();

app.use(express.json());
app.use(cors()); 

app.use("/api", transactionsRouter);

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
