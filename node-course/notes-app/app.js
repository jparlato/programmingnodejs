var fs = require("fs");
var colors = require("colors");

var txt = "this file was created by node js\n";
fs.writeFileSync("notes.txt", txt);
console.log(txt.green);
