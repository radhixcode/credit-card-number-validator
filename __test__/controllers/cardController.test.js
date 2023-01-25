const express = require("express");
const request = require("supertest");
const cardController = require("../../src/controllers/cardController");

const app = new express();

describe("Base route test", () => {
  test("1. GET / - 200 response", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Welcome to your bank");
  });
});
