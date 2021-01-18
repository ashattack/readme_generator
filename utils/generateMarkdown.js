const mit = require('./mit.js');
const apache = require('./apache.js');
const bsd = require('./bsd.js');
const gpl = require('./gpl.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {

  const lic = answers.license;

  if (lic == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (lic == 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (lic == 'GPL 3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (lic == 'BSD 3') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (lic == 'None') {
    return 'No License'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const getLicense = (answers) => {
  const lic = answers.license;
  if (lic == 'MIT') {
    return mit(answers);
  } else if (lic == 'APACHE 2.0') {
    return apache(answers);
  } else if (lic == 'GPL 3.0') {
    return gpl(answers)
  } else if (lic == 'BSD 3') {
    return gpl(answers)
  } else if (lic == 'None') {
    return 'No License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licbadge = renderLicenseBadge(data);
  const license = getLicense(data);
  console.log(license)

  return `# ${data.title} 
${licbadge}
  
  ## Description
  
${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.install}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`

  ## License
  This project is licensed under the ${data.license} license.
  \`\`\`
  ${license} 
  \`\`\`

  ## Contributing
  \`\`\`
  ${data.contribute}
  \`\`\`

  ## Tests
  \`\`\`
  ${data.tests} 
  \`\`\`
  
## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
  You can find more of my work at [${data.username}](https://github.com/${data.username}/).
  
  `;

}

module.exports = generateMarkdown;
