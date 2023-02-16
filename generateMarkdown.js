
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(_license) {
  // return ` ${renderLicenseBadge(data)} ${renderLicenseSection(license)}`
  let mylicense = ''
  if (answers.license === 'MIT') {
    mylicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (answers.license === 'Apache') {
    mylicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    mylicense = '';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license} ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ###License Badge
  ${data.mylicense}

  ### Description
  ${data.description}

### How to install the Application
  ${data.Installation}

### How the User operates the application
  ${data.Application}

### Tests Used on Application
  ${data.Tests}

### Remaining Questions
  ${data.Questions}`;
}
// function renderLicenseBadge(data) {
//   return ` ${[![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)]}`;
// }

module.exports = generateMarkdown;


