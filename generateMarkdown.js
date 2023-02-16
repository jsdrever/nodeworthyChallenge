// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const badge = [![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)];




function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `# ${license.link}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# ${license.bagde}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${data.description}
  ${data.Table}
  ${data.Installation}
  ${data.Application}
  ${data.Tests}
  ${data.Questions}`;
}
// function renderLicenseBadge(data) {
//   return `# ${[![badgeName](https://img.shields.io/static/v1?label=Badger&message=success&color=blueviolet)]}`;
// }

module.exports = generateMarkdown;


