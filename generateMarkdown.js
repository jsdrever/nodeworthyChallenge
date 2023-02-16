// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const badge = [![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)];




function renderLicenseBadge(license) {
  if (answers.license === 'MIT') {
    license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (answers.license === 'Apache') {
    license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    license = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ` ${renderLicenseBadge(data)} ${renderLicenseSection(license)}`
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ###License Badge
  ${license}

  ### Description
  ${data.description}

### How to install the Application
  ${data.Installation}

### How the User operates the application
  ${data.Application}

### Tests Used on Application
  ${data.Tests}

  ### Licenses Included
  ${license(data.License)}

### Remaining Questions
  ${data.Questions}`;
}
// function renderLicenseBadge(data) {
//   return `# ${[![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)]}`;
// }

module.exports = generateMarkdown;


