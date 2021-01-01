var fs = require("fs");
var colors = require("colors");

var txt = "this txt was appended by node js";
fs.appendFileSync("notes.txt", txt);
console.log(txt.green);
