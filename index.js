const inquirer = require("inquirer");
const chalk = require("chalk");
const colors = require("./utils/colors");
const introOptions = require("./introOptions");
const cheatSheet = require("./cheatSheet");

const intro = {
    type: "list",
    name: "intro",
    message: "What would you like to do?",
    choices: [
        "Check installed packages",
        "Install server packages",
        "Uninstall server packages",
        "Full server setup",
        "Cheat sheet",
        "Quit",
    ],
};
const mainMenuQuestion = {
    type: "list",
    name: "intro",
    message: "What would you like to do?",
    choices: [
        "Check installed packages",
        "Cheat sheet",
        "Install server packages",
        "Uninstall server packages",
        "Full server setup",
        "Quit",
    ],
};

const mainMenuPrompt = (question) => {
    return inquirer.prompt(question).then((answer) => {
        switch (answer.intro) {
            case "Check installed packages":
                introOptions.checkInstalled();
                mainMenuPrompt(mainMenuQuestion);
                break;
            case "Cheat sheet":
                cheatSheet();
                mainMenuPrompt(mainMenuQuestion);
                break;
            case "Quit":
                break;
        }
    });
};

mainMenuPrompt(mainMenuQuestion);

// function green(string) {
//   if (typeof string == "object") {
//     // console.log(chalk.green(JSON.stringify(string)));
//     log(require("util").inspect(string, { colors: true, depth: null }));
//   } else log(chalk.green(string));
// }

// inquirer.prompt(intro).then((answer) => {
//     colors.green(answer);
//     while (answer.intro != "Quit") {
//         switch (answer.intro) {
//             case "Check installed packages":
//                 introOptions.checkInstalled();
//                 break;
//             case "Cheat sheet":
//                 cheatSheet();
//                 break;
//         }
//     }
// });
