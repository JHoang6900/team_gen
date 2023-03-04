const inquirer = require('inquirer');
const fs = require('fs');

const managerHTML = ({ managerName, managerID, managerEmail, managerOfficeNumber }) =>
`
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${managerName}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${managerID}</li>
            <li class="list-group-item">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></li>
            <li class="list-group-item">Office number: ${managerOfficeNumber}</li>
          </ul>
        </div>
      </div>
      `;;


      const engineerHTML = ({ engineerName, engineerID, engineerEmail, engineerGithub }) =>
`
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${engineerName}</h2>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineerID}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
            <li class="list-group-item">Github: ${engineerGithub}</li>
          </ul>
        </div>
      </div>
      `;;


      const internHTML = ({ internName, internID, internEmail, internGithub }) =>
      `
            <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">${internName}</h2>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${internID}</li>
                  <li class="list-group-item">Email: <a href="mailto:${internEmail}">${internEmail}</a></li>
                  <li class="list-group-item">Github: ${internGithub}</li>
                </ul>
              </div>
            </div>
            `;;



            let generateTeamHTML = `
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
          // return teamHTML;


          async function handleAddManager() {
            const answers = await inquirer.prompt([
              {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
              },
              {
                type: "input",
                name: "managerID",
                message: "What's the manager's ID?",
              },
              {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's Email?",
              },
              {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's Office Number?",
              },
            ]);
          
            const htmlManagerPageContent = generateHTML(answers);
            main();
          }
          
          function handleMenuSelection(menuSelection) {
            switch (menuSelection) {
              case "Add Manager":
                handleAddManager();
                break;
              case "Add Engineer":
                handleAddEngineer();
                break;
              case "Add Intern":
                handleAddIntern();
                break;
              case "Autobots Rollout!":
                handleAssembleTeam();
                break;
          
              default:
                console.log("I don't know what you picked!");
            }
          }
          
          async function showQuestions() {
            return inquirer.prompt([
              {
                type: "list",
                name: "menuSelection",
                message: "Choose your selection.",
                choices: [
                  "Add Manager",
                  "Add Engineer",
                  "Add Intern",
                  "View all Employees",
                  "Autobots Rollout!"
                ],
              },
            ]);
          }
          
          async function main() {
            const { menuSelection } = await showQuestions();
            handleMenuSelection(menuSelection);
          }
          
          main();
          













          async function handleAddManager() {
            const answers = await inquirer.prompt([
              {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
              },
              {
                type: "input",
                name: "managerID",
                message: "What's the manager's ID?",
              },
              {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's Email?",
              },
              {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's Office Number?",
              },
            ]);
            
            const managerHTML = ({ managerName, managerID, managerEmail, managerOfficeNumber }) => `
              <div class="card employee-card">
                <div class="card-header">
                  <h2 class="card-title">${managerName}</h2>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${managerID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></li>
                    <li class="list-group-item">Office number: ${managerOfficeNumber}</li>
                  </ul>
                </div>
              </div>
            `;
          
            const htmlManagerPageContent = managerHTML(answers);
            // add the htmlManagerPageContent to the page or do something with it
            main();
          }
          


















inquirer
  .prompt([
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
