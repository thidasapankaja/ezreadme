const  { validateProjectDescription, validateProjectName } = require ('./validations');

const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: "💡  Project name : ",
        validate: validateProjectName
    },
    {
        type: 'input',
        name: 'project_description',
        message: "📝  Project description : ",
        validate: validateProjectDescription
    },
    {
        type: 'input',
        name: 'project_homepage',
        message: "🏠  Project homepage url-optional : "
    },
    {
        type: 'input',
        name: 'prerequisites',
        message: "1️⃣  Prerequisites-optional : "
    },
    {
        type: 'input',
        name: 'installing',
        message: "🖥️  Installation details-optional : "
    },
    {
        type: 'input',
        name: 'installation_commands',
        message: "💿  Installation commands (commands to run with seperated comma)-optional : "
    },
    {
        type: 'input',
        name: 'built_with',
        message: "⚙️  Built With (technologies with seperated comma)-optional : "
    },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     message: "🤝  Contributing details-optional : "
    // },
    {
        type: 'input',
        name: 'author',
        message: "👤  Author (name, github and twitter handler with seperated comma) : "
    },
    {
        type: 'input',
        name: 'license',
        message: "©️  License (name and url with seperated comma)-optional : "
    },
]

module.exports = {
    questions
}