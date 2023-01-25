const express = require("express");
const request = require("supertest");
const router = require("../src/routes/routes");

const app = new express();
app.use("/", router);

describe("Base route test", () => {
  test("1. GET / - 200 response", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Welcome to your bank");
  });
});
