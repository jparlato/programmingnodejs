const httpStatus = require("http-status-codes");

const fs = require("fs");
let textMsg = "";

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.internalServerError = (req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  textMsg = `${errorCode} Server error occured.`;
  fs.appendFileSync("confettiErrorLog.txt", textMsg);
  console.log(textMsg);

  res.status(errorCode);
  res.send(textMsg);
};
