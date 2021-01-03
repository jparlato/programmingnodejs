const validator = require("validator");

console.log(validator.isEmail("jp@jp.com"));

console.log(validator.isURL("https://mead.io"));

const addFunc = require("./utils.js");
const getNotes = require("./notes.js");

var fs = require("fs");
var colors = require("colors");

console.log(getNotes());

// const sum = addFunc(4, -2);

// console.log(sum.toString().green);

// var txt = "this file was created by node js\n";
// fs.writeFileSync("notes.txt", txt);
// console.log(txt.green);
