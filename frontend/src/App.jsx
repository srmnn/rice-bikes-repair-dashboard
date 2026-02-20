import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Rice Bikes Repair Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Bike</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .slice()
            .reverse()
            .map(t => (
              <tr key={t.transaction_id}>
                <td>{new Date(t.transaction_date).toLocaleDateString()}</td>
                <td>{t.customer.first_name} {t.customer.last_name}</td>
                <td>{t.customer.email}</td>
                <td>{t.bike.make} {t.bike.model}</td>
                <td>${t.total_cost}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
