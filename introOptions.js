const { blue } = require("./utils/colors");
const Table = require("cli-table3");
const colors = require("colors");
const { exec } = require("child_process");

const checkInstalled = async () => {
    const table = new Table();
    table.push([colors.blue("Program Name"), colors.green("Installed.")]);
    table.push(["Yo Bozo Boy".inverse, "Yo Bozo Boy".trap]);
    table.push(["Yo Bozo Boy".red, "Yo Bozo Boy".underline.bold.red]);

    await exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
};

exports.checkInstalled = checkInstalled;
