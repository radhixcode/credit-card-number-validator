const luhnAlgorithm = (number) => {
  // Luhn array for [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] - multiplied by 2
  // [0, 2, 4, 6, 8, 1+0, 1+2, 1+4, 1+6, 1+8] - sum double digit numbers
  const luhnArray = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

  let sum = 0;
  let odd = false;

  const numberArray = number.toString().split("").map((x) => parseInt(x));
  const checkDigit = numberArray.pop();

  for (var i = numberArray.length - 1; i >= 0; --i) {
    if ((odd = !odd)) {
      sum += luhnArray[numberArray[i]];
    } else {
      sum += numberArray[i];
    }
  }
  return (sum + checkDigit) % 10 == 0;
};

const validateCardNumber = (cardNumber) => {
  //Check if the number contains only numeric value
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(cardNumber)) {
    return false;
  }
  return luhnAlgorithm(cardNumber);
};

module.exports = { validateCardNumber };
