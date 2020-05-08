const chalk = require("chalk");

exports.green = (string) => {
  if (typeof string == "object") {
    // console.log(chalk.green(JSON.stringify(string)));
    console.log(require("util").inspect(string, { colors: true, depth: null }));
  } else console.log(chalk.green(string));
};

exports.blue = (string) => {
  if (typeof string == "object") {
    console.log(chalk.blue(JSON.stringify(string)));
    // console.log(require("util").inspect(string, { colors: true, depth: null }));
  } else console.log(chalk.blue(string));
};
