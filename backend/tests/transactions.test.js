const request = require("supertest");
const app = require("../src/app");

describe("GET /api/transactions", () => {
  it("returns transactions array", async () => {
    const res = await request(app).get("/api/transactions");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
