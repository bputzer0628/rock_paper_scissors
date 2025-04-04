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
const computerSelection = getComputerChoice();
console.log("Computer chose: " + computerSelection);

function playGame () {
let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
} else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}
let playRound = (humanSelection, computerSelection) => {
  let winner = "";
  if (humanSelection === computerSelection) {
    winner = "tie";
  } else if (humanSelection > computerSelection) {
    winner = "player wins";
  } else {
    winner = "computer wins";
  }

  return console.log(winner);
};

let i = 0;
while (i < 5) {
  //here is the change
  let humanChoice = prompt("Select your action").toLowerCase();
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  i++;
}

