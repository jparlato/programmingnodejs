"use strict";
exports.logeErrors = (error, req, res, next) => {
  console.log(error.stack);
  next(error);
};

const httpStatus = require("http-status-codes");

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`public/html/${errorCode}.html`, { root: "../" });
};

// exports.respondNoResourceFound = (req, res) => {
//   let errorCode = httpStatus.StatusCodes.NOT_FOUND;
//   res.status(errorCode);
//   res.send(`${errorCode} | the page does not exist 404`);
// };

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(
    `${errorCode} | Sorry, our application s experiencing a problem! 500`
  );
};
