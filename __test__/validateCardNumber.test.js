const cardNumber = require("../src/helper/validateCardNumber");

describe("Validate credit card number test", () => {
  test("1. Valid credit card number", () => {
    expect(cardNumber.validateCardNumber(377261620324999)).toBeTruthy();
  });
  test("2. Credit card number with less than 13 digits", () => {
    expect(cardNumber.validateCardNumber("111122223333")).toBeFalsy();
  });
  test("3. Credit card with charactors", () => {
    expect(cardNumber.validateCardNumber("111122223333aaaa")).toBeFalsy();
  });
  test("4. Credit card invalid number", () => {
    expect(cardNumber.validateCardNumber(377261620324998)).toBeFalsy();
  });
});
