const inquirer = require("inquirer");
const fs = require("fs");


let teamMembersHTML = "";

const managerHTML = ({
  managerName,
  managerID,
  managerEmail,
  managerOfficeNumber,
}) => {
  return `
      <div class="card employee-card mx-auto">
        <div class="card-header">
          <h2 class="card-title">${managerName}</h2>
          <h3 class="card-title"> Manager </h3>
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
}

const engineerHTML = ({
  engineerName,
  engineerID,
  engineerEmail,
  engineerGithub,
}) => {
  return `
      <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${engineerName}</h2>
          <h3 class="card-title"> Engineer </h3>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${engineerID}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
            <li class="list-group-item">Github: <a href="https://www.github.com/${engineerGithub}"> ${engineerGithub}</a></li>
          </ul>
        </div>
      </div>
`;
}

const internHTML = ({ internName, internID, internEmail, internSchool }) => {
    return `
            <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">${internName}</h2>
                <h3 class="card-title"> Intern </h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${internID}</li>
                  <li class="list-group-item">Email: <a href="mailto:${internEmail}">${internEmail}</a></li>
                  <li class="list-group-item">School: ${internSchool}</li>
                </ul>
              </div>
            </div>
            `;
}

async function handleAddManager() {
  const managerAnswers = await inquirer.prompt([
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
  const managerHTMLContent = managerHTML(managerAnswers);
  teamMembersHTML += managerHTMLContent;
  
  main();
  return managerHTMLContent;
}
async function handleAddEngineer() {
  const engineerAnswers = await inquirer.prompt([
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
  ]);
  const engineerHTMLContent = engineerHTML(engineerAnswers);
  teamMembersHTML += engineerHTMLContent;
  
  main();
  return engineerHTMLContent;
}

async function handleAddIntern() {
  const internAnswers = await inquirer.prompt([
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
      name: "internSchool",
      message: "What school does this intern attend?",
    },
  ]);
  const internHTMLContent = internHTML(internAnswers);
  teamMembersHTML += internHTMLContent;
  
  main();
  return internHTMLContent;
}

async function handleWriteFile() {

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
        ${teamMembersHTML}
        </div>
      </div>
    </main>
  </body>
  </html>
`;

  fs.writeFile("index.html", teamHTML, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created index.html!");
    }
  });
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
      handleWriteFile();
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
        "Autobots Rollout!",
      ],
    },
  ]);
}



async function main() {
  const { menuSelection } = await showQuestions();
  handleMenuSelection(menuSelection);
}

main();
