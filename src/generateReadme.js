

const generateReadMe = (answers) => {
    let project_name = `# ${answers.project_name}\n`
    let project_description = `${answers.project_description}\n`;
    let project_homepage = '';
    let author = '';
    let license = '';
    
    if(answers.project_homepage !== ''){
        project_homepage = md.render(`[Homepage](${answers.project_homepage})\n`);
    }

    if(answers.author !== ''){
        author = `## Author\n`;
        let author_string = answers.author.split(",");
        if(author_string[0] !== '')
            author += `- ${author_string[0]}\n`;
        if(author_string[0] !== '')
            author += `- [Twitter](https://twitter.com/${author_string[1].trim()})\n`;
        if(author_string[0] !== '')
            author += `- [Github](https://github.com/${author_string[2].trim()})\n`;
    }
    else {
        author = ''
    }

    if(answers.license !== ''){
        let license_string = answers.license.split(",");
        license = `## License\n`
        license = `This project is under [${license_string[0]}(${license_string[1].trim()})]\n`;
    }

    return project_name + project_description + project_homepage + author + license;
};

module.exports = {
    generateReadMe
};