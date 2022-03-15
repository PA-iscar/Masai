const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    name: "options",
    choices: ["Show all books", "Add a new book", "Quit"],
    message: "Select an option:- ",
  }
];

function getAnswers() {
  return inquirer.prompt(questions).then((answers) => {
    switch (answers["options"]) {
      case "Show all books":
        console.log("here you go");
        return getAnswers();
        break;

      case "Add a new book":
        inquirer
          .prompt([
            {
              type: "input",
              name: "new book",
              message: "Enter name of the book:- ",
            },
          ])
          .then((ans) => {
            console.log(`The book "${ans["new book"]}" was added successfully`);
            return getAnswers();
          });
        break;

      case "Quit":
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "exit",
              message: "Are you sure you want to quit - press Y to quit",
              default: true,
            },
          ])
          .then((ans) => {
            if (ans["exit"]) {
              console.log("Bye Bye");
              return answers;
            } else {
              return getAnswers();
            }
          });
        break;

      default:
        console.log(
          "You have selected an invalid entry so please select 1, 2 or 3"
        );
        break;
    }
  });
}

getAnswers()
  .then((ans) => console.log(ans))
  .catch((err) => console.log(err));
