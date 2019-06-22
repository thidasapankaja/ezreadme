#!/usr/bin/env node

const fs = require('fs');
const { prompt } = require('inquirer');
const ora = require('ora');
const chalk = require("chalk");
const figlet = require("figlet");

const { questions } = require('./src/questions');
const { generateReadMe } = require('./src/generateReadme');

const init = () => {
    console.log(
      chalk.green(
        figlet.textSync("ezreadme", {
          horizontalLayout: "default",
          verticalLayout: "default"
        })
      )
    );
  };

init();

prompt(questions).then(answers => {
    const spinner = ora('dots');
    spinner.color = 'yellow';
    spinner.text = 'Generating Readme';
    spinner.start();

    const readme = generateReadMe(answers);

    fs.writeFile("./README.md", readme, function(err) {
        if(err) {
            spinner.fail('Please try again');
            return console.log(err);
        }
    
        spinner.succeed('Generated readme successfully');
    });
});