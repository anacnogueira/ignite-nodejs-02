import { test, beforeAll, afterAll, describe } from "vitest";
import request from "supertest";
import { app } from "../src/app";

describe("Transaction Routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  test("User can create a new transaction", async () => {
    const response = await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transacation",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
  });
});
