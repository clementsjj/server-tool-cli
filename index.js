const inquirer = require("inquirer");
const chalk = require("chalk");
const colors = require("./utils/colors");
const introOptions = require("./introOptions");
// const green = chalk.green;
const log = console.log;

const questions = [
  {
    type: "input",
    name: "intro",
    message: "What would you like to do?",
    default: false,
  },
];

// function green(string) {
//   if (typeof string == "object") {
//     // console.log(chalk.green(JSON.stringify(string)));
//     log(require("util").inspect(string, { colors: true, depth: null }));
//   } else log(chalk.green(string));
// }

const intro = {
  type: "list",
  name: "intro",
  message: "What would you like to do?",
  choices: [
    "Check installed packages",
    "Install server packages",
    "Uninstall server packages",
    "Full server setup",
  ],
};

inquirer.prompt(intro).then((answer) => {
  colors.green(answer);
  if (answer.intro === "Check installed packages") {
    console.log("---->");
    introOptions.checkInstalled();
  }
});
