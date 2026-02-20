const pool = require("../db");

async function getAllTransactions() {
  const query = `
    SELECT 
      rt.transaction_id,
      rt.transaction_date,
      rt.total_cost,
      c.customer_id,
      c.first_name,
      c.last_name,
      c.email,
      c.phone_number,
      b.bike_id,
      b.make,
      b.model
    FROM repair_transactions rt
    JOIN customers c ON rt.customer_id = c.customer_id
    JOIN bikes b ON rt.bike_id = b.bike_id
    ORDER BY rt.transaction_date DESC;
  `;

  const { rows } = await pool.query(query);

  return rows.map(row => ({
    transaction_id: row.transaction_id,
    transaction_date: row.transaction_date,
    total_cost: row.total_cost,
    customer: {
      id: row.customer_id,
      first_name: row.first_name,
      last_name: row.last_name,
      email: row.email,
      phone_number: row.phone_number,
    },
    bike: {
      id: row.bike_id,
      make: row.make,
      model: row.model,
    },
  }));
}

module.exports = { getAllTransactions };
