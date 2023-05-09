//Packages
const fs = require("fs");
const inquirer = require("inquirer");
const util = require('util');

const generateMarkdown = require('ES6-README_Generator/utils/generateMarkdown.js');

// array of questions for user
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project's title?"
  },
  {
    type: "input",
    name: "description",
    message: "Add your project description"
  },
  {
    type: "input",
    name: "installation",
    message: "If applicable, describe the required installation"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide the instructions for your project usage"
  },
  {
    type: "input",
    name: "license",
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
  {
    type: "input",
    name: "contributing",
    message: "If applicable, provide guidelines on how other developers can contribute to your project."
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username"
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your LinkedIn URL."
}];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }

        console.log("Your README is ready")
    });
}
const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {

        // Prompt Inquirer questions
        const data = await inquirer.prompt(questions);
        console.log("Your answers: ", data);

        const markdown = generateMarkdown(data);
        console.log(markdown);

        // Write markdown to file
        await writeFileAsync('app_folder/README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// function call to initialize program
init();
