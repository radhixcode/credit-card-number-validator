const luhnAlgorithm = (number) => {
  return true;
};

exports.validateCardNumber = (cardNumber) => {
  //Check if the number contains only numeric value
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(cardNumber)) {
    return false;
  }
  return luhnAlgorithm(cardNumber);
};
