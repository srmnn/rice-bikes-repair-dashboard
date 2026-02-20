import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((res) => res.json())
      .then((data) => {
        // Sort oldest first for frontend display
        const sorted = data.slice().sort(
          (a, b) => new Date(a.transaction_date) - new Date(b.transaction_date)
        );
        setTransactions(sorted);
      });
  }, []);

  return (
    <div className="container">
      <h1>Rice Bikes Repair Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Bike</th>
            <th>Service</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.transaction_id}>
              <td>{new Date(tx.transaction_date).toLocaleDateString()}</td>
              <td>{`${tx.customer.first_name} ${tx.customer.last_name}`}</td>
              <td>{tx.customer.email}</td>
              <td>{`${tx.bike.make} ${tx.bike.model}`}</td>
              <td>{tx.service}</td>
              <td>${tx.total_cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
