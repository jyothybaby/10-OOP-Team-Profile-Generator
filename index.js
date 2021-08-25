const fs = require("fs");
const inquirer = require("inquirer");
const htmlTemplateFile = require("./src/htmlTemplateFile.js");

inquirer 
    .prompt( [
    {
        type: "input",
        name: "managerName",
        message: "Please enter manager's name: ?",
    },
    {
        type: "input",
        name: "managerId",
        message: "Please enter manager's ID: ?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Please enter manager's Email: ?",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter manager's office number: ?",
    },
])


 .then((answers) => {
  const readmeContent = htmlTemplateFile(answers);
 fs.writeFile("index.html", readmeContent, (err)=>
 err? console.log(err): console.log("Sucessfully created the File!!")

    );
 });