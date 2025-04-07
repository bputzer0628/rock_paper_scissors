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
 


  function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();
    
  
    if (humanSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
    
      return `You win! ${humanSelection} beats ${computerSelection}`;
  } else {

      return `You lose! ${computerSelection} beats ${humanSelection}`;
  }
  
  }
  
function playGame () {
  let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  //here is the change
  let humanSelection = prompt("Rock Paper or Scissors?").toLowerCase();
  let computerSelection = getComputerChoice();
  let result = playRound(humanSelection, computerSelection);
  console.log(result);

if (result.startsWith('You win')) {
  humanScore++;
} else if (result.startsWith('You lose')) {
  computerScore++;
}
}



if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (computerScore > humanScore) {
  console.log("You lose the game!");
} else {
  console.log("The game is a tie!");
}
}

playGame();




