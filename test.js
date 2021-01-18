const generateMarkdown = require('./utils/generateMarkdown.js');
const mit = require('./utils/mit.js');
const apache = require('./utils/apache.js');
const bsd = require('./utils/bsd.js');
const gpl = require('./utils/gpl.js');

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
// const mkdn = mit(answers)
// const mkdn = apache(answers);
// const mkdn = bsd(answers);
// const mkdn = gpl(answers);
console.log(mkdn)