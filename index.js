const gen = require("./gen");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require ("path");

function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

const questions = [
    {
        type: "input",
        name: "title",
        message: "Project title",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "install",
        message: "Provide installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide user instructions",
    },
    {
        type: "input",
        name: "contributing",
        message: "Credit contributing parties",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide testing instructions",
    },
    {
        type: "input",
        name: "github",
        message: "Github Username",
    },
    {
        type: "input",
        name: "email",
        message: "Email Address",
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license:",
        choices: ["MIT", "GPL", "Apache", "MPL", "BSL", "Unlicense"],
    },
];

function writeReadMe(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeReadMe("README.md", gen(response));
    });
};

init();