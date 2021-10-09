// TODO: Include packages needed for this application
const fs = require('fs')
const {prompt} = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?',
        validate: projectTitle => {
            if(projectTitle) {
                return true;
            } else {
                console.log('Please enter a project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: projectDes => {
            if(projectDes) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: projectSteps => {
            if(projectSteps) {
                return true;
            } else {
                console.log('Please provide the steps.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenShot',
        message: 'Provide the file name for a screenshot please(.jpeg/.png)'
    },
    {
        type: 'input',
        name: 'video',
        message: 'Provide the file name a video please'
    },
    {   
        type: 'input',
        name: 'credits',
        message: 'Provide a contributor name'
    },
    {
        type: 'confirm',
        name: 'confirmContriLink',
        message: 'Would you like to include a link to a contributor?',
        default: true
    },
    {
        type: 'input',
        name: 'contriLink',
        message: 'Provide the link to the contributor',
        when: ({confirmContriLink}) => confirmContriLink
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide a test script.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses would you like to include?',
        choices:['MIT', 'Apache2.0', 'GPLv3']
    },
    {
        type: 'input',
        name: 'licenseLink',
        message: 'Provide a link to the license',
    },
    {
        type: 'input',
        name: 'gitHubName',
        message: 'Provide a GitHub username for further questions.',
    },
    {
        typr: 'input',
        name: 'email',
        message: 'Provide an email address for further questions'
    }
    
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            reject (err);
            return;
        }
        console.log("Success, go check it out")
    })
}

// TODO: Create a function to initialize app
function init() {
    
    return prompt(questions)
    .then((data) => { 
        console.log(data.license[2])       
        const markDown = generateMarkDown (data)
        writeToFile(markDown)
    })
}

// Function call to initialize app
init();
