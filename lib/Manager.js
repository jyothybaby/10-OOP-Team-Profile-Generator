//Employee class is the parent class or super class. So that we need to import that class to .js file.
const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

}

module.exports = Manager;