

function validateProjectDescription(description){
    return description !== '';
}

function validateProjectName(name){
    return name !== '';
}

module.exports = {
    validateProjectDescription,
    validateProjectName,
}