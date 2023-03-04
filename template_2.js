const inquirer = require('inquirer');
const fs = require('fs');

const managerHTML = ({ managerName, managerID, managerEmail, managerOfficeNumber }) =>
`
      <div class="card employee-card mx-auto">
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

      inquirer.prompt([
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
      ])
      .then((managerAnswers) => {
        const managerHTMLContent = managerHTML(managerAnswers);
      
        inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What's the engineer's name?",
          },
          {
            type: "input",
            name: "engineerID",
            message: "What's the engineer's ID?",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer's Email?",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's GitHub username?",
          },
        ])
        .then((engineerAnswers) => {
          const engineerHTMLContent = engineerHTML(engineerAnswers);
      
      
          inquirer.prompt([
            {
              type: "input",
              name: "internName",
              message: "What's the intern's name?",
            },
            {
              type: "input",
              name: "internID",
              message: "What's the intern's ID?",
            },
            {
              type: "input",
              name: "internEmail",
              message: "What's the intern's Email?",
            },
            {
              type: "input",
              name: "internGithub",
              message: "What's the intern's GitHub username?",
            },
          ])
          .then((internAnswers) => {
            const internHTMLContent = internHTML(internAnswers);
      
            const teamHTML = `
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
                      ${managerHTMLContent}
                      ${engineerHTMLContent}
                      ${internHTMLContent}
                    </div>
                  </div>
                </main>
              </body>
              </html>
            `;
      
            fs.writeFile('index.html', teamHTML, (err) => {
              if (err) {
                console.log(err);
              } else {
                console.log('Successfully created index.html!');
              }
            });
          });
        });
      });

      

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
      