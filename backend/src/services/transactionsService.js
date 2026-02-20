const pool = require("../db");

async function getAllTransactions() {
  const query = `
    SELECT 
      rt.transaction_id,
      rt.transaction_date,
      rt.total_cost,
      rt.service,
      c.customer_id AS customer_id,
      c.first_name AS customer_first_name,
      c.last_name AS customer_last_name,
      c.email AS customer_email,
      c.phone_number AS customer_phone,
      b.bike_id AS bike_id,
      b.make AS bike_make,
      b.model AS bike_model
    FROM repair_transactions rt
    JOIN customers c ON rt.customer_id = c.customer_id
    JOIN bikes b ON rt.bike_id = b.bike_id
    ORDER BY rt.transaction_date DESC
  `;

  const { rows } = await pool.query(query);

  // Transform flat SQL rows into nested objects
  return rows.map((row) => ({
    transaction_id: row.transaction_id,
    transaction_date: row.transaction_date,
    total_cost: Number(row.total_cost),
    service: row.service,
    customer: {
      id: row.customer_id,
      first_name: row.customer_first_name,
      last_name: row.customer_last_name,
      email: row.customer_email,
      phone_number: row.customer_phone,
    },
    bike: {
      id: row.bike_id,
      make: row.bike_make,
      model: row.bike_model,
    },
  }));
}

module.exports = { getAllTransactions };
