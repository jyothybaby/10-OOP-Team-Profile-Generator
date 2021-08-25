function htmlTemplateFile(data) {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Object-Oriented Programming: Team Profile Generator</title>
</head>
<body>
<div class="card" style="width: 18rem;">
<div class="card-header">
  Manager
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Manager Name : ${data.managerName}</li>
  <li class="list-group-item">Manager's ID: ${data.managerId}</li>
  <li class="list-group-item">Manager's Email: ${data.managerEmail}</li>
  <li class="list-group-item">Manager's Office Number: ${data.managerOfficeNumber}</li>
  
</ul>
</div>
</body>
</html>`;

}

module.exports = htmlTemplateFile;

