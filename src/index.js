const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./lib");
const generateReadMeContent = require("./utils/generateReadMeContent");

const callback = (error) => {
  if (error) {
    console.log(`sorry we couldn't save your file please try again later`);
  } else {
    console.log(`successful`);
  }
};
const init = async () => {
  const outputData = await inquirer.prompt(questions);
  const readMeContent = generateReadMeContent(outputData);
  fs.writeFile("generatedReadMe.md", readMeContent, callback);
};
init();
