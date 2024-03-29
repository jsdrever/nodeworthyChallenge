
// function renderLicenseBadge(license) {
//   if (license !== 'None') {
//     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return '';
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // return ` ${renderLicenseBadge(data)} ${renderLicenseSection(license)}`
//   let mylicense = ''
//   if (data.license === 'MIT') {
//     mylicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   } else if (data.license === 'Apache') {
//     mylicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
//   } else {
//     mylicense = '';
//   }
  
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `# ${license} ${renderLicenseLink(license)} ${renderLicenseBadge(license)} `;
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
  
// ### License Badge
// ${renderLicenseBadge(data.license)}


//   ${data.mylicense}
//   ${data.license}

// ### Description
//   ${data.description}

// ### How to install the Application
//   ${data.Installation}

// ### How the User operates the application
//   ${data.Application}

// ### Tests Used on Application
//   ${data.Tests}

// ### Remaining Questions
//   ${data.Questions}`;
// }
// // function renderLicenseBadge(data) {
// //   return ` ${[![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)]}`;
// // }

// module.exports = generateMarkdown;


// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
