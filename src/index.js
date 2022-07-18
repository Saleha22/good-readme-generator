const inquirer = require("inquirer");
const questions = require("./lib");
const generateReadMeContent = require("./utils/generateReadMeContent");

const init = async () => {
  const outputData = await inquirer.prompt(questions);
  const readMeContent = generateReadMeContent(outputData);
  console.log(readMeContent);
};
init();
