const generateMarkdown = require('./utils/generateMarkdown.js');

const answers = {
    title: 'go away',
    description: 'no',
    install: 'dont',
    usage: 'dont',
    contribute: 'dont',
    tests: 'dont',
    license: 'MIT',
    username: 'ashattack',
    email: 'ashlyn@goog.com'
}


const mkdn = generateMarkdown(answers)
console.log(mkdn)