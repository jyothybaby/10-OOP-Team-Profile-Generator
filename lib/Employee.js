// Created a class called Employee as per the README.MD for the project
// There are 3 arguments for this class ie, name,id,email and 4 functions.
// Created this class based on Readme.Md instructions.
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id= id;
        this.email= email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;