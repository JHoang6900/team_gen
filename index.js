const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (team) => {
    const managerHTML = `
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${team.manager.name}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team.manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${team.manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${team.manager.email}">${team.manager.email}</a></li>
            <li class="list-group-item">Office number: ${team.manager.officeNumber}</li>
          </ul>
        </div>
      </div>
    `;
  
    const engineerHTML = `
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${team.engineer.name}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${team.engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${team.engineer.email}">${team.engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${team.engineer.github}" target="_blank" rel="noopener noreferrer">${team.engineer.github}</a></li>
          </ul>
        </div>
      </div>
    `;
  
    const internHTML = `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${team.intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${team.intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${team.intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${team.intern.email}">${team.intern.email}</a></li>
          <li class="list-group-item">School: ${team.intern.school}</li>
        </ul>
      </div>
    </div>
  `;

  let teamHTML = `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile Generator</title>
    </head>
  
    <body>
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
      </header>
      <main>
        <div class="container">
          <div class="row">
            ${managerHTML}
            ${engineerHTML}
            ${internHTML}
          </div>
        </div>
      </main>
    </body>
    </html>
  `;
  
  return teamHTML;
};


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
