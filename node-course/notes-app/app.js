const getNotes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// first args, 0 and 1 are: location of node executable
// location of app
//
const command = process.argv[2] + "";
const validCommands = ["ADD", "REMOVE", "LIST", "READ"];

if (validCommands.findIndex((x) => x === command.toUpperCase()) > -1) {
  console.log(chalk.yellow(`${command}ing a Note`));
} else {
  console.log(chalk.red(command));
  return -1;
}
yargs.version("16.2.0");

// create add command

yargs.command({
  command: "add",
  describe: "add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

// create add command

yargs.command({
  command: "remove",
  describe: "remove a new note using the id",
  handler: function () {
    console.log("Removing a new note");
  },
});

yargs.command({
  command: "read",
  describe: "read note using the id",
  handler: function () {
    console.log("read a new note");
  },
});

yargs.command({
  command: "list",
  describe: "list note using the id",
  handler: function () {
    console.log("list a new note");
  },
});

// console.log(chalk.yellow(process.argv[2]));
console.log(chalk.bgCyan(process.argv));
console.log(yargs.argv);
// console.log(chalk.bold.inverse.green("success"));
