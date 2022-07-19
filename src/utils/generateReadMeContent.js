const getLicenseBadge = require("./getLicenseBadge");

const generateReadMeContent = (answers) => {
  let licenseDescription;
  let licenseBadge;
  if (answers.license === "NONE") {
    licenseDescription = "This project is not licensed";
    licenseBadge = "";
  } else {
    licenseDescription = `This Project is licensed under the ${answers.license} license`;
    licenseBadge = `![image](${getLicenseBadge(answers.license)})`;
  }

  return `
  # ${answers.title}
  ${licenseBadge}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#testing)
  - [Questions](#questions)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${licenseDescription}

  ## Contributing
  ${answers.contributing}

  ## Testing
  ${answers.tests}

  ## Questions
  if you have any questions please email the following:
  ${answers.emailAddress}
  or via [github](https://github.com/${answers.github})
  


  `;
};
module.exports = generateReadMeContent;
