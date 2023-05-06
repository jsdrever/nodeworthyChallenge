// const inquirer = require("inquirer");
// const generateMarkdown = require("./generateMarkdown");

// const fs = require('fs');

// const questions = [
//     {
//         type: "input",
//         name: "title",
//         message: "What is the title of this project",

//     },
//     {
//         type: "input",
//         name: "description",
//         message: "describe this project",
//     },
 
//     {
//         type: "input",
//         name: "Installation",
//         message: "How is this application installed",
//     },
//     {
//         type: "input",
//         name: "Application",
//         message: "What does the application do for the user",
//     },
//     {
//         type: "input",
//         name: "Tests",
//         message: "what tests have you done on this application",
//     },
//     {
//         type:"list",
//         name:"license",
//         message:"Include a License: ",
//         choices:['MIT', 'Apache', 'No License']
//     },
//     {
//         type: "input",
//         name: "Questions",
//         message: "Im david pumpkin. Questions?",
//     },
// ]





// function writeToFile(fileName, data) { 
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('Success!')) 
// }

// function init() {
//     inquirer.prompt(questions)
//     .then((answers) => {
//         console.log(answers);
//         writeToFile('README.md',generateMarkdown(answers))
//     })
// }

// // for the license render
// function writeToFile(fileName, data) { 
//     fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('Success!')) 
// }

// // function doit() {
    
// //         writeToFile('README.md',renderLicenseBadge(license))
// //     }

// init();
// // doit();

//! node index.js to start in terminal
// Imported required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
//   {
//     type: 'input',
//     name: 'usage',
//     message: 'What does the user need to know about using the repo?',
//   },
//   {
//     type: 'input',
//     name: 'contributing',
//     message: 'What does the user need to know about contributing to the repo?',
//   },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();
