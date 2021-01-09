const getNotes = require("./notes.js");
const chalk = require("chalk");

const command = process.argv[2];

if (command === "add") {
  console.log(chalk.yellow("Adding Note"));
} else {
  console.log(chalk.yellow(command));
}

// console.log(chalk.yellow(process.argv[2]));

// console.log(chalk.bold.inverse.green("success"));
