const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "please provide usage information for your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "please enter contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the tests for your project?",
  },
  {
    type: "input",
    name: "github",
    message: "what is your Github username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
  {
    type: "list",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
    name: "license",
    message: "What license is your project using?",
  },
];
module.exports = questions;
