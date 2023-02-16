const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project",

    },
    {
        type: "input",
        name: "description",
        message: "describe this project",
    },
    {
        type: "input",
        name: "Table",
        message: "discuss the table of contents if applicable",
    },
    {
        type: "input",
        name: "Installation",
        message: "How is this application installed",
    },
    {
        type: "input",
        name: "Application",
        message: "What does the application do for the user",
    },
    {
        type: "input",
        name: "Tests",
        message: "what tests have you done on this application",
    },
    {
        type: "input",
        name: "Questions",
        message: "Im david pumpkin. Questions?",
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success!')) 
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('README.md',generateMarkdown(answers))
    })
}

//for the license render
// function writeToFile(fileName, data) { 
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('Success!')) 
// }

// function doit() {
    
//         writeToFile('README.md',renderLicenseBadge())
//     }

init();
// doit();
