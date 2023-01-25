const async = require("async");
const _ = require("underscore");
const exceptions = require("../exceptions/statusCodes");
const creditCardData = require("../database/credtCards");
const checkCardNumber = require("../helper/validateCardNumber");

const PERMITTED_FIELDS = ["card_holder_name", "card_number", "card_limit"];

// Validate request body and credit card to the database
exports.addCreditCard = (req, res, next) => {
  async.waterfall(
    [
      // Validation request body fields
      (callback) => {
        if (_.isEmpty(req.body)) {
          return callback(exceptions.forbiddenException("empty body"));
        }
        if (_.difference(Object.keys(req.body), PERMITTED_FIELDS).length > 0) {
          return callback(
            exceptions.forbiddenException("invalid field in the request")
          );
        }
        if (!req.body.card_holder_name || !_.isString(req.body.card_holder_name) || req.body.card_holder_name == "") {
          return callback(
            exceptions.forbiddenException("card holder name required")
          );
        }
        if (!req.body.card_number || !_.isNumber(req.body.card_number)) {
          return callback(
            exceptions.forbiddenException("card number required")
          );
        }
        if (!req.body.card_limit || !_.isNumber(req.body.card_limit)) {
          return callback(exceptions.forbiddenException("card limit required"));
        }
        return callback(null);
      },
      // Validation of the credit card number
      (callback) => {
        if (checkCardNumber.validateCardNumber(req.body.card_number)) {
          return callback(null);
        } else {
          return callback(exceptions.forbiddenException("invalid card number"));
        }
      },
      // If new card set balance to 0
      (callback) => {
        console.log(req.body.card_number)
        const index = creditCardData.creditCards.findIndex(
          (c) => c.card_number == req.body.card_number
        );
        if (index === -1) {
          req.body.balance = 0;
          creditCardData.creditCards.push(req.body);
          return callback(null, "added new card");
        } else {
          return callback(exceptions.conflictException("credit card already exist"));
        }
      },
    ],
    (err, results) => {
      if (err) {
        next(err);
      } else {
        res.json({
          success: true,
          message: results,
        });
      }
    }
  );
};

// Get all credit card from the database
exports.allCreditCards = (req, res, next) => {
  async.waterfall(
    [
      (callback) => {
        callback(null, creditCardData.creditCards);
      },
    ],
    (err, results) => {
      if (err) {
        next(err);
      } else {
        res.json(results);
      }
    }
  );
};
