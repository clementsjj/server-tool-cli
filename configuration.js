const Table = require("cli-table3");
const colors = require("colors");
const inquirer = require("inquirer");
const defaultConfig = require("./defaultConfig");

const configChoices = [
    "View Defaults",
    "Set Config Details (disabled)".gray,
    "Go Back",
];

const question = {
    type: "list",
    name: "configOptions",
    message: "Select an option:",
    choices: configChoices,
};

console.log("\nThis will walk you through configuration details.\n".blue);
const configuration = () => {
    inquirer.prompt(question).then((answer) => {
        switch (answer.configOptions) {
            case "View Defaults":
                console.log("\n");
                console.log(JSON.stringify(defaultConfig));
                console.log(
                    "Home Directory:".brightMagenta,
                    defaultConfig.homeDir.green
                );
                console.log(
                    "server:".brightMagenta,
                    defaultConfig.server.green
                );
                console.log("\n");
                configuration();
                break;
            case "Set Config Details (disabled)".gray:
                configuration();
                break;
        }
    });
};

module.exports = configuration;
