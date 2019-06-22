

const generateReadMe =(answers) => {
    let project_name = `# ${answers.project_name}\n`
    let project_description = `${answers.project_description}\n`;
    let project_homepage = '';
    let author = '';
    let license = '';
    let prerequisites = '';
    let installation = '';
    let usage = '';
    let techStack = '';
    
    if(answers.project_homepage !== ''){
        project_homepage = `#### [Homepage](${answers.project_homepage})\n`;
    }

    if(answers.prerequisites !== ''){
        let prerequisites_arr = answers.prerequisites.split(',');
        prerequisites = '#### Prerequisites\n ``` \n';
        for (let i=0;i<prerequisites_arr.length;i++){
            prerequisites += `${prerequisites_arr[i].trim()}\n`;
        }
        prerequisites += '```\n';
    }

    if(answers.installing !== '' || answers.installation_commands !== ''){
        installation = `#### Installation\n`;
        if(answers.installing !== ''){
            installation += `${answers.installing}\n`;
        }
        else {
            installation += `Run the following commands to get started\n`;
        }
        if(answers.installation_commands !== ''){
            let installation_commands_arr = answers.installation_commands.split(',');
            let yarn = 0;
            let npm = 0;
            installation +='```'
            for (let i=0;i<installation_commands_arr.length;i++){

                if(installation_commands_arr[i].includes('npm')){
                    npm == 0 ? installation +=`\n// using npm\n` : '';
                    npm = 1;
                }
                else if(installation_commands_arr[i].includes('yarn')){
                    yarn == 0 ? installation +=`\n// using yarn\n`: '';
                    yarn = 1;
                }
                installation += `${installation_commands_arr[i].trim()}\n`;
            }
            installation += '```\n';
        }
    }

    if(answers.usage_commands !== '' || answers.usage_commands !== ''){
        usage = `#### Usage\n`;
        if(answers.usage_commands !== ''){
            let usage_commands_arr = answers.usage_commands.split(',');
            let yarn = 0;
            let npm = 0;
            usage +='```\n'
            for (let i=0;i<usage_commands_arr.length;i++){

                if(usage_commands_arr[i].includes('npm')){
                    npm == 0 ? usage +=`\n// using npm\n` : '';
                    npm = 1;
                }
                else if(usage_commands_arr[i].includes('yarn')){
                    yarn == 0 ? usage +=`\n// using yarn\n`: '';
                    yarn = 1;
                }
                usage += `${usage_commands_arr[i].trim()}\n`;
            }
            usage += '```\n';
        }
    }

    if(answers.built_with !== ''){
        let techStack_arr = answers.built_with.split(',');
        techStack = '#### Built with\n';

        for (let i=0;i<techStack_arr.length;i++){
            techStack += `- ${techStack_arr[i].trim()}\n`;
        }
        techStack += '\n';
    }

    if(answers.author !== ''){
        author = `#### Author\n`;
        let author_arr = answers.author.split(",");
        if(author_arr[0] !== '')
            author += `- ${author_arr[0]}\n`;
        if(author_arr[1] !== '')
            author += `- [Twitter](https://twitter.com/${author_arr[1].trim()})\n`;
        if(author_arr[2] !== '')
            author += `- [Github](https://github.com/${author_arr[2].trim()})\n`;

        author +='\n';
    }
    else {
        author = ''
    }

    if(answers.license !== ''){
        let license_string = answers.license.split(",");
        license = `## License\n`
        license += `This project is under [${license_string[0]}](${license_string[1].trim()}) license \n\n`;
    }

    let credits = `---\n> This README is generated from [ezreadme](https://github.com/thidasapankaja/ezreadme).`

    return project_name + project_description + project_homepage + prerequisites + installation + usage + techStack + author + license + credits;
};

module.exports = {
    generateReadMe
};