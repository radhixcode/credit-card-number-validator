module.exports = {
  notFoundException: (message) => {
    return {
      statusCode: 404,
      message: "not found - " + message,
    };
  },
  forbiddenException: (message) => {
    return {
      statusCode: 403,
      message: "forbidden - " + message,
    };
  },
  conflictException: (message) => {
    return {
      statusCode: 409,
      message: "conflict - " + message,
    };
  }
};
