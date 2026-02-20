const request = require("supertest");
const app = require("../src/app");

describe("GET /api/transactions", () => {
  it("returns transactions array with nested customer and bike objects", async () => {
    const res = await request(app).get("/api/transactions");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const tx = res.body[0];

    // Transaction fields
    expect(tx).toHaveProperty("transaction_id");
    expect(tx).toHaveProperty("transaction_date");
    expect(tx).toHaveProperty("total_cost");
    expect(tx).toHaveProperty("service");

    // Customer object
    expect(tx).toHaveProperty("customer");
    expect(tx.customer).toHaveProperty("id");
    expect(tx.customer).toHaveProperty("first_name");
    expect(tx.customer).toHaveProperty("last_name");
    expect(tx.customer).toHaveProperty("email");
    expect(tx.customer).toHaveProperty("phone_number");

    // Bike object
    expect(tx).toHaveProperty("bike");
    expect(tx.bike).toHaveProperty("id");
    expect(tx.bike).toHaveProperty("make");
    expect(tx.bike).toHaveProperty("model");
  });
});
