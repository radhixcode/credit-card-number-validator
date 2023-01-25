const express = require("express");
const request = require("supertest");
const router = require("../src/routes/routes");
const bodyParser = require("body-parser");
const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

describe("Credit card route test", () => {
  test("1. POST credit-card/add - 200 response", async () => {
    const res = await request(app).post("/credit-card/add").send({
      card_holder_name: "anna",
      card_number: 3333444411112222,
      card_limit: 2000,
    });
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual('{"success":true,"message":"added new card"}');
  });

  test("2. POST credit-card/add - 403 response for empty body", async () => {
    const res = await request(app).post("/credit-card/add").send({});
    expect(res.statusCode).toBe(403);
  });

  test("3. POST credit-card/add - 409 response for card already exist", async () => {
    const res = await request(app).post("/credit-card/add").send({
      card_holder_name: "alice",
      card_number: 1111222233334444,
      card_limit: 1000,
    });
    expect(res.statusCode).toBe(409);
  });

  test("4. GET credit-card/getall - 200 response", async () => {
    const res = await request(app).get("/credit-card/getall");
    expect(res.statusCode).toBe(200);
  });
});
