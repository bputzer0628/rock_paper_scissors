function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
  function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");
  choice = choice.toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice. Choose rock, paper, or scissors:");
    choice = choice.toLowerCase();
  }
  return choice;
  }
  const playerSelection = getHumanChoice();
console.log("Player chose: " + playerSelection);

let humanScore = 0;
let computerScore = 0; 