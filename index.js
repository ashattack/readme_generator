// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'

    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use'

    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test this project',

    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for the project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'filename',
        message: 'What to name file?',
        default: 'README-GEN.md',
    },
];





// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating  README...');
        console.log(inquirerResponses);


        const markdown = generateMarkdown(inquirerResponses);
        console.log(markdown);

        fs.writeFile(inquirerResponses.filename,
            markdown,
            (err) => console.error(err));
    });
}

// Function call to initialize app
init();
