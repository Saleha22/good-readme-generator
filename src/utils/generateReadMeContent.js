const generateReadMeContent = (answers) => {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

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
