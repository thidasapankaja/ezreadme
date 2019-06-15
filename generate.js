const fs = require('fs');
const { prompt } = require('inquirer');
const md = require('markdown-it')();

const { questions } = require('./src/questions');
const { generateReadMe } = require('./src/generateReadme').default;

prompt(questions).then(answers => {
    
    const readme = generateReadMe(answers);

    fs.writeFile("./README.md", readme, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    });
});