// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, licenseLink) => {
  if (!license) {
    return '';
  }
  return `
  [![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${licenseLink})`
}

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
  ${renderLicenseSection(data.license, data.licenseLink)}
  
  This App is open source software licensed as ${data.license}.
  ## Table of Contents
  * [Description](https://github.com/mr2447/potential-enigma/tree/main/dist#description)
  * [Installation](https://github.com/mr2447/potential-enigma/tree/main/dist#installation)
  * [Usage](https://github.com/mr2447/potential-enigma/tree/main/dist#usage)
  * [Tests](https://github.com/mr2447/potential-enigma/tree/main/dist#tests)
  * [Credits](https://github.com/mr2447/potential-enigma/tree/main/dist#Credits)
  * [Questions](https://github.com/mr2447/potential-enigma/tree/main/dist#questions?)
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage
  * ![terminal in VS](../assets/images/${data.screenShot})
  * ![terminal in VS](../assets/videos/${data.video})
  ## Credits 
  ${data.credits} ${generateContriLink(data)}
  ## Tests
  ${data.test}
  ## Questions?
  Reach me on gitHub or by email. 
  GitHub: ${data.gitHubName}
  Email: ${data.email}
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