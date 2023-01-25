const cardNumber = require("../src/helper/validateCardNumber");

describe("Validate credit card number test", () => {
  test("1. Card number with less that 13", () => {
    expect(cardNumber.validateCardNumber(111122223333)).toBeFalsy();
  });
  test("2. Card number with charactors", () => {
    expect(cardNumber.validateCardNumber("111122223333aaaa")).toBeFalsy();
  });
});
