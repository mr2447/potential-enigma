// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadgeOne = (license) => {
  if (!license[0]) {
    return; '';
   }
  return `![GitHub license](https://img.shields.io/badge/license-${license[0]}-blue.svg)`
}
const renderLicenseBadgeTwo = (license) => {
  if (!license[1]) {
    return; '';
   }
  return `![GitHub license](https://img.shields.io/badge/license-${license[1]}-blue.svg)`
}
const renderALicenseBadgeThree = (license) => {
  if (!license[2]) {
    return; '';
   }
  return `![GitHub license](https://img.shields.io/badge/license-${license[2]}-blue.svg)`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//create the contrilink section
const generateContriLink = data => {
  if (!data.contriLink) {
    return '';
  }
  return `${data.contriLink}`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadgeOne(data.license)} ${renderLicenseBadgeTwo(data.license)}${renderLicenseBadgeThree(data.license)}
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage
  ![terminal in VS](../assets/images/${data.screenShot})
  ![terminal in VS](../assets/videos/${data.video})
  ## Tests
  ${data.test}
  ## Credits 
  ${data.credits}: ${generateContriLink(data)}
`;
}

module.exports = generateMarkdown;


// class Questions {
//   askName(){

//   }
//   askLast(){

//   }
// }
// Questions.askName()