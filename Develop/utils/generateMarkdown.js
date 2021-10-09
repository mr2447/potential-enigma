// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return; `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage
  ![terminal in VS](../assets/images/${data.screenShot})
  ![terminal in VS](../assets/videos/${data.video})
  ## Credits 
  ${data.credits}: ${generateContriLink(data)}
  ## Badges
  ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)
`;
}

module.exports = generateMarkdown;


class Questions {
  askName(){

  }
  askLast(){

  }
}

Questions.askName()