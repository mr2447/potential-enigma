// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            reject (err);
            return;
        }
        console.log("success, go check it out")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
