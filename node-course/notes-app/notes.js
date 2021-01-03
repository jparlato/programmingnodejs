const { syncBuiltinESMExports } = require("module");

var colors = require("colors");
const getNotes = function (txt) {
  if (txt) {
    return txt.toString().bgGreen;
  } else {
    return "I got this note for you".yellow;
  }
};

module.exports = getNotes;
