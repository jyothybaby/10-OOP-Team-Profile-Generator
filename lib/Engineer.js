//Reference: https://www.w3schools.com/Jsref/jsref_class_super.asp
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;