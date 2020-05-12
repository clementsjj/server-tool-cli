const inquirer = require("inquirer");
const chalk = require("chalk");
const colors = require("./utils/colors");
const introOptions = require("./introOptions");
const cheatSheet = require("./cheatSheet");
const aboutOption = require("./about");
const configuration = require("./configuration");

const mainMenuChoices = [
    "Check installed packages",
    "Configuration",
    // "Install server packages".gray,
    // "Uninstall server packages".gray,
    // "Full server setup".gray,
    "About",
    "Cheat sheet",
    "Quit".bold.red,
];

const mainMenuQuestion = {
    type: "rawlist",
    name: "intro",
    message: "\nWhat would you like to do?",
    choices: mainMenuChoices,
};

const repeatMainMenu = {
    type: "confirm",
    name: "repeat",
    message: "Return to menu? (yes)",
    default: true,
};

const mainMenuPrompt = (question) => {
    inquirer.prompt(question).then((answer) => {
        switch (answer.intro) {
            case "Check installed packages":
                introOptions.checkInstalled();
                inquirer.prompt(repeatMainMenu).then((repeatMenu) => {
                    if (repeatMenu.repeat) {
                        mainMenuPrompt(mainMenuQuestion);
                    } else {
                        console.log("See ya later".trap);
                    }
                });
                break;
            case "Cheat sheet":
                cheatSheet();
                mainMenuPrompt(mainMenuQuestion);
                break;
            case "Configuration":
                configuration();
                break;
            case "About":
                aboutOption();
            case "Quit".bold.red:
                break;
            default:
                console.log(answer.intro);
                console.log("See ya later".rainbow);
                break;
        }
    });
};

mainMenuPrompt(mainMenuQuestion);
